'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function Preloader() {
  // Iniciamos visible solo si es la primera carga (podríamos usar sessionStorage luego)
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsVisible(false);
          document.body.style.overflow = 'auto'; // Liberar scroll
        }
      });

      // Bloquear scroll al inicio
      document.body.style.overflow = 'hidden';

      // 1. Entrada elegante del logo
      tl.fromTo(logoRef.current, 
        { opacity: 0, scale: 0.9, filter: 'blur(10px)' },
        { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.8, ease: "power3.out" }
      )
      // 2. Pequeña pausa para reconocimiento de marca
      .to(logoRef.current, { 
        opacity: 0, 
        y: -20, 
        duration: 0.5, 
        delay: 0.3, // Tiempo de lectura de marca
        ease: "power3.in" 
      })
      // 3. La cortina se abre revelando la web
      .to(containerRef.current, {
        height: 0,
        duration: 0.8,
        ease: "expo.inOut"
      });
    });

    return () => ctx.revert();
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: '#faf8f1', // Color base de tu marca
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      <div ref={logoRef} style={{ position: 'relative', width: '100px', height: '100px' }}>
        <Image 
          src="/logo.png" 
          alt="Comfort Studio" 
          fill 
          style={{ objectFit: 'contain' }}
          priority // Carga prioritaria para que aparezca instantáneo
        />
      </div>
    </div>
  );
}