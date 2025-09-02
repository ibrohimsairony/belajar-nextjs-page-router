import Link from "next/link";
import { useRouter } from "next/router";

export default function LoginPage() {
  const { push } = useRouter();
  const handleLogin = () => {
    push("/product");
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button
        onClick={handleLogin}
        className="px-4 py-0.5 my-2 rounded-md border-dotted border "
      >
        Login
      </button>
      <p>
        Belum punya akun ? Registrasi{" "}
        <Link href="/auth/register" className="text-blue-500 underline">
          disini
        </Link>
      </p>
    </div>
  );
}
