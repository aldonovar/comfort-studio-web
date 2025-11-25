'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    // Animación de entrada del texto (sube y aparece)
    gsap.fromTo(textRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 1.2 } // Delay para esperar a la cortina
    );
  }, []);

  return (
    <section id="inicio" className="relative w-full h-screen flex items-center overflow-hidden">

      {/* 1. FONDO (Imagen fija o Parallax) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop"
          alt="Luxury Terrace"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay Sutil para asegurar lectura */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* 2. CONTENIDO (Centrado y Elegante) */}
      <div className="container-safe relative z-10 w-full h-full flex flex-col justify-center">
        <div ref={textRef} className="max-w-4xl">

          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-10 bg-[#f9f3ec]"></div>
            <span className="text-[#f9f3ec] text-xs font-bold tracking-[0.3em] uppercase drop-shadow-md">
              Outdoor Living
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-serif text-[#f9f3ec] leading-[0.9] mb-8 drop-shadow-lg">
            Diseño que <br />
            <span className="italic font-light">Trasciende.</span>
          </h1>

          <p className="text-[#f9f3ec]/90 text-lg md:text-xl max-w-lg font-sans font-light leading-relaxed drop-shadow-md">
            Creamos espacios donde la arquitectura se funde con la naturaleza.
            Especialistas en terrazas de alto valor.
          </p>

        </div>
      </div>
    </section>
  );
}