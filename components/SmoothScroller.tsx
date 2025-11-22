'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroller() {
  useEffect(() => {
    // Configuración de Inercia (Más bajo = Más pesado/lujoso)
    const lenis = new Lenis({
      duration: 1.5, // Duración del deslizamiento (1.2 - 1.5 es ideal para lujo)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva de aceleración suave
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    // Sincronizar Lenis con GSAP (ScrollTrigger)
    // Esto es CRÍTICO para que tus animaciones de scroll funcionen perfectas con la inercia
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null; // Este componente no renderiza nada visual, solo lógica
}