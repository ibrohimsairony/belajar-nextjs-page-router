import fetcher from "@/lib/swr/init";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

type ProductType = {
  id: number;
  name: string;
  price: number;
  description?: string;
  image_url?: string;
};

export default function ProductPage() {
  const [login, isLogin] = useState(true);
  const { push } = useRouter();
  const { data, error, isLoading } = useSWR(`/api/products`, fetcher);

  useEffect(() => {
    if (!login) push("/auth/login");
  }, []);

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
      {isLoading && (
        <div className="flex flex-wrap justify-center item-center animate-pulse">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="w-[500] h-[400]"></div>
            <div className="p-5">
              <h5 className="mb-2 h-6 w-full bg-slate-700 font-bold tracking-tight text-gray-900 dark:text-white"></h5>
              <p className="mb-3 font-normal h-4 w-full bg-slate-700 text-gray-700 dark:text-gray-400"></p>
              <p className="mb-3 font-normal text-gray-700 h-4 w-full bg-slate-700 dark:text-gray-400"></p>
              <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-700 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <div className="flex flex-wrap justify-center gap-4  min-w-xl">
        {data?.data.length > 0 &&
          data.data.map((product: ProductType) => (
            <div
              key={product.id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="rounded-t-lg"
                src={product.image_url}
                alt="sepatu"
                width={500}
                height={500}
              />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {product.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {product.description}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                  })}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
