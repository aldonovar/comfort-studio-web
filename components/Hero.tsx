'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Hero() {
  const revealRef = useScrollReveal();
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Efecto Parallax: La imagen se mueve más lento que el scroll
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      gsap.to(imageRef.current, {
        yPercent: 30, // La imagen bajará un 30% de su altura mientras scrolleas
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  }, []);

  return (
    <section 
      id="inicio" 
      className="hero" 
      ref={heroRef} // Referencia para el parallax
      style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        display: 'flex',
        alignItems: 'center',
        paddingTop: '120px',
        paddingBottom: '50px',
        overflow: 'hidden'
      }}
    >
      {/* 1. FONDO CON PARALLAX */}
      <div style={{ position: 'absolute', top: '-10%', left: 0, width: '100%', height: '120%', zIndex: -1 }}>
        <div ref={imageRef} style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Image 
            src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop"
            alt="Terraza de Lujo Comfort Studio"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          {/* Gradiente de integración */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(249, 243, 236, 0.95) 0%, rgba(249, 243, 236, 0.7) 40%, rgba(249, 243, 236, 0.2) 100%)' }}></div>
        </div>
      </div>

      {/* 2. CONTENIDO (Animado con useScrollReveal) */}
      <div ref={revealRef} className="container-safe" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div style={{ maxWidth: '700px' }}>
          
          <div className="eyebrow" style={{ 
            color: '#b07357', 
            fontWeight: 700, 
            letterSpacing: '4px', 
            marginBottom: '1.5rem', 
            fontSize: '0.85rem',
            fontFamily: 'var(--font-montserrat)'
          }}>
            ARQUITECTURA & OUTDOOR LIVING
          </div>
          
          <h1 className="hero-title" style={{ 
            color: '#1e1713', 
            fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', // Tipografía Gigante tipo Awwwards
            lineHeight: 1.05, 
            marginBottom: '2rem',
            fontFamily: 'var(--font-montserrat)'
          }}>
            Espacios que <br />
            <span style={{ color: '#b07357', fontStyle: 'italic', fontFamily: 'serif' }}>elevan tu vida.</span>
          </h1>
          
          <p className="hero-sub" style={{ 
            fontSize: '1.1rem', 
            lineHeight: '1.6', 
            marginBottom: '3rem', 
            color: '#4d3d34', 
            maxWidth: '500px',
            fontWeight: 500
          }}>
            Transformamos azoteas en refugios de lujo. Diseño bioclimático, acabados premium y una ejecución impecable.
          </p>

          <div className="hero-actions" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#portafolio" className="btn-primary">
              VER PROYECTOS
            </a>
            <a href="#contacto" className="btn-outline" style={{ borderColor: '#1e1713', color: '#1e1713' }}>
              AGENDAR CITA
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}