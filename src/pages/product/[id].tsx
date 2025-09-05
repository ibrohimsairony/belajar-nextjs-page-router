import DetailProduct from "@/components/fragments/DetailProduct";
import retrieveData, { retrieveDataById } from "@/lib/firebase/service";
import fetcher from "@/lib/swr/init";
import { ProductType } from "@/types/product.type";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function DetailProductPage({ data }: { data: ProductType }) {
  const { id } = useRouter().query;
  // const { data, error, isLoading } = useSWR(`/api/product/${id}`, fetcher);

  return (
    <>
      <h1 className="text-4xl font-bold text-[#6c63ff] text-center my-5">
        Datail Product Shoes
      </h1>
      {/* Client side Rendering */}
      {/* <DetailProduct product={isLoading ? {} : data.data} /> */}
      {/* Server side Rendering && Static Site Generation */}
      <DetailProduct product={data} />
    </>
  );
}

// export async function getServerSideProps({
//   params: { id },
// }: {
//   params: { id: string };
// }) {
//   try {
//     const data = await fetch(`http://localhost:3000/api/product/${id}`);
//     const products = await data.json();

//     return {
//       props: {
//         data: products.data,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         data: {},
//       },
//     };
//   }
// }

export const getStaticPaths = async () => {
  try {
    const products = await retrieveData<ProductType>("products");

    if (!products) {
      throw new Error("Data from Firebase is null or undefined.");
    }
    const paths = products.map((product) => ({
      params: { id: product.id },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("An error occurred in getStaticProps:", error);
    return {
      props: {
        data: [], // Mengembalikan array kosong sebagai fallback
      },
    };
  }
};

export async function getStaticProps({
  params: { id },
}: {
  params: { id: string };
}) {
  try {
    const product = await retrieveDataById<ProductType>(`products/${id}`);

    if (!product) {
      throw new Error("Data from Firebase is null or undefined.");
    }

    // Asumsi retrieveData sudah mengembalikan array produk
    // Jika tidak, Anda perlu menyesuaikan kode di sini
    return {
      props: {
        data: product, // Langsung gunakan products
      },
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
