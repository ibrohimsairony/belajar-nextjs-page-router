import AppShell from "@/components/layouts/AppShell";
import NProgressLoader from "@/components/elements/NProgressLoader";
import "@/styles/globals.css";
import "@/styles/nprogress.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
<<<<<<< HEAD
      <SessionProvider session={session}>
        <NProgressLoader />
        <AppShell>
          <Component {...pageProps} />
        </AppShell>
      </SessionProvider>
=======
      <NProgressLoader />
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
>>>>>>> 693567187f7e9da7a814941fa1511b176ba24b2f
    </>
  );
}
