// src/components/Testimonials.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useMemo, useRef } from "react";

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      className={filled ? "fill-[#CBA135]" : "fill-black/15"}
      aria-hidden="true"
    >
      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.401 8.168L12 18.896l-7.335 3.868 1.401-8.168L.132 9.21l8.2-1.192z" />
    </svg>
  );
}

type TItem = { name: string; rating: number; text: string; detail?: string };

const DATA: TItem[] = [
  { name: "Ayşe K.", rating: 5, text: "Odalar tertemiz, modern ve gerçekten çok konforluydu. Personelin yaklaşımı o kadar sıcak ki kendimizi evimizde hissettik.", detail: "Terasta gün batımı esnasında canlı müzik ile kokteyller muazzamdı; Çınarcık’a her gelişimizde buradayız." },
  { name: "Mert A.", rating: 4, text: "Konum harika; plaja ve merkeze çok yakın. Geceleri Lion Teras’ın atmosferi kesinlikle deneyimlenmeli.", detail: "Sessiz, sakin bir uyku ve sabah taze ürünlerle zengin bir kahvaltı. Fiyat/performans çok iyi." },
  { name: "Selin D.", rating: 5, text: "Tasarım detayları ve temizlik standardı beklentimin üzerindeydi. Resepsiyon ekibi çok ilgili.", detail: "İmza kokteyller favorim oldu. Fotoğraflardaki gibi şık bir ortam; özel günler için de ideal." },
  { name: "Eren Y.", rating: 5, text: "Hafta sonu kaçamağı için tercih ettik, odalar ferah ve yatak çok rahat. Gece gürültü yoktu.", detail: "Otopark kolaylığı ve hızlı check-in hayat kurtardı. Kısa tatiller için birebir." },
  { name: "Ezgi T.", rating: 4, text: "Ailece konakladık; çocuklu aileler için düşünülmüş rahatlıklar var. Kahvaltı çeşitleri başarılı.", detail: "Balkonlu oda tavsiye edilir; manzara eşliğinde kahve keyfi çok hoştu." },
  { name: "Burak S.", rating: 5, text: "Butik otel sıcaklığını gerçekten hissettik. Oda detayları ve koku seçimi bile düşünülmüş.", detail: "Lion Teras’ta canlı müzik gecesi çok keyifliydi. Yeniden gelmeyi planlıyoruz." },
];

export default function Testimonials() {
  const CLONE = 2;
  const extended = useMemo(() => {
    const head = DATA.slice(-CLONE);
    const tail = DATA.slice(0, CLONE);
    return [...head, ...DATA, ...tail];
  }, []);

  const railRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const stepRef = useRef(0);

  useEffect(() => {
    const rail = railRef.current;
    const card = firstCardRef.current;
    if (!rail || !card) return;

    const gap = parseFloat(getComputedStyle(rail).gap || "24");
    stepRef.current = card.offsetWidth + gap;
    rail.scrollLeft = stepRef.current * CLONE;

    const onResize = () => {
      const g = parseFloat(getComputedStyle(rail).gap || "24");
      stepRef.current = (firstCardRef.current?.offsetWidth || 320) + g;
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [extended.length]);

  const handleLoop = () => {
    const rail = railRef.current;
    if (!rail) return;
    const step = stepRef.current;
    const start = step * CLONE;
    const end = step * (CLONE + DATA.length);

    if (rail.scrollLeft <= start - step / 2) {
      rail.scrollLeft = rail.scrollLeft + step * DATA.length;
    } else if (rail.scrollLeft >= end + step / 2) {
      rail.scrollLeft = rail.scrollLeft - step * DATA.length;
    }
  };

  const scroll = (dir: "prev" | "next") => {
    const rail = railRef.current;
    if (!rail) return;
    const step = stepRef.current || 360;
    rail.scrollBy({ left: dir === "next" ? step : -step, behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center">
          <h2 className="text-[42px] md:text-[68px] leading-[1.05]" style={{ fontFamily: "var(--font-playfair)" }}>
            Misafir Yorumları
          </h2>
          <p className="mt-3 text-black/60 max-w-2xl mx-auto">
            Gerçek konuk deneyimleri: konfor, lezzet ve Lion Teras’ta unutulmaz anlar.
          </p>
        </div>

        <div className="relative mt-10 md:mt-12">
          <button
            onClick={() => scroll("prev")}
            aria-label="Önceki"
            className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-items-center rounded-full bg-white border border-black/10 shadow hover:bg-black hover:text-white transition"
          >
            ‹
          </button>

          <div
            ref={railRef}
            onScroll={handleLoop}
            className="flex gap-6 md:gap-8 overflow-x-auto scroll-smooth no-scrollbar"
          >
            <div className="shrink-0 w-1" />
            {extended.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                data-card
                ref={i === CLONE ? firstCardRef : undefined}
                className="snap-start min-w-[300px] sm:min-w-[360px] max-w-[380px] rounded-2xl border border-black/10 p-5 sm:p-6 bg-white shadow-[0_10px_40px_rgba(0,0,0,.08)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-1" aria-label={`Puan: ${t.rating}/5`}>
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} filled={k < t.rating} />
                    ))}
                  </div>
                  <span className="text-[12px] tracking-wide text-black/50">
                    {t.rating.toFixed(1)} / 5
                  </span>
                </div>

                <p className="mt-3 text-[15px] leading-7 text-black/80">“{t.text}”</p>
                {t.detail && <p className="mt-2 text-[14px] leading-6 text-black/60">{t.detail}</p>}

                <div className="mt-4 pt-4 border-t border-black/10 text-[14px] font-medium">{t.name}</div>
              </div>
            ))}
            <div className="shrink-0 w-1" />
          </div>

          <button
            onClick={() => scroll("next")}
            aria-label="Sonraki"
            className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-items-center rounded-full bg-white border border-black/10 shadow hover:bg-black hover:text-white transition"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}