import { useRouter } from "next/router";

export default function DetailProductPage() {
  const { id } = useRouter().query;
  return (
    <div>
      <h1>Detail Product Page</h1>
      <p>ID: {id}</p>
    </div>
  );
}
