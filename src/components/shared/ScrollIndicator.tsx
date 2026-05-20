export default function ScrollIndicator() {
  return (
    <div className="pointer-events-none absolute bottom-8 left-1/2 z-40 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/65 md:flex">
      <span className="text-[10px] font-medium uppercase tracking-[0.28em]">Kaydır</span>
      <span className="relative h-10 w-px overflow-hidden bg-white/20">
        <span className="absolute left-0 top-0 h-4 w-px animate-[scroll-line_1.8s_ease-in-out_infinite] bg-white/75" />
      </span>
    </div>
  );
}
