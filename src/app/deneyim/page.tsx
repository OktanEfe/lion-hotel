import type { Metadata } from "next";
import ExperienceCTA from "@/components/experience/ExperienceCTA";
import ExperienceGrid from "@/components/experience/ExperienceGrid";
import ExperienceHero from "@/components/experience/ExperienceHero";

export const metadata: Metadata = {
  title: "Deneyim | Lion Hotel Çınarcık",
  description:
    "Çınarcık merkezde konaklama, sahile yakınlık, kahvaltı ve rahat tatil deneyimi hakkında bilgi alın.",
  openGraph: {
    title: "Deneyim | Lion Hotel Çınarcık",
    description:
      "Çınarcık merkezde konaklama, sahile yakınlık, kahvaltı ve rahat tatil deneyimi hakkında bilgi alın.",
    images: ["/hero/experience/experiencehero.jpg"],
  },
};

export default function ExperiencePage() {
  return (
    <>
      <ExperienceHero />
      <ExperienceGrid />
      <ExperienceCTA />
    </>
  );
}
