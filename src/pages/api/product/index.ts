// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import retrieveData from "@/lib/firebase/service";
import { DataApi, ProductType } from "@/types/product.type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataApi<ProductType>>
) {
  const data = await retrieveData<ProductType>("products");
  res.status(200).json({ status: true, statusCode: 200, data });
}
