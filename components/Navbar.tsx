'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* TOP BANNER (Estilizado y sutil) */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 102,
        backgroundColor: '#b86f4b', // Terracota
        color: 'white',
        fontSize: '0.7rem',
        padding: '6px 0',
        textAlign: 'center',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontWeight: 600,
        transform: scrolled ? 'translateY(-100%)' : 'translateY(0)', // Se esconde al bajar
        transition: 'transform 0.3s ease'
      }}>
        <p className="container-safe flex justify-center items-center gap-2">
          <span>✨ Diseñamos tu Verano 2025</span>
          <span className="opacity-50">|</span>
          <a href="#contacto" className="underline decoration-1 underline-offset-2 hover:opacity-80">
            Agenda visita técnica
          </a>
        </p>
      </div>

      {/* NAVBAR (Flotante tipo cápsula como la referencia) */}
      <nav style={{
        position: 'fixed',
        top: scrolled ? '20px' : '50px', // Baja si el banner está, sube y se despega si hay scroll
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: '1360px',
        zIndex: 100,
        padding: '12px 30px',
        borderRadius: '999px', // Cápsula
        backgroundColor: 'rgba(255, 255, 255, 0.85)', // Blanco translúcido
        backdropFilter: 'blur(12px)', // Efecto vidrio
        boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.1)' : '0 4px 20px rgba(0,0,0,0.05)',
        border: '1px solid rgba(255,255,255,0.5)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div style={{ position: 'relative', width: '35px', height: '35px' }}>
            <Image 
              src="/logo.png" 
              alt="CS Logo" 
              fill 
              style={{ objectFit: 'contain' }} 
              priority 
            />
          </div>
          <div className="flex flex-col leading-none">
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1e1713', letterSpacing: '1px' }}>COMFORT</span>
            <span style={{ fontSize: '0.7rem', fontWeight: 400, color: '#b86f4b', letterSpacing: '2px' }}>STUDIO</span>
          </div>
        </Link>

        {/* MENÚ ESCRITORIO */}
        <div className="hidden md:flex gap-6 items-center">
          {['Inicio', 'Servicios', 'Proyectos', 'Experiencia'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-xs font-medium uppercase tracking-widest text-[#4d3d34] hover:text-[#b86f4b] transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#b86f4b] transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <Link href="#contacto" className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.7rem' }}>
            Cotizar
          </Link>
        </div>

        {/* MENÚ MÓVIL */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#b86f4b]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </nav>

      {/* OVERLAY MÓVIL */}
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
        backgroundColor: '#f9f3ec', zIndex: 99,
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2rem',
        transition: 'transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)',
        transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
      }}>
        {['Inicio', 'Servicios', 'Proyectos', 'Experiencia', 'Contacto'].map((item) => (
          <Link 
            key={item} href={`#${item.toLowerCase()}`} 
            onClick={() => setMenuOpen(false)}
            style={{ fontFamily: 'var(--font-montserrat)', fontSize: '1.8rem', color: '#1e1713', fontWeight: 700, textDecoration: 'none' }}
          >
            {item}
          </Link>
        ))}
      </div>
    </>
  );
}