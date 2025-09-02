import Link from "next/link";

export default function RegisterPage() {
  return (
    <div>
      <h1>Register Page</h1>
      <p>
        Sudah punya akun ? Login{" "}
        <Link href="/auth/login" className="text-blue-500 underline">
          disini
        </Link>
      </p>
    </div>
  );
}
