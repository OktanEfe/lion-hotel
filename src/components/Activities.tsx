// src/components/Activities.tsx
"use client";

import Image from "next/image";

type Activity = {
  title: string;
  img: string;
  text: string;
  tags?: string[];
  href?: string;
};

export default function Activities({ onReserve }: { onReserve?: () => void }) {
  const items: Activity[] = [
    {
      title: "Beach Club Kio",
      img: "/activities/kio.jpg",
      text: "Deniz & eğlence — şezlong, DJ performans ve imza kokteyller.",
      tags: ["Plaj", "Kokteyl", "Müzik"],
    },
    {
      title: "Mavish Beach",
      img: "/activities/mavish.jpg",
      text: "Sakin atmosfer, berrak deniz ve gün batımı keyfi.",
      tags: ["Aile Dostu", "Gün Batımı"],
    },
    {
      title: "Su Sporları",
      img: "/activities/watersports.jpg",
      text: "Jetski, banana, paddle board ve daha fazlası.",
      tags: ["Adrenalin", "Ekipman"],
    },
    {
      title: "Çevre Gezileri",
      img: "/activities/trips.jpg",
      text: "Doğa yürüyüşleri, sahil rotaları ve fotoğraf noktaları.",
      tags: ["Doğa", "Keşif", "Rota"],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Üst başlık */}
        <p className="text-[10px] sm:text-xs tracking-[0.28em] text-black/50">
          DISCOVER
        </p>
        <h2
          className="mt-2 text-[36px] sm:text-[42px] md:text-[68px] leading-[1.05]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Çınarcık’ta Yapabilecekleriniz
        </h2>
        <p className="mt-3 text-black/70 max-w-2xl">
          Otel çevresindeki en popüler plajlar ve deneyimler. Gününüzü denizde
          serinleyerek, akşamı ise Lion Teras’ın harika atmosferinin canlı
          müziği taçlandırın.
        </p>

        {/* Kartlar */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {items.map((a) => (
            <article
              key={a.title}
              className="group rounded-2xl overflow-hidden border border-black/10 bg-white shadow-[0_8px_30px_rgba(0,0,0,.06)] hover:shadow-[0_18px_60px_rgba(0,0,0,.12)] transition-shadow"
            >
              {/* Görsel + overlay başlık */}
              <div className="relative w-full aspect-[16/11] overflow-hidden">
                <Image
                  src={a.img}
                  alt={a.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 25vw"
                  priority={false}
                />
                {/* Üstte hafif karartma + başlık */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                <h3
                  className="absolute left-4 right-4 bottom-3 text-white text-[18px] sm:text-[20px] drop-shadow"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {a.title}
                </h3>
              </div>

              {/* Metin + rozetler */}
              <div className="p-5">
                <p className="text-sm text-black/75 min-h-[52px]">{a.text}</p>

                {a.tags && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {a.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-1 rounded-full border border-black/15 bg-[#f6ede3]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12">
          <button
            onClick={onReserve}
            className="inline-flex h-11 items-center justify-center px-7 rounded-full border border-black/25 text-[12px] tracking-[0.18em] hover:bg-black hover:text-white transition"
          >
            REZERVASYON İÇİN TIKLAYIN
          </button>
        </div>
      </div>
    </section>
  );
}