/* eslint-disable @next/next/no-img-element */
import { ProductType } from "@/types/product.type";
import Link from "next/link";

export default function CardProducts({ data }: { data: ProductType[] }) {
  return (
    <div>
      {data.length === 0 && (
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-wrap justify-center gap-4  min-w-xl">
        {data.length > 0 &&
          data.map((product: ProductType) => (
            <div
              key={product.id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Link href={`/product/${product.id}`}>
                <img
                  className="rounded-t-lg"
                  src={product.image_url}
                  alt="sepatu"
                  width={500}
                  height={500}
                />
              </Link>
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
