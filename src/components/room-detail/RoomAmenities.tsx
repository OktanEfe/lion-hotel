"use client";

import { useMemo, useState } from "react";
import type { Room } from "@/lib/rooms";
import Reveal from "@/components/shared/Reveal";

type RoomAmenitiesProps = {
  room: Room;
};

const AMENITY_FILTER_REGEX = /balkon|keyfi|view|manzara/i;

const AMENITY_DESCRIPTIONS: Record<string, string> = {
  default: "Konaklamanızı unutulmaz kılmak için özenle seçilmiş bir ayrıcalık.",
};

export default function RoomAmenities({ room }: RoomAmenitiesProps) {
  const filteredAmenities = useMemo(() => {
    return room.amenities.filter(
      (amenity) => !AMENITY_FILTER_REGEX.test(amenity.label)
    );
  }, [room.amenities]);

  const [activeIndex, setActiveIndex] = useState(0);
  const active = filteredAmenities[activeIndex];

  return (
    <Reveal
      as="section"
      className="relative overflow-hidden bg-[#F9F8F5] py-20 text-[#1A1917] md:py-28 lg:py-36"
    >
      {/* Grid arka plan deseni */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(rgba(26,25,23,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,25,23,0.015) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

     

      <div className="container relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-16">

        {/* Header */}
        <div className="mb-16 grid grid-cols-1 items-end gap-10 lg:mb-20 lg:grid-cols-2 lg:gap-0">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[1px] w-8 bg-[#8B1F24]" />
              <p className="text-[9px] font-medium uppercase tracking-[0.5em] text-[#8B1F24]">
                THE PRIVILEGE OF SPACE
              </p>
            </div>
            <h2 className="font-serif text-[clamp(40px,5.5vw,70px)] font-normal leading-[1.05] tracking-tight text-[#1A1917]">
              Konfor, sessiz olduğunda
              <br />
              <em className="font-normal not-italic text-[#A0845B]">
                daha derin
              </em>{" "}
              hissettirir.
            </h2>
          </div>

          <div className="border-l border-[rgba(26,25,23,0.06)] lg:pl-10">
            <p className="text-[13px] font-light leading-[1.9] tracking-wide text-[#5A5854]">
              {room.amenitiesBanner.text ||
                "Her ayrıntı, misafirimizin varlığını merkeze alan bir titizlikle seçilmiştir. Sessizlik bir tercih değil, bir standart."}
            </p>
          </div>
        </div>

        {/* Kırmızıdan şeffafa degrade bölücü çizgi */}
        <div
          className="mb-0 h-[1px] w-full"
          style={{
            background:
              "linear-gradient(90deg, #8B1F24, rgba(139,31,36,0.12) 60%, transparent)",
          }}
        />

        {/* Ana gövde: items-stretch ile sol ve sağ kolon yükseklikleri eşitlendi */}
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-2 lg:items-stretch">

          {/* Sol: Olanaklar Listesi */}
          <div className="border-r border-[rgba(26,25,23,0.05)] pr-0 lg:pr-0 flex flex-col justify-between">
            <div className="w-full">
              {filteredAmenities.map((amenity, index) => {
                const num = String(index + 1).padStart(2, "0");
                const isActive = activeIndex === index;

                return (
                  <button
                    key={amenity.label}
                    onClick={() => setActiveIndex(index)}
                    className={`
                      group relative flex w-full cursor-pointer items-center justify-between
                      border-b border-[rgba(26,25,23,0.04)] py-6 text-left outline-none
                      transition-all duration-500 ease-out pr-8
                      ${isActive ? "pl-2" : "pl-0"}
                    `}
                  >
                    {/* Aktif olduğunda çizginin kırmızı kalması */}
                    <span
                      className={`
                        absolute bottom-[-1px] left-0 h-[1px] bg-[#8B1F24]
                        transition-all duration-500 ease-out
                        ${isActive ? "w-full" : "w-0"}
                      `}
                    />

                    <div className="flex items-center gap-8">
                      <span
                        className={`
                          min-w-[28px] text-[10px] font-bold tracking-[0.15em]
                          transition-colors duration-400
                          ${isActive ? "text-[#8B1F24]" : "text-[rgba(139,31,36,0.4)]"}
                        `}
                      >
                        {num}
                      </span>
                      {/* Yazı boyutu text-[11px]'den text-[14px]'e yükseltildi ve font kalınlaştırıldı */}
                      <span
                        className={`
                          text-[14px] font-normal uppercase tracking-[0.2em] sm:text-[15px]
                          transition-all duration-400
                          ${isActive ? "text-[#1A1917] tracking-[0.25em]" : "text-[#7A7772]"}
                        `}
                      >
                        {amenity.label}
                      </span>
                    </div>

                    {/* Aktif nokta */}
                    <span
                      className={`
                        h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#8B1F24]
                        transition-all duration-400
                        ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-50"}
                      `}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sağ: Editorial Feature Panel (Sol taraf ile tam eşit yükseklikte) */}
          <div className="flex flex-col justify-between pl-0 pt-8 lg:pl-14 lg:pt-6">
            {/* Dekoratif büyük numara */}
            <div
              className="mb-4 select-none font-serif text-[clamp(80px,12vw,140px)] font-bold leading-none tracking-tighter text-[#1A1917]"
              style={{ opacity: 0.025 }}
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </div>

            {/* Öne çıkan olanak */}
            <div className="flex-1">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[1px] w-5 bg-[#8B1F24]" />
                <p className="text-[8px] font-medium uppercase tracking-[0.5em] text-[#8B1F24]">
                  Öne Çıkan Olanak
                </p>
              </div>

              <h3
                key={active?.label}
                className="mb-5 font-serif text-[clamp(28px,3.5vw,48px)] font-normal leading-[1.15] text-[#1A1917]"
                style={{ animation: "fadeUp 0.4s ease both" }}
              >
                {active?.label}
              </h3>

              <p
                key={active?.label + "_desc"}
                className="max-w-[320px] text-[13px] font-light leading-[1.85] tracking-wide text-[#5A5854]"
                style={{ animation: "fadeUp 0.5s 0.06s ease both" }}
              >
                {AMENITY_DESCRIPTIONS[active?.label ?? ""] ||
                  AMENITY_DESCRIPTIONS.default}
              </p>
            </div>

            {/* Alt istatistik bar */}
            <div className="mt-12 flex gap-8 border-t border-[rgba(26,25,23,0.06)] pt-8">
              <div>
                <p className="mb-1.5 font-serif text-[32px] font-normal leading-none text-[#1A1917]">
                  {filteredAmenities.length}
                  <span className="text-[18px] text-[#8B1F24]">+</span>
                </p>
                <p className="text-[9px] font-normal uppercase tracking-[0.35em] text-[#8A8680]">
                  Olanak
                </p>
              </div>
              <div>
                <p className="mb-1.5 font-serif text-[32px] font-normal leading-none text-[#1A1917]">
                  24<span className="text-[18px] text-[#8B1F24]">h</span>
                </p>
                <p className="text-[9px] font-normal uppercase tracking-[0.35em] text-[#8A8680]">
                  Servis
                </p>
              </div>
              <div>
                <p className="mb-1.5 font-serif text-[32px] font-normal leading-none text-[#1A1917]">
                  5<span className="text-[18px] text-[#8B1F24]">★</span>
                </p>
                <p className="text-[9px] font-normal uppercase tracking-[0.35em] text-[#8A8680]">
                  Standart
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Keyframe animasyonları için global style */}
      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Reveal>
  );
}