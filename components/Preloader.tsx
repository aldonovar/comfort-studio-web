"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Preloader.module.css";

export function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setHidden(true), 1600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`${styles.preloader} ${hidden ? styles.preloaderHidden : ""}`}
    >
      <div className={styles.inner}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Comfort Studio" width={120} height={120} />
        </div>
        <div className={styles.bar}>
          <div className={styles.fill} />
        </div>
        <p className={styles.text}>Cargando experiencia Comfort…</p>
      </div>
    </div>
  );
}
