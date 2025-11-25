// app/page.tsx
import { useLenis } from "@/hooks/useLenis";

export default function HomePage() {
  useLenis();
  // ...
}

import { Navbar } from "@/components/Navbar";
import { Preloader } from "@/components/Preloader";
import { PageTransition } from "@/components/PageTransition";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="page">
      <Preloader />
      <Navbar />

      <PageTransition>
        <main>
          {/* HERO */}
          <section id="inicio" className="section hero">
            <div className="hero-media">
              <div className="hero-image-frame">
                <Image
                  src="/hero-terraza.jpg" // pon tu imagen real en /public
                  alt="Terraza Comfort Studio"
                  width={900}
                  height={900}
                />
              </div>
              <div className="hero-tag hero-tag-primary">
                <span>Terrazas, azoteas y patios</span>
              </div>
              <div className="hero-tag hero-tag-secondary">
                <span>Diseño + ejecución llave en mano</span>
              </div>
            </div>

            <div className="hero-content">
              <p className="eyebrow">Estudio peruano de terrazas & exteriores</p>
              <h1 className="hero-title">
                Arquitectura exterior <br />
                que se siente <span className="hero-highlight">hogar</span>.
              </h1>
              <p className="hero-subtitle">
                Transformamos metros subutilizados en terrazas habitables, cálidas
                y funcionales. Diseño, ingeniería y construcción integradas en un
                solo equipo.
              </p>

              <div className="hero-actions">
                <a href="#contacto" className="btn btn-primary">
                  Agendar diagnóstico gratuito
                </a>
                <a href="#proyectos" className="btn btn-ghost">
                  Ver proyectos recientes
                </a>
              </div>

              <div className="hero-meta">
                <div className="hero-meta-item">
                  <span className="hero-meta-label">+ m² transformados</span>
                  <span className="hero-meta-value">4 500</span>
                </div>
                <div className="hero-meta-item">
                  <span className="hero-meta-label">Proyectos en Lima</span>
                  <span className="hero-meta-value">+ 80</span>
                </div>
                <div className="hero-meta-item">
                  <span className="hero-meta-label">Índice de satisfacción</span>
                  <span className="hero-meta-value">4.9 ★</span>
                </div>
              </div>
            </div>
          </section>

          {/* SERVICIOS */}
          {/* ...aquí puedes trasladar directamente las secciones de servicios,
              proyectos, proceso, estudio y contacto que te di en el HTML,
              adaptando únicamente className a lo que hayas puesto en CSS... */}
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
