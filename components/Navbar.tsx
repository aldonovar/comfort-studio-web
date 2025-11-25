'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

// --- TIPOS DE DATOS COMPLEJOS ---
// Definimos una estructura rica para alimentar el Mega Menú
type SubItem = {
  label: string;
  href: string;
  description: string;
  videoSrc: string; // Video de fondo para cada sub-item
};

type NavItem = {
  label: string;
  href: string;
  hasMegaMenu?: boolean;
  items?: SubItem[];
};

// --- DATOS DE NAVEGACIÓN ---
const NAVIGATION_DATA: NavItem[] = [
  { label: 'INICIO', href: '#inicio' },
  {
    label: 'SERVICIOS',
    href: '#servicios',
    hasMegaMenu: true,
    items: [
      {
        label: 'Techos Sol y Sombra',
        href: '#servicios',
        description: 'Estructuras de madera y aluminio que doman la luz.',
        videoSrc: 'https://videos.pexels.com/video-files/7578544/7578544-uhd_2560_1440_30fps.mp4'
      },
      {
        label: 'Bioclimáticos',
        href: '#servicios',
        description: 'Control total del clima con lamas motorizadas.',
        videoSrc: 'https://videos.pexels.com/video-files/7578546/7578546-uhd_2560_1440_30fps.mp4'
      },
      {
        label: 'Outdoor Kitchens',
        href: '#servicios',
        description: 'Zonas de parrilla de alto rendimiento y lujo.',
        videoSrc: 'https://videos.pexels.com/video-files/4109022/4109022-uhd_2560_1440_25fps.mp4'
      },
      {
        label: 'Cerramientos',
        href: '#servicios',
        description: 'Sistemas de vidrio para disfrutar todo el año.',
        videoSrc: 'https://videos.pexels.com/video-files/6766857/6766857-uhd_2560_1440_30fps.mp4'
      }
    ]
  },
  {
    label: 'PROYECTOS',
    href: '#portafolio',
    hasMegaMenu: true,
    items: [
      {
        label: 'Residencial',
        href: '#portafolio',
        description: 'Espacios íntimos para la familia.',
        videoSrc: 'https://videos.pexels.com/video-files/7034446/7034446-uhd_2560_1440_25fps.mp4'
      },
      {
        label: 'Corporativo',
        href: '#portafolio',
        description: 'Rooftops que potencian tu marca.',
        videoSrc: 'https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4'
      },
      {
        label: 'Casas de Playa',
        href: '#portafolio',
        description: 'El refugio perfecto frente al mar.',
        videoSrc: 'https://videos.pexels.com/video-files/4910672/4910672-uhd_2560_1440_25fps.mp4'
      }
    ]
  },
  { label: 'COTIZA', href: '#contacto' },
  { label: 'CONTACTO', href: '#contacto' },
];

