import { useRouter } from "next/router";
import { useEffect } from "react";
import nProgress from "nprogress";

export default function NProgressLoader() {
  const router = useRouter();

  useEffect(() => {
    // Mulai progres saat navigasi rute dimulai
    router.events.on("routeChangeStart", nProgress.start);

    // Selesaikan progres saat navigasi rute selesai atau error
    router.events.on("routeChangeComplete", nProgress.done);
    router.events.on("routeChangeError", nProgress.done);

    // Fungsi pembersih untuk menghindari memory leaks
    return () => {
      router.events.off("routeChangeStart", nProgress.start);
      router.events.off("routeChangeComplete", nProgress.done);
      router.events.off("routeChangeError", nProgress.done);
    };
  }, [router.events]);

  return null;
}
