'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ServicesScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Registrar plugin solo en cliente
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    const section = sectionRef.current;
    const trigger = triggerRef.current;

    if (!section || !trigger) return;

    // Animación de desplazamiento horizontal anclado
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: "+=3000", // Longitud del scroll vertical
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    tl.to(section, {
      x: () => -(section.scrollWidth - window.innerWidth),
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

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
      title: 'Iluminación',
      desc: 'Domótica y diseño de atmósferas nocturnas cálidas.',
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <section className="services-wrapper" style={{ overflow: 'hidden' }}>
      <div ref={triggerRef} style={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        backgroundColor: '#3d312b', // Café oscuro premium
        color: '#faf8f1',
        position: 'relative' 
      }}>
        
        {/* Título Estático a la izquierda */}
        <div style={{ position: 'absolute', left: '5%', zIndex: 20, maxWidth: '280px' }}>
          <span style={{ color: '#b07357', fontWeight: 700, letterSpacing: '2px', fontSize: '0.85rem', fontFamily: 'var(--font-montserrat)' }}>EXPERIENCIA</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginTop: '15px', color: '#fff', fontFamily: 'var(--font-montserrat)' }}>
            Diseño <br /> Integral
          </h2>
          <p style={{ marginTop: '1.5rem', opacity: 0.8, fontSize: '1rem', lineHeight: 1.6 }}>
            Desliza para explorar nuestras especialidades.
          </p>
          <div style={{ marginTop: '2rem', width: '60px', height: '3px', backgroundColor: '#b07357' }}></div>
        </div>

        {/* Tira Horizontal de imágenes */}
        <div ref={sectionRef} style={{ display: 'flex', height: '100%', paddingLeft: '35vw' }}>
          {services.map((item, index) => (
            <div key={index} style={{ 
              width: '70vw',      // Ancho base responsivo
              maxWidth: '800px',  // Límite para que no se vea gigante en monitores grandes
              height: '100%', 
              display: 'flex', 
              alignItems: 'center', 
              padding: '0 2vw' 
            }}>
              <div style={{ 
                position: 'relative', 
                width: '100%', 
                height: '65vh', 
                borderRadius: '4px', 
                overflow: 'hidden', 
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
                backgroundColor: '#2c2c2c'
              }}>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85)' }}
                />
                <div style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  width: '100%', 
                  padding: '3rem',
                  background: 'linear-gradient(to top, rgba(61, 49, 43, 0.95), transparent)' 
                }}>
                  <span style={{ fontSize: '4rem', fontWeight: 700, color: 'rgba(255,255,255,0.1)', position: 'absolute', top: '2rem', right: '2rem', fontFamily: 'var(--font-montserrat)' }}>
                    {item.id}
                  </span>
                  <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '0.5rem', fontFamily: 'var(--font-montserrat)' }}>{item.title}</h3>
                  <p style={{ color: '#e8dcd5', fontSize: '1.1rem', maxWidth: '90%' }}>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
          <div style={{ width: '10vw' }}></div> {/* Espacio final */}
        </div>
      </div>
    </section>
  );
}