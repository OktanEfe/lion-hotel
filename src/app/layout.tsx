import "./globals.css";
import type { Metadata } from "next";
import SiteChrome from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Lion Hotel",
  description: "Luxury & Comfort",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      {/* min-h-dvh + flex-col -> sticky footer uyumlu; chrome burada kontrol edilecek */}
      <body className="min-h-dvh flex flex-col bg-[#efdfcf] text-neutral-900">
        <main className="flex-1">
          <SiteChrome>{children}</SiteChrome>
        </main>
      </body>
    </html>
  );
}