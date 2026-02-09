import type { VercelRequest, VercelResponse } from "@vercel/node";
import twilio from "twilio";

function normalizePhone(raw: string): string | null {
    if (!raw) return null;

    const digits = raw.replace(/\D/g, "");

    if (digits.length === 10) return `+1${digits}`;

    if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;

    if (raw.trim().startsWith("+") && digits.length >= 10) return `+${digits}`;

    return null;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" });

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const phoneRaw = body?.phone ?? body?.phoneNumber ?? body?.tel ?? "";
    const phone = normalizePhone(String(phoneRaw));

    // If no valid phone, just return ok (don’t fail the form submission)
    if (!phone) return res.status(200).json({ ok: true, smsSent: false, reason: "no_valid_phone" });

    const {
      TWILIO_ACCOUNT_SID,
      TWILIO_AUTH_TOKEN,
      TWILIO_FROM_NUMBER,
    } = process.env;

    if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_FROM_NUMBER) {
      console.error("Missing Twilio env vars");
      return res.status(500).json({ ok: false, error: "Server misconfigured" });
    }

    const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

    const msg = await client.messages.create({
      from: TWILIO_FROM_NUMBER,
      to: phone,
      body: `Hey! We got your request and will reach out ASAP. Reply STOP to opt out.`,
    });

    return res.status(200).json({ ok: true, smsSent: true, sid: msg.sid });
  } catch (err: any) {
    console.error("SMS error:", err?.message || err);
    return res.status(200).json({ ok: true, smsSent: false, reason: "sms_failed" });
    // Notice: we still return 200 so form doesn't "break" for the user
  }}