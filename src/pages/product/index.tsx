import CardProducts from "@/components/fragments/CardProducts";
import fetcher from "@/lib/swr/init";
import useSWR from "swr";

export default function ProductPage() {
  const { data, error, isLoading } = useSWR(`/api/product`, fetcher);

  // useEffect(() => {
  //   const data = fetch("/api/products")
  //     .then((res) => res.json())
  //     .then(({ data }) => console.log(data));
  // }, []);
  return (
    <>
      <h1 className="text-4xl font-bold text-[#6c63ff] text-center my-5">
        Product Shoes
      </h1>
      <CardProducts data={isLoading ? [] : data.data} />
    </>
  );
}
