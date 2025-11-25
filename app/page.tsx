"use client";

import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Preloader } from "@/components/Preloader";
import { PageTransition } from "@/components/PageTransition";
import { ScrollShowcase } from "@/components/ScrollShowcase";
import { useLenis } from "@/hooks/useLenis";

export default function HomePage() {
  useLenis();

  return (
    <div className="page">
      {/* PreCarga ligera / transición de entrada */}
      <Preloader />

      {/* Barra de navegación sticky */}
      <Navbar />

      {/* Transición general de página */}
      <PageTransition>
        <main>
          {/* ============ HERO (INICIO) ============ */}
          {/* El Hero ya incluye <section id="inicio" ... /> */}
          <Hero />

          {/* ============ SERVICIOS ============ */}
          <section id="servicios" className="section section-padded">
            <div className="section-header">
              <p className="eyebrow">Qué hacemos</p>
              <h2>Servicios pensados para exteriorizar tu hogar</h2>
              <p className="section-lede">
                Desde el concepto inicial hasta el último cojín en la terraza:
                articulamos arquitectura, paisajismo, iluminación y mobiliario en
                un solo flujo de trabajo.
              </p>
            </div>

            <div className="grid grid-services">
              <article className="card card-service">
                <h3>Diseño arquitectónico de terrazas</h3>
                <p>
                  Conceptualización integral de terrazas, azoteas y patios. Zonas
                  sociales, barras, parrillas, lounges y rincones íntimos diseñados
                  para tu modo de vivir.
                </p>
                <ul>
                  <li>Implantación y lectura del entorno</li>
                  <li>Layouts funcionales y circulaciones claras</li>
                  <li>Selección de materiales y texturas</li>
                </ul>
              </article>

              <article className="card card-service">
                <h3>Ingeniería &amp; construcción</h3>
                <p>
                  Tomamos el diseño y lo llevamos a obra con precisión: estructuras,
                  instalaciones, acabados y supervisión de punta a punta.
                </p>
                <ul>
                  <li>Refuerzos estructurales y techos ligeros</li>
                  <li>Sistemas de drenaje y protección climática</li>
                  <li>Gestión de cuadrillas, tiempos y presupuesto</li>
                </ul>
              </article>

              <article className="card card-service">
                <h3>Iluminación &amp; ambientación</h3>
                <p>
                  Luz, mobiliario y detalles que definen la atmósfera nocturna.
                  Diseñamos escenas para conversar, comer, leer o celebrar.
                </p>
                <ul>
                  <li>Escenas regulables y cálidas</li>
                  <li>Integración de audio, chimeneas y agua</li>
                  <li>Estilismo final y puesta en escena</li>
                </ul>
              </article>
            </div>
          </section>

          {/* ============ PROYECTOS ============ */}
          <section id="proyectos" className="section section-dark">
            <div className="section-header">
              <p className="eyebrow">Selección de proyectos</p>
              <h2>Espacios exteriores que ya están habitándose</h2>
            </div>

            <div className="grid grid-projects">
              <article className="project-card">
                <div className="project-card-image-frame">
                  <Image
                    src="/proyecto-01.jpg"
                    alt="Terraza en Barranco"
                    width={640}
                    height={480}
                  />
                </div>
                <div className="project-card-meta">
                  <span className="project-card-location">Barranco, Lima</span>
                  <span className="project-card-tag">Terraza rooftop</span>
                </div>
                <h3>Azotea social con vista al mar</h3>
                <p>
                  Barra, comedor y lounge lineal articulados por una iluminación
                  cálida y un sistema de pérgolas móviles para controlar el sol.
                </p>
              </article>

              <article className="project-card">
                <div className="project-card-image-frame">
                  <Image
                    src="/proyecto-02.jpg"
                    alt="Patio en La Molina"
                    width={640}
                    height={480}
                  />
                </div>
                <div className="project-card-meta">
                  <span className="project-card-location">La Molina, Lima</span>
                  <span className="project-card-tag">Patio familiar</span>
                </div>
                <h3>Patio familiar que une generaciones</h3>
                <p>
                  Piso cálido, jardineras y un living exterior que conecta sala y
                  cocina, pensado para recibir a familia y amigos cada fin de semana.
                </p>
              </article>

              <article className="project-card">
                <div className="project-card-image-frame">
                  <Image
                    src="/proyecto-03.jpg"
                    alt="Terraza corporativa"
                    width={640}
                    height={480}
                  />
                </div>
                <div className="project-card-meta">
                  <span className="project-card-location">San Isidro</span>
                  <span className="project-card-tag">Terraza corporativa</span>
                </div>
                <h3>Terraza de oficina para equipos creativos</h3>
                <p>
                  Espacio exterior flexible con gradas, mesas altas y zonas verdes
                  que funcionan como extensión natural de la oficina.
                </p>
              </article>
            </div>
          </section>

          {/* ============ COTIZA (SHOWCASE SCROLL) ============ */}
          {/* Este componente ya incluye <section id="cotiza" ... /> */}
          <ScrollShowcase />

          {/* ============ PROCESO ============ */}
          <section id="proceso" className="section section-padded">
            <div className="section-header">
              <p className="eyebrow">Cómo trabajamos</p>
              <h2>
                Un flujo claro, de la primera idea a la primera noche en tu terraza
              </h2>
            </div>

            <ol className="process">
              <li className="process-step">
                <span className="process-index">01</span>
                <div>
                  <h3>Diagnóstico en sitio</h3>
                  <p>
                    Visitamos tu espacio, levantamos medidas y entendemos cómo vives:
                    cuántas personas usan la terraza, en qué horarios y con qué clima.
                  </p>
                </div>
              </li>

              <li className="process-step">
                <span className="process-index">02</span>
                <div>
                  <h3>Concepto &amp; anteproyecto</h3>
                  <p>
                    Desarrollamos un concepto visual, layout y renders esquemáticos
                    para que veas la transformación antes de ejecutar.
                  </p>
                </div>
              </li>

              <li className="process-step">
                <span className="process-index">03</span>
                <div>
                  <h3>Proyecto ejecutivo</h3>
                  <p>
                    Planos técnicos, especificaciones, cronograma y presupuesto
                    detallado. Todo listo para construir sin sorpresas.
                  </p>
                </div>
              </li>

              <li className="process-step">
                <span className="process-index">04</span>
                <div>
                  <h3>Construcción &amp; supervisión</h3>
                  <p>
                    Gestionamos obra, proveedores y acabados con presencia en campo,
                    actualizándote de avances de forma clara y periódica.
                  </p>
                </div>
              </li>

              <li className="process-step">
                <span className="process-index">05</span>
                <div>
                  <h3>Entrega &amp; puesta en escena</h3>
                  <p>
                    Probamos iluminación, audio y mobiliario contigo. Ajustamos los
                    últimos detalles y te entregamos la terraza lista para estrenar.
                  </p>
                </div>
              </li>
            </ol>
          </section>

          {/* ============ ESTUDIO ============ */}
          <section id="estudio" className="section section-dark section-split">
            <div className="section-media">
              <div className="portrait-frame">
                <Image
                  src="/equipo-comfort.jpg"
                  alt="Equipo de Comfort Studio"
                  width={720}
                  height={900}
                />
              </div>
            </div>

            <div className="section-content">
              <p className="eyebrow">El estudio</p>
              <h2>Arquitectura, interiorismo y obra en un mismo lenguaje</h2>

              <p>
                Comfort Studio nace de la obsesión por los espacios exteriores bien
                resueltos. Creemos que una terraza no es un “extra”, sino una pieza
                clave para respirar mejor dentro de casa.
              </p>

              <p>
                Trabajamos con materiales honestos, luz cálida y proporciones
                cuidadas, buscando siempre una estética limpia, contemporánea y
                profundamente habitable.
              </p>

              <div className="pill-list">
                <span className="pill">Terrazas &amp; rooftops</span>
                <span className="pill">Patios interiores</span>
                <span className="pill">Terrazas corporativas</span>
                <span className="pill">Remodelaciones exteriores</span>
              </div>
            </div>
          </section>

          {/* ============ CONTACTO ============ */}
          <section id="contacto" className="section section-padded">
            <div className="section-header">
              <p className="eyebrow">Agenda tu proyecto</p>
              <h2>Conversemos sobre tu terraza</h2>
              <p className="section-lede">
                Cuéntanos brevemente sobre tu espacio y lo que te gustaría lograr.
                En menos de 24 horas te contactamos para coordinar un diagnóstico.
              </p>
            </div>

            <div className="grid grid-contact">
              <form className="contact-form">
                <div className="contact-form-group">
                  <label htmlFor="nombre">Nombre completo</label>
                  <input
                    id="nombre"
                    type="text"
                    name="nombre"
                    placeholder="Nombre y apellido"
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="email">Correo electrónico</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="tu@correo.com"
                    required
                  />
                </div>

                <div className="contact-form-group contact-form-group-split">
                  <div>
                    <label htmlFor="telefono">Teléfono / WhatsApp</label>
                    <input
                      id="telefono"
                      type="tel"
                      name="telefono"
                      placeholder="+51 ..."
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="distrito">Distrito</label>
                    <input
                      id="distrito"
                      type="text"
                      name="distrito"
                      placeholder="Miraflores, Surco, La Molina..."
                      required
                    />
                  </div>
                </div>

                <div className="contact-form-group">
                  <label htmlFor="tipo-espacio">Tipo de espacio</label>
                  <select id="tipo-espacio" name="tipo-espacio">
                    <option>Terraza de departamento</option>
                    <option>Azotea completa</option>
                    <option>Patio interior</option>
                    <option>Terraza corporativa</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div className="contact-form-group">
                  <label htmlFor="mensaje">Cuéntanos qué te gustaría lograr</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    placeholder="Ej.: Queremos transformar la azotea en un espacio social con parrilla y zona de estar."
                  />
                </div>

                <button className="btn btn-primary btn-full" type="submit">
                  Enviar solicitud de diagnóstico
                </button>

                <p className="contact-form-note">
                  Al enviar este formulario aceptas ser contactado por Comfort Studio
                  vía correo o WhatsApp para coordinar tu proyecto.
                </p>
              </form>

              <div className="contact-meta">
                <h3>También puedes escribirnos directo</h3>
                <ul>
                  <li>
                    <span>WhatsApp:</span>{" "}
                    <a
                      href="https://wa.me/51XXXXXXXXX"
                      target="_blank"
                      rel="noreferrer"
                    >
                      +51 XXX XXX XXX
                    </a>
                  </li>
                  <li>
                    <span>Correo:</span>{" "}
                    <a href="mailto:hola@comfortstudio.pe">hola@comfortstudio.pe</a>
                  </li>
                  <li>
                    <span>Instagram:</span>{" "}
                    <a
                      href="https://instagram.com/comfortstudio.pe"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @comfortstudio.pe
                    </a>
                  </li>
                </ul>
                <p>
                  Atendemos proyectos principalmente en Lima Metropolitana, con
                  evaluación de viabilidad para otras ciudades.
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="site-footer-inner">
            <span>
              © {new Date().getFullYear()} Comfort Studio. Todos los derechos
              reservados.
            </span>
            <span>Experiencia digital por ALLYX.</span>
          </div>
        </footer>
      </PageTransition>
    </div>
  );
}
