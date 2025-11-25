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

    // Configuración más ágil del scroll horizontal
    const scrollTween = gsap.to(section, {
      x: () => -(section.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: "+=1500", // REDUCIDO: Antes 3000. Ahora es más rápido salir de aquí.
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true, // Recalcula si cambia el tamaño de ventana
      }
    });

    return () => {
      scrollTween.kill();
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
    <section className="services-wrapper relative bg-[#3d312b]">
      <div ref={triggerRef} className="h-screen flex items-center overflow-hidden relative">

        {/* BLOQUE DE TEXTO FIJO (Izquierda) */}
        <div className="absolute left-[5%] z-20 max-w-[300px] text-[#faf8f1]">
          <span className="text-[#b07357] font-bold tracking-[2px] text-xs uppercase font-sans mb-2 block">
            EXPERIENCIA
          </span>
          <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-4 font-sans">
            Diseño <br /> Integral
          </h2>
          <p className="opacity-80 text-sm leading-relaxed mb-8 font-light">
            Desliza hacia abajo para explorar nuestras especialidades paso a paso.
          </p>

          {/* Indicador Visual de Scroll */}
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest opacity-60">
            <div className="w-8 h-[1px] bg-white/50"></div>
            Scroll para navegar
          </div>
        </div>

        {/* TIRA DE IMÁGENES (Se mueve a la izquierda) */}
        <div ref={sectionRef} className="flex h-full pl-[40vw] items-center">
          {services.map((item, index) => (
            <div key={index} className="w-[80vw] md:w-[60vw] lg:w-[45vw] h-[70vh] px-4 flex-shrink-0">
              <div className="relative w-full h-full rounded-lg overflow-hidden group">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover filter brightness-[0.85] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[#3d312b] to-transparent">
                  <span className="absolute top-4 right-4 text-6xl font-bold text-white/10 font-sans">
                    {item.id}
                  </span>
                  <h3 className="text-2xl text-white mb-2 font-sans font-bold">{item.title}</h3>
                  <p className="text-[#e8dcd5] text-sm max-w-[90%]">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
          {/* Espaciador final para que la última tarjeta se vea bien */}
          <div className="w-[10vw] flex-shrink-0"></div>
        </div>
      </div>
    </section>
  );
}