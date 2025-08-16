import "./globals.css";
import type { Metadata } from "next";
import SiteChrome from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Lion Hotel",
  description: "Luxury & Comfort",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="overflow-x-hidden"> {/* ekstra güvenlik */}
      {/* min-h-dvh + flex-col -> sticky footer uyumlu */}
      <body className="min-h-dvh flex flex-col bg-[#efdfcf] text-neutral-900 overflow-x-hidden">
        <main className="flex-1 overflow-x-hidden">
          <SiteChrome>{children}</SiteChrome>
        </main>
      </body>
    </html>
  );
}