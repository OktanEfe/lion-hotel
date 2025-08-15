"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

/* -------------------- FAQ DATA -------------------- */
const FAQS = [
  {
    q: "Check‑in & check‑out saatleri nedir?",
    a: "Check‑in 14:00, check‑out 12:00’dır. Müsaitliğe bağlı olarak erken giriş/geç çıkış sağlanabilir.",
  },
  {
    q: "Otopark var mı?",
    a: "Evet, misafirlerimize ücretsiz otopark sunuyoruz. Vale hizmeti talep üzerine sağlanır.",
  },
  {
    q: "Evcil hayvan kabul ediyor musunuz?",
    a: "Küçük ırk evcil hayvanlara uygundur. Rezervasyon sırasında bilgi vermenizi rica ederiz.",
  },
  {
    q: "Havalimanı transferi ayarlanır mı?",
    a: "Ücretli özel transfer sağlıyoruz. Uçuş bilgilerinizi iletmeniz yeterlidir.",
  },
];

/* WhatsApp ayarları — numarayı kendi numaranızla değiştirin (başında + olmadan, ülke koduyla) */
const WHATSAPP_NUMBER = "905555555555"; // örnek: 90 + telefon
const WHATSAPP_TEXT =
  "Merhaba, Lion Hotel ile iletişime geçmek istiyorum. Müsaitlik ve fiyat bilgisi alabilir miyim?";
const WHATSAPP_LINK_BASE = "https://wa.me";

