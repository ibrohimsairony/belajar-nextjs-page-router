export interface ProductType {
  id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
}

export type DataApi<T> = {
  status: boolean;
  statusCode: number;
  data: T[] | null;
};

export type DataApiById = {
  status: boolean;
  statusCode: number;
  data: ProductType | null;
};
