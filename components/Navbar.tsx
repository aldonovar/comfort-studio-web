'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para cambiar estilo del menú
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      padding: '1.5rem 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'all 0.3s ease',
      backgroundColor: scrolled ? '#faf8f1f0' : 'transparent', // Color base con transparencia
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(176, 115, 87, 0.1)' : 'none'
    }}>
      {/* LOGO */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        {/* Reemplaza con tu archivo real en /public */}
        {/* <img src="/logo.png" alt="Comfort Studio" style={{ height: '40px' }} /> */}
        
        {/* MIENTRAS TANTO: Logo en texto con la tipografía nueva */}
        <div style={{ 
          border: '2px solid #b07357', 
          padding: '5px 10px', 
          color: '#b07357', 
          fontWeight: '700',
          letterSpacing: '2px'
        }}>
          CS
        </div>
        <span style={{ fontWeight: 700, color: '#2c2c2c', letterSpacing: '1px' }}>COMFORT STUDIO</span>
      </Link>

      {/* ENLACES (Escritorio) */}
      <div style={{ display: 'flex', gap: '2rem', fontWeight: 500 }}>
        <Link href="#inicio" style={{ color: '#2c2c2c' }}>Inicio</Link>
        <Link href="#servicios" style={{ color: '#2c2c2c' }}>Servicios</Link>
        <Link href="#portafolio" style={{ color: '#2c2c2c' }}>Proyectos</Link>
        <Link href="#contacto" style={{ color: '#b07357', fontWeight: 700 }}>Cotizar</Link>
      </div>
    </nav>
  );
}