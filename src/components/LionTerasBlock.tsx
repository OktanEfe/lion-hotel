import Link from "next/link";

export default function LionTerasBlock() {
  return (
    <section
      id="lion-teras"
      className="relative w-full h-[72vh] sm:h-[78vh] md:h-[82vh] min-h-[520px] sm:min-h-[560px] bg-cover bg-center"
      style={{ backgroundImage: "url('/lion-teras.jpg')" }} // /public/lion-teras.jpg
      aria-label="Lion Teras"
    >
      {/* okunabilirlik: yumuşak degrade overlay */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.45)_0%,rgba(0,0,0,.28)_40%,rgba(0,0,0,.38)_100%)]"
      />

      {/* İçerik */}
      <div className="relative h-full container px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl text-white text-center md:text-left">
          <h2
            className="font-normal leading-[1.08] text-4xl sm:text-5xl md:text-[64px] lg:text-[72px]"
            style={{ fontFamily: "var(--font-playfair)", textShadow: "0 2px 16px rgba(0,0,0,.25)" }}
          >
            Lion Teras
          </h2>

          <p className="mt-3 sm:mt-4 max-w-xl mx-auto md:mx-0 text-sm sm:text-base md:text-lg text-white/90">
            Şehrin üzerinde, canlı müzik ve imza kokteyllerle yeni nesil bir teras deneyimi.
            Gün batımında manzarayı, geceleri altın‑siyah atmosferi keşfedin.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-3 sm:gap-4">
            <Link
              href="/lion-teras"
              className="inline-flex h-10 sm:h-11 md:h-12 items-center justify-center px-7 sm:px-8 md:px-9 rounded-full border border-white/80 text-white tracking-[0.18em] text-[11px] sm:text-[12px] hover:bg-white hover:text-black transition"
            >
              TERASI KEŞFET
            </Link>
            <Link
              href="/lion-teras#qr"
              className="inline-flex h-10 sm:h-11 md:h-12 items-center justify-center px-7 sm:px-8 md:px-9 rounded-full border border-white/60 text-white/90 tracking-[0.18em] text-[11px] sm:text-[12px] hover:bg-white/90 hover:text-black transition"
            >
              QR MENÜ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}