export default function Navbar() {
  // --- ESTADOS DE CONTROL ---
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Estados para el Mega Menú
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredSubItem, setHoveredSubItem] = useState<SubItem | null>(null);

  // Refs para control de timeouts (evitar parpadeos al mover el mouse)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // --- EFECTOS ---

  // 1. Control de Scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Bloqueo de Scroll Body
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  // --- MANEJADORES DE EVENTOS ---

  const handleMouseEnter = (label: string, items?: SubItem[]) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setActiveDropdown(label);
    // Si entramos a un menú nuevo, pre-seleccionamos el primer item para mostrar su video
    if (items && items.length > 0) {
      setHoveredSubItem(items[0]);
    }
  };

  const handleMouseLeave = () => {
    // Agregamos un pequeño delay antes de cerrar para mejorar UX
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setHoveredSubItem(null);
    }, 150);
  };

  const handleSubItemHover = (item: SubItem) => {
    setHoveredSubItem(item);
  };

  // --- RENDERIZADO ---

  return (
    <>
      {/* 
        ===============================================
        HEADER PRINCIPAL
        ===============================================
      */}
      <header
        onMouseLeave={handleMouseLeave} // Cerrar menú si el mouse sale de todo el header
        className={`
          fixed top-0 left-0 w-full z-[1000]
          transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)
          ${scrolled || activeDropdown || menuOpen
            ? 'bg-[#faf8f1] shadow-sm py-4'
            : 'bg-transparent py-8'}
        `}
      >
        <div className="container-safe px-[5%] h-full">
          <div className="flex justify-between items-center relative z-[1002]">

            {/* --- LOGO --- */}
            <Link href="/" className="flex items-center gap-4 group" onClick={() => setMenuOpen(false)}>
              <div className="relative w-10 h-10 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Comfort Studio Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col leading-none select-none">
                <span className={`
                  font-['Montserrat'] font-bold text-sm tracking-[0.2em] transition-colors duration-300
                  ${(scrolled || activeDropdown || menuOpen) ? 'text-[#b07357]' : 'text-[#b07357]'}
                `}>
                  COMFORT
                </span>
                <span className={`
                  font-['Montserrat'] font-light text-xs tracking-[0.4em] transition-colors duration-300
                  ${(scrolled || activeDropdown || menuOpen) ? 'text-[#1e1713]' : 'text-[#1e1713]'}
                `}>
                  STUDIO
                </span>
              </div>
            </Link>

            {/* --- NAVEGACIÓN ESCRITORIO --- */}
            <nav className="hidden lg:flex items-center gap-12 h-full">
              {NAVIGATION_DATA.map((item) => (
                <div
                  key={item.label}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => item.hasMegaMenu ? handleMouseEnter(item.label, item.items) : handleMouseEnter(item.label)}
                >
                  <Link
                    href={item.href}
                    className={`
                      text-xs font-bold uppercase tracking-[2px] py-4 relative overflow-hidden group
                      transition-colors duration-300 font-['Montserrat']
                      ${activeDropdown === item.label ? 'text-[#b07357]' : 'text-[#1e1713]'}
                    `}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className={`
                      absolute bottom-0 left-0 w-full h-[1px] bg-[#b07357]
                      transform transition-transform duration-300 origin-right
                      ${activeDropdown === item.label ? 'scale-x-100 origin-left' : 'scale-x-0'}
                    `} />
                  </Link>
                </div>
              ))}

              {/* Botón Cotizar Especial */}
              <Link
                href="#contacto"
                className={`
                  ml-4 px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-full
                  border transition-all duration-300
                  ${(scrolled || activeDropdown)
                    ? 'border-[#1e1713] text-[#1e1713] hover:bg-[#1e1713] hover:text-white'
                    : 'border-[#1e1713] text-[#1e1713] hover:bg-[#1e1713] hover:text-white'}
                `}
              >
                Cotizar
              </Link>
            </nav>

            {/* --- BOTÓN HAMBURGUESA (MÓVIL) --- */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-end gap-1.5 group z-[1005]"
            >
              <span className={`h-[2px] bg-[#1e1713] transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-8 group-hover:w-6'}`} />
              <span className={`h-[2px] bg-[#1e1713] transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-6'}`} />
              <span className={`h-[2px] bg-[#1e1713] transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-4 group-hover:w-8'}`} />
            </button>
          </div>
        </div>

        {/* 
          ===============================================
          MEGA MENÚ (DESKTOP)
          ===============================================
          Este panel se despliega desde el header cuando activeDropdown no es nulo
        */}
        <div
          className={`
            absolute top-full left-0 w-full bg-[#faf8f1] border-t border-[#1e1713]/5 shadow-2xl
            transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] overflow-hidden
            ${activeDropdown && NAVIGATION_DATA.find(i => i.label === activeDropdown)?.hasMegaMenu
              ? 'max-h-[600px] opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'}
          `}
          onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }}
          onMouseLeave={handleMouseLeave}
        >
          {NAVIGATION_DATA.map((category) => (
            category.hasMegaMenu && activeDropdown === category.label && (
              <div key={category.label} className="container-safe px-[5%] py-16 animate-mega-menu">
                <div className="grid grid-cols-12 gap-10 h-full">

                  {/* COLUMNA 1: Título y Descripción General */}
                  <div className="col-span-3 border-r border-[#1e1713]/10 pr-8 flex flex-col justify-between h-[400px]">
                    <div>
                      <h3 className="text-3xl font-['Montserrat'] font-light text-[#1e1713] mb-4 uppercase tracking-widest">
                        {category.label}
                      </h3>
                      <p className="text-[#4d3d34] text-sm leading-relaxed font-light">
                        Explora nuestra colección exclusiva de {category.label.toLowerCase()}.
                        Diseño de vanguardia para espacios que inspiran.
                      </p>
                    </div>
                    <div className="text-[#b07357] text-xs font-bold tracking-[2px] uppercase flex items-center gap-2 cursor-pointer group">
                      Ver todos los proyectos
                      <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
                    </div>
                  </div>

                  {/* COLUMNA 2: Lista Interactiva de Sub-items */}
                  <div className="col-span-4 flex flex-col justify-center gap-2">
                    {category.items?.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onMouseEnter={() => handleSubItemHover(item)}
                        className={`
                          group flex items-center justify-between p-4 rounded-lg transition-all duration-300
                          ${hoveredSubItem?.label === item.label ? 'bg-white shadow-sm translate-x-2' : 'hover:bg-white/50'}
                        `}
                      >
                        <div>
                          <h4 className={`
                            font-['Montserrat'] text-lg font-bold uppercase transition-colors
                            ${hoveredSubItem?.label === item.label ? 'text-[#b07357]' : 'text-[#1e1713]'}
                          `}>
                            {item.label}
                          </h4>
                          <p className="text-xs text-[#4d3d34]/70 mt-1 font-medium">
                            {item.description}
                          </p>
                        </div>
                        <span className={`
                          text-xl text-[#b07357] transition-opacity duration-300
                          ${hoveredSubItem?.label === item.label ? 'opacity-100' : 'opacity-0'}
                        `}>
                          •
                        </span>
                      </Link>
                    ))}
                  </div>

                  {/* COLUMNA 3: Video Preview Dinámico */}
                  <div className="col-span-5 relative rounded-2xl overflow-hidden bg-[#1e1713] shadow-inner h-[400px]">
                    {category.items?.map((item) => (
                      <div
                        key={item.label}
                        className={`
                          absolute inset-0 transition-opacity duration-700 ease-in-out
                          ${hoveredSubItem?.label === item.label ? 'opacity-100 z-10' : 'opacity-0 z-0'}
                        `}
                      >
                        <div className="absolute inset-0 bg-black/20 z-10" /> {/* Overlay para contraste */}
                        <video
                          src={item.videoSrc}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover transform scale-105 video-reveal"
                        />
                        <div className="absolute bottom-6 left-6 z-20 text-white">
                          <p className="text-[10px] uppercase tracking-[3px] mb-2 opacity-80">Visualización</p>
                          <h5 className="text-2xl font-['Montserrat'] font-bold">{item.label}</h5>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            )
          ))}
        </div>
      </header>

      {/* 
        ===============================================
        MENÚ MÓVIL (FULL SCREEN OVERLAY)
        ===============================================
      */}
      <div
        className={`
          fixed inset-0 z-[999] bg-[#111111] flex flex-col justify-center
          transition-all duration-700 cubic-bezier(0.77, 0, 0.175, 1)
          ${menuOpen ? 'translate-y-0 rounded-none' : '-translate-y-full rounded-b-[50%]'}
        `}
      >
        {/* Fondo con textura */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

        <div className="container-safe px-[5%] w-full flex flex-col gap-8 relative z-10">
          <nav className="flex flex-col items-start gap-4">
            {NAVIGATION_DATA.map((item, index) => (
              <div key={item.label} className="overflow-hidden w-full group">
                <div className="flex items-center justify-between w-full border-b border-white/10 pb-4">
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`
                      text-4xl md:text-6xl font-bold uppercase font-['Montserrat'] text-white/90 
                      hover:text-[#b07357] transition-colors duration-500
                      ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
                    `}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {item.label}
                  </Link>

                  {/* Indicador de submenú en móvil */}
                  {item.hasMegaMenu && (
                    <span className="text-[#b07357] text-sm font-light uppercase tracking-widest hidden md:block">
                      Explorar +
                    </span>
                  )}
                </div>

                {/* Sub-items visibles directamente en móvil para mejor UX */}
                {item.hasMegaMenu && (
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100 mt-2 pl-2">
                    <div className="flex flex-col gap-2 border-l border-[#b07357] pl-4 py-2">
                      {item.items?.map(sub => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setMenuOpen(false)}
                          className="text-white/60 text-sm hover:text-white uppercase tracking-wide"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Footer del Menú Móvil */}
          <div className="flex flex-col gap-4 mt-8">
            <p className="text-[#b07357] text-xs uppercase tracking-widest mb-2">Síguenos</p>
            <div className="flex gap-8 text-white/50 text-sm uppercase tracking-wider font-medium">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">TikTok</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}