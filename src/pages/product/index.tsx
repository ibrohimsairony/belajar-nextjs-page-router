import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";

type ProductType = {
  id: number;
  name: string;
  price: number;
  size?: string;
  description?: string;
  image?: string;
};

export default function ProductPage() {
  const [login, isLogin] = useState(true);
  const [products, setProducts] = useState([]);
  const { push } = useRouter();
  useEffect(() => {
    if (!login) push("/auth/login");
  }, []);
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(({ data }) => setProducts(data));
  }, []);
  return (
    <div>
      <ol></ol>
      {products &&
        products.map((product: ProductType) => (
          <li
            key={product.id}
          >{`${product.id} - ${product.name} - ${product.price} - ${product.size}`}</li>
        ))}
    </div>
  );
}
