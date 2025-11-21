'use client';
import Link from 'next/link';
import Image from 'next/image'; // Importante para el logo
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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        padding: scrolled ? '10px 5%' : '25px 5%', // Ajustado para ser más elegante
        backgroundColor: scrolled ? 'rgba(250, 248, 241, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(176, 115, 87, 0.1)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: scrolled ? 'max(10px, env(safe-area-inset-top))' : 'max(25px, env(safe-area-inset-top))'
      }}>
        
        {/* --- LOGO REAL --- */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '15px', zIndex: 101 }}>
          <div style={{ 
            position: 'relative', 
            width: scrolled ? '45px' : '55px', // El logo se achica sutilmente al bajar
            height: scrolled ? '45px' : '55px',
            transition: 'all 0.4s ease'
          }}>
            <Image 
              src="/logo.png" 
              alt="Comfort Studio Logo" 
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          
          {/* Texto de Marca (Tipografía Montserrat) */}
          <div className="flex flex-col justify-center" style={{ lineHeight: 1 }}>
            <span style={{ 
              fontFamily: 'var(--font-montserrat)', 
              fontWeight: 700, 
              color: '#b07357', 
              fontSize: scrolled ? '1rem' : '1.1rem',
              letterSpacing: '2px',
              transition: 'all 0.4s ease'
            }}>
              COMFORT
            </span>
            <span style={{ 
              fontFamily: 'var(--font-montserrat)', 
              fontWeight: 400, 
              color: '#2c2c2c', 
              fontSize: scrolled ? '0.85rem' : '0.95rem',
              letterSpacing: '4px', // Más espaciado para elegancia
              transition: 'all 0.4s ease'
            }}>
              STUDIO
            </span>
          </div>
        </Link>

        {/* --- MENÚ ESCRITORIO --- */}
        <div className="desktop-menu" style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
          {['Inicio', 'Servicios', 'Proyectos', 'Experiencia'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              style={{ 
                fontSize: '0.8rem', 
                textTransform: 'uppercase', 
                letterSpacing: '2px', 
                fontWeight: 600, 
                color: '#2c2c2c',
                textDecoration: 'none',
                position: 'relative',
                transition: 'color 0.3s'
              }}
              className="hover:text-[#b07357]"
            >
              {item}
            </Link>
          ))}
          <Link 
            href="#contacto" 
            className="btn-primary"
            style={{ padding: '0.8rem 2rem', fontSize: '0.8rem' }}
          >
            COTIZAR
          </Link>
        </div>

        {/* --- BOTÓN HAMBURGUESA --- */}
        <button 
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer', 
            zIndex: 101,
            color: '#b07357'
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </nav>

      {/* --- MENÚ MÓVIL --- */}
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100dvh',
        backgroundColor: '#faf8f1', zIndex: 99,
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2rem',
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s',
        transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
        opacity: menuOpen ? 1 : 0,
        paddingTop: 'env(safe-area-inset-top)'
      }}>
        {/* Logo en menú móvil */}
        <div style={{ width: '80px', height: '80px', position: 'relative', marginBottom: '20px' }}>
             <Image src="/logo.png" alt="Comfort Studio" fill style={{ objectFit: 'contain' }} />
        </div>

        {['Inicio', 'Servicios', 'Proyectos', 'Experiencia', 'Contacto'].map((item) => (
          <Link 
            key={item} 
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            style={{ fontFamily: 'var(--font-montserrat)', fontSize: '1.5rem', color: '#2c2c2c', fontWeight: 600, textDecoration: 'none', letterSpacing: '1px' }}
          >
            {item}
          </Link>
        ))}
      </div>
      
      <style jsx global>{`
        @media (max-width: 900px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        @media (min-width: 901px) {
          .desktop-menu { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}