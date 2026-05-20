import type { Metadata } from "next";
import HomeAboutPreview from "@/components/home/HomeAboutPreview";
import HomeCTA from "@/components/home/HomeCTA";
import HomeExperiencePreview from "@/components/home/HomeExperiencePreview";
import HomeHero from "@/components/home/HomeHero";
import HomeRoomsPreview from "@/components/home/HomeRoomsPreview";
import HomeTestimonials from "@/components/home/HomeTestimonials";

export const metadata: Metadata = {
  title: "Lion Hotel Çınarcık | Konforlu Butik Otel",
  description:
    "Çınarcık merkezde konforlu odaları, merkezi konumu ve sıcak misafirperverliğiyle Lion Hotel.",
  openGraph: {
    title: "Lion Hotel Çınarcık | Konforlu Butik Otel",
    description:
      "Çınarcık merkezde konforlu odaları, merkezi konumu ve sıcak misafirperverliğiyle Lion Hotel.",
    images: ["/hero/home/homehero.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAboutPreview />
      <HomeRoomsPreview />
      <HomeExperiencePreview />
      <HomeTestimonials />
      <HomeCTA />
    </>
  );
}
