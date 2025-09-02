import AppShell from "@/components/layouts/AppShell";
import NProgressLoader from "@/components/elements/NProgressLoader";
import "@/styles/globals.css";
import "@/styles/nprogress.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NProgressLoader />
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </>
  );
}
