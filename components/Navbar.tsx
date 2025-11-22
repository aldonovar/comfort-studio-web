'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import TopBanner from './TopBanner';

// Datos del menú para fácil edición
const MENU_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { 
    label: 'Servicios', 
    href: '#servicios',
    // Submenú para el desplegable móvil
    submenu: [
      { label: 'Techos Sol y Sombra', href: '#servicios' },
      { label: 'Outdoor Kitchens', href: '#servicios' },
      { label: 'Cerramientos', href: '#servicios' },
      { label: 'Iluminación', href: '#servicios' },
    ]
  },
  { label: 'Proyectos', href: '#portafolio' },
  { label: 'Experiencia', href: '#experiencia' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Estado para controlar qué submenú está abierto en móvil
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // 40px es aprox la altura del TopBanner
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  const toggleSubmenu = (label: string) => {
    if (openSubmenu === label) {
      setOpenSubmenu(null); // Cerrar si ya está abierto
    } else {
      setOpenSubmenu(label); // Abrir nuevo
    }
  };

  return (
    <>
      {/* --- CONTENEDOR DEL ENCABEZADO (Banner + Nav) --- */}
      {/* Usamos una transición en el transform para mover todo el bloque */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 100,
          transform: scrolled ? 'translateY(-40px)' : 'translateY(0)', // Esconde el banner (40px) al bajar
          transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        {/* 1. BANNER SUPERIOR */}
        <TopBanner />

        {/* 2. BARRA DE NAVEGACIÓN */}
        <nav style={{
          width: '100%',
          padding: scrolled ? '15px 5%' : '25px 5%',
          backgroundColor: scrolled ? 'rgba(250, 248, 241, 0.95)' : 'transparent', // Glassmorphism solo al bajar
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(176, 115, 87, 0.1)' : '1px solid transparent',
          transition: 'all 0.4s ease',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setMenuOpen(false)}>
            <div style={{ position: 'relative', width: '45px', height: '45px' }}>
              <Image 
                src="/logo.png" 
                alt="CS Logo" 
                fill 
                style={{ objectFit: 'contain' }} 
                priority 
              />
            </div>
            <div className="flex flex-col leading-none">
              <span style={{ 
                fontFamily: 'var(--font-montserrat)', 
                fontWeight: 700, 
                color: '#b07357', 
                fontSize: '1.1rem',
                letterSpacing: '1px' 
              }}>
                COMFORT
              </span>
              <span style={{ 
                fontFamily: 'var(--font-montserrat)', 
                fontWeight: 400, 
                color: '#1e1713', 
                fontSize: '0.8rem', 
                letterSpacing: '3px' 
              }}>
                STUDIO
              </span>
            </div>
          </Link>

          {/* MENÚ ESCRITORIO (Solo visible en pantallas grandes) */}
          <div className="hidden md:flex gap-8 items-center">
            {MENU_ITEMS.map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                className="text-xs font-bold uppercase tracking-[2px] text-[#1e1713] hover:text-[#b07357] transition-colors relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#b07357] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link href="#contacto" className="btn-primary" style={{ padding: '0.7rem 2rem', fontSize: '0.75rem' }}>
              COTIZAR
            </Link>
          </div>

          {/* BOTÓN HAMBURGUESA (Solo visible en móvil) */}
          <button 
            onClick={() => setMenuOpen(true)} 
            className="md:hidden text-[#b07357] p-2 focus:outline-none"
            aria-label="Abrir menú"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </nav>
      </div>

      {/* --- MENÚ MÓVIL DARK (Overlay) --- */}
      <div 
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: '#111111', // Fondo casi negro como tu referencia
          zIndex: 9999,
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)', // Desliza desde la derecha
          transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)', // Curva suave "Expo"
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Cabecera del Menú Móvil */}
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <span className="text-white/50 text-xs tracking-[3px] uppercase font-bold">Menú</span>
          <button 
            onClick={() => setMenuOpen(false)}
            className="text-[#b07357] p-2 hover:text-white transition-colors"
          >
            {/* Icono X Grande */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Lista de Enlaces */}
        <div className="flex-1 overflow-y-auto py-8 px-8 flex flex-col gap-6">
          {MENU_ITEMS.map((item) => (
            <div key={item.label} className="border-b border-white/5 pb-4 last:border-none">
              <div className="flex items-center justify-between">
                <Link 
                  href={item.href}
                  onClick={() => !item.submenu && setMenuOpen(false)} // Si no tiene submenú, cierra al click
                  className="text-2xl font-bold text-white hover:text-[#b07357] transition-colors uppercase tracking-wider font-[Montserrat]"
                >
                  {item.label}
                </Link>
                
                {/* Flecha si tiene submenú */}
                {item.submenu && (
                  <button 
                    onClick={() => toggleSubmenu(item.label)}
                    className="text-white/50 p-2"
                  >
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      style={{ 
                        transform: openSubmenu === item.label ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                )}
              </div>

              {/* Submenú Desplegable (Acordeón) */}
              {item.submenu && (
                <div 
                  style={{
                    height: openSubmenu === item.label ? 'auto' : '0',
                    overflow: 'hidden',
                    opacity: openSubmenu === item.label ? 1 : 0,
                    transition: 'all 0.3s ease',
                    paddingTop: openSubmenu === item.label ? '1rem' : '0',
                  }}
                  className="flex flex-col gap-3 pl-4 border-l-2 border-[#b07357]/30 ml-1"
                >
                  {item.submenu.map((sub) => (
                    <Link 
                      key={sub.label}
                      href={sub.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-sm text-white/70 hover:text-white transition-colors uppercase tracking-widest"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pie del Menú Móvil */}
        <div className="p-8 bg-[#1a1a1a]">
          <Link 
            href="#contacto" 
            onClick={() => setMenuOpen(false)}
            className="w-full btn-primary text-center justify-center py-4 text-sm"
          >
            SOLICITAR COTIZACIÓN
          </Link>
          <div className="mt-6 flex justify-center gap-6 text-white/40 text-xs uppercase tracking-widest">
            <span>Instagram</span>
            <span>Facebook</span>
          </div>
        </div>
      </div>
    </>
  );
}