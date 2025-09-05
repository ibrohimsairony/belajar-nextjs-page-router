import CardProducts from "@/components/fragments/CardProducts";
import retrieveData from "@/lib/firebase/service";
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

export async function getStaticProps() {
  try {
    const products = await retrieveData<ProductType[]>("products");

    if (!products) {
      throw new Error("Data from Firebase is null or undefined.");
    }

    return {
      props: {
        data: products,
      },
      // revalidate: 10, // Mengatur ulang data setiap 10 detik
    };
  } catch (error) {
    console.error("An error occurred in getStaticProps:", error);
    return {
      props: {
        data: [], // Mengembalikan array kosong sebagai fallback
      },
    };
  }
}
