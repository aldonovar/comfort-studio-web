'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import TopBanner from './TopBanner'; // Importamos el banner

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Si bajamos más de 40px (altura aprox del banner), activamos el modo sticky
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* El TopBanner desaparece al hacer scroll visualmente gracias al position fixed del nav superpuesto o se mantiene arriba */}
      <div style={{ position: 'absolute', top: 0, width: '100%', zIndex: 102 }}>
         <TopBanner />
      </div>

      <nav style={{
        position: 'fixed',
        top: 0, // Siempre fijo arriba
        left: 0,
        width: '100%',
        zIndex: 100,
        // Ajustamos el padding top para dejar ver el banner cuando estamos hasta arriba
        marginTop: scrolled ? '0' : '40px', 
        padding: scrolled ? '15px 5%' : '25px 5%',
        backgroundColor: scrolled ? 'rgba(250, 248, 241, 0.9)' : 'transparent', // Glassmorphism al bajar
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(176, 115, 87, 0.1)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        
        {/* LOGO */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ position: 'relative', width: scrolled ? '40px' : '50px', height: scrolled ? '40px' : '50px', transition: 'all 0.4s ease' }}>
            <Image src="/logo.png" alt="Comfort Studio" fill style={{ objectFit: 'contain' }} priority />
          </div>
          <div className="flex flex-col justify-center" style={{ lineHeight: 1 }}>
            <span style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, color: '#b07357', fontSize: scrolled ? '1rem' : '1.1rem', letterSpacing: '2px', transition: 'all 0.4s' }}>COMFORT</span>
            <span style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 400, color: '#2c2c2c', fontSize: scrolled ? '0.8rem' : '0.9rem', letterSpacing: '4px', transition: 'all 0.4s' }}>STUDIO</span>
          </div>
        </Link>

        {/* MENÚ ESCRITORIO */}
        <div className="hidden md:flex gap-8 items-center">
          {['Inicio', 'Servicios', 'Proyectos', 'Experiencia'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm uppercase tracking-widest font-medium hover:text-[#b07357] transition-colors relative group"
              style={{ color: '#2c2c2c', fontSize: '0.8rem' }}
            >
              {item}
              {/* Línea animada al hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#b07357] transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <Link href="#contacto" className="btn-primary" style={{ padding: '0.7rem 1.8rem', fontSize: '0.75rem' }}>
            COTIZAR AHORA
          </Link>
        </div>

        {/* MENU MÓVIL BUTTON */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#b07357]">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </nav>

      {/* MENÚ MÓVIL OVERLAY */}
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100dvh',
        backgroundColor: '#faf8f1', zIndex: 99,
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2rem',
        transition: 'transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)',
        transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
      }}>
        {['Inicio', 'Servicios', 'Proyectos', 'Experiencia', 'Contacto'].map((item) => (
          <Link 
            key={item} href={`#${item.toLowerCase()}`} 
            onClick={() => setMenuOpen(false)}
            style={{ fontFamily: 'var(--font-montserrat)', fontSize: '2rem', color: '#2c2c2c', fontWeight: 700, textDecoration: 'none' }}
          >
            {item}
          </Link>
        ))}
      </div>
    </>
  );
}