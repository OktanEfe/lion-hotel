"use client";

import Image from "next/image";
import Reveal from "@/components/shared/Reveal";
import ScrollIndicator from "@/components/shared/ScrollIndicator";

export default function AboutHero() {
  return (
    <section className="relative w-full h-screen bg-[#111111] overflow-hidden flex items-center justify-center">
      
      {/* Medya Katmanı */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/hero/about/abouthero.jpg"
          alt="Lion Hotel Hakkımızda Sinematik Görsel"
          fill
          className="object-cover object-center scale-105 animate-[subtle-zoom_20s_infinite_ease-in-out]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/45 z-10" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-black/85 pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#F7F5F0] via-[#F7F5F0]/20 to-transparent opacity-100 z-20" />
      </div>

      {/* İçerik Alanı */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 relative z-30 text-center flex flex-col items-center justify-center h-full max-w-7xl">
        <Reveal>
          <h1 
            className="text-[40px] sm:text-[64px] md:text-[88px] lg:text-[112px] font-light leading-[1.08] tracking-tight text-[#FFFFFF] select-none filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.75)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Zamansız Bir <br />
            <span className="italic font-normal text-white/95">Konaklama Hikayesi</span>
          </h1>
        </Reveal>
      </div>

      {/* Kaydır Göstergesi */}
      <ScrollIndicator />
    </section>
  );
}
