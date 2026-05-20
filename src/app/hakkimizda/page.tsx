import type { Metadata } from "next";
import AboutCTA from "@/components/about/AboutCTA";
import AboutHero from "@/components/about/AboutHero";
import AboutHighlights from "@/components/about/AboutHighlights";
import AboutIntro from "@/components/about/AboutIntro";
import AboutStory from "@/components/about/AboutStory";

export const metadata: Metadata = {
  title: "Hakkımızda | Lion Hotel Çınarcık",
  description:
    "Lion Hotel’in Çınarcık’taki konaklama anlayışını, sıcak misafirperverliğini ve butik otel deneyimini keşfedin.",
  openGraph: {
    title: "Hakkımızda | Lion Hotel Çınarcık",
    description:
      "Lion Hotel’in Çınarcık’taki konaklama anlayışını, sıcak misafirperverliğini ve butik otel deneyimini keşfedin.",
    images: ["/hero/about/abouthero.jpg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AboutStory />
      <AboutHighlights />
      <AboutCTA />
    </>
  );
}
