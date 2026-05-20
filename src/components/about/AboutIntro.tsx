"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView, Variants } from "framer-motion";
import Reveal from "@/components/shared/Reveal";

export default function AboutIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  const isTextInView = useInView(textRef, { once: true, margin: "-10% 0px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yImage1 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], [40, -80]);
  const rotateCard = useTransform(scrollYProgress, [0, 1], [4, -4]);

  const titleText = "Sıradanlığı geride bırakın, sade dinginliği keşfedin.";
  const words = titleText.split(/\s+/);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
  };

  const wordVariants: Variants = {
    hidden: { y: "120%", rotate: 2, opacity: 0 },
    visible: {
      y: "0%",
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.85, ease: [0.215, 0.610, 0.355, 1] }
    }
  };

  return (
    <Reveal as="section" className="relative bg-[#F7F5F0] text-[#111111] py-28 md:py-48 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[20%] w-[700px] h-[700px] rounded-full bg-radial-gradient from-[#6E1B1F]/5 to-transparent blur-[130px]"
        />
      </div>

      <div ref={containerRef} className="container mx-auto px-6 sm:px-8 lg:px-16 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 gap-16 items-center md:grid-cols-[1.1fr_1fr] lg:gap-24">
          
          <div ref={textRef} className="max-w-xl space-y-8">
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-8 bg-[#6E1B1F]" />
              <p className="text-[10px] font-bold tracking-[0.45em] text-[#6E6A63] uppercase sm:text-xs">
                FELSEFEMİZ & RİTÜELİMİZ
              </p>
            </div>
            
            {/* Esnek ve Taşmaları Engellemek İçin Geliştirilmiş Başlık Alanı */}
            <motion.h2
              variants={containerVariants}
              initial="hidden"
              animate={isTextInView ? "visible" : "hidden"}
              className="text-[40px] font-light leading-[1.3] tracking-tight text-[#111111] sm:text-[50px] md:text-[58px] flex flex-wrap"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {words.map((word, i) => {
                const isSpecial = word.includes("sade") || word.includes("dinginliği");
                
                return (
                  // pb-4 ve pr-4 ile italik harflerin maske dışına taşma payı kilitlendi
                  <span key={i} className="inline-block overflow-hidden pb-4 pr-3 whitespace-nowrap">
                    <motion.span 
                      variants={wordVariants} 
                      className="inline-block origin-left will-change-transform"
                    >
                      {isSpecial ? (
                        // İtalik harflerin bitiş noktasını rahatlatmak için sağa minik ekstra bir boşluk (Padding)
                        <span className="italic text-[#6E6A63] font-normal pr-1 inline-block">
                          {word}
                        </span>
                      ) : (
                        word
                      )}
                    </motion.span>
                  </span>
                );
              })}
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isTextInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="pt-8 border-t border-[#111111]/5 space-y-6 text-[14px] font-light leading-[1.85] text-[#555555] md:text-[16px]"
            >
              <p>
                Zamanın hızla aktığı bir dünyada biz, anı yavaşlatmayı seçiyoruz. Lion Hotel, sadece bir konaklama alanı değil; ruhun dinlendiği, zihnin berraklaştığı rafine bir yaşam manifestosudur. Gösterişten uzak, lüksün en samimi ve saf halini mimari estetikle buluşturuyoruz.
              </p>
              <p className="text-[#111111] font-medium pl-6 border-l-[2px] border-[#6E1B1F] italic">
                Çınarcık’ın büyüleyici sahil dokusunda, her uyanışın yeni bir ritüele dönüştüğü, incelikli detaylarla örülü zamansız bir inzivaya davetlisiniz.
              </p>
            </motion.div>
          </div>

          <div className="relative w-full flex items-center justify-center">
            <motion.div 
              style={{ rotate: rotateCard }}
              className="relative w-full max-w-[420px] aspect-[3/4] rounded-[3.5rem]"
            >
              <motion.div 
                style={{ y: yImage1 }}
                className="absolute inset-0 rounded-[3.5rem] overflow-hidden bg-[#EAE7E0] shadow-[0_30px_60px_rgba(0,0,0,0.04)] border border-white/50 group"
              >
                <Image
                  src="/about/hotel/aboutintro.jpg"
                  alt="Lion Hotel zamansız mimari"
                  fill
                  className="object-cover scale-105 transition-transform duration-[2s] ease-out group-hover:scale-110 filter brightness-[0.98]"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/20 via-transparent to-transparent" />
              </motion.div>

              <motion.div 
                style={{ y: yImage2 }}
                className="absolute -bottom-12 -left-12 w-48 h-64 rounded-[2.5rem] overflow-hidden border-[8px] border-[#F7F5F0] shadow-[0_25px_55px_rgba(110,27,31,0.12)] bg-[#111111] hidden sm:block group/mini"
              >
                <Image
                  src="/about/hotel/aboutpreview.jpg"
                  alt="Lion Hotel detay estetiği"
                  fill
                  className="object-cover transition-transform duration-[1.5s] group-hover/mini:scale-105"
                  sizes="192px"
                />
              </motion.div>

              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-white/80 backdrop-blur-md border border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex items-center justify-center text-center p-2 select-none pointer-events-none hidden lg:flex"
              >
                <p className="text-[8px] font-bold tracking-[0.18em] text-[#6E1B1F] uppercase leading-tight font-sans">
                  SILENT · LUXURY · BOUTIQUE
                </p>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </Reveal>
  );
}
