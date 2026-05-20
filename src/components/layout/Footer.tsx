"use client";

import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/odalar", label: "Odalar" },
  { href: "/deneyim", label: "Deneyim" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-[#F7F5F0] font-sans selection:bg-[#6E1B1F] selection:text-white">
      <div className="border-t border-white/5" />
      
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-16 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.8fr_1fr] md:gap-8 lg:gap-20">
          
          {/* Sol: Manifesto Paneli */}
          <div className="flex flex-col space-y-6">
            <span 
              className="text-xl tracking-[0.25em] font-light uppercase text-[#FFFFFF]"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              LION <span className="font-normal italic text-[#6E6A63]">HOTEL</span>
            </span>
            <p className="max-w-xs text-[14px] font-light leading-[1.75] tracking-wide text-[#999999]">
              Çınarcık’ın büyüleyici sahil şeridinde, modern minimalizm ile harmanlanmış sakin bir sığınak ve incelikli bir yaşam alanı ritüeli.
            </p>
          </div>

          {/* Orta: Okunaklı Navigasyon */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">
              Navigasyon
            </h3>
            <ul className="space-y-3 text-[14px] font-light tracking-wide">
              {FOOTER_LINKS.map((item) => (
                <li key={item.href}>
                  <Link 
                    className="text-[#999999] transition-colors duration-400 hover:text-white inline-block py-0.5" 
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sağ: İletişim & Lokasyon */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">
              Adres & Rezervasyon
            </h3>
            <address className="space-y-5 text-[14px] font-light not-italic tracking-wide text-[#999999] leading-relaxed">
              <p className="hover:text-white transition-colors duration-400">
                Harmanlar Mahallesi, Vali Akı Caddesi No:20
                <br />
                Çınarcık / Yalova
              </p>
              <div className="space-y-2 pt-4 border-t border-white/5 flex flex-col">
                <a className="transition-colors duration-400 hover:text-white inline-block py-0.5 font-medium text-white/80" href="tel:+905319713134">
                  +90 (531) 971 31 34
                </a>
                <a className="transition-colors duration-400 hover:text-white inline-block py-0.5" href="mailto:lionhotelcinarcik@gmail.com">
                  lionhotelcinarcik@gmail.com
                </a>
              </div>
            </address>
          </div>

        </div>

        {/* Alt Şerit Çizgisi */}
        <div className="mt-16 h-px bg-white/5 md:mt-24" />

        {/* Telif Hakları Alanı */}
        <div className="flex flex-col gap-4 pt-8 text-[11px] tracking-[0.2em] font-light text-[#6E6A63] sm:flex-row sm:items-center sm:justify-between">
          <span className="uppercase">© {new Date().getFullYear()} LION HOTEL. TÜM HAKLARI SAKLIDIR.</span>
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-6 bg-[#6E1B1F]/60" />
            <span className="text-[#6E6A63]/80 tracking-[0.25em]">SAKİN LÜKS BUTİK OTEL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
