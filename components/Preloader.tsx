"use client";

import { useEffect, useState } from "react";
// Si tienes un archivo CSS module, úsalo. Si no, usamos estilos en línea para asegurar que funcione ya.
// import styles from "./Preloader.module.css";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setHidden(true), 800); // Un poco más de tiempo para que se vea
    return () => clearTimeout(timeout);
  }, []);

  if (hidden) return null;

  return (
    <div 
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#1e1713] text-[#f9f3ec] transition-opacity duration-500 ease-out"
      style={{ opacity: hidden ? 0 : 1 }}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="w-2 h-2 bg-[#b07357] rounded-full animate-ping"></div>
        <p className="text-xs font-bold tracking-[0.3em] uppercase">Comfort Studio</p>
      </div>
    </div>
  );
}