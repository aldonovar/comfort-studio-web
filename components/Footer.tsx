'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#2c2c2c', // Gris oscuro elegante
      color: '#faf8f1', 
      padding: '5rem 5% 3rem', 
      borderTop: '1px solid rgba(176, 115, 87, 0.2)' 
    }}>
      <div className="container-safe" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
        
        {/* Marca */}
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ 
            color: '#b07357', 
            marginBottom: '0.5rem', 
            fontSize: '1.5rem', 
            fontFamily: 'var(--font-montserrat)',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            Comfort Studio
          </h3>
          <p style={{ opacity: 0.6, fontSize: '0.9rem', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>
            Elevando tu estilo de vida, un espacio a la vez.
          </p>
        </div>

        {/* Enlaces de Navegación Rápida */}
        <div style={{ 
          display: 'flex', 
          gap: '2rem', 
          flexWrap: 'wrap', 
          justifyContent: 'center',
          fontSize: '0.85rem',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          fontWeight: 500
        }}>
          <Link href="#inicio" style={{ textDecoration: 'none', color: '#faf8f1', transition: 'color 0.3s' }} className="hover:text-[#b07357]">Inicio</Link>
          <Link href="#servicios" style={{ textDecoration: 'none', color: '#faf8f1', transition: 'color 0.3s' }} className="hover:text-[#b07357]">Servicios</Link>
          <Link href="#portafolio" style={{ textDecoration: 'none', color: '#faf8f1', transition: 'color 0.3s' }} className="hover:text-[#b07357]">Proyectos</Link>
          <Link href="#contacto" style={{ textDecoration: 'none', color: '#faf8f1', transition: 'color 0.3s' }} className="hover:text-[#b07357]">Contacto</Link>
        </div>

        {/* Redes Sociales (Iconos simulados con texto por ahora, o enlaces directos) */}
        <div style={{ 
          display: 'flex', 
          gap: '2rem', 
          marginBottom: '1rem'
        }}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#b07357', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>INSTAGRAM</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#b07357', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>FACEBOOK</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#b07357', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>LINKEDIN</a>
        </div>

        {/* Línea divisoria */}
        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>

        {/* Copyright */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          width: '100%', 
          flexWrap: 'wrap', 
          gap: '1rem', 
          opacity: 0.4, 
          fontSize: '0.75rem' 
        }}>
          <span>© 2025 Comfort Studio. Lima, Perú.</span>
          <span>Diseño y Desarrollo Web</span>
        </div>
      </div>
    </footer>
  );
}