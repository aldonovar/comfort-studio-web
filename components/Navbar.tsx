'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Enlaces definidos
const MENU_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#portafolio' },
  { label: 'Cotiza', href: '#contacto' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detectar scroll para efecto glassmorphism
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll del sitio cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <>
      {/* --- HEADER PRINCIPAL (Minimalista) --- */}
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${scrolled ? 'py-4 bg-[#faf8f1]/90 backdrop-blur-md shadow-sm' : 'py-8 bg-transparent'
          }`}
      >
        <div className="container-safe flex justify-between items-center px-[5%]">

          {/* 1. LOGO (Izquierda) */}
          <Link href="/" className="flex items-center gap-3 relative z-[102]" onClick={() => setMenuOpen(false)}>
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/logo.png"
                alt="Comfort Studio Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-['Montserrat'] font-bold text-[#b07357] text-sm md:text-base tracking-widest">
                COMFORT
              </span>
              <span className="font-['Montserrat'] font-light text-[#1e1713] text-xs md:text-sm tracking-[3px]">
                STUDIO
              </span>
            </div>
          </Link>

          {/* 2. BOTONES (Derecha) */}
          <div className="flex items-center gap-6 relative z-[102]">

            {/* Botón Cotizar (Solo Desktop) */}
            <Link
              href="#contacto"
              className="hidden md:inline-block btn-cotizar"
            >
              Cotizar
            </Link>

            {/* Botón MENÚ / CERRAR (Estilo Texto + Icono) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-3 group cursor-pointer bg-transparent border-none outline-none"
            >
              {/* Texto "MENU" o "CERRAR" */}
              <span className={`hidden md:block text-xs uppercase tracking-widest font-bold transition-colors duration-300 ${menuOpen ? 'text-white' : 'text-[#1e1713]'}`}>
                {menuOpen ? 'Cerrar' : 'Menú'}
              </span>

              {/* Icono Hamburguesa Animado */}
              <div className="w-8 h-8 flex flex-col justify-center items-end gap-[5px]">
                <span
                  className={`h-[2px] transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-[7px] bg-white' : 'w-8 bg-[#1e1713]'
                    }`}
                />
                <span
                  className={`h-[2px] transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-6 bg-[#1e1713]'
                    }`}
                />
                <span
                  className={`h-[2px] transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-[7px] bg-white' : 'w-4 group-hover:w-8 bg-[#1e1713]'
                    }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* --- OVERLAY MENU (PANTALLA COMPLETA DARK) --- */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: '#111111', // Fondo Negro Profundo
          zIndex: 101,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'transform 0.7s cubic-bezier(0.83, 0, 0.17, 1)', // Curva cinemática
          transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        {/* Fondo decorativo opcional */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

        {/* NAVEGACIÓN PRINCIPAL GIGANTE */}
        <nav className="flex flex-col items-start gap-2 z-10">
          {MENU_ITEMS.map((item, index) => (
            <div key={item.label} className="overflow-hidden">
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-5xl md:text-7xl lg:text-8xl menu-link-giant ${menuOpen ? 'animate-slide-up' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }} // Retraso en cascada
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        {/* FOOTER DEL MENÚ (Redes Sociales) */}
        <div className={`absolute bottom-10 w-full px-[5%] flex flex-col md:flex-row justify-between items-center gap-6 z-10 text-white/40 text-xs uppercase tracking-widest transition-opacity duration-1000 ${menuOpen ? 'opacity-100 delay-500' : 'opacity-0'}`}>
          <div className="flex gap-8">
            <a href="https://instagram.com" target="_blank" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://facebook.com" target="_blank" className="hover:text-white transition-colors">Facebook</a>
            <a href="https://tiktok.com" target="_blank" className="hover:text-white transition-colors">TikTok</a>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <span>Lima, Perú</span>
            <span className="text-[#b07357]">© 2025 Comfort Studio</span>
          </div>
        </div>
      </div>
    </>
  );
}