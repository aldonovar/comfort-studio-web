'use client';
import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Datos de ejemplo basados en tu PDF (Hard-coded por ahora)
const projects = [
  { 
    id: 1, 
    name: "Miraflores", 
    tags: "Sol & Sombra + barra", 
    image: "https://images.unsplash.com/photo-1600585154206-0ef3c08c0632?auto=format&fit=crop&w=900&q=80" 
  },
  { 
    id: 2, 
    name: "San Isidro", 
    tags: "Bioclimático motorizado", 
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=900&q=80" 
  },
  { 
    id: 3, 
    name: "La Molina", 
    tags: "Outdoor Kitchen completa", 
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=900&q=80" 
  },
  { 
    id: 4, 
    name: "Barranco", 
    tags: "Terraza social", 
    image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=900&q=80" 
  },
];

const PortfolioItem = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className="portfolio-item">
      <img src={project.image} alt={project.name} />
      <div className="portfolio-label">
        <span>{project.name}</span>
        <span style={{ opacity: 0.7 }}>{project.tags}</span>
      </div>
    </div>
  );
};

// ESTA ES LA PARTE CLAVE: export default function
export default function PortfolioStrip() {
  const revealRef = useScrollReveal(); 
  
  return (
    <section id="portafolio" className="reveal" ref={revealRef}>
      <div className="section-label">Proyectos</div>
      <h2 className="section-title">Showroom horizontal con efecto “producto premium”.</h2>
      <p className="section-sub">
        Carrusel suave inspirado en webs de software y fotografía, adaptado a terrazas.
      </p>
      
      <div className="portfolio-strip">
        {projects.map(p => (
          <PortfolioItem key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}