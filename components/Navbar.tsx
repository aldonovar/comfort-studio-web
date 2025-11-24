'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const MENU_ITEMS = [
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portafolio', href: '#portafolio' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  // Detectar scroll para activar el modo "Flotante"
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animación del Menú Móvil con GSAP
  useEffect(() => {
    if (menuOpen) {
      // Bloquear scroll del body
      document.body.style.overflow = 'hidden';

      // Animación de entrada (Cortina negra elegante)
      gsap.to(menuRef.current, {
        y: '0%',
        duration: 0.8,
        ease: 'power4.inOut',
      });

      // Animación de los enlaces (Stagger)
      gsap.fromTo(
        '.mobile-link',
        { y: 100, opacity: 0, skewY: 5 },
        { y: 0, opacity: 1, skewY: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.4 }
      );
    } else {
      // Desbloquear scroll
      document.body.style.overflow = 'auto';

      // Animación de salida
      gsap.to(menuRef.current, {
        y: '-100%',
        duration: 0.8,
        ease: 'power4.inOut',
      });
    }
  }, [menuOpen]);

  return (
    <>
      {/* --- BARRA DE NAVEGACIÓN PRINCIPAL --- */}
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled ? 'py-4' : 'py-8'
          }`}
      >
        <div className="container-safe flex justify-center">
          <div
            className={`flex justify-between items-center w-full transition-all duration-500 ${isScrolled
              ? 'bg-[rgba(244,240,235,0.6)] backdrop-blur-xl border border-white/40 shadow-lg rounded-full px-8 py-3 max-w-5xl mx-auto' // Modo "Píldora Flotante"
              : 'bg-transparent px-0 max-w-full' // Modo "Limpio"
              }`}
          >
            {/* 1. LOGO (Tipografía Serif para elegancia) */}
            <Link href="/" className="relative z-[102] group" onClick={() => setMenuOpen(false)}>
              <div className="flex flex-col leading-none">
                <span className={`font-serif font-bold tracking-wider transition-colors duration-300 ${isScrolled ? 'text-[#1a1818] text-xl' : 'text-[#1a1818] text-2xl'}`}>
                  COMFORT
                </span>
                <span className={`font-sans text-[0.65rem] tracking-[0.3em] uppercase transition-colors duration-300 ${isScrolled ? 'text-[#b07357]' : 'text-[#1a1818]/60'}`}>
                  STUDIO
                </span>
              </div>
            </Link>

            {/* 2. MENÚ DESKTOP (Solo visible en pantallas grandes) */}
            <nav className="hidden md:flex items-center gap-10">
              {MENU_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs font-medium uppercase tracking-[0.15em] text-[#1a1818] hover:text-[#b07357] transition-colors relative group"
                >
                  {item.label}
                  {/* Subrayado animado */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#b07357] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* 3. BOTONES DERECHA (Cotizar + Hamburguesa) */}
            <div className="flex items-center gap-4 relative z-[102]">

              {/* Botón Cotizar (Estilo Pill, desaparece en móvil muy pequeño) */}
              <Link
                href="#contacto"
                className={`hidden sm:inline-flex btn-primary !py-3 !px-6 !text-[0.7rem] ${isScrolled ? '!bg-[#1a1818] text-white' : ''}`}
              >
                Cotizar Proyecto
              </Link>

              {/* Botón Hamburguesa Magnético (Estilo Awwwards) */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-12 h-12 rounded-full border border-[#1a1818]/20 flex flex-col items-center justify-center gap-[5px] hover:bg-[#1a1818] hover:border-[#1a1818] group transition-all duration-300 bg-white/50 backdrop-blur-sm"
              >
                <span className={`w-5 h-[1.5px] bg-[#1a1818] transition-all duration-300 group-hover:bg-[#f4f0eb] ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
                <span className={`w-5 h-[1.5px] bg-[#1a1818] transition-all duration-300 group-hover:bg-[#f4f0eb] ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-5 h-[1.5px] bg-[#1a1818] transition-all duration-300 group-hover:bg-[#f4f0eb] ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- MENÚ FULLSCREEN OVERLAY (MÓVIL/TABLET) --- */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-[101] bg-[#1a1818] text-[#f4f0eb] flex flex-col justify-center items-center translate-y-[-100%]"
      >
        {/* Fondo de ruido para textura */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none noise-overlay invert"></div>

        <nav className="flex flex-col items-center gap-6 relative z-10">
          {/* Enlace Inicio (Extra) */}
          <div className="overflow-hidden">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="mobile-link block font-serif text-5xl md:text-7xl text-transparent stroke-text hover:text-[#f4f0eb] transition-colors duration-500 italic"
              style={{ WebkitTextStroke: '1px rgba(244, 240, 235, 0.5)' }}
            >
              Inicio
            </Link>
          </div>

          {MENU_ITEMS.map((item) => (
            <div key={item.label} className="overflow-hidden">
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="mobile-link block font-serif text-5xl md:text-7xl font-light tracking-tight hover:text-[#b07357] transition-colors duration-300"
              >
                {item.label}
              </Link>
            </div>
          ))}

          <div className="overflow-hidden mt-8">
            <Link
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="mobile-link inline-block text-sm font-sans tracking-[0.2em] uppercase border border-[#f4f0eb]/30 rounded-full px-8 py-4 hover:bg-[#b07357] hover:border-[#b07357] transition-all duration-300"
            >
              Empezar Proyecto
            </Link>
          </div>
        </nav>

        {/* Footer del Menú */}
        <div className="absolute bottom-10 w-full px-10 flex justify-between text-xs uppercase tracking-widest opacity-40 font-sans">
          <span>Lima, PE</span>
          <span>est. 2025</span>
        </div>
      </div>
    </>
  );
}