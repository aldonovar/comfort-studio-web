'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import TopBanner from './TopBanner';

// Enlaces del menú principal
const MENU_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#experiencia' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#portafolio' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detectar scroll para cambiar el fondo del header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <>
      {/* --- TOP BANNER (Se oculta al bajar) --- */}
      <div 
        style={{
          position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 102,
          transform: scrolled ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'transform 0.5s ease'
        }}
      >
        <TopBanner />
      </div>

      {/* --- HEADER PRINCIPAL --- */}
      <header
        style={{
          position: 'fixed',
          top: 0, left: 0, width: '100%',
          zIndex: 100,
          padding: scrolled ? '15px 0' : '30px 0', // Más aire al inicio
          paddingTop: scrolled ? '15px' : '50px', // Compensa el banner
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: scrolled ? '#f9f3ec' : 'transparent', // Color arena solido al bajar
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none'
        }}
      >
        <div className="container-safe flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 relative z-[101]" onClick={() => setMenuOpen(false)}>
            <div style={{ position: 'relative', width: '45px', height: '45px' }}>
              <Image 
                src="/logo.png" 
                alt="Comfort Studio" 
                fill 
                style={{ objectFit: 'contain' }} 
                priority 
              />
            </div>
            <div className="flex flex-col leading-none">
              <span style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, color: '#1e1713', fontSize: '0.9rem', letterSpacing: '2px' }}>
                COMFORT
              </span>
              <span style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 400, color: '#b07357', fontSize: '0.75rem', letterSpacing: '3px' }}>
                STUDIO
              </span>
            </div>
          </Link>

          {/* BOTONES DERECHA */}
          <div className="flex items-center gap-6 relative z-[101]">
            {/* Botón Cotizar (Visible en escritorio, se oculta en móvil) */}
            <Link 
              href="#contacto" 
              className="hidden md:inline-block btn-outline"
              style={{ padding: '0.6rem 1.5rem', fontSize: '0.75rem', border: '1px solid #1e1713', color: '#1e1713' }}
            >
              COTIZAR
            </Link>

            {/* BOTÓN MENÚ (HAMBURGUESA PREMIUM) */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col items-end justify-center gap-[6px] w-[40px] h-[40px] group"
            >
              {/* Línea 1 */}
              <span 
                style={{ 
                  width: menuOpen ? '30px' : '30px', 
                  height: '2px', 
                  backgroundColor: menuOpen ? '#ffffff' : '#1e1713', // Blanco si el menú está abierto (fondo oscuro)
                  transform: menuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none',
                  transition: 'all 0.3s ease'
                }} 
              />
              {/* Línea 2 */}
              <span 
                style={{ 
                  width: menuOpen ? '0px' : '20px', // Se encoge al abrir
                  height: '2px', 
                  backgroundColor: '#1e1713',
                  transition: 'all 0.3s ease'
                }} 
              />
              {/* Línea 3 */}
              <span 
                style={{ 
                  width: menuOpen ? '30px' : '30px', 
                  height: '2px', 
                  backgroundColor: menuOpen ? '#ffffff' : '#1e1713',
                  transform: menuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none',
                  transition: 'all 0.3s ease'
                }} 
              />
            </button>
          </div>
        </div>
      </header>

      {/* --- MENÚ OVERLAY (PANTALLA COMPLETA DARK) --- */}
      <div 
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: '#1a1a1a', // Fondo oscuro "Mynd"
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'transform 0.6s cubic-bezier(0.83, 0, 0.17, 1)', // Transición cinemática lenta
          transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        {/* Fondo decorativo sutil */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <nav className="flex flex-col items-start gap-4">
          {MENU_ITEMS.map((item, index) => (
            <div key={item.label} style={{ overflow: 'hidden' }}>
              <Link 
                href={item.href} 
                onClick={() => setMenuOpen(false)}
                className={`text-[3rem] md:text-[4.5rem] font-bold uppercase font-[Montserrat] menu-link block ${menuOpen ? 'animate-menu-item' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }} // Aparición escalonada
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        {/* Footer del Menú */}
        <div 
          className={`absolute bottom-10 left-0 w-full px-[5%] flex justify-between text-white/50 text-xs uppercase tracking-widest ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          style={{ transition: 'opacity 1s ease 0.5s' }}
        >
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
          </div>
          <div>Lima, Perú</div>
        </div>
      </div>
    </>
  );
}