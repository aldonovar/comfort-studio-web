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
      style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}
    >
      {/* FONDO DE IMAGEN (Reemplazo del 3D) */}
      <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
        <Image 
          src="https://images.unsplash.com/photo-1600585154340-0ef3c08c0632?q=80&w=2070" // Placeholder alta calidad
          alt="Fondo Terraza"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        {/* Gradiente para que el texto se lea perfecto sobre la foto */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(250,248,241,0.95) 0%, rgba(250,248,241,0.7) 50%, rgba(250,248,241,0) 100%)' }}></div>
      </div>

      {/* CONTENIDO */}
      <div style={{ maxWidth: '1000px', position: 'relative', zIndex: 10 }}>
        <div className="eyebrow" style={{ color: '#b07357', fontWeight: 700, letterSpacing: '3px', marginBottom: '1rem' }}>
          ARCHITECTURE & OUTDOOR LIVING
        </div>
        
        <h1 className="hero-title" style={{ color: '#2c2c2c' }}>
          Creamos espacios que <br />
          <span style={{ color: '#b07357' }}>elevan tu estilo de vida.</span>
        </h1>
        
        <p className="hero-sub" style={{ fontSize: '1.1rem', maxWidth: '550px', lineHeight: '1.7', marginBottom: '2.5rem', color: '#4a4a4a', fontWeight: 500 }}>
          Especialistas en diseño y construcción de terrazas, techos sol y sombra 
          y sistemas bioclimáticos en Lima. Transformamos tu azotea en el lugar favorito de tu hogar.
        </p>

        <div className="hero-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#portafolio" className="btn-primary" style={{ textDecoration: 'none' }}>
            VER PROYECTOS
          </a>
          <a href="#contacto" className="btn-outline" style={{ textDecoration: 'none', borderColor: '#2c2c2c', color: '#2c2c2c' }}>
            SOLICITAR COTIZACIÓN
          </a>
        </div>
      </div>
    </section>
  );
}