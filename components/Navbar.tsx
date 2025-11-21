'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import TopBanner from './TopBanner';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* BANNER SUPERIOR */}
      <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 103 }}>
         <TopBanner />
      </div>

      {/* BARRA DE NAVEGACIÓN */}
      <nav style={{
        position: 'fixed',
        top: scrolled ? '0' : '35px', // Baja un poco si está el banner, sube si hay scroll
        left: 0,
        width: '100%',
        zIndex: 100,
        padding: scrolled ? '15px 5%' : '25px 5%',
        backgroundColor: scrolled ? 'rgba(250, 248, 241, 0.95)' : 'transparent', // Fondo sólido al bajar
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(176, 115, 87, 0.1)' : 'none',
        transition: 'all 0.3s ease',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        
        {/* LOGO + MARCA */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Contenedor fijo para el logo para evitar errores de carga */}
          <div style={{ position: 'relative', width: '50px', height: '50px' }}>
            <Image 
              src="/logo.png" 
              alt="Comfort Studio Logo" 
              width={50} 
              height={50} 
              style={{ objectFit: 'contain' }} 
              priority 
            />
          </div>
          
          <div className="flex flex-col justify-center" style={{ lineHeight: 1 }}>
            <span style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, color: '#b07357', fontSize: '1.1rem', letterSpacing: '2px' }}>
              COMFORT
            </span>
            <span style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 400, color: '#2c2c2c', fontSize: '0.9rem', letterSpacing: '4px' }}>
              STUDIO
            </span>
          </div>
        </Link>

        {/* MENÚ ESCRITORIO */}
        <div className="hidden md:flex gap-8 items-center">
          {['Inicio', 'Servicios', 'Proyectos', 'Experiencia'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="uppercase tracking-widest font-medium hover:text-[#b07357] transition-colors"
              style={{ color: '#2c2c2c', fontSize: '0.8rem', textDecoration: 'none' }}
            >
              {item}
            </Link>
          ))}
          <Link href="#contacto" className="btn-primary" style={{ padding: '0.7rem 1.8rem', fontSize: '0.75rem' }}>
            COTIZAR
          </Link>
        </div>

        {/* MENÚ MÓVIL (HAMBURGUESA) */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#b07357]" style={{ background: 'none', border: 'none' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </nav>

      {/* OVERLAY MÓVIL */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
          backgroundColor: '#faf8f1', zIndex: 99,
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2rem'
        }}>
          {['Inicio', 'Servicios', 'Proyectos', 'Experiencia', 'Contacto'].map((item) => (
            <Link 
              key={item} href={`#${item.toLowerCase()}`} 
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: 'var(--font-montserrat)', fontSize: '1.5rem', color: '#2c2c2c', fontWeight: 700, textDecoration: 'none' }}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}