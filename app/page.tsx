"use client";

import Image from "next/image";
import { useState } from "react";

// --- IMPORTACIONES DE COMPONENTES (Default Exports para evitar errores) ---
import Hero from "@/components/Hero";
import ScrollShowcase from "@/components/ScrollShowcase";
import PageTransition from "@/components/PageTransition";
// Nota: Navbar, Preloader y FloatingCTA ya están en layout.tsx para ser globales.

export default function HomePage() {
  // Estado simple para el formulario (sin lógica de backend por ahora)
  const [formStatus, setFormStatus] = useState("idle");

  return (
    <div className="page-wrapper bg-[#f9f3ec] text-[#1e1713]">
      
      {/* El Telón de Entrada envuelve el contenido principal */}
      <PageTransition>
        <main>
          
          {/* 1. PORTADA (HERO) */}
          <Hero />

          {/* 2. SERVICIOS (Diseño Editorial + Grid) */}
          <section id="servicios" className="relative py-24 md:py-32 px-[5%] container-safe">
            <div className="max-w-3xl mb-20">
              <p className="text-[#b07357] font-bold tracking-[0.25em] text-xs uppercase mb-4">
                Qué hacemos
              </p>
              <h2 className="text-4xl md:text-6xl font-serif text-[#1e1713] mb-6 leading-tight">
                Servicios pensados para <br/>
                <span className="italic text-[#b07357]">exteriorizar tu hogar.</span>
              </h2>
              <p className="text-lg md:text-xl text-[#1e1713]/70 font-light leading-relaxed max-w-2xl">
                Desde el concepto inicial hasta el último cojín en la terraza:
                articulamos arquitectura, paisajismo, iluminación y mobiliario en
                un solo flujo de trabajo de alto nivel.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
              {/* Servicio 1 */}
              <article className="group hover:-translate-y-2 transition-transform duration-500">
                <div className="h-[1px] w-full bg-[#1e1713]/10 mb-6 group-hover:bg-[#b07357] transition-colors"></div>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-[#b07357] transition-colors">Diseño Arquitectónico</h3>
                <p className="text-[#1e1713]/70 mb-6 text-sm leading-relaxed">
                  Conceptualización integral de terrazas, azoteas y patios. Zonas
                  sociales, barras, parrillas y lounges diseñados para tu modo de vivir.
                </p>
                <ul className="space-y-2 text-xs font-bold tracking-widest uppercase text-[#1e1713]/40">
                  <li>• Implantación y Entorno</li>
                  <li>• Layouts Funcionales</li>
                  <li>• Materialidad Premium</li>
                </ul>
              </article>

              {/* Servicio 2 */}
              <article className="group hover:-translate-y-2 transition-transform duration-500">
                <div className="h-[1px] w-full bg-[#1e1713]/10 mb-6 group-hover:bg-[#b07357] transition-colors"></div>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-[#b07357] transition-colors">Ingeniería & Construcción</h3>
                <p className="text-[#1e1713]/70 mb-6 text-sm leading-relaxed">
                  Llevamos el diseño a obra con precisión milimétrica: estructuras,
                  instalaciones, acabados y supervisión de punta a punta.
                </p>
                <ul className="space-y-2 text-xs font-bold tracking-widest uppercase text-[#1e1713]/40">
                  <li>• Estructuras Ligeras</li>
                  <li>• Drenaje Pluvial</li>
                  <li>• Gestión de Obra</li>
                </ul>
              </article>

              {/* Servicio 3 */}
              <article className="group hover:-translate-y-2 transition-transform duration-500">
                <div className="h-[1px] w-full bg-[#1e1713]/10 mb-6 group-hover:bg-[#b07357] transition-colors"></div>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-[#b07357] transition-colors">Iluminación & Styling</h3>
                <p className="text-[#1e1713]/70 mb-6 text-sm leading-relaxed">
                  La atmósfera nocturna es clave. Diseñamos escenas de luz, 
                  integramos audio y seleccionamos el mobiliario final.
                </p>
                <ul className="space-y-2 text-xs font-bold tracking-widest uppercase text-[#1e1713]/40">
                  <li>• Domótica y Escenas</li>
                  <li>• Audio Integrado</li>
                  <li>• Paisajismo</li>
                </ul>
              </article>
            </div>
          </section>

          {/* 3. PROYECTOS DESTACADOS (Dark Mode Section) */}
          <section id="portafolio" className="relative py-24 bg-[#1e1713] text-[#f9f3ec]">
            <div className="container-safe px-[5%]">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div>
                  <p className="text-[#b07357] font-bold tracking-[0.25em] text-xs uppercase mb-4">Portafolio</p>
                  <h2 className="text-4xl md:text-6xl font-serif">Espacios que cobran vida</h2>
                </div>
                <a href="#" className="border-b border-[#f9f3ec]/30 pb-1 text-sm uppercase tracking-widest hover:text-[#b07357] hover:border-[#b07357] transition-all">
                  Ver todos los proyectos
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Proyecto 1 */}
                <article className="group cursor-pointer">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#2a2624] mb-6">
                    <Image
                      src="https://images.unsplash.com/photo-1600585154340-0ef3c08c0632?auto=format&fit=crop&w=800&q=80"
                      alt="Terraza Barranco"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                  <div className="flex justify-between items-start border-t border-white/10 pt-4">
                    <div>
                      <h3 className="text-2xl font-serif mb-1 group-hover:text-[#b07357] transition-colors">Casa Barranco</h3>
                      <p className="text-xs uppercase tracking-widest opacity-50">Rooftop Social</p>
                    </div>
                    <span className="text-[#b07357] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </div>
                </article>

                {/* Proyecto 2 */}
                <article className="group cursor-pointer md:mt-12">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#2a2624] mb-6">
                    <Image
                      src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                      alt="Patio La Molina"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                  <div className="flex justify-between items-start border-t border-white/10 pt-4">
                    <div>
                      <h3 className="text-2xl font-serif mb-1 group-hover:text-[#b07357] transition-colors">Villa La Molina</h3>
                      <p className="text-xs uppercase tracking-widest opacity-50">Patio Familiar</p>
                    </div>
                    <span className="text-[#b07357] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </div>
                </article>

                {/* Proyecto 3 */}
                <article className="group cursor-pointer">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#2a2624] mb-6">
                    <Image
                      src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
                      alt="Terraza San Isidro"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                  <div className="flex justify-between items-start border-t border-white/10 pt-4">
                    <div>
                      <h3 className="text-2xl font-serif mb-1 group-hover:text-[#b07357] transition-colors">Loft San Isidro</h3>
                      <p className="text-xs uppercase tracking-widest opacity-50">Terraza Corporativa</p>
                    </div>
                    <span className="text-[#b07357] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* 4. EXPERIENCIA INTERACTIVA (Cotizador Visual) */}
          <ScrollShowcase />

          {/* 5. PROCESO DE TRABAJO */}
          <section id="experiencia" className="py-24 container-safe px-[5%]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <p className="text-[#b07357] font-bold tracking-[0.25em] text-xs uppercase mb-4">Método</p>
                <h2 className="text-4xl md:text-6xl font-serif text-[#1e1713] mb-8">
                  Un flujo claro, <br /> de la idea a la entrega.
                </h2>
                <p className="text-[#1e1713]/70 text-lg leading-relaxed">
                  Eliminamos la incertidumbre de la construcción. Nuestro proceso está 
                  diseñado para darte control, visibilidad y tranquilidad en cada etapa.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { num: "01", title: "Diagnóstico", desc: "Visitamos tu espacio, levantamos medidas y entendemos cómo vives." },
                  { num: "02", title: "Anteproyecto", desc: "Concepto visual, layout y renders esquemáticos para validar el diseño." },
                  { num: "03", title: "Ingeniería", desc: "Planos técnicos, presupuesto detallado y cronograma de obra exacto." },
                  { num: "04", title: "Ejecución", desc: "Gestión de obra llave en mano. Nosotros nos encargamos de todo." },
                  { num: "05", title: "Entrega", desc: "Puesta en escena final, pruebas de iluminación y entrega de llaves." }
                ].map((step) => (
                  <div key={step.num} className="group flex gap-6 border-b border-[#1e1713]/10 pb-8">
                    <span className="text-4xl font-serif text-[#1e1713]/20 group-hover:text-[#b07357] transition-colors">
                      {step.num}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-[#1e1713]/60">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 6. EL ESTUDIO (Split Section) */}
          <section className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
            <div className="relative h-[50vh] lg:h-auto bg-[#1e1713]">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                alt="Equipo Comfort Studio"
                fill
                className="object-cover opacity-80"
              />
            </div>
            <div className="flex flex-col justify-center p-12 lg:p-24 bg-[#b07357] text-[#f9f3ec]">
              <p className="font-bold tracking-[0.25em] text-xs uppercase mb-6 opacity-70">El Estudio</p>
              <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
                Arquitectura, interiorismo y obra en un mismo lenguaje.
              </h2>
              <p className="text-lg opacity-90 leading-relaxed mb-8">
                Comfort Studio nace de la obsesión por los espacios exteriores bien resueltos. 
                Creemos que una terraza no es un “extra”, sino una pieza clave para respirar mejor dentro de casa.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Terrazas & Rooftops", "Patios Interiores", "Espacios Corporativos"].map(tag => (
                  <span key={tag} className="px-4 py-2 border border-[#f9f3ec]/30 rounded-full text-xs uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* 7. CONTACTO (Formulario Final) */}
          <section id="contacto" className="py-24 container-safe px-[5%]">
            <div className="max-w-5xl mx-auto bg-white p-8 md:p-16 shadow-2xl rounded-2xl relative overflow-hidden">
              {/* Decoración de fondo */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#f9f3ec] rounded-bl-full -z-0 opacity-50"></div>
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-4xl font-serif text-[#1e1713] mb-6">
                    Conversemos sobre <br/><span className="text-[#b07357] italic">tu proyecto.</span>
                  </h2>
                  <p className="text-[#1e1713]/70 mb-10">
                    Cuéntanos brevemente sobre tu espacio. En menos de 24 horas te contactamos para coordinar un diagnóstico.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#f9f3ec] flex items-center justify-center text-[#b07357]">W</div>
                      <div>
                        <p className="text-xs uppercase tracking-widest opacity-50">WhatsApp Directo</p>
                        <a href="https://wa.me/51936230958" className="text-lg font-bold hover:text-[#b07357] transition-colors">+51 936 230 958</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#f9f3ec] flex items-center justify-center text-[#b07357]">@</div>
                      <div>
                        <p className="text-xs uppercase tracking-widest opacity-50">Correo</p>
                        <a href="mailto:contacto@comfortstudioperu.com" className="text-lg font-bold hover:text-[#b07357] transition-colors">contacto@comfortstudioperu.com</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Formulario Visual */}
                <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#1e1713]/50">Nombre Completo</label>
                    <input type="text" className="border-b border-[#1e1713]/20 py-3 bg-transparent focus:outline-none focus:border-[#b07357] transition-colors text-lg" placeholder="Ej. Juan Pérez" />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#1e1713]/50">Tipo de Proyecto</label>
                    <select className="border-b border-[#1e1713]/20 py-3 bg-transparent focus:outline-none focus:border-[#b07357] transition-colors text-lg">
                      <option>Terraza de Departamento</option>
                      <option>Azotea / Rooftop</option>
                      <option>Patio Interior</option>
                      <option>Proyecto Corporativo</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#1e1713]/50">Detalles</label>
                    <textarea rows={3} className="border-b border-[#1e1713]/20 py-3 bg-transparent focus:outline-none focus:border-[#b07357] transition-colors text-lg resize-none" placeholder="Breve descripción de lo que buscas..."></textarea>
                  </div>

                  <button className="mt-4 bg-[#1e1713] text-white py-5 px-8 font-bold uppercase tracking-[0.2em] hover:bg-[#b07357] transition-colors shadow-lg">
                    Enviar Solicitud
                  </button>
                </form>
              </div>
            </div>
          </section>

        </main>

        {/* FOOTER FINAL */}
        <footer className="bg-[#1e1713] text-[#f9f3ec] py-12 border-t border-white/10">
          <div className="container-safe px-[5%] flex flex-col md:flex-row justify-between items-center gap-6 opacity-60 text-xs uppercase tracking-widest">
            <span>© 2025 Comfort Studio Peru.</span>
            <span>Diseñado con precisión.</span>
          </div>
        </footer>
      </PageTransition>
    </div>
  );
}