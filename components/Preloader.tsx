'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsVisible(false);
          document.body.style.overflow = 'auto';
        }
      });

      document.body.style.overflow = 'hidden';

      // Animación de entrada
      tl.to(logoRef.current, { 
        opacity: 1, 
        scale: 1, 
        duration: 1, 
        ease: "power3.out" 
      })
      .to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5")
      
      .to({}, { duration: 0.8 }) // Pausa para ver el logo

      // Salida hacia arriba
      .to(containerRef.current, {
        yPercent: -100,
        duration: 1.2,
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
        width: '100vw',
        height: '100vh',
        backgroundColor: '#faf8f1',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px'
      }}
    >
      {/* Logo */}
      <div ref={logoRef} style={{ position: 'relative', width: '150px', height: '150px', opacity: 0, transform: 'scale(0.8)' }}>
        <Image 
          src="/logo.png" // Asegúrate que este sea el nombre exacto en public/
          alt="Comfort Studio" 
          fill 
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      {/* Texto de Marca */}
      <div ref={textRef} style={{ opacity: 0, transform: 'translateY(20px)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-montserrat)', color: '#b07357', fontSize: '0.9rem', letterSpacing: '4px', fontWeight: 600, textTransform: 'uppercase' }}>
          Comfort Studio
        </h2>
      </div>
    </div>
  );
}