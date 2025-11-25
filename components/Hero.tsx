'use client';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Hero() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen flex items-center pt-[120px] pb-[50px] overflow-hidden"
    >
      {/* 1. FONDO INMERSIVO */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-0ef3c08c0632?q=80&w=2070&auto=format&fit=crop" // Imagen de arquitectura de lujo
          alt="Comfort Studio Terraza"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradiente de legibilidad (Cream fade from left) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f9f3ec] via-[#f9f3ec]/70 to-transparent md:via-[#f9f3ec]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#f9f3ec] via-transparent to-transparent h-[20%] bottom-0"></div>
      </div>

      {/* 2. CONTENIDO */}
      <div ref={revealRef} className="container-safe relative z-10 w-full px-[5%]">
        <div className="max-w-3xl flex flex-col justify-center h-full">

          {/* Etiqueta Superior */}
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[1px] w-12 bg-[#b07357]"></span>
            <span className="text-[#b07357] font-bold tracking-[0.25em] text-xs uppercase">
              Arquitectura Exterior
            </span>
          </div>

          {/* Título Gigante */}
          <h1 className="hero-title text-[#1e1713] font-sans font-bold mb-6">
            Diseño que <br />
            <span className="font-display italic font-normal text-[#b07357]">redefine tu hogar.</span>
          </h1>

          {/* Descripción */}
          <p className="text-[#4d3d34] text-lg leading-relaxed mb-10 max-w-[500px] font-light">
            Especialistas en techos sol y sombra, zonas de parrilla y espacios bioclimáticos.
            Llevamos la sofisticación del interior al aire libre.
          </p>

          {/* Botones (Container Flex Seguro) */}
          <div className="flex flex-wrap gap-4 items-center">
            <a href="#portafolio" className="btn-primary">
              Ver Portafolio
            </a>
            <a href="#contacto" className="btn-outline">
              Agendar Visita
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}