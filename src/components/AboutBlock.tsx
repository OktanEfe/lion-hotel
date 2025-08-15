import Image from "next/image";
import Link from "next/link";

export default function AboutBlock() {
  return (
    <section className="relative w-full bg-[#0f0f0f] text-white min-h-[800px]">
      <div className="container px-4 sm:px-6 lg:px-8 py-28 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] items-center gap-14 md:gap-20">

          {/* Sol: Başlık + metin + buton */}
          <div className="max-w-2xl">
            <h2
              className="text-5xl sm:text-6xl md:text-[78px] leading-[1.05] font-normal"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Hakkımızda
            </h2>

            <p className="mt-6 text-white/80 text-base sm:text-lg leading-relaxed">
              Lion Otel, zarafet ve konforu aynı çatı altında buluşturan butik bir
              deneyim sunar. Modern mimari, sakin bir atmosfer ve özenli servis…
              İster romantik bir kaçamak, ister aile tatili ya da iş seyahati, her
              anınızı özel hissettirmek için buradayız.
            </p>

            <Link
              href="/about"
              className="mt-10 inline-flex h-14 items-center justify-center px-10 rounded-full border border-white/70 text-white tracking-[0.18em] text-sm hover:bg-white hover:text-black transition"
            >
              OTELİ KEŞFET
            </Link>
          </div>

          {/* Sağ: Kömür çerçevede büyük görsel */}
          <div className="rounded-3xl bg-[#232323] p-6 sm:p-8 md:p-10">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl ring-1 ring-white/5 shadow-[0_40px_100px_rgba(0,0,0,.5)]">
              <Image
                src="/about.jpg"
                alt="Lion Hotel - Oda ve manzara"
                fill
                className="object-cover"
                priority
              />
              {/* hafif iç gölge */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(130%_90%_at_100%_0%,rgba(0,0,0,0.18)_0%,transparent_55%)]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}