'use client';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Hero() {
  const revealRef = useScrollReveal();

  return (
    <section id="inicio" className="relative w-full h-screen flex items-center overflow-hidden pt-[100px]">
      {/* 1. FONDO */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop"
          alt="Comfort Studio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f9f3ec] via-[#f9f3ec]/60 to-transparent"></div>
      </div>

      {/* 2. CONTENIDO */}
      <div ref={revealRef} className="container-safe relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-4xl">
          <span className="text-[#b07357] font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
            Arquitectura Exterior
          </span>
          
          <h1 className="text-[#1e1713] font-serif text-6xl md:text-8xl leading-[0.95] mb-8">
            Diseño que <br/>
            <span className="italic text-[#b07357]">Transforma.</span>
          </h1>
          
          <p className="text-[#1e1713]/80 text-lg max-w-xl mb-10 font-light leading-relaxed">
            Creamos espacios de alto valor donde la naturaleza y la arquitectura convergen.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#portafolio" className="bg-[#b07357] text-white px-10 py-4 text-xs font-bold tracking-[0.2em] hover:bg-[#1e1713] transition-colors">
              PORTAFOLIO
            </a>
            <a href="#contacto" className="border border-[#1e1713] text-[#1e1713] px-10 py-4 text-xs font-bold tracking-[0.2em] hover:bg-[#1e1713] hover:text-white transition-colors">
              CONTACTO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}