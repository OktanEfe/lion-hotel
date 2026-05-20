"use client";

import Reveal from "@/components/shared/Reveal";

type TItem = { name: string; rating: number; text: string; location: string };

const DATA: TItem[] = [
  { 
    name: "Ayşe K.", 
    rating: 5, 
    text: "Odalar tertemiz, modern ve gerçekten çok konforluydu. Personelin yaklaşımı o kadar sıcak ki kendimizi evimizde hissettik. Terasta gün batımı keyfi muazzamdı.", 
    location: "İstanbul" 
  },
  { 
    name: "Mert A.", 
    rating: 4, 
    text: "Çınarcık'ın en rafine noktası. Konum harika; plaja ve merkeze çok yakın olmasına rağmen otelin sakin ve dingin atmosferi kesinlikle çok iyi korunmuş.", 
    location: "Bursa" 
  },
  { 
    name: "Selin D.", 
    rating: 4, 
    text: "Tasarım detayları ve temizlik standardı beklentimin çok üzerindeydi. Resepsiyon ekibi son derece ilgili. Fotoğraflardaki gibi şık bir ortam, tatil için ideal.", 
    location: "Ankara" 
  },
  { 
    name: "Eren Y.", 
    rating: 5, 
    text: "Hafta sonu kaçamağı için tercih ettik; odalar ferah, yataklar son derece konforlu. Gürültüden uzak, dingin bir uyku ve sabah taze ürünlerle zengin bir kahvaltı sundular.", 
    location: "Kocaeli" 
  },
  { 
    name: "Ezgi T.", 
    rating: 5, 
    text: "Butik otel sıcaklığını her detayda hissettik. Balkonlu odada manzara eşliğinde kahve keyfi çok hoştu. Detaylara gösterilen özen için teşekkür ederiz.", 
    location: "İzmir" 
  },
  { 
    name: "Burak S.", 
    rating: 5, 
    text: "Merkezi konumu sayesinde sahile and çevredeki mekanlara yürüyerek kolayca ulaştık. Hem konforlu hem de güven veren kurumsal bir yapısı var.", 
    location: "Eskişehir" 
  },
];

export default function HomeTestimonials() {
  return (
    <Reveal as="section" className="bg-[#F7F5F0] py-24 md:py-36 text-[#111111]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 max-w-7xl">
        
        {/* Editoryal Başlık Alanı */}
        <div className="mb-20 md:mb-28 flex flex-col items-start gap-4 border-b border-[#111111]/5 pb-12">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-6 bg-[#6E1B1F]" />
            <p className="text-[10px] font-medium tracking-[0.35em] text-[#6E6A63] uppercase sm:text-xs">
              MİSAFİRLERİMİZİN GÖZÜNDEN
            </p>
          </div>
          <h2
            className="text-[36px] font-light leading-[1.15] tracking-tight text-[#111111] sm:text-[48px] md:text-[56px]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Deneyimlerin <span className="italic font-normal text-[#6E6A63]">Yansımaları</span>
          </h2>
        </div>

        {/* Modern Akışkan Yorum Izgarası */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 items-start">
          {DATA.map((t, i) => (
            <div 
              key={`${t.name}-${i}`} 
              className="group relative flex flex-col justify-between h-full min-h-[250px] overflow-hidden rounded-[2rem] border border-[#111111]/5 bg-[#FFFFFF] p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.01)] transition-all duration-700 hover:shadow-[0_20px_50px_rgba(110,27,31,0.05)] hover:-translate-y-1"
            >
              {/* Arka Plan Dev Tırnak İkonu (Editoryal Dokunuş) */}
              <span 
                className="absolute right-6 top-4 pointer-events-none text-[120px] font-serif leading-none text-[#111111]/[0.02] select-none transition-colors duration-500 group-hover:text-[#6E1B1F]/[0.04]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                “
              </span>

              <div className="relative z-10">
                {/* ✦ Derecelendirme İkonları */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <span key={k} className="text-[10px] text-[#6E1B1F] tracking-widest transition-transform duration-500 group-hover:scale-110">✦</span>
                  ))}
                </div>
                
                {/* Yorum Metni */}
                <p className="text-[14px] font-light leading-[1.75] text-[#4A4A4A] transition-colors duration-500 group-hover:text-[#111111] md:text-[15px]">
                  “{t.text}”
                </p>
              </div>

              {/* Alt Bilgi - İsim ve Konum Kartuşu */}
              <div className="relative z-10 mt-8 mt-auto pt-5 border-t border-[#111111]/5 flex flex-col space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[13px] font-medium tracking-wide text-[#111111]">
                      {t.name}
                    </span>
                    <span className="text-[11px] font-sans font-light text-[#6E6A63] mt-0.5">
                      {t.location}
                    </span>
                  </div>
                  
                  {/* Sağ Alttaki Küçük Kimlik Detayı veya Çizgisel Dinamik */}
                  <span className="h-6 w-6 rounded-full bg-[#111111]/5 flex items-center justify-center text-[9px] font-medium text-[#6E6A63] transition-colors duration-500 group-hover:bg-[#6E1B1F] group-hover:text-[#FFFFFF]">
                    {t.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Hover Durumunda Alttan İnce Çıkan Premium Bordo Çizgi Etkisi */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#6E1B1F] transition-all duration-700 group-hover:w-full" />
            </div>
          ))}
        </div>

      </div>
    </Reveal>
  );
}