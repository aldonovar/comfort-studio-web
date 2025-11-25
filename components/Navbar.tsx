'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const MENU = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Portafolio', href: '#portafolio' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'py-4 bg-[#f9f3ec]/90 backdrop-blur-md shadow-sm' : 'py-8 bg-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-[5%] flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group relative z-[60]">
            <div className="relative w-12 h-12">
              <Image src="/logo.png" alt="Comfort Studio" fill className="object-contain" priority />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#b07357] text-sm tracking-[0.2em] leading-none">COMFORT</span>
              <span className="font-medium text-[#1e1713] text-[0.65rem] tracking-[0.35em] leading-tight mt-0.5">STUDIO</span>
            </div>
          </Link>

          {/* MENÚ DESKTOP */}
          <nav className="hidden md:flex items-center gap-10">
            {MENU.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-xs font-bold text-[#1e1713] uppercase tracking-[0.2em] hover:text-[#b07357] transition-colors relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#b07357] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link 
              href="#contacto" 
              className="px-6 py-3 border border-[#1e1713] text-[#1e1713] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#1e1713] hover:text-white transition-all"
            >
              Cotizar
            </Link>
          </nav>

          {/* BOTÓN MÓVIL */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-[60] w-10 h-8 flex flex-col justify-between group"
          >
            <span className={`h-[2px] bg-[#1e1713] w-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[14px]' : ''}`}></span>
            <span className={`h-[2px] bg-[#1e1713] w-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-[2px] bg-[#1e1713] w-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[14px]' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* OVERLAY MENÚ MÓVIL */}
      <div className={`fixed inset-0 z-40 bg-[#f9f3ec] flex items-center justify-center transition-transform duration-700 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className="flex flex-col items-center gap-8">
          {MENU.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-serif text-[#1e1713] hover:text-[#b07357] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}