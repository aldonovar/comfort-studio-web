'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const MENU_ITEMS = [
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#portafolio' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll body al abrir menú
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    }
  }, [menuOpen]);

  return (
    <>
      {/* --- BARRA DE NAVEGACIÓN --- */}
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'
          }`}
      >
        <div className="container-safe flex justify-center px-[5%]">
          <div
            className={`flex justify-between items-center w-full transition-all duration-500 ${isScrolled
                ? 'bg-[#f9f3ec]/80 backdrop-blur-xl border border-white/40 shadow-sm rounded-full px-8 py-3 max-w-6xl mx-auto'
                : 'bg-transparent px-0 max-w-full'
              }`}
          >
            {/* LOGO */}
            <Link href="/" className="relative z-[102] flex flex-col leading-none group" onClick={() => setMenuOpen(false)}>
              <span className="font-display font-bold text-xl tracking-wide text-[#1e1713]">COMFORT</span>
              <span className="font-sans text-[0.6rem] tracking-[0.3em] text-[#b07357]">STUDIO</span>
            </Link>

            {/* MENÚ ESCRITORIO */}
            <nav className="hidden md:flex items-center gap-10">
              {MENU_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs font-bold uppercase tracking-[2px] text-[#1e1713] hover:text-[#b07357] transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#b07357] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* ACCIONES DERECHA */}
            <div className="flex items-center gap-4 relative z-[102]">
              <Link
                href="#contacto"
                className={`hidden sm:inline-flex btn-primary !py-3 !px-6 !text-[0.7rem] ${isScrolled ? '!bg-[#1e1713] text-white' : ''}`}
              >
                Cotizar
              </Link>

              {/* HAMBURGUESA (Visible siempre en móvil, oculta en desktop si no quieres menú extra) */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden w-12 h-12 rounded-full border border-[#1e1713]/10 flex flex-col items-center justify-center gap-[5px] hover:bg-[#1e1713] group transition-all duration-300 bg-white/50 backdrop-blur-sm"
              >
                <span className={`w-5 h-[1.5px] bg-[#1e1713] transition-all duration-300 group-hover:bg-[#f9f3ec] ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
                <span className={`w-5 h-[1.5px] bg-[#1e1713] transition-all duration-300 group-hover:bg-[#f9f3ec] ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-5 h-[1.5px] bg-[#1e1713] transition-all duration-300 group-hover:bg-[#f9f3ec] ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- OVERLAY MENÚ MÓVIL (Negro Elegante) --- */}
      <div
        className={`fixed inset-0 z-[99] bg-[#111111] flex flex-col justify-center items-center transition-transform duration-700 cubic-bezier(0.83, 0, 0.17, 1) ${menuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {MENU_ITEMS.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`text-4xl md:text-6xl font-display italic text-white hover:text-[#b07357] transition-colors duration-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="mt-8 px-8 py-4 border border-white/20 rounded-full text-white uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all"
          >
            Iniciar Proyecto
          </Link>
        </nav>
      </div>
    </>
  );
}