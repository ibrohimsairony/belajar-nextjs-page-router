import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-amber-500 text-slate-800">
        <h3 className="text-2xl font-bold">Store Teri</h3>
        <ul className="flex space-x-4">
          <li>
            <Link href="/shop" className="text-blue-700">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-blue-700">
              About
            </Link>
          </li>
          <li>
            <Link href="/product" className="text-blue-700">
              Product
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
