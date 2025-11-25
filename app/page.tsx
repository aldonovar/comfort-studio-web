"use client";

import Image from "next/image";
import Hero from "@/components/Hero";
import ScrollShowcase from "@/components/ScrollShowcase";

export default function HomePage() {
  return (
    <div className="page-wrapper">
      <main>
        {/* ============ HERO ============ */}
        <Hero />

        {/* ============ SERVICIOS ============ */}
        <section id="servicios" className="py-24 container-safe">
          <div className="max-w-3xl mb-16">
            <p className="text-[#b07357] font-bold tracking-[0.25em] text-xs uppercase mb-4">Qué hacemos</p>
            <h2 className="text-5xl font-serif text-[#1e1713] mb-6">Servicios pensados para exteriorizar tu hogar</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <article>
              <h3 className="text-2xl font-serif mb-4">Diseño Arquitectónico</h3>
              <p className="text-[#1e1713]/70 text-sm leading-relaxed">
                Conceptualización integral de terrazas, azoteas y patios. Layouts funcionales y estética de alto nivel.
              </p>
            </article>
            <article>
              <h3 className="text-2xl font-serif mb-4">Ingeniería & Construcción</h3>
              <p className="text-[#1e1713]/70 text-sm leading-relaxed">
                Estructuras ligeras, techos sol y sombra y acabados premium con supervisión experta.
              </p>
            </article>
            <article>
              <h3 className="text-2xl font-serif mb-4">Iluminación & Paisajismo</h3>
              <p className="text-[#1e1713]/70 text-sm leading-relaxed">
                Diseño de atmósferas nocturnas y selección vegetal para dar vida a tu espacio.
              </p>
            </article>
          </div>
        </section>

        {/* ============ PROYECTOS ============ */}
        <section id="proyectos" className="py-24 bg-[#1e1713] text-[#f9f3ec]">
          <div className="container-safe">
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-5xl font-serif">Proyectos Recientes</h2>
              <a href="#" className="border-b border-[#b07357] text-[#b07357] pb-1 text-sm uppercase tracking-widest">Ver todo</a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Cards Placeholder (Se ven bien incluso sin imágenes reales cargadas) */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="aspect-[4/5] bg-[#2a2624] mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#b07357]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-xl font-serif">Residencia Miraflores {i}</h3>
                  <p className="text-xs uppercase tracking-widest opacity-50">Terraza Rooftop</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ COTIZA ============ */}
        <ScrollShowcase />

        {/* ============ CONTACTO ============ */}
        <section id="contacto" className="py-24 container-safe">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-serif mb-8">Conversemos sobre tu proyecto</h2>
            <p className="text-lg text-[#1e1713]/70 mb-10">
              ¿Listo para transformar tu espacio exterior? Escríbenos.
            </p>
            <a href="https://wa.me/51936230958" className="inline-block bg-[#1e1713] text-white px-10 py-4 text-sm font-bold tracking-[0.2em] uppercase hover:bg-[#b07357] transition-colors">
              Contactar por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-[#1e1713] text-[#f9f3ec]/40 text-center text-xs tracking-widest uppercase border-t border-white/10">
        © 2025 Comfort Studio. Experiencia Signature.
      </footer>
    </div>
  );
}