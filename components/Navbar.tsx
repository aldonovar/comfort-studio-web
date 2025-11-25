'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const MENU_ITEMS = [
  { label: 'INICIO', href: '#inicio' },
  { label: 'SERVICIOS', href: '#experiencia' }, // Apunta a la sección de experiencia/servicios
  { label: 'PROYECTOS', href: '#portafolio' },
  { label: 'CONTACTO', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Refs para animaciones GSAP
  const menuOverlayRef = useRef(null);
  const menuLinksRef = useRef<HTMLDivElement>(null);

  // 1. Detectar Scroll para efecto Vidrio
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Animación del Menú Móvil (GSAP Timeline)
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'; // Bloquear scroll

      const tl = gsap.timeline();

      // A. Baja la cortina
      tl.to(menuOverlayRef.current, {
        y: '0%',
        duration: 0.8,
        ease: 'power4.inOut',
      });

      // B. Aparecen los enlaces (uno por uno)
      tl.fromTo('.mobile-nav-item',
        { y: 100, opacity: 0, rotateX: -10 },
        { y: 0, opacity: 1, rotateX: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out' },
        "-=0.4"
      );

    } else {
      document.body.style.overflow = 'auto'; // Desbloquear scroll

      const tl = gsap.timeline();

      // A. Sube la cortina
      tl.to(menuOverlayRef.current, {
        y: '-100%',
        duration: 0.8,
        ease: 'power4.inOut',
      });
    }
  }, [menuOpen]);

  return (
    <>
      {/* ===============================================
        NAVBAR DESKTOP & MOBILE HEADER
        ===============================================
      */}
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${scrolled
            ? 'glass-panel py-4 shadow-sm'
            : 'bg-transparent py-8'
          }`}
      >
        <div className="container-safe flex justify-between items-center">

          {/* --- 1. LOGO --- */}
          <Link href="/" className="relative z-[1002] flex items-center gap-3 group" onClick={() => setMenuOpen(false)}>
            <div className="relative w-[45px] h-[45px] transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Comfort Studio"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-['Montserrat'] font-bold text-[#b07357] text-sm tracking-[0.15em]">
                COMFORT
              </span>
              <span className="font-['Montserrat'] font-medium text-[#1e1713] text-[0.6rem] tracking-[0.3em]">
                STUDIO
              </span>
            </div>
          </Link>

          {/* --- 2. MENÚ CENTRAL (Solo Desktop) --- */}
          {/* Oculto en móvil, visible en lg */}
          <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 transform -translate-x-1/2">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* --- 3. ACCIONES DERECHA --- */}
          <div className="flex items-center gap-6 relative z-[1002]">

            {/* Botón Cotizar (Pill Style) */}
            <Link
              href="#contacto"
              className={`
                hidden md:inline-flex items-center justify-center
                px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300
                border border-[#1e1713]
                hover:bg-[#1e1713] hover:text-white
                ${scrolled ? 'bg-[#1e1713] text-white' : 'text-[#1e1713]'}
              `}
            >
              Cotizar
            </Link>

            {/* Botón Hamburguesa (Animado) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-12 h-12 flex flex-col justify-center items-end gap-[6px] group lg:hidden"
              aria-label="Abrir menú"
            >
              <span className={`burger-line ${menuOpen ? 'w-6 rotate-45 translate-y-[8px]' : 'w-8 group-hover:w-6'}`} />
              <span className={`burger-line ${menuOpen ? 'w-0 opacity-0' : 'w-5'}`} />
              <span className={`burger-line ${menuOpen ? 'w-6 -rotate-45 -translate-y-[8px]' : 'w-8 group-hover:w-6'}`} />
            </button>
          </div>

        </div>
      </header>

      {/* ===============================================
        FULL SCREEN OVERLAY MENU (MÓVIL & TABLET)
        ===============================================
      */}
      <div
        ref={menuOverlayRef}
        className="fixed inset-0 z-[1001] bg-[#f9f3ec] flex flex-col justify-center items-center translate-y-[-100%]"
        style={{ willChange: 'transform' }} // Optimización de rendimiento
      >
        {/* Ruido de fondo para textura */}
        <div className="absolute inset-0 noise-overlay opacity-50"></div>

        <nav ref={menuLinksRef} className="relative z-10 flex flex-col items-center gap-6">
          {MENU_ITEMS.map((item, i) => (
            <div key={item.label} className="overflow-hidden">
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="mobile-nav-item mobile-link block text-center"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        {/* Footer del Menú */}
        <div className="absolute bottom-10 w-full px-10 flex justify-between text-[#1e1713]/40 text-[10px] uppercase tracking-widest font-bold">
          <span>Lima, Perú</span>
          <span>© 2025</span>
        </div>
      </div>
    </>
  );
}