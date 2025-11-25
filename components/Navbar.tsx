'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const MENU_ITEMS = [
  { label: 'INICIO', href: '#inicio' },
  { label: 'SERVICIOS', href: '#servicios' },
  { label: 'PROYECTOS', href: '#portafolio' },
  { label: 'CONTACTO', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const overlayRef = useRef(null);
  const linksRef = useRef<HTMLDivElement>(null);

  // 1. Control de Scroll (Efecto Vidrio)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Animación Menú Móvil (GSAP)
  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    
    tl.to(overlayRef.current, {
      y: '0%',
      duration: 0.8,
      ease: 'power4.inOut',
    }).fromTo(linksRef.current?.children || [], 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power3.out' },
      "-=0.4"
    );

    if (menuOpen) {
      tl.play();
      document.body.style.overflow = 'hidden';
    } else {
      tl.reverse();
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  return (
    <>
      {/* --- HEADER FIXED --- */}
      <header
        className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          scrolled 
            ? 'py-4 bg-[#f9f3ec]/85 backdrop-blur-xl border-b border-[#1e1713]/5 shadow-sm' 
            : 'py-8 bg-transparent'
        }`}
      >
        <div className="container-safe flex justify-between items-center">
          
          {/* LOGO (Texto + Imagen para seguridad) */}
          <Link href="/" className="flex items-center gap-3 group relative z-[10002]">
            <div className="relative w-10 h-10 overflow-hidden">
              <Image 
                src="/logo.png" 
                alt="Comfort Studio" 
                fill 
                className="object-contain transition-transform duration-500 group-hover:scale-110"
                priority 
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-sans font-bold text-[#b07357] text-xs tracking-[0.2em]">COMFORT</span>
              <span className="font-sans font-medium text-[#1e1713] text-[0.6rem] tracking-[0.35em]">STUDIO</span>
            </div>
          </Link>

          {/* MENÚ DESKTOP (Centro) */}
          <nav className="hidden lg:flex items-center gap-12 absolute left-1/2 transform -translate-x-1/2">
            {MENU_ITEMS.map((item) => (
              <Link 
                key={item.label}
                href={item.href}
                className="text-xs font-bold text-[#1e1713] tracking-[0.2em] py-2 relative group overflow-hidden"
              >
                <span className="relative z-10 transition-colors group-hover:text-[#b07357]">{item.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#b07357] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
              </Link>
            ))}
          </nav>

          {/* ACCIONES (Derecha) */}
          <div className="flex items-center gap-6 relative z-[10002]">
            <Link 
              href="#contacto"
              className="hidden md:flex border border-[#1e1713] px-8 py-3 text-[0.7rem] font-bold tracking-[0.25em] text-[#1e1713] hover:bg-[#1e1713] hover:text-white transition-all duration-300"
            >
              COTIZAR
            </Link>

            {/* Botón Hamburguesa */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-8 flex flex-col justify-between group"
            >
              <span className={`h-[2px] bg-[#1e1713] w-full transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[14px]' : ''}`} />
              <span className={`h-[2px] bg-[#1e1713] w-full transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-[2px] bg-[#1e1713] w-full transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-[14px]' : ''}`} />
            </button>
          </div>

        </div>
      </header>

      {/* --- MENÚ MÓVIL OVERLAY --- */}
      <div 
        ref={overlayRef}
        className="fixed inset-0 z-[10000] bg-[#1e1713] flex items-center justify-center translate-y-[-100%]"
      >
        <nav ref={linksRef} className="flex flex-col items-center gap-8 text-center">
          {MENU_ITEMS.map((item) => (
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