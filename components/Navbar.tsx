'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import TopBanner from './TopBanner';

// Definición de enlaces
const MENU_ITEMS = [
  { label: 'INICIO', href: '#inicio' },
  { label: 'SERVICIOS', href: '#servicios' },
  { label: 'PROYECTOS', href: '#portafolio' },
  { label: 'COTIZA', href: '#contacto' },
  { label: 'CONTACTO', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll al abrir menú móvil
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <>
      {/* --- TOP BANNER --- */}
      <div
        style={{
          position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
          transform: scrolled ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'transform 0.4s ease'
        }}
      >
        <TopBanner />
      </div>

      {/* --- HEADER PRINCIPAL --- */}
      <header
        className={`fixed left-0 w-full z-[999] transition-all duration-500 ${scrolled ? 'py-3 bg-[#faf8f1]/95 backdrop-blur-md shadow-sm top-0' : 'py-6 bg-transparent top-[30px] md:top-[40px]'
          }`}
      >
        <div className="container-safe flex justify-between items-center px-[5%]">

          {/* 1. LOGO + BRANDING */}
          <Link href="/" className="flex items-center gap-3 relative z-[1002]" onClick={() => setMenuOpen(false)}>
            <div className="relative w-10 h-10">
              {/* Aseguramos que el logo cargue con prioridad */}
              <Image
                src="/logo.png"
                alt="Comfort Studio"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-['Montserrat'] font-bold text-[#b07357] text-sm tracking-widest">
                COMFORT
              </span>
              <span className="font-['Montserrat'] font-light text-[#1e1713] text-xs tracking-[3px]">
                STUDIO
              </span>
            </div>
          </Link>

          {/* 2. MENÚ ESCRITORIO (Visible y Oscuro) */}
          <nav className="hidden md:flex items-center gap-8">
            {MENU_ITEMS.slice(0, 4).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                // Color forzado a #1e1713 (Tinta) para contraste alto
                className="font-['Montserrat'] text-[#1e1713] text-xs font-bold uppercase tracking-[2px] hover:text-[#b07357] transition-colors relative group"
              >
                {item.label}
                {/* Línea animada inferior */}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#b07357] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* 3. BOTONES DERECHA */}
          <div className="flex items-center gap-6 relative z-[1002]">
            {/* Botón Cotiza */}
            <Link
              href="#contacto"
              className="hidden md:inline-block border border-[#1e1713] px-6 py-2 text-xs uppercase tracking-widest text-[#1e1713] font-['Montserrat'] font-bold hover:bg-[#1e1713] hover:text-white transition-all duration-300"
            >
              COTIZA
            </Link>

            {/* Botón Menú (Hamburguesa) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col items-end justify-center gap-[6px] w-[40px] h-[40px] group cursor-pointer bg-transparent border-none outline-none"
            >
              {/* Líneas negras para que se vean sobre el fondo claro */}
              <span
                className={`h-[2px] transition-all duration-300 ${menuOpen ? 'w-8 rotate-45 translate-y-[8px] bg-white' : 'w-8 group-hover:w-6 bg-[#1e1713]'
                  }`}
              />
              <span
                className={`h-[2px] transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-6 bg-[#1e1713]'
                  }`}
              />
              <span
                className={`h-[2px] transition-all duration-300 ${menuOpen ? 'w-8 -rotate-45 -translate-y-[8px] bg-white' : 'w-4 group-hover:w-8 bg-[#1e1713]'
                  }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* --- OVERLAY DE MENÚ GIGANTE (Estilo Ribbit) --- */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: '#111111',
          zIndex: 1001,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'transform 0.6s cubic-bezier(0.83, 0, 0.17, 1)',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        {/* Fondo decorativo */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

        <nav className="flex flex-col items-center gap-4 z-10">
          {MENU_ITEMS.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              // Clases globales definidas en globals.css
              className={`menu-overlay-link text-4xl md:text-6xl ${menuOpen ? 'nav-item-animate' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Footer del Menú */}
        <div className="absolute bottom-10 w-full px-[5%] flex flex-col md:flex-row justify-between items-center gap-4 z-10">
          <div className="flex gap-8">
            <a href="https://instagram.com" target="_blank" className="social-link">Instagram</a>
            <a href="https://facebook.com" target="_blank" className="social-link">Facebook</a>
            <a href="https://tiktok.com" target="_blank" className="social-link">TikTok</a>
          </div>
          <div className="text-white/40 text-xs uppercase tracking-widest font-['Montserrat']">
            Lima • Perú • 2025
          </div>
        </div>
      </div>
    </>
  );
}