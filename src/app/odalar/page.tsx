import type { Metadata } from "next";
import RoomsGrid from "@/components/rooms/RoomsGrid";
import RoomsHero from "@/components/rooms/RoomsHero";

export const metadata: Metadata = {
  title: "Odalar | Lion Hotel Çınarcık",
  description:
    "Lion Hotel’in konforlu, modern ve farklı ihtiyaçlara uygun oda seçeneklerini inceleyin.",
  openGraph: {
    title: "Odalar | Lion Hotel Çınarcık",
    description:
      "Lion Hotel’in konforlu, modern ve farklı ihtiyaçlara uygun oda seçeneklerini inceleyin.",
    images: ["/hero/rooms/140-DSCF5085.jpg"],
  },
};

export default function RoomsPage() {
  return (
    <>
      <RoomsHero />
      <RoomsGrid />
    </>
  );
}
