"use client";

import Image from "next/image";
import Hero from "@/components/Hero";
import ScrollShowcase from "@/components/ScrollShowcase";

export default function HomePage() {
  return (
    <div className="bg-[#f9f3ec] min-h-screen text-[#1e1713]">
      <main>
        {/* 1. PORTADA (HERO) */}
        <Hero />

        {/* 2. SERVICIOS (Diseño Editorial) */}
        <section id="servicios" className="py-24 px-[5%] relative z-10 bg-[#f9f3ec]">
          <div className="max-w-[1600px] mx-auto">
            <div className="mb-20 max-w-3xl">
              <span className="text-[#b07357] font-bold tracking-[0.25em] text-xs uppercase mb-4 block">
                Nuestra Expertise
              </span>
              <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-6">
                Servicios pensados para <br/>
                <span className="italic text-[#b07357]">exteriorizar tu vida.</span>
              </h2>
              <p className="text-lg text-[#1e1713]/70 font-light leading-relaxed">
                Desde el concepto inicial hasta el último detalle. Articulamos arquitectura, 
                paisajismo e ingeniería en un solo flujo de trabajo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "Diseño Arquitectónico",
                  desc: "Conceptualización integral de terrazas y rooftops. Creamos layouts funcionales que conectan el interior con el exterior.",
                  items: ["Planificación 3D", "Renderizado Hiperrealista", "Selección de Materiales"]
                },
                {
                  title: "Ingeniería & Construcción",
                  desc: "Ejecución de obra con precisión milimétrica. Estructuras ligeras, techos sol y sombra y acabados de alta gama.",
                  items: ["Gestión de Obra", "Estructuras Metálicas", "Acabados Premium"]
                },
                {
                  title: "Iluminación & Paisajismo",
                  desc: "La atmósfera lo es todo. Diseñamos escenas nocturnas y seleccionamos la vegetación perfecta para dar vida.",
                  items: ["Domótica", "Diseño Lumínico", "Jardinería Vertical"]
                }
              ].map((service, index) => (
                <article key={index} className="group p-8 border border-[#1e1713]/5 hover:border-[#b07357]/30 hover:bg-white transition-all duration-500">
                  <div className="h-[1px] w-12 bg-[#b07357] mb-6 group-hover:w-full transition-all duration-500"></div>
                  <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                  <p className="text-sm text-[#1e1713]/70 mb-8 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="text-xs font-bold tracking-widest uppercase text-[#b07357]">• {item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. PROYECTOS (Dark Mode) */}
        <section id="portafolio" className="py-24 bg-[#1e1713] text-[#f9f3ec] relative z-10">
          <div className="max-w-[1600px] mx-auto px-[5%]">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="text-[#b07357] font-bold tracking-[0.25em] text-xs uppercase mb-4 block">Portafolio</span>
                <h2 className="text-4xl md:text-6xl font-serif">Espacios Realizados</h2>
              </div>
              <button className="px-8 py-3 border border-[#f9f3ec]/20 text-xs font-bold tracking-widest uppercase hover:bg-[#f9f3ec] hover:text-[#1e1713] transition-all">
                Ver Todo
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="group cursor-pointer">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#2a2624] mb-6">
                    {/* Placeholder visual elegante */}
                    <div className="absolute inset-0 flex items-center justify-center text-[#f9f3ec]/10 text-4xl font-serif italic group-hover:scale-110 transition-transform duration-700">
                      Proyecto 0{item}
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <h3 className="text-xl font-serif group-hover:text-[#b07357] transition-colors">Residencia Privada {item}</h3>
                  <p className="text-xs uppercase tracking-widest opacity-50 mt-1">Miraflores, Lima</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. COTIZADOR INTERACTIVO */}
        <ScrollShowcase />

        {/* 5. CONTACTO */}
        <section id="contacto" className="py-24 bg-[#f9f3ec] relative z-10">
          <div className="max-w-[1600px] mx-auto px-[5%]">
            <div className="bg-white p-8 md:p-16 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-[#1e1713] mb-6">
                  Hablemos de <br/><span className="text-[#b07357] italic">tu proyecto.</span>
                </h2>
                <p className="text-[#1e1713]/70 mb-8 text-lg">
                  ¿Listo para transformar tu espacio? Cuéntanos tu idea y recibe una asesoría inicial.
                </p>
                <div className="space-y-4">
                  <a href="https://wa.me/51936230958" className="block text-xl font-bold hover:text-[#b07357] transition-colors">+51 936 230 958</a>
                  <a href="mailto:contacto@comfortstudioperu.com" className="block text-xl font-bold hover:text-[#b07357] transition-colors">contacto@comfortstudioperu.com</a>
                </div>
              </div>
              
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-50">Nombre</label>
                  <input type="text" className="w-full border-b border-[#1e1713]/20 py-2 bg-transparent outline-none focus:border-[#b07357] transition-colors text-lg" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-50">Proyecto</label>
                  <select className="w-full border-b border-[#1e1713]/20 py-2 bg-transparent outline-none focus:border-[#b07357] transition-colors text-lg">
                    <option>Techo Sol y Sombra</option>
                    <option>Terraza Completa</option>
                    <option>Zona de Parrilla</option>
                  </select>
                </div>
                <button className="w-full bg-[#1e1713] text-white py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#b07357] transition-colors mt-4">
                  Enviar Solicitud
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1e1713] text-[#f9f3ec] py-12 border-t border-white/10 relative z-10">
        <div className="max-w-[1600px] mx-auto px-[5%] flex flex-col md:flex-row justify-between items-center gap-6 text-xs uppercase tracking-widest opacity-60">
          <span>© 2025 Comfort Studio Peru.</span>
          <span>Design by ALLYX</span>
        </div>
      </footer>
    </div>
  );
}