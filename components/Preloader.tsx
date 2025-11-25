"use client";
import { useEffect, useState } from "react";
import styles from "./Preloader.module.css";

// CORRECCIÓN: Usamos export default para ser compatible con layout.tsx
export default function Preloader() { 
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setHidden(true), 700);
    return () => clearTimeout(timeout);
  }, []);

  if (hidden) return null;

  return (
    <div className={styles.preloader}>
      <div className={styles.inner}>
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
        <p className={styles.text}>Entrando a Comfort Studio…</p>
      </div>
    </div>
  );
}