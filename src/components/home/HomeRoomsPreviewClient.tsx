"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import type { Room } from "@/lib/rooms";
import Reveal from "@/components/shared/Reveal";

type HomeRoomsPreviewClientProps = {
  rooms: Room[];
};

export default function HomeRoomsPreviewClient({ rooms }: HomeRoomsPreviewClientProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector("article");
    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).gap || "0");
    const step = cardWidth + gap;

    track.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <Reveal as="section" className="relative w-full bg-[#FAF9F6] py-24 md:py-36 text-[#111111] overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between border-b border-[#111111]/10 pb-12">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#6E1B1F]" />
              <p className="text-[10px] font-bold tracking-[0.45em] text-[#6E6A63] uppercase sm:text-xs">
                Özel Konaklama Deneyimi
              </p>
            </div>
            <h2
              className="text-[38px] font-light leading-[1.12] tracking-tight sm:text-[48px] md:text-[56px]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Zarif Detaylarla<br />
              <span className="italic font-normal text-[#6E6A63]">Tasarlanmış Odalar</span>
            </h2>
          </div>

          <Link
            href="/odalar"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[#111111]/30 bg-transparent px-10 text-[11px] font-semibold tracking-[0.22em] text-[#111111] uppercase transition-all duration-500 hover:border-[#6E1B1F] hover:bg-[#6E1B1F] hover:text-[#FFFFFF] hover:-translate-y-0.5"
          >
            TÜM ODALAR
          </Link>
        </div>
      </div>

      <div className="relative mt-12 px-6 sm:px-8 lg:px-16 mx-auto max-w-7xl">
        <div className="absolute right-6 -top-24 z-30 flex gap-3 lg:right-16">
          <button
            aria-label="Önceki Oda"
            onClick={() => scrollByCard("left")}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#111111]/10 bg-white text-[#111111] shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all duration-300 hover:bg-[#6E1B1F] hover:border-[#6E1B1F] hover:text-white active:scale-95"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            aria-label="Sonraki Oda"
            onClick={() => scrollByCard("right")}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#111111]/10 bg-white text-[#111111] shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all duration-300 hover:bg-[#6E1B1F] hover:border-[#6E1B1F] hover:text-white active:scale-95"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar flex gap-8 overflow-x-auto scroll-smooth select-none pt-4 pb-12 will-change-transform"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {rooms.map((room) => (
            <article
              key={room.slug}
              className="relative w-[85%] min-w-[300px] flex-none sm:w-[46%] md:w-[32%] lg:w-[31.5%] scroll-snap-align-start"
            >
              <div className={room.isAvailable ? "group block h-full" : "group block h-full cursor-not-allowed"}>
                <div
                  className={[
                    "flex flex-col h-full rounded-[2.5rem] bg-white border border-[#111111]/5 overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] transition-all duration-700",
                    room.isAvailable
                      ? "group-hover:shadow-[0_40px_70px_-15px_rgba(110,27,31,0.12)] group-hover:-translate-y-1"
                      : "opacity-90",
                  ].join(" ")}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EAE7E0]">
                    {room.isAvailable ? (
                      <>
                        <Image
                          src={room.cover}
                          alt={room.name}
                          fill
                          className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 filter brightness-[0.97]"
                          sizes="(max-width: 640px) 85vw, (max-width: 768px) 46vw, 32vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                      </>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-[#111111] text-[#FAF9F6]">
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-y border-white/10 bg-white/[.03] py-4 text-center">
                          <p className="text-[9px] font-bold uppercase tracking-[0.32em] text-white/45">
                            {room.availabilityLabel}
                          </p>
                          <p
                            className="mt-2 text-[25px] font-light leading-none tracking-normal text-white"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            Galeri Yakında
                          </p>
                        </div>
                        <div className="absolute left-5 top-5 h-px w-8 bg-[#6E1B1F]" />
                        <div className="absolute bottom-5 right-5 h-px w-8 bg-[#6E1B1F]" />
                      </div>
                    )}
                  </div>

                  <div className="p-6 lg:p-8 flex flex-col justify-between flex-1 bg-white">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-[#6E1B1F] uppercase">
                          LÜKS ODA
                        </span>
                        <div className="h-[1px] w-8 bg-[#111111]/10 group-hover:w-12 transition-all duration-500" />
                      </div>

                      <h3
                        className="text-[22px] font-light tracking-tight text-[#111111] md:text-[24px] pt-1"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {room.name}
                      </h3>
                    </div>

                    <div className="mt-8 pt-5 border-t border-[#111111]/5 flex items-center justify-between gap-4">
                      <p className="text-[12px] font-light tracking-wide text-[#6E6A63]">
                        {room.specs.area} · {room.specs.bed}
                      </p>

                      <span className="text-[10px] font-bold tracking-[0.25em] text-[#111111] uppercase relative py-1 overflow-hidden inline-block">
                        {room.isAvailable ? "KEŞFET" : "YAKINDA"}
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#6E1B1F] transition-transform duration-500 transform scale-x-0 origin-left group-hover:scale-x-100" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {room.isAvailable ? (
                <Link
                  href={`/odalar/${room.slug}`}
                  className="absolute inset-0"
                  aria-label={`${room.name} detayları`}
                />
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
