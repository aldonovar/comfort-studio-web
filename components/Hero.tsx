"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* IMAGEN DE FONDO */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1600585154340-0ef3c08c0632?q=80&w=2070&auto=format&fit=crop"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay oscuro para garantizar lectura del texto blanco */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* TEXTO IMPACTANTE */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl">
        <p className="text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-6 text-[#f5f2eb]/80">
          Arquitectura & Outdoor Living
        </p>
        <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl leading-[0.9] mb-8">
          Diseño que <br/> <span className="italic font-light">Trasciende.</span>
        </h1>
        <div className="flex justify-center gap-6 mt-10">
          <a href="#portafolio" className="bg-white text-black px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#b07357] hover:text-white transition-colors">
            Ver Proyectos
          </a>
        </div>
      </div>
    </section>
  );
}