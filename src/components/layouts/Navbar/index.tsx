import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data }: any = useSession();
  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-slate-800 text-slate-800">
        <h3 className="text-2xl font-bold text-slate-200">Store Teri</h3>
        <ul className="flex space-x-4">
          <li>
            <Link href="/shop" className="text-slate-200">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-slate-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/product" className="text-slate-200">
              Product
            </Link>
          </li>
        </ul>

        <div className="flex items-center space-x-4 ">
          <p className="text-slate-200 font-bold text-lg">
            {data?.user.fullName}
          </p>
          {data ? (
            <button
              className="text-slate-200 px-3 py-1 bg-sky-500 rounded "
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          ) : (
            <button
              className="text-slate-200 px-3 py-1 bg-sky-500 rounded "
              onClick={() => signIn()}
            >
              Sign In
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}
