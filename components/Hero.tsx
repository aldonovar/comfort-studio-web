"use client";

import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      {/* Capa de video (usa tu URL real aquí) */}
      <div className={styles.videoLayer}>
        <video
          className={styles.video}
          src="https://cdn.coverr.co/videos/coverr-rooftop-dinner-6795/1080p.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className={styles.videoOverlay} />
      </div>

      <div className={styles.inner}>
        <div className={styles.copyColumn}>
          <p className={styles.label}>Arquitectura exterior · Terrazas de alto valor</p>

          <h1 className={styles.title}>
            Diseño que{" "}
            <span className={styles.titleAccent}>trasciende la terraza.</span>
          </h1>

          <p className={styles.subtitle}>
            Comfort Studio diseña y ejecuta terrazas, azoteas y patios donde la
            arquitectura, la luz y el confort se integran en una sola experiencia
            habitable.
          </p>

          <div className={styles.ctaRow}>
            <a href="#cotiza" className={styles.primaryCta}>
              Cotizar mi terraza
            </a>
            <a href="#proyectos" className={styles.secondaryCta}>
              Ver portafolio →
            </a>
          </div>
        </div>

        <div className={styles.visualColumn}>
          <div className={styles.badge}>
            <span>Especialistas en terrazas</span>
          </div>
          <div className={styles.stats}>
            <div>
              <p className={styles.statsLabel}>+ m² intervenidos</p>
              <p className={styles.statsValue}>4 500</p>
            </div>
            <div>
              <p className={styles.statsLabel}>Proyectos en Lima</p>
              <p className={styles.statsValue}>+ 80</p>
            </div>
            <div>
              <p className={styles.statsLabel}>Índice de satisfacción</p>
              <p className={styles.statsValue}>4.9 ★</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
