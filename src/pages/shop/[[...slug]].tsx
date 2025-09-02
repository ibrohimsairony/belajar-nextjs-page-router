import { useRouter } from "next/router";

export default function ShopPage() {
  const { slug } = useRouter().query;
  return (
    <div>
      <h1>Shop Page</h1>
      <p>
        kategori :{slug && slug[0]} - {slug && slug[1]} - {slug && slug[2]}
      </p>
    </div>
  );
}
