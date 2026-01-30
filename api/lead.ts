import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
){
    // Only allow POST
    if (req.method !=="POST"){
        return res.status(405).json({ok:false});
    }

    try {
        const body = req.body;

        console.log("lead received", body);

        return res.status(200).json({ok:true});

    } catch (err) {
        console.error(err);
        return res.status(500).json({ok:false});
    }
}