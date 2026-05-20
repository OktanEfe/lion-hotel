import "./globals.css";
import type { Metadata } from "next";
import SiteChrome from "@/components/layout/SiteChrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://lionhotel.com"),
  title: "Lion Hotel Çınarcık | Konforlu Butik Otel",
  description:
    "Çınarcık merkezde konforlu odaları, merkezi konumu ve sıcak misafirperverliğiyle Lion Hotel.",
  openGraph: {
    title: "Lion Hotel Çınarcık | Konforlu Butik Otel",
    description:
      "Çınarcık merkezde konforlu odaları, merkezi konumu ve sıcak misafirperverliğiyle Lion Hotel.",
    images: ["/hero/home/homehero.jpg"],
  },
  icons: {
    icon: [{ url: "/logo/favicon.png", type: "image/png" }],
    shortcut: "/logo/favicon.png",
    apple: "/logo/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="overflow-x-hidden">
      <body className="min-h-dvh flex flex-col bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden">
        <main className="flex-1 overflow-x-hidden">
          <SiteChrome>{children}</SiteChrome>
        </main>
      </body>
    </html>
  );
}
