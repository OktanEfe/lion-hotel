"use client";

import Image from "next/image";

type ExperienceCardProps = {
  item: {
    title: string;
    eyebrow: string;
    text: string;
    image: string;
    imageAlt: string;
  };
  index: number;
  variant?: "feature" | "compact";
};

export default function ExperienceCard({ item, index, variant = "feature" }: ExperienceCardProps) {
  const reverse = index % 2 === 1;
  
  // İlk 4 kartı (0, 1, 2, 3) tespit eden kontrol değişkeni
  const isFirstFour = index < 4;

  // COMPACT VARIANT: Sütunlu dergi mizanpajı
  if (variant === "compact") {
    return (
      <article className="group flex flex-col h-full border-t border-[#111111]/05 pt-6">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#F4EFE9]">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            className="object-cover scale-100 transition duration-[2.5s] ease-out group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-black/[0.02] transition duration-700 group-hover:bg-transparent" />
        </div>

        <div className="pt-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <span className="text-[10px] font-bold tracking-[0.15em] text-[#6E1B1F]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="h-px w-5 bg-[#6E1B1F]/20" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#7A756E]">
                {item.eyebrow}
              </span>
            </div>

            {/* İlk 4 kartın başlığı ve metni compact varyantta da bir tık optimize edildi */}
            <h2
              className={`font-light leading-[1.2] tracking-tight text-[#111111] ${
                isFirstFour ? "text-[24px] sm:text-[26px]" : "text-[22px] sm:text-[24px]"
              }`}
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {item.title}
            </h2>
            <p className={`mt-3 font-light leading-[1.7] text-[#5A5650] tracking-wide ${
              isFirstFour ? "text-[14px]" : "text-[13.5px]"
            }`}>
              {item.text}
            </p>
          </div>
        </div>
      </article>
    );
  }

  // FEATURE VARIANT: Klasik lüks otel dengesi (Fotoğraf ve Yazı 5'e 7 kolonda)
  return (
    <article
      className={[
        "group grid gap-8 border-t border-[#111111]/08 py-14 md:grid-cols-12 md:gap-16 md:py-20 items-center",
        reverse ? "md:[&>*:first-child]:order-2" : "",
      ].join(" ")}
    >
      {/* Kart Görsel Alanı */}
      <div className="md:col-span-5 w-full">
        <div className="relative aspect-[16/10] sm:aspect-[4/3] md:aspect-[5/6] lg:aspect-[4/5] overflow-hidden rounded-2xl bg-[#F4EFE9] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.04)]">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            className="object-cover scale-100 transition duration-[2.5s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.04]"
            sizes="(min-width: 1024px) 40vw, (min-width: 768px) 42vw, 100vw"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-black/[0.02] transition duration-700 group-hover:bg-transparent" />
        </div>
      </div>

      {/* Yazı Alanı: İlk 4 kart için masaüstü görünümünde büyütüldü */}
      <div className="flex md:col-span-7 items-center w-full">
        <div className="w-full max-w-xl lg:max-w-2xl">
          <div className="mb-5 flex items-center gap-4">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#6E1B1F]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-8 bg-[#6E1B1F]/20" />
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#7A756E]">
              {item.eyebrow}
            </span>
          </div>

          {/* Başlık Boyutu: İlk 4 karta özel olarak masaüstünde (lg:) 48px'ten 56px'e çıkartıldı */}
          <h2
            className={`font-light leading-[1.08] tracking-tight text-[#111111] transition-all ${
              isFirstFour 
                ? "text-[32px] sm:text-[42px] lg:text-[56px]" 
                : "text-[30px] sm:text-[38px] lg:text-[46px]"
            }`}
            style={{ fontFamily: "var(--font-font-playfair || var(--font-playfair))" }}
          >
            {item.title}
          </h2>

          {/* Açıklama Metni: İlk 4 karta özel olarak masaüstünde (lg:) 14.5px'ten daha okunaklı olan 16px (text-base) boyutuna getirildi */}
          <p className={`mt-5 font-light leading-[1.8] tracking-wide text-[#5A5650] transition-all ${
            isFirstFour 
              ? "text-[15px] lg:text-[16px] lg:leading-[1.85]" 
              : "text-[14px] lg:text-[14.5px]"
          }`}>
            {item.text}
          </p>
        </div>
      </div>
    </article>
  );
}