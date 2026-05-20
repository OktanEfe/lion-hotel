"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/odalar", label: "Odalar" },
  { href: "/deneyim", label: "Deneyim" },
  { href: "/iletisim", label: "İletişim" },
];

function LionLogo({ scrolled }: { scrolled: boolean }) {
  return (
    <div
      className={[
        "relative h-[42px] w-8 transition duration-300 sm:h-12 sm:w-9",
        scrolled ? "" : "drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]",
      ].join(" ")}
    >
      <Image
        src="/logo/logo.png"
        alt="Lion Hotel Logo"
        fill
        priority
        className={["object-contain transition duration-300", scrolled ? "" : "brightness-0 invert"].join(" ")}
        sizes="48px"
      />
    </div>
  );
}
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobil Scroll Kilitleme - Performans Dostu Modern Yaklaşım
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (href: string) => {
    const activeColor = scrolled ? "text-[#111111]" : "text-[#FFFFFF]";
    const inactiveColor = scrolled 
      ? "text-[#6E6A63] hover:text-[#111111]" 
      : "text-[#FFFFFF]/70 hover:text-[#FFFFFF]";

    return [
      "relative inline-flex items-center text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors duration-500 py-1",
      isActive(href) ? activeColor : inactiveColor,
      "after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-[#6E1B1F] after:transition-transform after:duration-500",
      isActive(href) ? "after:scale-x-100" : "hover:after:scale-x-100",
    ].join(" ");
  };

  return (
    <nav
      role="navigation"
      aria-label="Ana navigasyon"
      className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 py-4 transition-all duration-500 md:px-8"
    >
      <div
        className={[
          "mx-auto flex h-14 w-full max-w-6xl items-center justify-between rounded-full border px-6 transition-all duration-500 md:px-10",
          scrolled
            ? "border-[#111111]/5 bg-[#F7F5F0]/90 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
            : "border-white/10 bg-black/10 backdrop-blur-sm",
        ].join(" ")}
      >
        {/* Güzelleştirilen Logo Alanı */}
        <Link 
          href="/" 
          aria-label="Lion Hotel ana sayfa" 
          className={scrolled ? "text-[#111111]" : "text-[#FFFFFF]"}
        >
          <LionLogo scrolled={scrolled} />
        </Link>

        {/* Masaüstü Navigasyon */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClass(item.href)}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobil Menü Tetikleyici Buton */}
        <button
          aria-label="Menüyü aç veya kapat"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full bg-transparent lg:hidden focus:outline-none"
        >
          <span
            className={[
              "h-[1px] w-5 transition-all duration-500 ease-out",
              open ? "translate-y-1 rotate-45 bg-[#111111]" : scrolled ? "bg-[#111111]" : "bg-[#FFFFFF]",
            ].join(" ")}
          />
          <span
            className={[
              "h-[1px] w-5 transition-all duration-500 ease-out",
              open ? "-translate-y-1 -rotate-45 bg-[#111111]" : scrolled ? "bg-[#111111]" : "bg-[#FFFFFF]",
            ].join(" ")}
          />
        </button>
      </div>

      {/* Mobil Tam Ekran Menü Perdesi */}
      <div
        className={[
          "fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-in-out",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div
          className={[
            "absolute inset-y-0 right-0 w-full max-w-[320px] bg-[#F7F5F0] px-10 pt-32 pb-12 shadow-2xl transition-transform duration-500 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "text-[15px] font-medium tracking-[0.18em] uppercase transition-colors duration-300 py-2 border-b border-[#111111]/5",
                  isActive(item.href) ? "text-[#6E1B1F] font-bold" : "text-[#6E6A63] hover:text-[#111111]",
                ].join(" ")}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
