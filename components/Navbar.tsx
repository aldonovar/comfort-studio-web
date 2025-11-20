'use client';
import Link from 'next/link';
import Image from 'next/image'; // Usaremos Image de Next.js para optimización
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        padding: scrolled ? '1rem 5%' : '2rem 5%', // Efecto de contracción elegante
        backgroundColor: scrolled ? 'rgba(250, 248, 241, 0.9)' : 'transparent', // #faf8f1 con transparencia
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(176, 115, 87, 0.1)' : 'none',
        transition: 'all 0.4s ease',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* LOGO E IDENTIDAD */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Si no tienes el logo.png aún en public, usa este placeholder estilizado */}
          <div style={{ 
            width: '40px', 
            height: '40px', 
            border: '2px solid #b07357', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: '#b07357',
            fontWeight: 'bold',
            fontSize: '20px'
          }}>
            CS
          </div>
          <div className="flex flex-col">
            <span style={{ 
              fontFamily: 'var(--font-montserrat)', 
              fontWeight: 700, 
              color: '#b07357', 
              fontSize: '1.1rem',
              lineHeight: '1',
              letterSpacing: '1px'
            }}>
              COMFORT
            </span>
            <span style={{ 
              fontFamily: 'var(--font-montserrat)', 
              fontWeight: 400, 
              color: '#2c2c2c', 
              fontSize: '1rem',
              lineHeight: '1',
              letterSpacing: '2px'
            }}>
              STUDIO
            </span>
          </div>
        </Link>

        {/* MENU ESCRITORIO */}
        <div className="hidden md:flex gap-8 items-center">
          {['Inicio', 'Servicios', 'Proyectos', 'Nosotros'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm uppercase tracking-widest font-medium hover:text-[#b07357] transition-colors"
              style={{ color: '#2c2c2c' }}
            >
              {item}
            </Link>
          ))}
          <Link 
            href="#contacto" 
            className="btn-primary"
            style={{ padding: '0.6rem 1.5rem', fontSize: '0.8rem' }}
          >
            Cotizar
          </Link>
        </div>

        {/* MENU MOVIL (HAMBURGUESA) */}
        <button 
          className="md:hidden text-[#b07357]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </nav>

      {/* MENU MOVIL DESPLEGABLE */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100vh',
          backgroundColor: '#faf8f1',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <button 
            onClick={() => setMenuOpen(false)}
            style={{ position: 'absolute', top: '2rem', right: '2rem', fontSize: '2rem', color: '#b07357' }}
          >
            &times;
          </button>
          {['Inicio', 'Servicios', 'Proyectos', 'Nosotros', 'Contacto'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '1.5rem', color: '#2c2c2c', fontWeight: 600 }}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}