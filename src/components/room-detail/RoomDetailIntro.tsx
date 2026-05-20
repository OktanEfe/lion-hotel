// import Image from "next/image";
// import type { Room } from "@/lib/rooms";
// import Reveal from "@/components/shared/Reveal";

// type RoomDetailIntroProps = {
//   room: Room;
// };

// export default function RoomDetailIntro({ room }: RoomDetailIntroProps) {
//   return (
//     <Reveal as="section" className="experience-reveal bg-white py-20 text-[#111111] md:py-28">
//       <div className="container">
//         <div className="grid gap-12 md:grid-cols-12 md:items-center">
//           <div className="md:col-span-5">
//             <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#6E1B1F]">
//               ROOM STORY
//             </p>
//             <h2
//               className="mt-5 text-[38px] font-light leading-[1.04] tracking-normal sm:text-[52px] md:text-[64px]"
//               style={{ fontFamily: "var(--font-playfair)" }}
//             >
//               Dengeli, sakin ve dokusu belirgin.
//             </h2>
//             <p className="mt-7 text-[15px] font-light leading-8 text-[#666666]">
//               {room.split1.textRight}
//             </p>
//             <p className="mt-5 text-[15px] font-light leading-8 text-[#666666]">
//               {room.split2.textLeft}
//             </p>
//           </div>

//           <div className="md:col-span-6 md:col-start-7">
//             <div className="relative aspect-[4/5] overflow-hidden bg-[#F7F7F5] md:aspect-[5/6] lg:aspect-[4/3]">
//               <Image
//                 src={room.split1.imageLeft}
//                 alt={`${room.name} iç mekan atmosferi`}
//                 fill
//                 className="object-cover"
//                 sizes="(min-width: 768px) 50vw, 100vw"
//               />
//             </div>
//             <div className="mt-6 grid grid-cols-2 gap-6">
//               <div className="relative aspect-[4/3] overflow-hidden bg-[#F7F7F5]">
//                 <Image
//                   src={room.split2.imageRight}
//                   alt={`${room.name} oda detayı`}
//                   fill
//                   className="object-cover"
//                   sizes="(min-width: 768px) 24vw, 50vw"
//                 />
//               </div>
//               <div className="flex items-end border-t border-black/[.08] pt-6">
//                 <p className="text-[13px] font-light leading-7 text-[#666666]">
//                   Sessiz servis, temiz çizgiler ve gün boyunca rahat kalan bir oda ölçeği.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Reveal>
//   );
// }
