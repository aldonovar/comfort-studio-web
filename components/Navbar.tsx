'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const MENU_ITEMS = [
  { label: 'INICIO', href: '#inicio' },
  { label: 'SERVICIOS', href: '#servicios' },
  { label: 'PROYECTOS', href: '#portafolio' },
  { label: 'EXPERIENCIA', href: '#experiencia' },
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <>
      {/* BARRA DE NAVEGACIÓN */}
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4 bg-[#faf8f1]/95 backdrop-blur-md shadow-sm' : 'py-8 bg-transparent'
          }`}
      >
        <div className="container-safe flex justify-between items-center">

          {/* 1. LOGO */}
          <Link href="/" className="flex items-center gap-3 relative z-[102]" onClick={() => setMenuOpen(false)}>
            {/* Contenedor rígido para el logo para evitar que desaparezca */}
            <div className="relative w-[50px] h-[50px]">
              <Image
                src="/logo.png"
                alt="Comfort Studio Logo"
                fill
                className="object-contain"
                priority
                sizes="50px"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-[#b07357] text-sm tracking-[2px]">COMFORT</span>
              <span className="font-light text-[#1e1713] text-xs tracking-[3px]">STUDIO</span>
            </div>
          </Link>

          {/* 2. MENÚ ESCRITORIO */}
          <nav className="hidden lg:flex items-center gap-8">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
            <Link href="#contacto" className="btn-primary !py-3 !px-6 !text-xs">
              COTIZAR
            </Link>
          </nav>

          {/* 3. BOTÓN HAMBURGUESA (MÓVIL) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative z-[102] w-10 h-10 flex flex-col justify-center items-end gap-1.5"
          >
            <span className={`h-[2px] bg-[#1e1713] transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-8'}`} />
            <span className={`h-[2px] bg-[#1e1713] transition-all duration-300 ${menuOpen ? 'opacity-0' : 'w-6'}`} />
            <span className={`h-[2px] bg-[#1e1713] transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-4'}`} />
          </button>
        </div>
      </header>

      {/* MENÚ MÓVIL (OVERLAY) */}
      <div
        className={`fixed inset-0 bg-[#faf8f1] z-[101] flex flex-col justify-center items-center transition-transform duration-500 ease-in-out ${menuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold text-[#1e1713] uppercase tracking-widest hover:text-[#b07357] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-8">
            <Link href="#contacto" onClick={() => setMenuOpen(false)} className="btn-primary">
              AGENDAR CITA
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}