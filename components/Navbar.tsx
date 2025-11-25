'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const MENU_ITEMS = [
  { label: 'INICIO', href: '#inicio' },
  { label: 'SERVICIOS', href: '#servicios' },
  { label: 'PROYECTOS', href: '#portafolio' },
  { label: 'NOSOTROS', href: '#experiencia' },
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

  return (
    <>
      {/* HEADER FIXED */}
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
          scrolled ? 'py-4 bg-[#f9f3ec]/90 backdrop-blur-md border-b border-[#1e1713]/5' : 'py-8 bg-transparent'
        }`}
      >
        <div className="container-safe flex justify-between items-center">
          
          {/* 1. LOGO & MARCA */}
          <Link href="/" className="relative z-[1002] flex items-center gap-4 group">
            <div className="relative w-[50px] h-[50px]">
              <Image 
                src="/logo.png" 
                alt="Comfort Studio" 
                fill 
                className="object-contain"
                priority 
              />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-[#b07357] text-sm tracking-[0.25em] leading-none">
                COMFORT
              </span>
              <span className="font-sans font-medium text-[#1e1713] text-[0.7rem] tracking-[0.4em] leading-tight mt-1">
                STUDIO
              </span>
            </div>
          </Link>

          {/* 2. MENÚ ESCRITORIO (Visible en lg+) */}
          <nav className="hidden lg:flex items-center gap-12">
            {MENU_ITEMS.map((item) => (
              <Link 
                key={item.label}
                href={item.href}
                className="relative text-xs font-bold text-[#1e1713] tracking-[0.2em] py-2 group overflow-hidden"
              >
                <span className="relative z-10 transition-colors group-hover:text-[#b07357]">
                  {item.label}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#b07357] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              </Link>
            ))}
          </nav>

          {/* 3. ACCIONES & HAMBURGUESA */}
          <div className="flex items-center gap-6 relative z-[1002]">
            <Link 
              href="#contacto"
              className="hidden md:flex border border-[#1e1713] px-8 py-3 text-xs font-bold tracking-[0.2em] text-[#1e1713] hover:bg-[#1e1713] hover:text-[#f9f3ec] transition-all duration-300"
            >
              COTIZAR
            </Link>

            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-8 flex flex-col justify-between group cursor-pointer"
            >
              <span className={`h-[2px] bg-[#1e1713] w-full transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[14px]' : ''}`} />
              <span className={`h-[2px] bg-[#1e1713] w-full transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-[2px] bg-[#1e1713] w-full transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-[14px]' : ''}`} />
            </button>
          </div>

        </div>
      </header>

      {/* MENÚ MÓVIL OVERLAY */}
      <div 
        className={`fixed inset-0 z-[1001] bg-[#1e1713] flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
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