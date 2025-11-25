'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animación de entrada: Espera 1.5s (tiempo de la cortina) y luego revela el texto
    const tl = gsap.timeline({ delay: 1.5 });
    
    tl.fromTo(textRef.current, 
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    );
  }, []);

  return (
    <section id="inicio" className="relative w-full h-screen flex items-center overflow-hidden">
      
      {/* 1. FONDO (Imagen + Gradiente) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop"
          alt="Luxury Outdoor Living"
          fill
          className="object-cover"
          priority
        />
        {/* Gradiente de "Estudio": Crema sólido a la izquierda, transparente a la derecha */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f9f3ec] via-[#f9f3ec]/70 to-transparent sm:via-[#f9f3ec]/30"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* 2. CONTENIDO */}
      <div ref={containerRef} className="container-safe relative z-10 h-full flex flex-col justify-center">
        <div ref={textRef} className="max-w-4xl opacity-0"> {/* Inicia invisible */}
          
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#b07357]"></div>
            <span className="text-[#b07357] font-bold tracking-[0.3em] text-xs uppercase">
              Arquitectura Exterior
            </span>
          </div>

          <h1 className="text-[#1e1713] font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-8">
            Diseño que <br/>
            <span className="italic text-[#b07357] font-light">Trasciende.</span>
          </h1>

          <p className="text-[#1e1713] text-lg md:text-xl max-w-xl mb-12 font-light leading-relaxed">
            Creamos espacios donde la arquitectura se funde con la naturaleza. 
            Especialistas en terrazas de alto valor y confort absoluto.
          </p>

          <div className="flex flex-wrap gap-6">
            <a href="#portafolio" className="bg-[#b07357] text-white px-10 py-4 text-xs font-bold tracking-[0.25em] hover:bg-[#1e1713] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              PORTAFOLIO
            </a>
            <a href="#contacto" className="group flex items-center gap-3 px-6 py-4 text-xs font-bold tracking-[0.25em] text-[#1e1713] hover:text-[#b07357] transition-colors">
              AGENDAR VISITA
              <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}