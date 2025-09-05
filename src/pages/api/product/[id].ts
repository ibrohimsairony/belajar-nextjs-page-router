// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieveDataById } from "@/lib/firebase/service";
import { ProductType, DataApiById } from "@/types/product.type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataApiById>
) {
  if (req.query.id !== undefined) {
    const data = await retrieveDataById<ProductType>(
      `products/${req.query.id}`
    );
    res.status(200).json({ status: true, statusCode: 200, data });
  }
}
