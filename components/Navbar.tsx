'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const MENU_ITEMS = [
  { label: 'INICIO', href: '#inicio' },
  { label: 'SERVICIOS', href: '#servicios' },
  { label: 'PROYECTOS', href: '#portafolio' },
  { label: 'CONTACTO', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Control de Scroll para cambiar estilo
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll en móvil
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    }
  }, [menuOpen]);

  return (
    <>
      {/* HEADER PRINCIPAL 
        - Fixed para que siga al usuario.
        - Transition suave de color y padding.
      */}
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ease-in-out border-b ${scrolled
            ? 'bg-[#faf8f1]/95 backdrop-blur-md py-4 border-[#1e1713]/5 shadow-sm'
            : 'bg-transparent py-8 border-transparent'
          }`}
      >
        {/* Contenedor Full Width con Padding Arquitectónico */}
        <div className="w-full px-[5%] mx-auto flex justify-between items-center h-full">

          {/* 1. LOGO (Izquierda) */}
          <Link href="/" className="relative z-[1002] group flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            {/* Imagen del Logo - Forzamos dimensiones */}
            <div className="relative w-[50px] h-[50px] transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Comfort Studio"
                fill
                className="object-contain" // Asegura que el logo se vea completo
                priority
              />
            </div>

            {/* Texto del Logo (Opcional, refuerza la marca si la imagen falla) */}
            <div className={`flex flex-col leading-none transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-100'}`}>
              <span className="font-['Montserrat'] font-bold text-[#b07357] text-sm tracking-[0.2em]">
                COMFORT
              </span>
              <span className="font-['Montserrat'] font-medium text-[#1e1713] text-[0.65rem] tracking-[0.35em]">
                STUDIO
              </span>
            </div>
          </Link>

          {/* 2. NAVEGACIÓN CENTRAL (Escritorio) */}
          <nav className="hidden lg:flex items-center justify-center gap-12 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="nav-link font-['Montserrat'] text-[#1e1713]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 3. ACCIONES (Derecha) */}
          <div className="hidden lg:flex items-center gap-6 relative z-[1002]">
            {/* Redes Sociales Minimalistas */}
            <div className="flex gap-4 pr-6 border-r border-[#1e1713]/20">
              <a href="#" className="text-[#1e1713] hover:text-[#b07357] transition-colors text-xs font-bold">IG</a>
              <a href="#" className="text-[#1e1713] hover:text-[#b07357] transition-colors text-xs font-bold">FB</a>
            </div>

            {/* Botón Cotizar */}
            <Link href="#contacto" className="btn-nav bg-transparent hover:bg-[#1e1713] hover:text-white">
              COTIZAR PROYECTO
            </Link>
          </div>

          {/* 4. BOTÓN HAMBURGUESA (Móvil) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative z-[1002] w-12 h-12 flex flex-col items-end justify-center gap-1.5 group"
          >
            <span className={`h-[2px] bg-[#1e1713] transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-8 group-hover:w-10'}`} />
            <span className={`h-[2px] bg-[#1e1713] transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-6 group-hover:w-10'}`} />
            <span className={`h-[2px] bg-[#1e1713] transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-4 group-hover:w-10'}`} />
          </button>

        </div>
      </header>

      {/* MENÚ OVERLAY (Móvil) 
        Pantalla completa limpia y elegante
      */}
      <div
        className={`
          fixed inset-0 z-[1001] mobile-menu-overlay flex flex-col justify-center items-center
          transition-transform duration-700 cubic-bezier(0.77, 0, 0.175, 1)
          ${menuOpen ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        <nav className="flex flex-col items-center gap-8 text-center">
          {MENU_ITEMS.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`
                text-4xl font-light font-serif text-[#1e1713] hover:text-[#b07357] italic
                transition-all duration-500 transform
                ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.label}
            </Link>
          ))}

          <div className="w-16 h-[1px] bg-[#b07357] my-4 opacity-50"></div>

          <Link
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-bold tracking-[3px] uppercase text-[#1e1713] border border-[#1e1713] px-8 py-3 mt-4"
          >
            Iniciar Cotización
          </Link>
        </nav>
      </div>
    </>
  );
}