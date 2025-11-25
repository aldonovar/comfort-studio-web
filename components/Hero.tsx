'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Image from 'next/image';

export default function Hero() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="inicio"
      className="hero relative min-h-screen flex items-center pt-[120px] pb-[50px] overflow-hidden"
      ref={revealRef}
    >
      {/* 1. FONDO (Imagen + Gradiente) */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop"
          alt="Terraza de Lujo Comfort Studio"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradiente para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f1]/95 via-[#faf8f1]/80 to-transparent"></div>
      </div>

      {/* 2. CONTENIDO */}
      <div className="container-safe relative z-10 w-full px-[5%]">
        <div className="max-w-[700px]">

          <div className="text-[#b07357] font-bold tracking-[3px] mb-6 text-sm uppercase font-sans">
            ARQUITECTURA & OUTDOOR LIVING
          </div>

          <h1 className="text-[#1e1713] text-5xl md:text-7xl font-bold leading-[1.1] mb-6 font-sans">
            Espacios que <br />
            <span className="text-[#b07357] italic font-serif">elevan tu vida.</span>
          </h1>

          <p className="text-[#4a4a4a] text-lg leading-relaxed mb-10 max-w-[500px] font-medium font-sans">
            Transformamos azoteas en refugios de lujo. Diseño bioclimático,
            acabados premium y una ejecución impecable.
          </p>

          {/* BOTONES (Estilos Tailwind directos para asegurar visualización) */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#portafolio"
              className="bg-[#b07357] text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#1e1713] transition-colors duration-300 shadow-lg"
            >
              VER PROYECTOS
            </a>
            <a
              href="#contacto"
              className="bg-transparent border border-[#1e1713] text-[#1e1713] px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#1e1713]/5 transition-colors duration-300"
            >
              AGENDAR CITA
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}