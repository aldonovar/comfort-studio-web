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

  // Bloqueo de scroll al abrir menú móvil
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <>
      {/* --- TOP BANNER (Se esconde al hacer scroll) --- */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 102,
        transform: scrolled ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.3s ease'
      }}>
        <TopBanner />
      </div>

      {/* --- BARRA DE NAVEGACIÓN (Cápsula Flotante) --- */}
      <header style={{
        position: 'fixed',
        top: scrolled ? '20px' : '50px', // Posición dinámica
        left: 0, 
        width: '100%',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center', // ESTO CENTRA LA CÁPSULA PERFECTAMENTE
        transition: 'top 0.3s ease',
        pointerEvents: 'none' // Permite clic en los lados de la cápsula
      }}>
        <nav style={{
          pointerEvents: 'auto', // Reactiva clics dentro de la barra
          width: '95%',
          maxWidth: '1200px', // Ancho máximo para que no se estire demasiado
          padding: '10px 25px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // Blanco sólido con ligera transparencia
          backdropFilter: 'blur(12px)',
          borderRadius: '100px', // Bordes totalmente redondos (Cápsula)
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)', // Sombra suave de elevación
          border: '1px solid rgba(255, 255, 255, 0.5)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '20px' // Espacio seguro entre elementos
        }}>
          
          {/* 1. LOGO + NOMBRE */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div style={{ position: 'relative', width: '40px', height: '40px' }}>
              <Image 
                src="/logo.png" 
                alt="Comfort Studio" 
                fill 
                style={{ objectFit: 'contain' }} 
                priority 
              />
            </div>
            <div className="flex flex-col leading-none">
              <span style={{ 
                fontFamily: 'var(--font-montserrat)', 
                fontWeight: 700, 
                color: '#1e1713', 
                fontSize: '0.9rem',
                letterSpacing: '1px' 
              }}>
                COMFORT
              </span>
              <span style={{ 
                fontFamily: 'var(--font-montserrat)', 
                fontWeight: 400, 
                color: '#b07357', 
                fontSize: '0.75rem', 
                letterSpacing: '2px' 
              }}>
                STUDIO
              </span>
            </div>
          </Link>

          {/* 2. MENÚ ESCRITORIO (Centrado automáticamente por flex) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {['Inicio', 'Servicios', 'Proyectos', 'Experiencia'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-xs font-bold uppercase tracking-[1.5px] text-[#4d3d34] hover:text-[#b07357] transition-colors relative group"
                style={{ padding: '5px 0' }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#b07357] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* 3. BOTÓN COTIZAR (Escritorio) + HAMBURGUESA (Móvil) */}
          <div className="flex items-center gap-4 shrink-0">
            <Link 
              href="#contacto" 
              className="hidden md:inline-flex btn-primary" 
              style={{ 
                padding: '0.7rem 1.5rem', 
                fontSize: '0.75rem',
                borderRadius: '50px' // Botón redondo para coincidir con la cápsula
              }}
            >
              COTIZAR
            </Link>

            {/* Botón Móvil */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="md:hidden text-[#b07357] p-1"
              aria-label="Menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
              </svg>
            </button>
          </div>

        </nav>
      </header>

      {/* --- MENÚ MÓVIL OVERLAY --- */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100dvh',
        backgroundColor: '#f9f3ec', // Color arena base
        zIndex: 99,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
      }}>
        {['Inicio', 'Servicios', 'Proyectos', 'Experiencia', 'Contacto'].map((item) => (
          <Link 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            onClick={() => setMenuOpen(false)}
            style={{ 
              fontFamily: 'var(--font-montserrat)', 
              fontSize: '1.8rem', 
              color: '#1e1713', 
              fontWeight: 700, 
              textDecoration: 'none',
              letterSpacing: '-1px'
            }}
          >
            {item}
          </Link>
        ))}
        
        <div style={{ marginTop: '2rem' }}>
          <Link href="#contacto" onClick={() => setMenuOpen(false)} className="btn-primary">
            AGENDA TU CITA
          </Link>
        </div>
      </div>
    </>
  );
}