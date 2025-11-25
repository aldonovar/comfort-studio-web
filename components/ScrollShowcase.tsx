"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "./ScrollShowcase.module.css";

export function ScrollShowcase() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.03]);

  return (
    <section id="cotiza" className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <div className={styles.textColumn}>
          <p className={styles.label}>Cotización guiada</p>
          <h2 className={styles.title}>
            Una sola sección para entender tu terraza
            <span className={styles.titleAccent}> y empezar el proyecto.</span>
          </h2>
          <p className={styles.lede}>
            En lugar de un formulario frío, esta sección acompaña al visitante
            paso a paso: tipo de espacio, uso principal, metraje aproximado y
            nivel de inversión esperado. Todo mientras la terraza se mantiene
            presente al centro, como en un showcase de producto.
          </p>

          <ol className={styles.steps}>
            <li>
              <span>01</span>
              <div>
                <h3>Definimos el espacio</h3>
                <p>Terraza de departamento, azotea completa, patio interior o corporativo.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Conocemos el uso</h3>
                <p>Reuniones, parrillas, lectura, trabajo remoto o eventos frecuentes.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Alineamos inversión</h3>
                <p>Rangos claros para proponer soluciones honestas desde el inicio.</p>
              </div>
            </li>
          </ol>

          <a href="#contacto" className={styles.cta}>
            Quiero empezar mi cotización →
          </a>
        </div>

        <div className={styles.visualColumn}>
          <motion.div
            className={styles.device}
            style={{ rotateZ: rotate, y, scale }}
          >
            <div className={styles.deviceInner}>
              <Image
                src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Render de terraza Comfort Studio"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.deviceShadow} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
