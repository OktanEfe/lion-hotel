"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Props = { images: string[] };

export default function RoomGalleryClient({ images }: Props) {
  const CLONE = 2;
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const stepRef = useRef(0);
  const [lightIdx, setLightIdx] = useState<number | null>(null);

  const extended = useMemo(() => {
    const head = images.slice(-CLONE);
    const tail = images.slice(0, CLONE);
    return [...head, ...images, ...tail];
  }, [images]);

  useEffect(() => {
    const el = trackRef.current;
    const card = cardRef.current;
    if (!el || !card) return;

    const computeStep = () =>
      card.getBoundingClientRect().width +
      parseFloat(getComputedStyle(el).gap || "0");

    stepRef.current = computeStep();
    el.scrollLeft = stepRef.current * CLONE;

    const onResize = () => {
      stepRef.current = computeStep();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [extended.length]);

  const handleLoop = () => {
    const el = trackRef.current;
    if (!el) return;
    const step = stepRef.current;
    const start = step * CLONE;
    const end = step * (CLONE + images.length);
    if (el.scrollLeft <= start - step / 2) el.scrollLeft += step * images.length;
    else if (el.scrollLeft >= end + step / 2) el.scrollLeft -= step * images.length;
  };

  const scrollBy = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const step = stepRef.current;
    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  // Lightbox: Esc ile kapat
  useEffect(() => {
    if (lightIdx === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightIdx(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightIdx]);

  return (
    <div
      className="relative w-screen"
      style={{ marginLeft: "calc(50% - 50vw)", marginRight: "calc(50% - 50vw)" }}
    >
      {/* Kenar ok alanları */}
      <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-between">
        <div className="pointer-events-auto h-full w-[10vw] min-w-[56px] max-w-[160px] flex items-center justify-start">
          <button
            aria-label="Geri"
            onClick={() => scrollBy("left")}
            className="ml-2 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md border border-white/20 hover:bg-white/25 transition"
          >
            ‹
          </button>
        </div>
        <div className="pointer-events-auto h-full w-[10vw] min-w-[56px] max-w-[160px] flex items-center justify-end">
          <button
            aria-label="İleri"
            onClick={() => scrollBy("right")}
            className="mr-2 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md border border-white/20 hover:bg-white/25 transition"
          >
            ›
          </button>
        </div>
      </div>

      {/* Ray */}
      <div
        ref={trackRef}
        onScroll={handleLoop}
        className="flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth no-scrollbar select-none px-4 sm:px-6 lg:px-8 py-2"
        style={{ msOverflowStyle: "none", scrollbarWidth: "none" } as unknown}
      >
        <div className="shrink-0 w-1" />
        {extended.map((src, i) => (
          <figure
            key={`${src}-${i}`}
            ref={i === CLONE ? cardRef : undefined}
            className="flex-none w-[88%] xs:w-[72%] sm:w-[56%] md:w-[48%] lg:w-[44%]"
          >
            <button
              onClick={() =>
                setLightIdx(((i - CLONE) % images.length + images.length) % images.length)
              }
              className="block relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-white/10"
              aria-label="Fotoğrafı büyüt"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                sizes="(max-width:480px) 88vw, (max-width:640px) 72vw, (max-width:1024px) 56vw, 44vw"
              />
            </button>
          </figure>
        ))}
        <div className="shrink-0 w-1" />
      </div>

      {/* LIGHTBOX (arka plan blur) */}
      {lightIdx !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md"
          onClick={() => setLightIdx(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative w-full max-w-5xl aspect-[16/10]">
              <Image
                src={images[lightIdx]}
                alt=""
                fill
                className="object-contain rounded-2xl shadow-2xl"
                sizes="100vw"
                priority
              />
              <button
                onClick={(e) => { e.stopPropagation(); setLightIdx(null); }}
                aria-label="Kapat"
                className="absolute -top-3 -right-3 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-black hover:bg-white shadow-lg"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}