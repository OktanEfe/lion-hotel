// src/components/ReserveModal.tsx
"use client";

import Image from "next/image";

export default function ReserveModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  const sites = [
    { name: "Booking.com", logo: "/booking.png", href: "#" },
    { name: "Hotels.com",  logo: "/hotels.png",  href: "#" },
    { name: "Expedia",     logo: "/expedia.png", href: "#" },
    { name: "Trip.com",    logo: "/tripcom.png", href: "#" },
    { name: "Etstur",      logo: "/etstur.png",  href: "#" },
    { name: "Otelz",       logo: "/otelz.png",   href: "#" },
  ];

  return (
    <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm grid place-items-center p-6" onClick={onClose}>
      <div className="w-full max-w-xl rounded-2xl bg-white p-6 md:p-8" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-[26px]" style={{ fontFamily: "var(--font-playfair)" }}>Rezervasyon</h3>
        <p className="mt-2 text-black/70 text-sm">Aşağıdaki platformlardan birini seçin:</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {sites.map((r) => (
            <a key={r.name} href={r.href} className="rounded-xl border border-black/10 hover:border-black/30 transition p-4 grid place-items-center">
              <Image src={r.logo} alt={r.name} width={120} height={36} className="h-7 w-auto object-contain" />
            </a>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <button onClick={onClose} className="inline-flex h-10 items-center justify-center px-5 rounded-md border border-black/20 text-[12px] tracking-[0.12em] hover:bg-black hover:text-white transition">
            KAPAT
          </button>
        </div>
      </div>
    </div>
  );
}