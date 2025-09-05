import CardProducts from "@/components/fragments/CardProducts";
import { ProductType } from "@/types/product.type";
export default function ProductPage({ data }: { data: ProductType[] }) {
  return (
    <>
      <h1 className="text-4xl font-bold text-[#6c63ff] text-center my-5">
        Product Shoes
      </h1>
      <CardProducts data={data} />
    </>
  );
}

export async function getServerSideProps() {
  const data = await fetch("http://localhost:3000/api/product");
  const products = await data.json();

  return {
    props: {
      data: products.data,
    },
  };
}
