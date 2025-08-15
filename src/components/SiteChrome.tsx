"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HIDE_CHROME_ON = ["/lion-teras/menu"];

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideChrome = HIDE_CHROME_ON.some((p) => pathname.startsWith(p));

  if (hideChrome) {
    // Bu sayfada Navbar/Footer yok
    return <>{children}</>;
  }

  // Diğer tüm sayfalarda normal akış
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}