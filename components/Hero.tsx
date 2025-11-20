'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Hero() {
  // Activamos el hook de animación (GSAP)
  const revealRef = useScrollReveal();

  return (
    <section 
      id="inicio" 
      className="hero" 
      ref={revealRef}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Contenedor Principal */}
      <div style={{ maxWidth: '1000px', position: 'relative', zIndex: 10 }}>
        
        {/* 1. Eyebrow (Pequeño texto superior) */}
        <div className="eyebrow" style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '3px', marginBottom: '1rem' }}>
          ARCHITECTURE & OUTDOOR LIVING
        </div>
        
        {/* 2. Título Principal (H1) */}
        <h1 className="hero-title">
          Creamos espacios que <br />
          <span style={{ color: 'var(--color-accent)' }}>elevan tu estilo de vida.</span>
        </h1>
        
        {/* 3. Subtítulo */}
        <p className="hero-sub" style={{ fontSize: '1.1rem', maxWidth: '600px', lineHeight: '1.7', marginBottom: '2.5rem', color: '#555' }}>
          Especialistas en diseño y construcción de terrazas, techos sol y sombra 
          y sistemas bioclimáticos en Lima. Transformamos tu azotea o jardín 
          en el lugar favorito de tu hogar.
        </p>

        {/* 4. Etiquetas / Servicios Rápidos */}
        <div className="hero-tags" style={{ marginBottom: '3rem' }}>
          <span style={{ marginRight: '15px', fontSize: '0.9rem', fontWeight: 500, borderBottom: '2px solid var(--color-accent-light)' }}>
            + Techos Sol y Sombra
          </span>
          <span style={{ marginRight: '15px', fontSize: '0.9rem', fontWeight: 500, borderBottom: '2px solid var(--color-accent-light)' }}>
            + Parrillas & BBQ
          </span>
          <span style={{ fontSize: '0.9rem', fontWeight: 500, borderBottom: '2px solid var(--color-accent-light)' }}>
            + Domótica
          </span>
        </div>

        {/* 5. Botones de Acción (Usando las clases de globals.css) */}
        <div className="hero-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#portafolio" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
            VER PROYECTOS
          </a>
          <a href="#contacto" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-block' }}>
            SOLICITAR COTIZACIÓN
          </a>
        </div>
      </div>

      {/* 6. Elemento Visual (Placeholder para el futuro render 3D/Video) */}
      <div className="hero-visual" style={{
        position: 'absolute',
        right: '-10%',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '50vw',
        height: '70vh',
        background: 'radial-gradient(circle, rgba(176,115,87,0.1) 0%, rgba(250,248,241,0) 70%)',
        zIndex: -1,
        pointerEvents: 'none'
      }}>
        {/* Aquí irán las animaciones de partículas o 3D en la Fase de Diseño Avanzado */}
      </div>
    </section>
  );
}