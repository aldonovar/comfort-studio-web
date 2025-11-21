'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ServicesScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Registrar plugin solo en cliente para evitar errores
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    const section = sectionRef.current;
    const trigger = triggerRef.current;

    if (!section || !trigger) return;

    // Animación de desplazamiento horizontal anclado (Scrollytelling)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: "+=3000", // La duración del scroll
        scrub: 1,      // Suavizado para efecto fluido "Apple"
        pin: true,     // Anclar la pantalla
        anticipatePin: 1,
      }
    });

    // Mover el contenedor horizontalmente
    tl.to(section, {
      x: () => -(section.scrollWidth - window.innerWidth),
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Datos de los servicios (Puedes actualizar las imágenes con las tuyas luego)
  const services = [
    {
      id: '01',
      title: 'Techos Sol y Sombra',
      desc: 'Diseño bioclimático con madera y aluminio de alta resistencia.',
      img: 'https://images.unsplash.com/photo-1600585154340-0ef3c08c0632?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: '02',
      title: 'Outdoor Kitchens',
      desc: 'Zonas de parrilla equipadas con granito y acero inoxidable.',
      img: 'https://images.unsplash.com/photo-1556912173-3db996e7c3ac?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: '03',
      title: 'Cerramientos',
      desc: 'Sistemas de vidrio templado para disfrutar tu terraza todo el año.',
      img: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: '04',
      title: 'Iluminación & Domótica',
      desc: 'Diseño de atmósferas nocturnas cálidas controladas desde tu móvil.',
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <section className="services-wrapper" style={{ overflow: 'hidden' }}>
      {/* Contenedor Principal Anclado */}
      <div ref={triggerRef} style={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        backgroundColor: '#3d312b', // <--- CAMBIO CLAVE: Marrón Café Oscuro (Lujo)
        color: '#faf8f1',           // Texto crema para contraste suave
        position: 'relative' 
      }}>
        
        {/* Título Estático a la Izquierda */}
        <div style={{ 
          position: 'absolute', 
          left: '5%', 
          zIndex: 20, 
          color: '#faf8f1', 
          maxWidth: '280px',
          pointerEvents: 'none' // Para no bloquear el scroll
        }}>
          <span style={{ 
            color: '#b07357', // Terracota
            fontWeight: 700, 
            letterSpacing: '2px', 
            fontSize: '0.85rem',
            fontFamily: 'var(--font-montserrat)'
          }}>
            EXPERIENCIA
          </span>
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            lineHeight: 1.1, 
            marginTop: '15px', 
            color: '#fff',