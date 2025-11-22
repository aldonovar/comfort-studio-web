'use client';
import React from 'react';
import Image from 'next/image';

const projects = [
  { 
    id: 1, 
    name: "Miraflores", 
    tags: "Sol & Sombra + Barra", 
    image: "https://images.unsplash.com/photo-1600585154206-0ef3c08c0632?auto=format&fit=crop&w=900&q=80" 
  },
  { 
    id: 2, 
    name: "San Isidro", 
    tags: "Bioclimático Motorizado", 
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=900&q=80" 
  },
  { 
    id: 3, 
    name: "La Molina", 
    tags: "Outdoor Kitchen", 
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=900&q=80" 
  },
  { 
    id: 4, 
    name: "Barranco", 
    tags: "Terraza Social", 
    image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=900&q=80" 
  },
];

export default function PortfolioStrip() {
  return (
    <section id="portafolio" style={{ padding: '5rem 5%', backgroundColor: '#faf8f1' }}>
      {/* Encabezado de Sección */}
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <span style={{ color: '#b07357', fontWeight: 700, letterSpacing: '2px', fontSize: '0.9rem', textTransform: 'uppercase' }}>
          PORTAFOLIO
        </span>
        <h2 style={{ fontSize: '2.5rem', color: '#2c2c2c', marginTop: '10px', fontFamily: 'var(--font-montserrat)' }}>
          Proyectos Destacados
        </h2>
      </div>
      
      {/* Grilla de Proyectos */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem' 
      }}>
        {projects.map(p => (
          <div 
            key={p.id} 
            className="group" // Usamos className para Tailwind si lo necesitas, esto SI es válido
            style={{ 
              position: 'relative', 
              height: '400px', 
              borderRadius: '4px', 
              overflow: 'hidden', 
              cursor: 'pointer' 
            }}
          >
            {/* Imagen */}
            <Image 
              src={p.image} 
              alt={p.name} 
              fill
              style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
              // El hover lo manejamos con CSS en línea para asegurar compatibilidad sin Tailwind complejo
            />
            
            {/* Overlay Oscuro */}
            <div style={{ 
              position: 'absolute', 
              inset: 0, 
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)' 
            }}></div>

            {/* Texto sobre la imagen */}
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'white' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>{p.name}</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.9, marginTop: '5px' }}>{p.tags}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}