// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#efdfcf] text-black">
      {/* üst ince çizgi */}
      <div className="border-t border-black/40" />

      <div className="container px-6 lg:px-12 py-12 grid gap-12 md:grid-cols-3 lg:grid-cols-3">
        {/* İletişim */}
        <div>
          <h3
            className="text-3xl lg:text-4xl leading-none"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            İletişim
          </h3>
          <address className="not-italic mt-5 space-y-4 text-base lg:text-lg text-black/80">
            <p>
              Lion Hotel · Örnek Cad. No:12
              <br />
              Merkez / Şehir, Türkiye
            </p>
            <p>
              Tel:{" "}
              <a className="hover:underline" href="tel:+90XXXXXXXXXX">
                +90 (___) ___ __ __
              </a>
            </p>
            <p>
              <a className="hover:underline" href="mailto:info@lionhotel.com">
                info@lionhotel.com
              </a>
            </p>
          </address>
        </div>

        {/* Bağlantılar */}
        <div>
          <h4
            className="text-2xl lg:text-3xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Bağlantılar
          </h4>
          <ul className="mt-5 space-y-3 text-base lg:text-lg text-black/80">
            <li>
              <Link className="hover:underline" href="/about">
                Otel Hakkında
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/rooms">
                Odalarımız
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/lion-teras">
                Lion Teras
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/contact">
                İletişim
              </Link>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yol Tarifi
              </a>
            </li>
          </ul>
        </div>

        {/* Rezervasyonlar */}
        <div>
          <h4
            className="text-2xl lg:text-3xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Rezervasyonlar
          </h4>
          <ul className="mt-5 space-y-3 text-base lg:text-lg text-black/80">
            <li>
              <a
                className="hover:underline"
                href="https://www.booking.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Booking.com
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://www.trivago.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Trivago
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://www.otelz.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Otelz
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://www.agoda.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agoda
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://tr.hotels.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hotels.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* alt logo ve kalın siyah şerit */}
      <div className="pb-8">
        <div className="text-center pb-4 sm:pb-6">
          <div
            className="text-xl sm:text-2xl lg:text-3xl tracking-[0.15em]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Lion <span className="font-semibold">Otel</span>
          </div>
          <div className="text-sm lg:text-base text-black/70 -mt-1">
            Design Hotel
          </div>
        </div>
        <div className="h-[8px] sm:h-[10px] bg-black mx-4 lg:mx-12 rounded-sm" />
      </div>
    </footer>
  );
}