"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";

export default function HomeAboutPreview() {
  return (
    <Reveal as="section" className="relative w-full bg-[#F7F5F0] text-[#111111] overflow-hidden py-24 md:py-36">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24">
          
          {/* Sol Kolon: Editoryal İçerik Alanı */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[1px] w-6 bg-[#6E1B1F]" />
              <p className="text-[10px] font-medium tracking-[0.35em] text-[#6E6A63] uppercase sm:text-xs">
                Sıcak Misafirperverlik & Konfor
              </p>
            </div>

            <h2
              className="text-[38px] font-light leading-[1.1] tracking-tight text-[#111111] sm:text-[48px] md:text-[56px]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Çınarcık’ın Kalbinde,<br />
              <span className="italic font-normal text-[#6E6A63]">Zarif Bir Sığınak.</span>
            </h2>
            
            <p className="mt-8 text-[14px] leading-[1.75] text-[#555555] font-light sm:text-[15px] max-w-xl">
              Lion Hotel, modern minimalizm ile sıcak Akdeniz ve Marmara esintilerini bir araya getiren rafine bir butik deneyim sunar. Çınarcık’ın en merkezi noktasında, şehir ritminin ve dinginliğin kesiştiği lokasyonda; her detayı incelikle düşünülmüş yaşam alanlarıyla sizi bekliyor.
            </p>

            {/* Rafine Değer Ögeleri (Micro-Features) */}
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#111111]/5 pt-8 max-w-lg">
              <div>
                <h4 className="text-[12px] font-medium tracking-wider uppercase text-[#111111]">Butik Hizmet Anlayışı</h4>
                <p className="text-[12px] text-[#6E6A63] font-light mt-1 leading-relaxed">Kişiselleştirilmiş, sıcak ve her an odaklı bir ağırlama deneyimi.</p>
              </div>
              <div>
                <h4 className="text-[12px] font-medium tracking-wider uppercase text-[#111111]">Dingin Atmosfer</h4>
                <p className="text-[12px] text-[#6E6A63] font-light mt-1 leading-relaxed">Merkeze birkaç adım, karmaşaya ise bir o kadar uzak sığınak.</p>
              </div>
            </div>
            
            <div className="mt-12">
              <Link
                href="/hakkimizda"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#111111] bg-[#111111] px-10 text-[11px] font-medium tracking-[0.2em] text-[#FFFFFF] uppercase transition-all duration-500 hover:bg-[#6E1B1F] hover:border-[#6E1B1F] shadow-sm"
              >
                OTELİ KEŞFET
              </Link>
            </div>
          </div>

          {/* Sağ Kolon: Premium Katmanlı Görsel Alanı */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center pb-14 md:pb-0">
            <div className="relative w-full max-w-[480px] lg:max-w-none aspect-[3/4] sm:aspect-[4/3] lg:aspect-[3/4] rounded-[3rem] overflow-hidden bg-[#FAF9F6] border border-[#111111]/5 shadow-[0_20px_50px_rgba(0,0,0,0.04)] group">
              <Image
                src="/about/hotel/aboutpreview.jpg"
                alt="Lion Hotel - Oda ve konfor alanları"
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              {/* Editoryal şık bir karartma katmanı (Sadece hover durumunda hafif derinlik hissi için) */}
              <div className="absolute inset-0 bg-[#111111]/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none" />
            </div>

            {/* Masaüstünde Mimari Dergi Havası Veren İkinci Küçük Katmanlı Görsel Kontrastı */}
            <div className="absolute -bottom-2 right-3 h-36 w-28 overflow-hidden rounded-[1.4rem] border-4 border-[#F7F5F0] bg-[#222222] shadow-[0_25px_50px_rgba(0,0,0,0.08)] sm:right-8 sm:h-44 sm:w-36 md:-bottom-10 md:-left-10 md:right-auto md:h-64 md:w-48 md:rounded-[2rem]">
              <Image
                src="/about/hotel/aboutintro.jpg"
                alt="Lion Hotel mimari detay"
                fill
                className="object-cover object-center opacity-90"
                sizes="192px"
              />
            </div>
          </div>

        </div>
      </div>
    </Reveal>
  );
}
