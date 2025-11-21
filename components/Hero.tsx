'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Image from 'next/image';

export default function Hero() {
  const revealRef = useScrollReveal();

  return (
    <section 
      id="inicio" 
      className="hero" 
      ref={revealRef}
      style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        display: 'flex',
        alignItems: 'center', // Centrar verticalmente
        paddingTop: '120px',  // ESPACIO PARA QUE EL MENÚ NO TAPE EL TEXTO
        paddingBottom: '50px',
        overflow: 'hidden'
      }}
    >
      {/* 1. FONDO DE IMAGEN (Estático pero impactante) */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <Image 
          src="https://images.unsplash.com/photo-1628611225249-6c0ebcd52025?q=80&w=2070" // Imagen de terraza de lujo
          alt="Terraza de Lujo Comfort Studio"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        {/* 2. CAPA DE GRADIENTE (Para que se lea el texto) */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(90deg, rgba(250,248,241,0.95) 0%, rgba(250,248,241,0.8) 40%, rgba(250,248,241,0) 100%)' 
        }}></div>
      </div>

      {/* 3. CONTENIDO (Texto) */}
      <div className="container-safe" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div style={{ maxWidth: '650px' }}>
          
          <div className="eyebrow" style={{ color: '#b07357', fontWeight: 700, letterSpacing: '3px', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            ARQUITECTURA & OUTDOOR LIVING
          </div>
          
          <h1 className="hero-title" style={{ color: '#2c2c2c', fontSize: 'clamp(3rem, 5vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Espacios que <br />
            <span style={{ color: '#b07357', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>elevan tu vida.</span>
          </h1>
          
          <p className="hero-sub" style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '3rem', color: '#4a4a4a', maxWidth: '500px' }}>
            Diseñamos y construimos terrazas, techos sol y sombra y sistemas bioclimáticos. 
            Transformamos tu azotea en el corazón de tu hogar.
          </p>

          <div className="hero-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#portafolio" className="btn-primary">
              VER PROYECTOS
            </a>
            <a href="#contacto" className="btn-outline" style={{ borderColor: '#2c2c2c', color: '#2c2c2c' }}>
              COTIZAR AHORA
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}