'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function PageTransition() {
  const curtainRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    // La cortina sube revelando la web
    tl.to(curtainRef.current, {
      height: '0%',
      duration: 1.5,
      ease: 'power4.inOut',
      delay: 0.2
    });
  }, []);

  return (
    <div 
      ref={curtainRef}
      className="fixed top-0 left-0 w-full h-screen bg-[#1e1713] z-[99999] flex items-center justify-center overflow-hidden"
    >
      {/* Opcional: Aquí podrías poner un texto de carga pequeño */}
    </div>
  );
}