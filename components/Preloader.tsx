"use client";
import { useEffect, useState } from "react";
import styles from "./Preloader.module.css"; // Asegúrate de que este archivo exista, si no, comenta esta línea.

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setHidden(true), 700);
    return () => clearTimeout(timeout);
  }, []);

  if (hidden) return null;

  return (
    // Si no tienes el CSS module, cambia className={styles.preloader} por style={{...}}
    <div className={styles?.preloader || "fixed inset-0 z-[9999] bg-[#1e1713] flex items-center justify-center"}>
      <div className={styles?.inner || "flex flex-col items-center gap-2 text-[#f9f3ec]"}>
        <p className={styles?.text || "text-sm tracking-widest uppercase"}>Loading...</p>
      </div>
    </div>
  );
}