"use client";

import Image from "next/image";
import Hero from "@/components/Hero"; 
// NOTA: useLenis y Navbar/Preloader/PageTransition se gestionan en layout.tsx

export default function HomePage() {
  
  // useLenis() HA SIDO REMOVIDO PARA EVITAR EL CONFLICTO DE TIPOS.

  return (
    <div className="page">
      <main>
          {/* ============ HERO (INICIO) ============ */}
          <Hero />

          {/* ============ SERVICIOS (Inicio de sección compleja) ============ */}
          <section id="servicios" className="section section-padded bg-[#f9f3ec] py-20">
            <div className="section-header container-safe">
              <p className="text-[#b07357] font-bold tracking-[0.25em] text-xs uppercase mb-2">Qué hacemos</p>
              <h2 className="text-4xl font-serif text-[#1e1713] mb-4">Servicios pensados para exteriorizar tu hogar</h2>
              <p className="text-lg text-[#1e1713]/80 max-w-4xl">
                Desde el concepto inicial hasta el último cojín en la terraza:
                articulamos arquitectura, paisajismo, iluminación y mobiliario en
                un solo flujo de trabajo.
              </p>
            </div>

            <div className="container-safe grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <article className="p-8 bg-white shadow-xl">
                <h3 className="text-xl font-bold mb-2 font-sans">Diseño arquitectónico de terrazas</h3>
                <p className="text-sm text-[#1e1713]/70 mb-4">
                  Conceptualización integral de terrazas, azoteas y patios.
                </p>
                <ul className="list-disc list-inside text-sm text-[#1e1713]/90">
                  <li>Layouts funcionales y circulaciones claras</li>
                  <li>Selección de materiales y texturas</li>
                </ul>
              </article>

              <article className="p-8 bg-white shadow-xl">
                <h3 className="text-xl font-bold mb-2 font-sans">Ingeniería &amp; construcción</h3>
                <p className="text-sm text-[#1e1713]/70 mb-4">
                  Tomamos el diseño y lo llevamos a obra con precisión: estructuras y acabados.
                </p>
                <ul className="list-disc list-inside text-sm text-[#1e1713]/90">
                  <li>Refuerzos estructurales y techos ligeros</li>
                  <li>Gestión de cuadrillas, tiempos y presupuesto</li>
                </ul>
              </article>

              <article className="p-8 bg-white shadow-xl">
                <h3 className="text-xl font-bold mb-2 font-sans">Iluminación &amp; ambientación</h3>
                <p className="text-sm text-[#1e1713]/70 mb-4">
                  Luz, mobiliario y detalles que definen la atmósfera nocturna.
                </p>
                <ul className="list-disc list-inside text-sm text-[#1e1713]/90">
                  <li>Escenas regulables y cálidas</li>
                  <li>Integración de audio, chimeneas y agua</li>
                </ul>
              </article>
            </div>
          </section>

          {/* ============ PROYECTOS ============ */}
          <section id="proyectos" className="section section-dark bg-[#1e1713] text-[#f9f3ec] py-20">
            <div className="container-safe">
              <p className="text-[#b07357] font-bold tracking-[0.25em] text-xs uppercase mb-2">Selección de Proyectos</p>
              <h2 className="text-4xl font-serif text-[#f9f3ec] mb-8">Espacios exteriores que ya están habitándose</h2>
            </div>
            
            <div className="container-safe grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="project-card">
                <div className="relative h-64 overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1570196238321-9960787e7428?auto=format&fit=crop&w=700&q=80"
                    alt="Terraza en Barranco"
                    width={640}
                    height={480}
                    className="object-cover"
                  />
                </div>
                <div className="mt-4">
                  <span className="text-xs text-[#f9f3ec]/60">Barranco, Lima · Terraza rooftop</span>
                  <h3 className="text-xl font-bold mt-1">Azotea social con vista al mar</h3>
                </div>
              </article>

              <article className="project-card">
                <div className="relative h-64 overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1543789423-a26b683226a0?auto=format&fit=crop&w=700&q=80"
                    alt="Patio en La Molina"
                    width={640}
                    height={480}
                    className="object-cover"
                  />
                </div>
                <div className="mt-4">
                  <span className="text-xs text-[#f9f3ec]/60">La Molina, Lima · Patio familiar</span>
                  <h3 className="text-xl font-bold mt-1">Patio familiar que une generaciones</h3>
                </div>
              </article>

              <article className="project-card">
                <div className="relative h-64 overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1621370213166-5f50244f777c?auto=format&fit=crop&w=700&q=80"
                    alt="Terraza corporativa"
                    width={640}
                    height={480}
                    className="object-cover"
                  />
                </div>
                <div className="mt-4">
                  <span className="text-xs text-[#f9f3ec]/60">San Isidro · Terraza corporativa</span>
                  <h3 className="text-xl font-bold mt-1">Terraza de oficina para equipos creativos</h3>
                </div>
              </article>
            </div>
          </section>

          {/* ============ COTIZA (SHOWCASE SCROLL) ============ */}
          {/* Si usas ScrollShowcase, descomenta la siguiente línea y asegúrate de que exista y use export default */}
          {/* <ScrollShowcase /> */}

          {/* ============ PROCESO (NOSOTROS/EXPERIENCIA) ============ */}
          <section id="experiencia" className="section section-padded bg-white py-20">
             <div className="container-safe">
              <p className="text-[#b07357] font-bold tracking-[0.25em] text-xs uppercase mb-2">MÉTODO COMFORT</p>
              <h2 className="text-4xl font-serif text-[#1e1713] mb-8">Un flujo claro, de la idea a la entrega</h2>
              
              <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 list-none p-0">
                  <li className="flex flex-col gap-2">
                    <span className="text-5xl font-serif italic text-[#b07357]">01</span>
                    <h3 className="text-xl font-bold font-sans">Diagnóstico en sitio</h3>
                    <p className="text-sm text-[#1e1713]/80">Visitamos tu espacio y entendemos cómo vives: cuántas personas usan la terraza y con qué clima.</p>
                  </li>
                   <li className="flex flex-col gap-2">
                    <span className="text-5xl font-serif italic text-[#b07357]">02</span>
                    <h3 className="text-xl font-bold font-sans">Concepto &amp; anteproyecto</h3>
                    <p className="text-sm text-[#1e1713]/80">Desarrollamos un concepto visual, layout y renders esquemáticos para que veas la transformación.</p>
                  </li>
                   <li className="flex flex-col gap-2">
                    <span className="text-5xl font-serif italic text-[#b07357]">03</span>
                    <h3 className="text-xl font-bold font-sans">Construcción &amp; supervisión</h3>
                    <p className="text-sm text-[#1e1713]/80">Gestionamos obra, proveedores y acabados con presencia en campo, actualizándote de avances de forma clara.</p>
                  </li>
              </ol>
             </div>
          </section>

          {/* ============ CONTACTO (Formulario & Info) ============ */}
          <section id="contacto" className="section section-padded bg-[#f9f3ec] py-20">
             <div className="container-safe">
              <p className="text-[#b07357] font-bold tracking-[0.25em] text-xs uppercase mb-2">INICIA AQUÍ</p>
              <h2 className="text-4xl font-serif text-[#1e1713] mb-8">Conversemos sobre tu terraza</h2>
              
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <form className="bg-white p-8 shadow-2xl rounded-lg">
                       {/* Aquí iría el formulario completo de Contact.tsx */}
                       <p className="text-sm text-[#1e1713]/70">Formulario listo para Contact.tsx</p>
                   </form>
                   <div className="flex flex-col gap-6">
                       <h3 className="text-xl font-bold font-sans">Contacto Directo</h3>
                       <p className="text-lg text-[#1e1713]/80">
                           Para un diagnóstico rápido, contáctanos por WhatsApp.
                       </p>
                       <ul className="list-none p-0 flex flex-col gap-2">
                           <li><span className="font-bold">WhatsApp:</span> <a href="https://wa.me/51936230958" className="text-[#b07357] hover:underline">+51 936 230 958</a></li>
                           <li><span className="font-bold">Correo:</span> <a href="mailto:contacto@comfortstudioperu.com" className="text-[#b07357] hover:underline">contacto@comfortstudioperu.com</a></li>
                           <li><span className="font-bold">Instagram:</span> <a href="https://www.instagram.com/comfortstudiop/" className="text-[#b07357] hover:underline">@comfortstudiop</a></li>
                       </ul>
                   </div>
               </div>
             </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="site-footer">
          <div className="site-footer-inner">
            <span>
              © {new Date().getFullYear()} Comfort Studio. Todos los derechos
              reservados.
            </span>
            <span>Experiencia digital por ALLYX.</span>
          </div>
        </footer>
    </div>
  );
}