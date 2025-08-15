// src/app/about/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="text-neutral-900">
      {/* HERO – büyük görsel arka plan */}
      <section
        className="relative h-[68vh] md:h-[78vh] lg:h-[86vh] min-h-[560px] w-full overflow-hidden"
        aria-label="Lion Hotel Hakkında"
      >
        <Image
          src="/about/hero.jpg" // /public/about/hero.jpg
          alt="Lion Hotel - Hakkında"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* okunabilirlik için degrade */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.45)_0%,rgba(0,0,0,.30)_40%,rgba(0,0,0,.45)_100%)]" />

        <div className="relative h-full container px-4 sm:px-6 lg:px-8 flex items-end pb-10 md:pb-14">
          <div className="max-w-3xl text-white">
            <p className="text-[11px] tracking-[0.32em] opacity-85">ABOUT</p>
            <h1
              className="mt-2 text-[34px] sm:text-[44px] md:text-[68px] leading-[1.05]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Butik konfor,<br className="hidden sm:block" /> zamansız tasarımla buluşuyor.
            </h1>
            <p className="mt-3 md:mt-4 max-w-2xl text-sm md:text-base text-white/90">
              Lion Hotel; sade lüks ve sıcak misafirperverliğin buluştuğu, şehrin ritmini
              yavaşlatan bir deneyim sunar.
            </p>
          </div>
        </div>
      </section>

      {/* Felsefemiz – SİYAH zemin, beyaz yazı */}
      <section className="bg-[#0f0f0f] text-white">
        <div className="container px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <h2
              className="text-[30px] md:text-[42px] leading-[1.06]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Felsefemiz
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/85">
              İyi bir konaklamayı unutulmaz yapan: dingin odalar, yumuşak ışık,
              iyi tasarlanmış detaylar ve nezaketle kurulan iletişimdir. Altın‑siyah‑beyaz
              paletinde sadeleştirip hissi güçlendirdik; gereksiz hiçbir şey yok, ihtiyaç
              duyulan her şey var.
            </p>
            <p className="mt-3 text-sm md:text-base text-white/85">
              Sabah ferah bir kahvaltı; akşam Lion Teras’ta canlı müzik ve imza
              kokteyller… Kapıdan içeri adım attığınız anda ritminiz yavaşlasın istiyoruz.
            </p>
          </div>

          {/* Yan görsel (isteğe bağlı) */}
          <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden ring-1 ring-white/10">
            <Image
              src="/about/split-1.jpg"
              alt="Detaylar"
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </section>

      {/* ODA DETAYLARI – BEJ / zenginleştirilmiş */}
      <section className="bg-[#efdfcf]">
  <div className="container px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    {/* Başlık + rozetler */}
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
      <div>
        <p className="text-[11px] tracking-[0.28em] text-black/50">ROOMS</p>
        <h3
          className="mt-1 text-[32px] sm:text-[40px] md:text-[48px] leading-[1.06]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Odalar & Detaylar
        </h3>
        <p className="mt-2 text-[15px] md:text-base text-black/70 max-w-2xl">
          Sade lüksü, sıcak bir atmosferle buluşturuyoruz. İhtiyacınız olan her şey; fazlası yok, eksiği yok.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center rounded-full border border-black/15 bg-white/70 px-3 py-1 text-[12px] text-black/70">Hızlı Wi-Fi</span>
        <span className="inline-flex items-center rounded-full border border-black/15 bg-white/70 px-3 py-1 text-[12px] text-black/70">Klima</span>
        <span className="inline-flex items-center rounded-full border border-black/15 bg-white/70 px-3 py-1 text-[12px] text-black/70">Sessiz Oda</span>
      </div>
    </div>

    {/* 3 özellik kartı */}
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          t: "Zamansız Tasarım",
          d: "Doğal dokular, yumuşak ışık ve dengeli renk paleti.",
          i: (
            <svg width="22" height="22" viewBox="0 0 24 24" className="fill-white">
              <path d="M12 2 2 7l10 5 10-5-10-5Zm0 7L2 4v13l10 5 10-5V4l-10 5Z"/>
            </svg>
          ),
        },
        {
          t: "Konfor Önceliği",
          d: "Yüksek kaliteli yatak, yastık menüsü ve karartma perdeleri.",
          i: (
            <svg width="22" height="22" viewBox="0 0 24 24" className="fill-white">
              <path d="M4 10h14a4 4 0 0 1 4 4v5h-2v-3H2v3H0v-9a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v2h20v-2a2 2 0 0 0-2-2H4Z"/>
            </svg>
          ),
        },
        {
          t: "Akıllı Detaylar",
          d: "Hızlı Wi-Fi, akıllı TV ve pratik çalışma alanı.",
          i: (
            <svg width="22" height="22" viewBox="0 0 24 24" className="fill-white">
              <path d="M3 5h18v12H3V5Zm2 2v8h14V7H5Zm4 12h6v2H9v-2Z"/>
            </svg>
          ),
        },
      ].map((c) => (
        <div
          key={c.t}
          className="group rounded-2xl bg-white/70 ring-1 ring-black/10 p-5 hover:shadow-[0_18px_50px_rgba(0,0,0,.08)] transition"
        >
          <div className="flex items-center gap-3">
            <span className="grid place-items-center h-10 w-10 rounded-full bg-black/80 text-white group-hover:scale-105 transition">
              {c.i}
            </span>
            <h4
              className="text-[18px] md:text-[20px]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {c.t}
            </h4>
          </div>
          <p className="mt-2 text-[14px] md:text-[15px] text-black/70">{c.d}</p>
        </div>
      ))}
    </div>

    {/* İki kolon checklist */}
    <div className="mt-10 grid md:grid-cols-2 gap-8 text-[15px] md:text-base text-black/80">
      <ul className="space-y-3">
        {[
          "Yüksek kaliteli yatak & yastık seçenekleri",
          "Karartma perdeleri ve yumuşak aydınlatma",
          "Mini bar ve ücretsiz su ikramı",
          "Geniş duş alanı, seçili banyo ürünleri",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" className="mt-1 fill-black/80">
              <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <ul className="space-y-3">
        {[
          "Hızlı Wi-Fi & çalışma masası",
          "Akıllı TV ve yayın uygulamaları",
          "Klima & sessiz oda mimarisi",
          "Şehir veya deniz manzaralı seçenekler",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" className="mt-1 fill-black/80">
              <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Vurgu bandı: metin + sağda görsel */}
    <div className="mt-12 md:mt-16 grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-center">
      <div>
        <h4
          className="text-[22px] md:text-[28px] leading-[1.06]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Her Detay, İyi Bir Gece İçin
        </h4>
        <p className="mt-3 text-black/70">
          Geceyi huzurlu geçirmeniz, ertesi güne enerji dolu başlamanız demektir.
          Yatak kalitesinden odanın sessizliğine kadar her ayrıntıyı sizin rahatınız
          için düşündük.
        </p>
        <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center rounded-full border border-black/15 bg-white/70 px-3 py-1 text-[12px] text-black/70">Ortopedik Yatak</span>
        <span className="inline-flex items-center rounded-full border border-black/15 bg-white/70 px-3 py-1 text-[12px] text-black/70">Yastık Menüsü</span>
        <span className="inline-flex items-center rounded-full border border-black/15 bg-white/70 px-3 py-1 text-[12px] text-black/70">Karartma Perdesi</span>
      </div>
       
      </div>

      <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-black/10 shadow-[0_25px_70px_rgba(0,0,0,.10)]">
        <Image
          src="/about/comfort.jpg"
          alt="Konforlu uyku"
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_100%_0%,rgba(0,0,0,.06)_0%,transparent_55%)]" />
      </div>
    </div>
  </div>
</section>

      {/* Aktiviteler – BEYAZ zemin, genişletilmiş liste */}
      <section className="bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p className="text-[11px] tracking-[0.28em] text-black/50">DISCOVER</p>
          <h2
            className="mt-2 text-[34px] md:text-[56px] leading-[1.04]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Çınarcık’ta Yapabilecekleriniz
          </h2>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Erikli Şelalesi", img: "/activities/erikli.jpg", text: "Doğa yürüyüşü, serin su ve harika fotoğraf noktaları." },
              { title: "Delmece Yaylası", img: "/activities/delmece.jpg", text: "Yayla havası, piknik alanları ve gölet çevresi." },
              { title: "Mavish Beach", img: "/activities/mavish.jpg", text: "Huzurlu plaj, berrak deniz ve gün batımı." },
              { title: "Beach Club Kio", img: "/activities/kio.jpg", text: "Gün boyu müzik, şezlong ve kokteyl keyfi." },
              { title: "Teşvikiye Rotaları", img: "/activities/tesvikiye.jpg", text: "Orman içinde yürüyüş ve bisiklet parkurları." },
              { title: "Sahil Bisiklet", img: "/activities/bike.jpg", text: "Sahil boyunca bisiklet turu ve kafelerde mola." },
            ].map((a) => (
              <article
                key={a.title}
                className="rounded-2xl overflow-hidden border border-black/10 bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,.08)] transition-shadow"
              >
                <div className="relative w-full aspect-[16/11]">
                  <Image src={a.img} alt={a.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h4 className="text-[20px]" style={{ fontFamily: "var(--font-playfair)" }}>
                    {a.title}
                  </h4>
                  <p className="mt-2 text-[15px] text-black/70">{a.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MINI GALERİ – BEJ (isteğe göre kalabilir) */}
      

      {/* CTA – etkili, büyük tipografi */}
      <section className="bg-[#0f0f0f] text-white">
        <div className="container px-4 sm:px-6 lg:px-8 py-18 md:py-24 text-center">
          <h3
            className="text-[34px] sm:text-[44px] md:text-[64px] leading-[1.04]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Hazır mısınız?
          </h3>
          <p className="mt-3 text-[15px] md:text-[17px] text-white/85">
            Odalarımızı keşfedin ya da Lion Teras’ta yerinizi ayırtın.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/rooms"
              className="inline-flex h-11 md:h-12 items-center justify-center px-8 rounded-full border border-white/60 text-[12px] tracking-[0.18em] hover:bg-white hover:text-black transition"
            >
              ODALARI GÖR
            </Link>
            <Link
              href="/lion-teras"
              className="inline-flex h-11 md:h-12 items-center justify-center px-8 rounded-full border border-white/40 text-[12px] tracking-[0.18em] hover:bg-white/90 hover:text-black transition"
            >
              LION TERAS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}