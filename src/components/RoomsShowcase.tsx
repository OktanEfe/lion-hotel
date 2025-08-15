"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import ReserveModal from "@/components/ReserveModal";

/* Örnek odalar – görselleri /public/rooms/... altına koy */
const ROOMS = [
  { slug: "deniz-manzarali-standart", name: "Deniz Manzaralı Standart Oda", size: "22 m²", capacity: "2 yetişkin", image: "/rooms/sea-standard.jpg" },
  { slug: "suite",                      name: "Suite Oda",                      size: "38 m²", capacity: "2 yetişkin · 1 çocuk", image: "/rooms/suite.jpg" },
  { slug: "bir-arti-bir",               name: "1+1 Oda",                        size: "45 m²", capacity: "3 yetişkin", image: "/rooms/one-plus-one.jpg" },
  { slug: "deniz-balkonlu",             name: "Deniz Manzaralı Balkonlu Oda",   size: "28 m²", capacity: "2 yetişkin", image: "/rooms/sea-balcony.jpg" },
  { slug: "aile",                       name: "Aile Odası",                     size: "35 m²", capacity: "2 yetişkin · 2 çocuk", image: "/rooms/family.jpg" },
  { slug: "standart",                   name: "Standart Oda",                   size: "27 m²", capacity: "2 yetişkin · 1 çocuk", image: "/rooms/standard.jpg" },
];

export default function RoomsShowcase() {
  const [reserveOpen, setReserveOpen] = useState(false);

  /** Sonsuz döngü için baş/sone klon */
  const CLONE = 3;
  const extended = useMemo(() => {
    const head = ROOMS.slice(-CLONE);
    const tail = ROOMS.slice(0, CLONE);
    return [...head, ...ROOMS, ...tail];
  }, []);

  const trackRef = useRef<HTMLDivElement>(null);
  const cardRef  = useRef<HTMLDivElement>(null);
  const stepRef  = useRef(0);

  /* İlk konumu gerçek listenin başına getir ve step hesapla */
  useEffect(() => {
    const el = trackRef.current;
    const card = cardRef.current;
    if (!el || !card) return;
    const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(el).gap || "0");
    stepRef.current = step;
    el.scrollLeft = step * CLONE;

    const onResize = () => {
      const s = card.getBoundingClientRect().width + parseFloat(getComputedStyle(el).gap || "0");
      stepRef.current = s;
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [extended.length]);

  /* Sonsuz loop: uçlara gelince orta segmente geçir (göz kırpmadan) */
  const handleLoop = () => {
    const el = trackRef.current;
    if (!el) return;
    const step  = stepRef.current;
    const start = step * CLONE;
    const end   = step * (CLONE + ROOMS.length);

    if (el.scrollLeft <= start - step / 2) {
      el.scrollLeft = el.scrollLeft + step * ROOMS.length;
    } else if (el.scrollLeft >= end + step / 2) {
      el.scrollLeft = el.scrollLeft - step * ROOMS.length;
    }
  };

  const scrollBy = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const step = stepRef.current;
    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full pb-16 md:pb-24 mb-4"
      // %62 daha açık koyu bej → %38 açık bej (tonları biraz açıldı)
      style={{ background: "linear-gradient(90deg,#e5d3c1 0% 62%,#f6ede3 62% 100%)" }}
    >
      {/* Başlık: renklerin kesiştiği çizgiye hizalanır */}
      <div className="w-screen px-4 sm:px-6 lg:px-8"
           style={{ marginLeft: "calc(55% - 40vw)", marginRight: "calc(55% - 40vw)" }}>
        <div className="grid grid-cols-[62%_38%]">
          <div className="col-start-1 justify-self-end pr-4 pt-8 md:pt-12">
            <h2
              className="text-[36px] sm:text-[44px] md:text-[68px] leading-[1.06]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Size Uygun<br/>Odayı Keşfedin
            </h2>
          </div>
        </div>
      </div>

      {/* Full‑bleed track (tam genişlik) */}
      <div
        className="relative w-screen px-4 sm:px-6 lg:px-8"
        style={{ marginLeft: "calc(50% - 50vw)", marginRight: "calc(50% - 50vw)" }}
      >
        {/* Oklar – ekran sınırına yakın, overflow taşmadan */}
        <button
          aria-label="Geri"
          onClick={() => scrollBy("left")}
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-30 grid h-9 w-9 place-items-center rounded-full bg-black/80 text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-black/30"
        >
          ‹
        </button>
        <button
          aria-label="İleri"
          onClick={() => scrollBy("right")}
          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-30 grid h-9 w-9 place-items-center rounded-full bg-black/80 text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-black/30"
        >
          ›
        </button>

        {/* Kart rayı */}
        <div
          ref={trackRef}
          onScroll={handleLoop}
          className="flex gap-10 sm:gap-12 overflow-x-auto scroll-smooth select-none"
          style={{ msOverflowStyle: "none", scrollbarWidth: "none" } as React.CSSProperties}
        >
          {/* WebKit scrollbar gizle */}
          <style>{`.no-scrollbar::-webkit-scrollbar{display:none}`}</style>
          <div className="shrink-0 w-1" />
          {extended.map((r, i) => (
            <article
              key={`${r.slug}-${i}`}
              className="flex-none w-[92%] xs:w-[70%] sm:w-[56%] md:w-[48%] lg:w-[42%] min-w-[260px]"
              ref={i === CLONE ? cardRef : undefined}
            >
              <Link href={`/rooms/${r.slug}`} className="block">
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[18px]">
                  <Image
                    src={r.image}
                    alt={r.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    sizes="(max-width: 480px) 92vw, (max-width: 640px) 70vw, (max-width: 1024px) 56vw, 42vw"
                  />
                </div>
                <h3
                  className="mt-4 text-[22px] md:text-[24px]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {r.name}
                </h3>
                <p className="text-sm text-black/70">{r.size} · {r.capacity}</p>
              </Link>
            </article>
          ))}
          <div className="shrink-0 w-1" />
        </div>

        {/* Alt aksiyonlar – küçük ve dikeyce uzun, alttan-nefesten boşluklu */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 mt-14 md:mt-16 mb-10 md:mb-12">
          <Link
            href="/rooms"
            className="px-6 md:px-7 py-3 md:py-4 rounded-full text-[11px] md:text-[12px] tracking-[0.12em] bg-white text-black border border-black/40 hover:bg-black hover:text-white transition"
          >
            DİĞER ODALARIMIZI GÖR
          </Link>

          <button
            onClick={() => setReserveOpen(true)}
            className="px-6 md:px-7 py-3 md:py-4 rounded-full text-[11px] md:text-[12px] tracking-[0.12em] bg-black text-white hover:bg-[#2e2e2e] transition"
          >
            ŞİMDİ REZERVASYON YAPIN
          </button>
        </div>
      </div>

      {/* Ortak rezervasyon modalı */}
      <ReserveModal open={reserveOpen} onClose={() => setReserveOpen(false)} />
    </section>
  );
}