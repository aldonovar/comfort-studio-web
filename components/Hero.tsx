'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Image from 'next/image';

export default function Hero() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-[100px] pb-10 overflow-hidden"
      ref={revealRef}
    >
      {/* 1. IMAGEN DE FONDO (Correctamente posicionada) */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop"
          alt="Terraza de Lujo Comfort Studio"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradiente suave para mejorar lectura del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f1]/90 via-[#faf8f1]/70 to-transparent"></div>
      </div>

      {/* 2. CONTENIDO */}
      <div className="container-safe w-full relative z-10">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <div className="text-[#b07357] font-bold tracking-[4px] mb-6 text-xs uppercase font-sans">
            ARQUITECTURA & OUTDOOR LIVING
          </div>

          {/* Título */}
          <h1 className="text-[#1e1713] text-5xl md:text-7xl font-bold leading-[1.1] mb-8 font-sans">
            Espacios que <br />
            <span className="text-[#b07357] italic font-serif">elevan tu vida.</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-[#4a4a4a] text-lg leading-relaxed mb-10 max-w-lg font-medium">
            Transformamos azoteas en refugios de lujo. Diseño bioclimático,
            acabados premium y una ejecución impecable.
          </p>

          {/* BOTONES (Arreglados) */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#portafolio" className="btn-primary">
              VER PROYECTOS
            </a>
            <a href="#contacto" className="btn-outline">
              AGENDAR CITA
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}