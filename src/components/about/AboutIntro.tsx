export default function AboutIntro() {
    return (
      <section className="bg-[#efdfcf]">
        <div className="container py-14 md:py-20 grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <h2
              className="text-[28px] md:text-[40px] leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Felsefemiz
            </h2>
            <p className="mt-4 text-sm md:text-base text-black/75">
              Günün sonunda iyi bir konaklamayı unutulmaz yapan şey; dingin bir oda,
              yumuşak bir ışık ve nezaketle kurulan iletişimdir. Biz de tasarımı
              –altın, siyah ve beyaz— paletinde sadeleştirip, hissi güçlendirdik.
            </p>
            <p className="mt-3 text-sm md:text-base text-black/75">
              Sabah ferah bir kahvaltı, akşam Lion Teras’ta canlı müzik ve imza
              kokteyller… Şehirdeki gününüz nasıl geçmiş olursa olsun, otele adım
              attığınız anda ritminiz yavaşlasın istiyoruz.
            </p>
          </div>
  
          <div>
            <h3
              className="text-[22px] md:text-[28px]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Konum & Erişim
            </h3>
            <ul className="mt-4 space-y-3 text-sm md:text-base text-black/75">
              <li>• Merkezi konum — yürüyerek restoranlar, müzeler ve sahil.</li>
              <li>• 7/24 resepsiyon ve hızlı check‑in.</li>
              <li>• Otopark desteği ve havaalanı transfer opsiyonu.</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }