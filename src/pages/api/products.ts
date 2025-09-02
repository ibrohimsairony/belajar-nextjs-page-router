// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import retrieveData from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
}

type Data<T> = {
  status: boolean;
  statusCode: number;
  data: T[] | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data<Product>>
) {
  const data = await retrieveData<Product>("products");
  res.status(200).json({ status: true, statusCode: 200, data });
}
