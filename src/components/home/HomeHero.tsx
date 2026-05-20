"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import ScrollIndicator from "@/components/shared/ScrollIndicator";

export default function HomeHero() {
  return (
    <section className="relative w-full h-screen bg-[#111111] overflow-hidden flex items-center justify-center">
      
      {/* Medya Katmanı */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/hero/home/homehero.jpg"
          alt="Lion Hotel Hoş Geldiniz"
          fill
          className="object-cover object-center scale-105 animate-[subtle-zoom_20s_infinite_ease-in-out]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-black/85 pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#F7F5F0] via-[#F7F5F0]/20 to-transparent opacity-100 z-20" />
      </div>

      {/* İçerik Alanı */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 relative z-30 h-full flex items-center justify-start max-w-7xl">
        <div className="max-w-4xl text-[#FFFFFF]">
          
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[#6E1B1F]" />
            <p className="text-[10px] font-bold tracking-[0.45em] text-white/90 uppercase sm:text-xs">
              Marmara’nın Kıyısında Dingin Bir Sığınak
            </p>
          </div>

          <Reveal>
            <h1
              className="text-[40px] sm:text-[60px] md:text-[84px] lg:text-[102px] font-light leading-[1.08] tracking-tight filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.75)]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Zamanın Yavaşladığı<br />
              <span className="italic font-normal text-white/95">Ruhunuzun Dinlendiği</span> Yer.
            </h1>
          </Reveal>

          <Reveal>
            <p className="mt-8 max-w-xl text-[14px] font-light leading-[1.75] text-white/90 sm:text-[16px]">
              Çınarcık’ın en özel konumunda, modern minimalizm ile sıcak misafirperverliğin buluşması. Zarif detaylarla tasarlanmış odalarımızda, konforu yeniden tanımlayın.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/odalar"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white bg-white/10 px-8 text-[11px] font-semibold tracking-[0.22em] text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-0.5"
            >
              ODALARI GÖR
            </Link>
            <Link
              href="/deneyim"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/40 bg-transparent px-8 text-[11px] font-semibold tracking-[0.22em] text-white transition-all duration-300 hover:border-white hover:bg-white/10 hover:-translate-y-0.5"
            >
              DENEYİM
            </Link>
          </div>

        </div>
      </div>

      {/* Kaydır Göstergesi */}
      <ScrollIndicator />
    </section>
  );
}
