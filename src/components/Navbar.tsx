"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const LOGO_SRC = "/logo.svg"; // logonu /public içine koy. Örn: /public/logo.svg

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  /** navbar arkaplanını scroll'a göre koyulaştır */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** menü açıkken body scroll kilidi */
  useEffect(() => {
    if (open) {
      const y = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${y}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      return;
    }
    const top = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    if (top) window.scrollTo(0, -parseInt(top));
  }, [open]);

  /** ESC ile kapat */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  const linkCls = (href: string) =>
    [
      // koyu & görünür buton
      "inline-flex items-center justify-center rounded-full border px-4 py-2 text-[13px] font-medium tracking-wide",
      "transition-colors",
      "border-white/30 text-white",
      "bg-white/10 hover:bg-white/20",
      isActive(href) && "bg-white/25",
    ]
      .filter(Boolean)
      .join(" ");

  return (
    <nav
      role="navigation"
      aria-label="Primary"
      className={[
        "fixed top-0 left-0 w-full z-50 transition-colors",
        scrolled ? "bg-black/70 backdrop-blur-md" : "bg-black/30 backdrop-blur-[2px]",
      ].join(" ")}
    >
      {/* DESKTOP */}
      <div className="container hidden h-16 items-center justify-between text-white md:flex">
        {/* Sol linkler */}
        <div className="flex items-center gap-3">
          <Link href="/about" className={linkCls("/about")}>
            Hakkımızda
          </Link>
          <Link href="/rooms" className={linkCls("/rooms")}>
            Odalar
          </Link>
        </div>

        {/* Orta marka (logo + Lion Hotel) */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-current={isActive("/") ? "page" : undefined}
        >
          {/* logo */}
          <span className="relative block h-7 w-7 overflow-hidden rounded-full ring-1 ring-white/30">
            <Image
              src={LOGO_SRC}
              alt="Lion Hotel Logo"
              fill
              className="object-cover"
              priority
            />
          </span>
          <span
            className="text-[18px] tracking-[0.18em] group-hover:opacity-90"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            LION <span className="font-semibold">HOTEL</span>
          </span>
        </Link>

        {/* Sağ linkler */}
        <div className="flex items-center gap-3">
          <Link href="/lion-teras" className={linkCls("/lion-teras")}>
            Merdiven Lounge
          </Link>
          <Link href="/contact" className={linkCls("/contact")}>
            İletişim
          </Link>
        </div>
      </div>

      {/* MOBILE – üst bar */}
      <div className="container flex h-16 items-center justify-between text-white md:hidden">
        {/* Hamburger */}
        <button
          aria-label="Menüyü Aç/Kapat"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-md border border-white/20 bg-white/10 active:scale-[0.98]"
        >
          <div className="relative h-4 w-6">
            <span
              className={[
                "absolute left-0 top-0 block h-0.5 w-6 bg-white transition",
                open && "translate-y-2 rotate-45",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-2 block h-0.5 w-6 bg-white transition",
                open && "opacity-0",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-4 block h-0.5 w-6 bg-white transition",
                open && "-translate-y-2 -rotate-45",
              ].join(" ")}
            />
          </div>
        </button>

        {/* Orta marka */}
        <Link
          href="/"
          aria-current={isActive("/") ? "page" : undefined}
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="relative block h-7 w-7 overflow-hidden rounded-full ring-1 ring-white/30">
            <Image src={LOGO_SRC} alt="Lion Hotel Logo" fill className="object-cover" />
          </span>
          <span
            className="text-[15px] tracking-[0.12em]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            LION HOTEL
          </span>
        </Link>

        {/* boşluk denge */}
        <span className="h-11 w-11" />
      </div>

      {/* MOBILE – Sheet */}
      <div
        className={[
          "md:hidden fixed inset-0 z-40 transition",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        {/* backdrop */}
        <div
          className={[
            "absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onClick={() => setOpen(false)}
        />

        {/* panel */}
        <div
          className={[
            "absolute left-0 right-0 top-0 bg-neutral-900 text-white shadow-2xl",
            "transition-transform",
            open ? "translate-y-0" : "-translate-y-full",
          ].join(" ")}
        >
          {/* kapat */}
          <button
            aria-label="Menüyü Kapat"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-md border border-white/20 bg-white/10"
            onClick={() => setOpen(false)}
          >
            <span className="relative block h-4 w-4">
              <span className="absolute left-0 top-2 block h-0.5 w-4 -rotate-45 bg-white" />
              <span className="absolute left-0 top-2 block h-0.5 w-4 rotate-45 bg-white" />
            </span>
          </button>

          {/* yatay & büyük pill linkler */}
          <div className="container pt-20 pb-10">
          <div className="grid grid-cols-2 gap-4 px-6">
  {[
    { href: "/about", label: "Hakkımızda" },
    { href: "/rooms", label: "Odalar" },
    { href: "/lion-teras", label: "Merdiven Lounge" },
    { href: "/contact", label: "İletişim" },
  ].map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className="bg-white text-black text-lg font-semibold py-4 px-6 rounded-full flex items-center justify-center shadow hover:scale-105 transition-transform"
      onClick={() => setOpen(false)}
    >
      {item.label}
    </Link>
  ))}
</div>

            {/* alt küçük marka */}
            <div className="mt-10 flex items-center justify-center gap-2 opacity-80">
              <span className="relative block h-6 w-6 overflow-hidden rounded-full ring-1 ring-white/30">
                <Image src={LOGO_SRC} alt="Lion Hotel Logo" fill className="object-cover" />
              </span>
              <span
                className="text-sm tracking-[0.14em]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                LION HOTEL
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}