import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import RoomGallery from "@/components/room-detail/RoomGallery";

type RoomReservationCTAProps = {
  gallery: string[];
};

export default function RoomReservationCTA({ gallery }: RoomReservationCTAProps) {
  return (
    <>
      {gallery.length > 0 ? (
        <Reveal as="section" className="experience-reveal bg-white py-20 md:py-28">
          <div className="container">
            <div className="mb-12 grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#6E1B1F]">
                  GALLERY
                </p>
                <h2
                  className="mt-5 text-[38px] font-light leading-[1.04] tracking-normal text-[#111111] sm:text-[52px]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Oda Galerisi
                </h2>
              </div>
              <p className="text-[15px] font-light leading-8 text-[#666666] md:col-span-4 md:col-start-9">
                Fotoğraflar, oda hissini kalabalıklaştırmadan gösterecek şekilde altı karelik sakin bir galeri düzeninde sunulur.
              </p>
            </div>

            <RoomGallery images={gallery} />
          </div>
        </Reveal>
      ) : null}

      <Reveal as="section" className="experience-reveal bg-[#111111] py-20 text-white md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-white/50">
              RESERVATION
            </p>
            <h2
              className="mt-5 text-[38px] font-light leading-[1.04] tracking-normal sm:text-[52px] md:text-[64px]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Konaklamanız için doğrudan iletişime geçin.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[15px] font-light leading-8 text-white/68">
              Müsaitlik ve oda seçimi için ekrana yeni bir katman açmadan, doğrudan WhatsApp veya telefon üzerinden hızlıca ulaşabilirsiniz.
            </p>

            {/* Buton Alanı: rounded-full (tam oval) mimari ile güncellendi */}
            <div className="mx-auto mt-12 grid max-w-xl gap-4 sm:grid-cols-2">
              <Link
                href="https://wa.me/90XXXXXXXXXX"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white bg-white px-8 py-3.5 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-[#111111] transition duration-300 ease-out hover:bg-transparent hover:text-white"
              >
                WhatsApp ile İletişime Geç
              </Link>
              <Link
                href="tel:+90XXXXXXXXXX"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-white transition duration-300 ease-out hover:border-white hover:bg-white hover:text-[#111111]"
              >
                Telefonla Ara
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}
