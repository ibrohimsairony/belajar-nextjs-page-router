import { ReactNode } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useRouter } from "next/router";

export default function AppShell({ children }: { children: ReactNode }) {
  const { pathname } = useRouter();
  const disableNavbar = ["/auth/login", "/auth/register", "/404"];

  return (
    <>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
      {/* <Footer /> */}
    </>
  );
}
