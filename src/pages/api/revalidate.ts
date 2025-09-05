// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { environment } from "@/configs/environtment";

type Data = {
  revalidated: boolean;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, secret } = req.query;
  if (!name || !secret)
    return res.json({
      revalidated: false,
      message: "name and secret is required",
    });
  if (secret != = environment.SECRET_KEY_NEXT_MY_APP)
    return res.json({ revalidated: false, message: "secret is invalid" });
  try {
    if (name === "product") {
      await res.revalidate("/product/static");
      return res.json({ revalidated: true });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ revalidated: false, message: `error : ${error}` });
  }
}
