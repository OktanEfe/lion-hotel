"use client";

import Image from "next/image";
import Link from "next/link";
import type { Room } from "@/lib/rooms";

type RoomsCardProps = {
  room: Room;
};

export default function RoomsCard({ room }: RoomsCardProps) {
  const cardContent = (
    <>
      {/* `h-full justify-between`: İçerik ne kadar kısa veya uzun olursa olsun,
        kartın en altındaki "Detayları Gör" kısmı daima diğer kartlarla aynı çizgiye hizalanır.
      */}
      <div className={[
        "flex flex-col h-full rounded-[2.5rem] bg-white border border-[#111111]/5 overflow-hidden shadow-[0_15px_45px_-15px_rgba(0,0,0,0.04)] transition-all duration-700",
        room.isAvailable
          ? "group-hover:shadow-[0_35px_60px_-15px_rgba(110,27,31,0.1)] group-hover:-translate-y-1"
          : "opacity-90",
      ].join(" ")}>
        
        {/* Görsel Alanı: Kilitli oran [4/5] */}
        <div className="relative aspect-[4/5] w-full flex-shrink-0 overflow-hidden bg-[#FAF9F6]">
          {room.isAvailable ? (
            <>
              <Image
                src={room.cover}
                alt={room.name}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5 pointer-events-none" />
            </>
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[#111111] text-[#FAF9F6]">
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-y border-white/10 bg-white/[.03] py-5 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-white/45">
                  {room.availabilityLabel}
                </p>
                <p
                  className="mt-3 text-[30px] font-light leading-none tracking-normal text-white sm:text-[36px]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Galeri Yakında
                </p>
              </div>
              <div className="absolute left-6 top-6 h-px w-10 bg-[#6E1B1F]" />
              <div className="absolute bottom-6 right-6 h-px w-10 bg-[#6E1B1F]" />
            </div>
          )}
        </div>

        {/* Metin Alanı: `flex-1` ve `flex-col justify-between` ile tüm boşluklar eşit dağıtılır */}
        <div className="flex flex-col justify-between flex-1 p-6 md:p-8 bg-white">
          
          <div className="space-y-3">
            {/* Üst Mikro Tag */}
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-6 bg-[#6E1B1F] transition-all duration-500 group-hover:w-10" />
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#6E6A63] uppercase">
                {room.specs.view || "MANZARALI ODA"}
              </span>
            </div>

            {/* Oda İsmi: `line-clamp-2` ve `min-h-[3.3em]` (yaklaşık 2 satırlık alan) 
                Yazı tek satır olsa bile tarayıcıda 2 satırlık yer kaplar, böylece asimetri tamamen engellenir.
            */}
            <h2 
              className="text-[22px] sm:text-[26px] font-light leading-[1.15] tracking-tight text-[#111111] transition-colors duration-500 group-hover:text-[#6E1B1F] line-clamp-2 min-h-[58px]" 
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {room.name}
            </h2>
            
            {/* Oda Metrikleri */}
            <div className="flex items-center gap-2.5 text-[12px] font-light tracking-wide text-[#6E6A63] pt-1">
              <span>{room.specs.area}</span>
              <span className="w-1 h-1 rounded-full bg-[#111111]/20" />
              <span>{room.specs.bed}</span>
            </div>
          </div>

          {/* Alt Link Ayrıcalığı: Üstteki boşluk dağılımı sayesinde daima tabana kilitlidir */}
          <div className="mt-8 pt-4 border-t border-[#111111]/5 flex items-center justify-between flex-shrink-0">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#111111] uppercase relative py-0.5 overflow-hidden inline-block">
              DETAYLARI GÖR
              <span className={[
                "absolute bottom-0 left-0 w-full h-[1px] bg-[#6E1B1F] transition-transform duration-500 transform origin-left",
                room.isAvailable ? "scale-x-0 group-hover:scale-x-100" : "scale-x-100 opacity-40",
              ].join(" ")} />
            </span>
            <span className={[
              "text-[#6E1B1F] text-sm transition-transform duration-500 transform translate-x-0",
              room.isAvailable ? "group-hover:translate-x-1.5" : "opacity-50",
            ].join(" ")}>
              {room.isAvailable ? "→" : "—"}
            </span>
          </div>

        </div>
      </div>
    </>
  );

  if (!room.isAvailable) {
    return (
      <article
        className="group block w-full h-full cursor-not-allowed bg-transparent"
        aria-label={`${room.name} yakında`}
      >
        {cardContent}
      </article>
    );
  }

  return (
    <Link
      href={`/odalar/${room.slug}`}
      // `h-full` verilerek grid satırının tam boyunu alması sağlandı
      className="group block w-full h-full bg-transparent"
    >
      {cardContent}
    </Link>
  );
}
