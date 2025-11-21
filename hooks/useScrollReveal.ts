// hooks/useScrollReveal.ts
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Intentar registrar ScrollTrigger. El try/catch es una buena práctica en Next.js
try {
    gsap.registerPlugin(ScrollTrigger);
} catch (e) {
    if (typeof window !== 'undefined') {
        // console.error("GSAP ScrollTrigger plugin failed to register.");
    }
}

// Hook para animaciones de entrada basadas en scroll (fade-up suave)
export const useScrollReveal = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Configuración de la animación GSAP
    gsap.fromTo(element, 
      { 
        y: 50,          // Inicia 50px abajo
        opacity: 0,     // Inicia invisible
        ease: 'power3.out' 
      },
      {
        y: 0,           // Termina en su posición normal
        opacity: 1,     // Termina visible
        duration: 1.2,
        scrollTrigger: {
          trigger: element,
          start: 'top 85%', // Inicia la animación cuando el elemento está al 85% de la ventana
          toggleActions: 'play none none none', // Solo se reproduce una vez
        },
      }
    );

  }, []);

  return ref;
};