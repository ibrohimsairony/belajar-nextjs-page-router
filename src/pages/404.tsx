import Image from "next/image";

export default function Custom404Page() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <div className="flex flex-col items-center animate-bounce">
        <Image src="/not_found.svg" alt="404" width={500} height={500} />
        <h1 className="text-3xl font-bold text-[#6c63ff] mt-8">
          Halaman Tidak Ditemukan
        </h1>
      </div>
    </div>
  );
}
