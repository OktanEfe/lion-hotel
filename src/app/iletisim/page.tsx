import type { Metadata } from "next";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactWhatsAppCTA from "@/components/contact/ContactWhatsAppCTA";

export const metadata: Metadata = {
  title: "İletişim | Lion Hotel Çınarcık",
  description: "Lion Hotel’e telefon, WhatsApp ve adres bilgileri üzerinden kolayca ulaşın.",
  openGraph: {
    title: "İletişim | Lion Hotel Çınarcık",
    description: "Lion Hotel’e telefon, WhatsApp ve adres bilgileri üzerinden kolayca ulaşın.",
    images: ["/hero/home/homehero.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactFAQ />
      <ContactWhatsAppCTA />
    </>
  );
}
