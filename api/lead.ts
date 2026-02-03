import type { VercelRequest, VercelResponse } from "@vercel/node";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.VITE_PUBLIC__SUPABASE_URL!,
  process.env.VITE_PUBLIC__SUPABASE_SERVICE_ROLE_KEY!,
);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false });
  }

  const { name, phone, email, company, service, message } = req.body;
  const { error } = await supabase.from("leads").insert([
    {
      name,
      phone,
      email,
      company,
      service,
      message,
    },
  ]);

  if (error){
    console.error("insert failed", error);
    return res.status(500).json({ok:false, error:error.message});
  }

  return res.status(200).json({ ok: true });
}
