"use client";

import Link from "next/link";
import Reveal from "@/components/shared/Reveal";

const CTA_LINKS = [
  { href: "/odalar", label: "ODALARI GÖR" },
  { href: "/deneyim", label: "DENEYİM" },
  { href: "/iletisim", label: "İLETİŞİM" },
];

export default function HomeCTA() {
  return (
    <Reveal as="section" className="relative w-full bg-[#FFFFFF] py-20 md:py-28 text-[#111111]">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 max-w-7xl">
        
        <div className="relative overflow-hidden rounded-[3rem] bg-[#F7F5F0] border border-[#111111]/5 px-6 py-20 text-center sm:px-12 md:py-24 shadow-[0_25px_60px_rgba(0,0,0,0.02)]">
          
          <div className="absolute inset-0 bg-radial-gradient from-white/40 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-[1px] w-8 bg-[#6E1B1F]" />
              <p className="text-[10px] font-medium tracking-[0.4em] text-[#6E6A63] uppercase sm:text-xs">
                Rezervasyon & Deneyim
              </p>
              <span className="h-[1px] w-8 bg-[#6E1B1F]" />
            </div>

            <h2
              className="text-[38px] font-light leading-[1.1] tracking-tight sm:text-[52px] md:text-[64px] text-[#111111]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Lion Hotel Dünyasını <br />
              <span className="italic font-normal text-[#6E6A63]">Yakından Hissedin</span>
            </h2>
            
            <p className="mx-auto mt-8 max-w-xl text-[14px] font-light leading-[1.75] text-[#555555] sm:text-base">
              Çınarcık’ın eşsiz doğası ve merkezi konumuyla harmanlanan, her anı incelikle düşünülmüş sakin bir kaçamak. Kendinize hak ettiğiniz konforu ayırın.
            </p>
            
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              {CTA_LINKS.map((item, index) => {
                const isFirst = index === 0;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`inline-flex h-12 items-center justify-center rounded-full px-10 text-[11px] font-medium tracking-[0.22em] uppercase transition-all duration-500 md:h-13 ${
                      isFirst
                        ? "bg-[#6E1B1F] border border-[#6E1B1F] text-[#FFFFFF] shadow-md hover:bg-[#111111] hover:border-[#111111] hover:-translate-y-0.5"
                        : "border border-[#111111]/30 bg-transparent text-[#111111] hover:border-[#6E1B1F] hover:bg-[#6E1B1F] hover:text-[#FFFFFF] hover:-translate-y-0.5"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-[#6E1B1F]/20 rounded-tl-md hidden sm:block" />
          <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-[#6E1B1F]/20 rounded-tr-md hidden sm:block" />
          <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-[#6E1B1F]/20 rounded-bl-md hidden sm:block" />
          <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-[#6E1B1F]/20 rounded-br-md hidden sm:block" />

        </div>
      </div>
    </Reveal>
  );
}