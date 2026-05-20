"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type RoomGalleryProps = {
  images: string[];
};

export default function RoomGallery({ images }: RoomGalleryProps) {
  const gallery = images.slice(0, 6);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  if (gallery.length === 0) return null;

  return (
    <>
      {/* Ana Galeri Gövdesi: Kontrollü editorial grid */}
      <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-12">
          
          {/* SIRA 1: Bir büyük sinematik görsel + yanında dengeli ikinci kare */}
          {gallery.slice(0, 2).map((src, index) => {
            const isFirst = index === 0;
            return (
              <button
                key={`${src}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`
                  group relative overflow-hidden bg-[#F2F1ED] rounded-xl outline-none transition-all duration-700
                  ${isFirst ? "aspect-[16/10] lg:col-span-8" : "aspect-[4/3] lg:col-span-4"}
                `}
                aria-label={`Oda galerisi görseli ${index + 1}`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover scale-100 transition-transform duration-[2.5s] ease-out group-hover:scale-[1.03]"
                  sizes={isFirst ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
                />
                {/* Lüks editoryal hover katmanı */}
                <span className="absolute inset-0 bg-black/[0.03] transition-colors duration-700 group-hover:bg-transparent" />
                <div className="absolute inset-0 border border-black/[0.02] rounded-xl pointer-events-none" />
              </button>
            );
          })}

          {/* SIRA 2: Dört görsele kadar düzenli, taşmayan editorial şerit */}
          {gallery.length > 2 && (
            <div className="sm:col-span-2 lg:col-span-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {gallery.slice(2, 6).map((src, idx) => {
                const actualIndex = idx + 2;
                return (
                  <button
                    key={`${src}-${actualIndex}`}
                    type="button"
                    onClick={() => setActiveIndex(actualIndex)}
                    className="group relative overflow-hidden bg-[#F2F1ED] rounded-xl aspect-[4/3] outline-none transition-all duration-700"
                    aria-label={`Oda galerisi görseli ${actualIndex + 1}`}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover scale-100 transition-transform duration-[2.5s] ease-out group-hover:scale-[1.03]"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <span className="absolute inset-0 bg-black/[0.03] transition-colors duration-700 group-hover:bg-transparent" />
                    <div className="absolute inset-0 border border-black/[0.02] rounded-xl pointer-events-none" />
                  </button>
                );
              })}
            </div>
          )}

        </div>
      </div>

      {/* Lightbox / Fullscreen Görüntüleyici (Minimal Lüks Düzenleme) */}
      {activeIndex !== null ? (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0C0B0A]/96 p-4 backdrop-blur-xl sm:p-12 transition-all duration-500"
          onClick={() => setActiveIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Üst Bar: Sayıcı ve Kapat Butonu */}
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center max-w-7xl mx-auto w-full z-[110]">
            <div className="text-[11px] font-medium tracking-[0.3em] text-[#F0EDE6]/60 uppercase">
              {String(activeIndex + 1).padStart(2, "0")} <span className="mx-2 text-[#8B1F24]">/</span> {String(gallery.length).padStart(2, "0")}
            </div>
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="group flex items-center gap-3 border border-[#F0EDE6]/10 rounded-full px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#F0EDE6]/80 backdrop-blur-sm transition-all duration-300 hover:border-[#8B1F24] hover:text-white"
            >
              <span>Kapat</span>
              <span className="text-[#8B1F24] transition-transform duration-300 group-hover:rotate-90">✕</span>
            </button>
          </div>

          {/* Görsel Alanı: Tam Sinematik 16:9 Oran */}
          <div className="relative aspect-[16/9] w-full max-w-6xl mt-4" onClick={(event) => event.stopPropagation()}>
            <Image
              src={gallery[activeIndex]}
              alt="Oda galeri görseli büyük görünüm"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
