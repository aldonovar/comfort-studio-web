'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

// Registramos el plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    id: '01',
    title: 'Techos Sol y Sombra',
    description: 'Sistemas de madera y aluminio que filtran la luz perfecta. Diseño bioclimático que se adapta a la posición del sol en Lima.',
    img: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2070&auto=format&fit=crop', // Placeholder alta calidad
  },
  {
    id: '02',
    title: 'Outdoor Kitchens',
    description: 'Zonas de parrilla de alto rendimiento. Mesadas de granito, acero inoxidable y equipamiento premium para el chef de casa.',
    img: 'https://images.unsplash.com/photo-1556912173-3db996e7c3ac?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '03',
    title: 'Terrazas Sociales',
    description: 'Salas de estar exteriores con fogatas (firepits) y mobiliario resistente a la intemperie. El punto de encuentro ideal.',
    img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop',
  },
];

export default function ServicesScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;

    if (!section || !trigger) return;

    // LÓGICA DE ANIMACIÓN "APPLE STYLE"
    // Creamos un timeline que sincroniza el scroll con el movimiento horizontal
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top top", // Empieza cuando el tope de la sección toca el tope de la ventana
        end: "+=3000",   // La animación dura 3000px de scroll
        scrub: 1,        // Suavizado (tarda 1 segundo en alcanzar el dedo del usuario)
        pin: true,       // "Clava" la sección en la pantalla
        anticipatePin: 1,
      }
    });

    // Mover el contenedor de servicios horizontalmente
    tl.to(section, {
      x: () => -(section.scrollWidth - window.innerWidth),
      ease: "none",
    });

    return () => {
      // Limpieza al salir
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section className="services-wrapper" style={{ overflow: 'hidden' }}>
      {/* Trigger Ref es el contenedor que se "congela" */}
      <div ref={triggerRef} style={{ height: '100vh', display: 'flex', alignItems: 'center', backgroundColor: '#1a1a1a', color: '#faf8f1' }}>
        
        {/* Intro estática a la izquierda (opcional, para dar contexto) */}
        <div style={{ position: 'absolute', left: '5%', zIndex: 20, maxWidth: '300px' }}>
          <span style={{ color: '#b07357', fontWeight: 700, letterSpacing: '2px' }}>NUESTRA EXPERIENCIA</span>
          <h2 style={{ fontSize: '3rem', color: '#fff', lineHeight: 1 }}>Diseño <br/> Integral</h2>
          <p style={{ marginTop: '1rem', opacity: 0.7 }}>Desliza para explorar las etapas de transformación.</p>
          <div style={{ marginTop: '2rem', width: '50px', height: '2px', background: '#b07357' }}></div>
        </div>

        {/* Section Ref es la tira larga que se mueve horizontalmente */}
        <div ref={sectionRef} style={{ display: 'flex', height: '100%', paddingLeft: '30vw' }}> {/* paddingLeft da espacio al texto intro */}
          
          {services.map((service, index) => (
            <div key={index} style={{ 
              width: '80vw', // Cada tarjeta ocupa casi toda la pantalla
              height: '100%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              padding: '0 5vw',
              position: 'relative'
            }}>
              
              {/* Contenedor de la Imagen y Texto */}
              <div style={{ 
                position: 'relative', 
                width: '100%', 
                height: '70vh', 
                overflow: 'hidden',
                borderRadius: '4px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
              }}>
                {/* Imagen de Fondo */}
                <img 
                  src={service.img} 
                  alt={service.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }} 
                />
                
                {/* Texto sobre la imagen (Overlay) */}
                <div style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  width: '100%', 
                  padding: '3rem',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)'
                }}>
                  <span style={{ fontSize: '4rem', fontWeight: 700, color: 'rgba(255,255,255,0.1)', position: 'absolute', top: '20px', right: '20px' }}>
                    {service.id}
                  </span>
                  <h3 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem' }}>{service.title}</h3>
                  <p style={{ fontSize: '1.1rem', maxWidth: '500px', color: '#ddd' }}>{service.description}</p>
                </div>
              </div>

            </div>
          ))}
          
          {/* Elemento final para cerrar el scroll suavemente */}
          <div style={{ width: '20vw' }}></div>
        </div>
      </div>
    </section>
  );
}