/* -------------------- PAGE -------------------- */
export default function ContactPage() {
  const waLink = useMemo(
    () => `${WHATSAPP_LINK_BASE}/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`,
    []
  );

  return (
    <main className="text-neutral-900">
      {/* ========== HERO: Tam ekran arka plan fotoğrafı ========== */}
      <section
        className="relative h-[68vh] md:h-[82vh] min-h-[560px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/contact/hero.jpg')" }} // /public/contact/hero.jpg ekleyin
        aria-label="İletişim"
      >
        {/* karartma */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.40)_0%,rgba(0,0,0,.30)_45%,rgba(0,0,0,.45)_100%)]" />

        <div className="absolute inset-0">
          <div className="container h-full flex flex-col justify-end pb-10 md:pb-14">
            <div className="max-w-3xl text-white">
              <p className="text-[11px] tracking-[0.28em] text-white/80">CONTACT</p>
              <h1
                className="mt-2 text-[40px] md:text-[78px] leading-[1.02]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Bize Ulaşın
              </h1>
              <p className="mt-3 md:mt-4 text-white/85 max-w-2xl">
                Rezervasyon, etkinlik ve genel sorularınız için ekibimiz 7/24 yanınızda.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 md:h-12 items-center justify-center px-6 rounded-full bg-[#25D366] text-black text-[12px] tracking-[0.18em] hover:brightness-95 transition"
                >
                  WhatsApp’tan Yazın
                </a>
                <a
                  href="tel:+90XXXXXXXXXX"
                  className="inline-flex h-11 md:h-12 items-center justify-center px-6 rounded-full border border-white/70 text-white text-[12px] tracking-[0.18em] hover:bg-white hover:text-black transition"
                >
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BLOK 1: Sol görsel / Sağ içerik (BG: BEYAZ) ========== */}
      <section className="bg-white">
        <div className="container pt-12 md:pt-20 pb-12 md:pb-16">
          <div
            className="grid gap-8 md:gap-12"
            style={{ gridTemplateColumns: "minmax(0,1.05fr) minmax(0,.95fr)" }}
          >
            {/* Sol geniş görsel */}
            <div className="relative w-full aspect-[16/9] md:aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-black/10">
              <Image
                src="/contact/intro.jpg"
                alt="Lobi"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Sağ başlık + info */}
            <div className="flex flex-col">
              <h2
                className="text-[34px] md:text-[56px] leading-[1.04]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                İletişim Bilgileri
              </h2>

              <p className="mt-5 text-black/75 max-w-prose">
                Sorularınızı memnuniyetle yanıtlarız ve ihtiyaç duyduğunuz her
                konuda size yardımcı oluruz.
              </p>

              <div className="mt-8 space-y-4 text-[15px]">
                <div>
                  <div className="text-black/60">Telefon</div>
                  <div className="mt-1">+90 (___) ___ __ __</div>
                  <div>+90 (___) ___ __ __</div>
                </div>
                <div>
                  <div className="text-black/60">E‑posta</div>
                  <div className="mt-1">info@lionhotel.com</div>
                </div>
                <div>
                  <div className="text-black/60">Adres</div>
                  <div className="mt-1">
                    Lion Hotel · Örnek Cad. No:12
                    <br />
                    Merkez / Şehir, Türkiye
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BLOK 3: SSS – (BG: BEJ) ========== */}
      <section className="bg-[#efdfcf]">
        <div className="container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            {/* Sol kolon – çizgili akordeon */}
            <div>
              <h3
                className="text-[36px] md:text-[64px] leading-[1.04]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Sıkça Sorulan
                <br />
                Sorular
              </h3>

              <div className="mt-8 md:mt-10">
                <LinedAccordion items={FAQS} />
              </div>
            </div>

            {/* Sağ geniş görsel */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-black/10">
              <Image
                src="/contact/faq-side.jpg"
                alt="Lounge"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Alt ince ayraç */}
          <div className="mt-16 md:mt-20 h-px bg-black/20 w-[92%] mx-auto" />
        </div>
      </section>

      {/* ========== BLOK 4: Rezervasyon Linkleri (BG: BEYAZ) ========== */}
      <section className="bg-white">
        <div className="container py-16 md:py-24">
          <div className="text-center">
            <p className="text-[11px] tracking-[0.28em] text-black/50">REZERVASYON</p>
            <h3
              className="mt-2 text-[28px] md:text-[42px] leading-[1.06]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Dilediğiniz Platformdan Rezervasyon Yapın
            </h3>
            <p className="mt-3 text-black/70 max-w-2xl mx-auto">
              Güvenilir iş ortaklarımız üzerinden hızlıca yerinizi ayırtın.
            </p>
          </div>

          {/* 6 link – logolu/şerit butonlar */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {RESERVATION_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-black/10 bg-white px-5 py-4 hover:shadow-[0_10px_30px_rgba(0,0,0,.08)] transition"
                title={item.label}
              >
                <div className="flex items-center gap-3">
                  {/* Yer tutucu logo kutusu – istersen gerçek svg/ikonla değiştir */}
                  <span className="grid h-9 w-9 place-items-center rounded-md bg-[#efdfcf] text-[11px] text-black/70">
                    LOGO
                  </span>
                  <span className="text-[15px] text-black/85">{item.label}</span>
                </div>
                <span className="text-black/40 group-hover:text-black/70 transition">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sabit WhatsApp butonu (sağ‑alt) */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp'tan yazın"
        className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-[60] grid place-items-center h-12 w-12 rounded-full bg-[#25D366] shadow-lg hover:brightness-95 transition"
        title="WhatsApp"
      >
        {/* basit whatsapp simgesi */}
        <svg viewBox="0 0 24 24" width="22" height="22" className="fill-black">
          <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15.1L2 22l4.98-1.5A9.96 9.96 0 1 0 12.04 2Zm0 1.8a8.16 8.16 0 0 1 6.97 12.46l-.22.35a8.16 8.16 0 0 1-11.2 2.13l-.3-.2-2.97.9.9-2.95-.2-.3A8.16 8.16 0 0 1 12.04 3.8Zm-3.2 4.3c-.15 0-.31.01-.45.06-.34.12-.85.4-.85 1.08 0 .63.43 1.48 1.22 2.46.72.88 2.18 2.34 4.65 3.24.65.23 1.16.36 1.58.36.71 0 1.17-.32 1.33-.94.16-.6.22-.93-.1-1.1-.27-.15-.61-.35-.95-.5-.27-.13-.59-.1-.8.17l-.2.26c-.2.27-.46.31-.73.2-.33-.13-1.24-.46-2.36-1.47-1.1-.95-1.48-1.7-1.64-2-.17-.28-.04-.54.16-.73l.23-.24c.2-.2.22-.5.12-.76-.13-.35-.58-1.12-.8-1.34-.2-.19-.44-.3-.73-.3Z" />
        </svg>
      </a>
    </main>
  );
}

/* -------------------- Çizgili Akordeon -------------------- */
function LinedAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-black/25">
      {items.map((it, i) => {
        const active = open === i;
        return (
          <div key={it.q} className="border-b border-black/25">
            <button
              className="w-full py-5 md:py-6 flex items-center justify-between text-left"
              onClick={() => setOpen(active ? null : i)}
              aria-expanded={active}
            >
              <span className="text-[16px] md:text-[18px] font-medium text-black/90">
                {it.q}
              </span>
              <span
                className={[
                  "inline-grid h-6 w-6 place-items-center rounded-full border border-black/30 text-[12px] transition-transform",
                  active ? "rotate-45" : "",
                ].join(" ")}
                aria-hidden
              >
                +
              </span>
            </button>

            {/* içerik */}
            <div
              className={[
                "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out",
                active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              ].join(" ")}
            >
              <div className="min-h-0">
                <p className="pb-5 md:pb-6 text-[14px] md:text-[15px] text-black/75">
                  {it.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* -------------------- Rezervasyon Linkleri -------------------- */
const RESERVATION_LINKS = [
  { label: "Booking.com", href: "https://www.booking.com/" },
  { label: "Trivago", href: "https://www.trivago.com/" },
  { label: "Otelz", href: "https://www.otelz.com/" },
  { label: "Agoda", href: "https://www.agoda.com/" },
  { label: "Hotels.com", href: "https://tr.hotels.com/" },
  { label: "Expedia", href: "https://www.expedia.com/" },
];