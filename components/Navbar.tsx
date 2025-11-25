'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Enlaces definidos
const MENU_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#portafolio' },
  { label: 'Cotiza', href: '#contacto' }, // Cambiado a "Cotiza" como pediste
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detectar scroll para efectos visuales
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear el scroll del cuerpo cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  return (
    <>
      {/* --- HEADER FIJO --- */}
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${scrolled ? 'py-4 bg-[#faf8f1]/90 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'
          }`}
      >
        <div className="container-safe flex justify-between items-center px-[5%]">

          {/* 1. LOGO + BRANDING (Alineado a la izquierda) */}
          <Link href="/" className="flex items-center gap-3 group relative z-[102]" onClick={() => setMenuOpen(false)}>
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/logo.png"
                alt="Comfort Studio"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-['Montserrat'] font-bold text-[#b07357] text-sm md:text-base tracking-[1px]">
                COMFORT
              </span>
              <span className="font-['Montserrat'] font-light text-[#1e1713] text-xs md:text-sm tracking-[3px]">
                STUDIO
              </span>
            </div>
          </Link>

          {/* 2. MENÚ ESCRITORIO (Visible solo en pantallas grandes) */}
          <nav className="hidden md:flex items-center gap-8">
            {MENU_ITEMS.slice(0, 3).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[#1e1713] text-xs uppercase tracking-[2px] font-medium nav-link-hover"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 3. BOTÓN MENÚ / HAMBURGUESA (Derecha) */}
          <div className="flex items-center gap-4 relative z-[102]">
            {/* Botón Cotiza destacado */}
            <Link
              href="#contacto"
              className="hidden md:inline-block bg-[#b07357] text-white text-xs uppercase tracking-widest px-6 py-3 font-bold hover:bg-[#1e1713] transition-colors duration-300"
            >
              Cotizar
            </Link>

            {/* Trigger del Menú */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 group cursor-pointer"
              aria-label="Toggle Menu"
            >
              <span className="hidden md:block text-xs uppercase tracking-widest font-bold text-[#1e1713]">
                {menuOpen ? 'Cerrar' : 'Menú'}
              </span>
              <div className="w-8 h-8 flex flex-col justify-center items-end gap-1.5">
                <span
                  className={`h-[2px] bg-[#1e1713] transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-2 bg-white' : 'w-8'
                    }`}
                />
                <span
                  className={`h-[2px] bg-[#1e1713] transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-6'
                    }`}
                />
                <span
                  className={`h-[2px] bg-[#1e1713] transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-2 bg-white' : 'w-4 group-hover:w-8'
                    }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* --- OVERLAY MENU (PANTALLA COMPLETA) --- */}
      <div
        className={`fixed inset-0 bg-[#1e1713] z-[101] flex flex-col justify-center items-center transition-all duration-700 cubic-bezier(0.83, 0, 0.17, 1) ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
      >
        {/* Fondo decorativo */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

        {/* Lista de Navegación Gigante */}
        <nav className="flex flex-col items-center gap-6 md:gap-8 z-10">
          {MENU_ITEMS.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`group relative text-4xl md:text-6xl font-bold text-[#f9f3ec] uppercase tracking-wider font-['Montserrat'] overflow-hidden ${menuOpen ? 'nav-item-animate' : ''
                }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="relative z-10 group-hover:text-[#b07357] transition-colors duration-300">
                {item.label}
              </span>
              {/* Efecto de línea tachada al hover estilo Ribbit */}
              <span className="absolute left-0 top-1/2 w-0 h-[2px] bg-[#b07357] group-hover:w-full transition-all duration-500 ease-out -translate-y-1/2"></span>
            </Link>
          ))}
        </nav>

        {/* Info Footer del Menú */}
        <div className="absolute bottom-10 w-full px-[5%] flex flex-col md:flex-row justify-between items-center text-[#f9f3ec]/60 text-xs uppercase tracking-widest gap-4">
          <div className="flex gap-6">
            <a href="https://instagram.com" target="_blank" className="hover:text-[#b07357] transition-colors">Instagram</a>
            <a href="https://facebook.com" target="_blank" className="hover:text-[#b07357] transition-colors">Facebook</a>
            <a href="https://tiktok.com" target="_blank" className="hover:text-[#b07357] transition-colors">TikTok</a>
          </div>
          <div>
            Lima, Perú • 2025
          </div>
        </div>
      </div>
    </>
  );
}