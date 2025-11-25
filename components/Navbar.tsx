'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const MENU_ITEMS = [
  { label: 'INICIO', href: '#inicio' },
  { label: 'SERVICIOS', href: '#servicios' },
  { label: 'PROYECTOS', href: '#portafolio' },
  { label: 'NOSOTROS', href: '#experiencia' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Efecto de Scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* HEADER FIXED
          z-[1000] asegura que esté sobre todo.
          mix-blend-mode opcional para efectos creativos, pero por ahora lo mantenemos sólido para legibilidad.
      */}
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${scrolled
            ? 'py-4 bg-[#f9f3ec]/90 backdrop-blur-md border-b border-[#1e1713]/5'
            : 'py-8 bg-transparent'
          }`}
      >
        <div className="container-safe px-[5%] mx-auto w-full">
          <div className="flex items-center justify-between">

            {/* 1. LOGO (Izquierda) */}
            <Link href="/" className="relative z-[1002] group flex items-center gap-3">
              <div className="relative w-[45px] h-[45px] overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Comfort Studio Logo"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-sans font-bold text-[#b07357] text-xs tracking-[0.2em]">
                  COMFORT
                </span>
                <span className="font-sans font-medium text-[#1e1713] text-[0.6rem] tracking-[0.35em]">
                  STUDIO
                </span>
              </div>
            </Link>

            {/* 2. NAVEGACIÓN (Centro - Solo Desktop) */}
            <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 transform -translate-x-1/2">
              {MENU_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative text-xs font-bold text-[#1e1713] tracking-[0.15em] py-2 overflow-hidden group"
                >
                  <span className="relative z-10">{item.label}</span>
                  {/* Línea de Hover animada */}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#b07357] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
                </Link>
              ))}
            </nav>

            {/* 3. ACCIONES (Derecha) */}
            <div className="flex items-center gap-6 relative z-[1002]">
              {/* Botón Cotizar */}
              <Link
                href="#contacto"
                className={`
                  hidden md:inline-flex px-6 py-3 border text-xs font-bold tracking-[0.2em] transition-all duration-300
                  ${scrolled
                    ? 'border-[#1e1713] text-[#f9f3ec] bg-[#1e1713] hover:bg-transparent hover:text-[#1e1713]'
                    : 'border-[#1e1713] text-[#1e1713] hover:bg-[#1e1713] hover:text-[#f9f3ec]'}
                `}
              >
                COTIZAR
              </Link>

              {/* Botón Hamburguesa (Móvil) */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex flex-col gap-1.5 w-8 group"
              >
                <span className={`h-[2px] bg-[#1e1713] transition-all duration-300 ${menuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`} />
                <span className={`h-[2px] bg-[#1e1713] transition-all duration-300 ${menuOpen ? 'opacity-0' : 'w-6 group-hover:w-8'}`} />
                <span className={`h-[2px] bg-[#1e1713] transition-all duration-300 ${menuOpen ? 'w-8 -rotate-45 -translate-y-2.5' : 'w-4 group-hover:w-8'}`} />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* MENÚ MÓVIL OVERLAY */}
      <div
        className={`
          fixed inset-0 z-[1001] bg-[#1e1713] flex items-center justify-center
          transition-transform duration-[0.8s] ease-[cubic-bezier(0.77,0,0.175,1)]
          ${menuOpen ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        <nav className="flex flex-col items-center gap-8 text-center">
          {MENU_ITEMS.map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-4xl md:text-6xl font-serif italic text-[#f9f3ec] hover:text-[#b07357] transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}