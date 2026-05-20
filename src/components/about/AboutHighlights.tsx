"use client";

import { useState } from "react";
import Reveal from "@/components/shared/Reveal";

const VALUES = [
  {
    num: "01",
    title: "Sade Konfor",
    subtitle: "Gözü yoran kalabalıklardan uzak, işlevsel bir lüks.",
    details: "Çınarcık’ın dingin ruhunu yansıtan doğal dokular ve yumuşak ışık oyunlarıyla örülü zamansız bir sakinlik."
  },
  {
    num: "02",
    title: "Merkezi Konum",
    subtitle: "Şehrin ritmi ve doğanın dinginliği arasında denge.",
    details: "Sahile, plajlara ve iskeleye saniyeler içinde ulaşma kolaylığı sunan kusursuz bir lokasyon ayrıcalığı."
  },
  {
    num: "03",
    title: "Sıcak Misafirperverlik",
    subtitle: "Hafızalarda yer eden kişiselleştirilmiş özenli hizmet.",
    details: "İhtiyaçlarınızı önceden sezen, samimi ve her an profesyonel bir ekiple rafine ağırlama ritüeli."
  },
];

export default function AboutHighlights() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Reveal as="section" className="relative bg-[#FAF9F6] text-[#111111] py-24 md:py-36 border-b border-[#111111]/5 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 max-w-7xl">
        
        {/* Üst Başlık Alanı */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[1px] w-6 bg-[#6E1B1F]" />
            <p className="text-[10px] font-bold tracking-[0.45em] text-[#6E6A63] uppercase sm:text-xs">
              Değerlerimiz & Felsefemiz
            </p>
          </div>
          <h2
            className="text-[34px] font-light leading-[1.15] tracking-tight text-[#111111] sm:text-[44px] md:text-[54px]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Sizi Dinlendiren, Güven Veren <br />
            <span className="italic font-normal text-[#6E6A63]">İncelikli Bir Konaklama</span>
          </h2>
        </div>

        {/* Tam Responsive Değerler Alanı (Grid: Mobil 1, Masaüstü 3 Kolon) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-stretch">
          {VALUES.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;

            return (
              <div
                key={item.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative flex flex-col justify-between rounded-[2rem] border border-[#111111]/5 bg-white p-8 lg:p-10 transition-all duration-500 cursor-default overflow-hidden select-none"
                style={{
                  boxShadow: isHovered 
                    ? "0 25px 50px rgba(110, 27, 31, 0.04)" 
                    : "0 10px 30px rgba(0, 0, 0, 0.01)",
                  // Masaüstünde diğer kartları hafifçe loşlaştırır, mobilde bu etkiyi hissettirmez
                  opacity: isAnyHovered && !isHovered ? 0.65 : 1,
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)"
                }}
              >
                {/* Sağ Üst Köşede Zarif Büyük Numara */}
                <span 
                  className="absolute right-6 top-2 text-[90px] lg:text-[110px] font-light leading-none pointer-events-none select-none transition-colors duration-500"
                  style={{ 
                    fontFamily: "var(--font-playfair)",
                    color: isHovered ? "rgba(110, 27, 31, 0.03)" : "rgba(17, 17, 17, 0.015)"
                  }}
                >
                  {item.num}
                </span>

                <div className="relative z-10 space-y-3">
                  {/* Mikro İndeks Çizgisi */}
                  <div className="flex items-center gap-2">
                    <span className={`h-[1px] transition-all duration-500 ${isHovered ? "w-6 bg-[#6E1B1F]" : "w-3 bg-[#6E6A63]/30"}`} />
                    <span className={`text-[10px] font-bold tracking-widest transition-colors duration-500 ${isHovered ? "text-[#6E1B1F]" : "text-[#6E6A63]"}`}>
                      {item.num}
                    </span>
                  </div>

                  {/* Başlık */}
                  <h3 
                    className="text-[22px] font-light tracking-tight text-[#111111] lg:text-[26px] transition-colors duration-500" 
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.title}
                  </h3>

                  {/* Spot Küçük Başlık */}
                  <p className="text-[11px] font-semibold tracking-wider text-[#6E6A63]/80 leading-relaxed uppercase pt-1">
                    {item.subtitle}
                  </p>
                </div>

                {/* Alt Kısım: Sabit ve Hafifletilmiş Açıklama Yazısı */}
                <div className="relative z-10 mt-6 pt-5 border-t border-[#111111]/5">
                  <p className="text-[13px] font-light leading-[1.7] text-[#555555] transition-colors duration-500 group-hover:text-[#111111]">
                    {item.details}
                  </p>
                </div>

                {/* Alt Sınırdaki Premium İnce Renk Çizgisi */}
                <div className={`absolute bottom-0 left-0 h-[3px] bg-[#6E1B1F] transition-all duration-500 ${isHovered ? "w-full" : "w-0"}`} />
              </div>
            );
          })}
        </div>

      </div>
    </Reveal>
  );
}