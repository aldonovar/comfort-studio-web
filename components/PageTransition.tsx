'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function PageTransition() {
  const curtainRef = useRef(null);

  useEffect(() => {
    // Al cargar la página, la cortina sube
    const tl = gsap.timeline();
    tl.to(curtainRef.current, {
      height: '0%',
      duration: 1.2,
      ease: 'power4.inOut',
      delay: 0.1
    });
  }, []);

  return (
    <div 
      ref={curtainRef}
      className="fixed top-0 left-0 w-full h-screen bg-[#1e1713] z-[2000] flex items-center justify-center overflow-hidden"
    >
      {/* Cargando... */}
    </div>
  );
}