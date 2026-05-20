"use client";

import Image from "next/image";
import Reveal from "@/components/shared/Reveal";
import ScrollIndicator from "@/components/shared/ScrollIndicator";

export default function AboutHero() {
  return (
    <section className="relative flex h-[82svh] min-h-[560px] w-full items-center justify-center overflow-hidden bg-[#111111] sm:min-h-[640px] md:h-screen">
      
      {/* Medya Katmanı */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/hero/about/abouthero.jpg"
          alt="Lion Hotel Hakkımızda Sinematik Görsel"
          fill
          className="object-cover object-[50%_42%] scale-105 animate-[subtle-zoom_20s_infinite_ease-in-out] sm:object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/45 z-10" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-black/85 pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#F7F5F0] via-[#F7F5F0]/20 to-transparent opacity-100 z-20" />
      </div>

      {/* İçerik Alanı */}
      <div className="container relative z-30 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-5 text-center sm:px-8 lg:px-16">
        <Reveal>
          <h1 
            className="max-w-[11ch] text-[38px] font-light leading-[1.08] tracking-tight text-[#FFFFFF] filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.75)] select-none min-[390px]:text-[42px] sm:max-w-none sm:text-[64px] md:text-[88px] lg:text-[104px]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Zamansız Bir <br className="hidden sm:block" />
            <span className="italic font-normal text-white/95">Konaklama Hikayesi</span>
          </h1>
        </Reveal>
      </div>

      {/* Kaydır Göstergesi */}
      <ScrollIndicator />
    </section>
  );
}
