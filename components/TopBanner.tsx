'use client';

export default function TopBanner() {
  return (
    <div 
      id="top-banner"
      className="w-full bg-[#b07357] text-white text-[10px] md:text-xs font-semibold tracking-widest uppercase py-2.5 text-center relative z-[103]"
    >
      <div className="container-safe flex justify-center items-center gap-3">
        <span className="opacity-90">✨ Diseñamos tu Verano 2025</span>
        <span className="opacity-40 hidden sm:inline">|</span>
        <a href="#contacto" className="underline decoration-1 underline-offset-2 hover:opacity-80 transition-opacity">
          Agenda una visita técnica hoy
        </a>
      </div>
    </div>
  );
}