// src/app/page.tsx
"use client";

import { useState } from "react";

import Hero from "@/components/Hero";
import AboutBlock from "@/components/AboutBlock"; // senin yolu nasıl ise onu kullan
import RoomsShowcase from "@/components/RoomsShowcase";
import LionTerasStory from "@/components/LionTerasStory"; // siyah, detaylı olanı tercih ettim

import Activities from "@/components/Activities";
import Testimonials from "@/components/Testimonials";
import ReserveModal from "@/components/ReserveModal";

export default function HomePage() {
  const [reserveOpen, setReserveOpen] = useState(false);

  return (
    <main className="bg-white text-black">
      <Hero />
      <AboutBlock />

      {/* Odalar – (bej panel zaten component içinde) */}
      <RoomsShowcase />

      {/* Aktiviteler (beyaz) */}
      <Activities onReserve={() => setReserveOpen(true)} />

      {/* Lion Teras / Merdiven Lounge (siyah, tek bölüm) */}
      <LionTerasStory />

      {/* Misafir Yorumları (slider) */}
      <Testimonials />

      {/* Rezervasyon Modal – her sayfada çağırmak istersen context/portal yapabiliriz */}
      <ReserveModal open={reserveOpen} onClose={() => setReserveOpen(false)} />
    </main>
  );
}