'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroller() {
  useEffect(() => {
    // Instalamos Lenis
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    // CORRECCIÓN CLAVE: Quitamos la verificación '.core' que fallaba el TypeCheck.
    // Dejamos la llamada simple, que es segura y funcional.
    if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }
    
    // Sincronizar Lenis con ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      // Nota: No matamos ScrollTrigger aquí ya que puede ser usado por otros componentes.
    };
  }, []);

  return null;
}