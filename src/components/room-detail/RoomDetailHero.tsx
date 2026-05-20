"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Room } from "@/lib/rooms";
import Reveal from "@/components/shared/Reveal";

type RoomDetailHeroProps = {
  room: Room;
};

export default function RoomDetailHero({ room }: RoomDetailHeroProps) {
  const details = [room.specs.area, room.specs.bed, room.specs.view].filter(Boolean);

  return (
    <section className="relative w-full h-screen bg-[#111111] overflow-hidden flex items-center justify-center">
      
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={room.hero}
          alt={room.name}
          fill
          priority
          className="object-cover object-center scale-105 animate-[subtle-zoom_20s_infinite_ease-in-out]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/90 pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#F7F5F0] via-[#F7F5F0]/20 to-transparent opacity-100 z-20" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-16 relative z-30 h-full flex items-center justify-start max-w-7xl">
        <div className="max-w-5xl text-[#FFFFFF]">
          
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[#6E1B1F]" />
            <p className="text-[10px] font-bold tracking-[0.45em] text-white/80 uppercase sm:text-xs">
              ROOM COLLECTION
            </p>
          </div>

          <Reveal>
            <h1
              className="max-w-4xl text-[44px] sm:text-[64px] md:text-[88px] lg:text-[104px] font-light leading-[1.05] tracking-tight filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {room.name}
            </h1>
          </Reveal>

          <Reveal>
            <div className="mt-10 flex flex-wrap gap-4">
              {details.map((detail) => (
                <span
                  key={detail}
               
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-[11px]  tracking-[0.22em] text-[#111111] uppercase shadow-[0_10px_30px_rgba(0,0,0,0.3),0_0_25px_rgba(255,255,255,0.25)] transition-all duration-500 hover:bg-[#6E1B1F] hover:text-white hover:shadow-[0_15px_35px_rgba(110,27,31,0.4)] select-none cursor-default"
                >
                  {detail}
                </span>
              ))}
            </div>
          </Reveal>

        </div>
      </div>

      {/* Aşağı Kaydır Animasyonu */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3.5 select-none"
      >
        <span className="text-[10px] font-bold tracking-[0.45em] text-white/70 uppercase">
          KAYDIR
        </span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden rounded-full">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#6E1B1F]"
          />
        </div>
      </motion.div>

      <style jsx global>{`
        @keyframes subtle-zoom {
          0%, 100% { transform: scale(1.01); }
          50% { transform: scale(1.05); }
        }
      `}</style>

    </section>
  );
}