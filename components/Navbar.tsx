'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import TopBanner from './TopBanner';

const MENU_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#experiencia' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#portafolio' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <>
      {/* --- TOP BANNER (Desaparece al bajar) --- */}
      <div
        style={{
          position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 102,
          transform: scrolled ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'transform 0.5s ease'
        }}
      >
        <TopBanner />
      </div>

      {/* --- HEADER (Logo + Botón Menú) --- */}
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-3 bg-[#faf8f1]/90 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'
          }`}
        style={{ paddingTop: scrolled ? '15px' : '50px' }}
      >
        <div className="container-safe flex justify-between items-center px-[5%]">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 relative z-[102]" onClick={() => setMenuOpen(false)}>
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="Comfort Studio"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-[#b07357] text-sm tracking-widest">COMFORT</span>
              <span className="font-light text-[#1e1713] text-xs tracking-[3px]">STUDIO</span>
            </div>
          </Link>

          {/* BOTONES DERECHA */}
          <div className="flex items-center gap-6 relative z-[102]">
            {/* Cotizar (Escritorio) */}
            <Link
              href="#contacto"
              className="hidden md:inline-block border border-[#1e1713] px-6 py-2 text-xs uppercase tracking-widest text-[#1e1713] hover:bg-[#1e1713] hover:text-white transition-all duration-300"
            >
              Cotizar
            </Link>

            {/* Botón Menú (Hamburguesa) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col items-end justify-center gap-[6px] w-[40px] h-[40px] group cursor-pointer bg-transparent border-none"
            >
              <span
                className={`h-[2px] bg-[#1e1713] transition-all duration-300 ${menuOpen ? 'w-8 rotate-45 translate-y-[8px] bg-white' : 'w-8 group-hover:w-6'
                  }`}
              />
              <span
                className={`h-[2px] bg-[#1e1713] transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-6'
                  }`}
              />
              <span
                className={`h-[2px] bg-[#1e1713] transition-all duration-300 ${menuOpen ? 'w-8 -rotate-45 -translate-y-[8px] bg-white' : 'w-4 group-hover:w-8'
                  }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* --- OVERLAY DE MENÚ GIGANTE (Aquí estaba el error visual) --- */}
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
          transition: 'transform 0.6s cubic-bezier(0.83, 0, 0.17, 1)',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        {/* Fondo decorativo */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

        {/* LISTA DE ENLACES */}
        <nav className="flex flex-col items-center gap-2 z-10">
          {MENU_ITEMS.map((item, index) => (
            <div key={item.label} className="overflow-hidden">
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                // Usamos clases de Tailwind para tamaño y la clase personalizada 'menu-overlay-link' para el estilo
                className={`text-5xl md:text-7xl menu-overlay-link ${menuOpen ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        {/* FOOTER DEL MENÚ (Redes Sociales) - Corregido */}
        <div className="absolute bottom-10 w-full px-[5%] flex flex-col md:flex-row justify-between items-center gap-4 z-10">

          {/* Redes separadas correctamente */}
          <div className="flex items-center gap-8">
            <a href="https://instagram.com" target="_blank" className="social-link">Instagram</a>
            <a href="https://facebook.com" target="_blank" className="social-link">Facebook</a>
            <a href="https://tiktok.com" target="_blank" className="social-link">TikTok</a>
          </div>

          <div className="text-white/30 text-xs uppercase tracking-widest">
            Lima • Perú • 2025
          </div>
        </div>
      </div>
    </>
  );
}