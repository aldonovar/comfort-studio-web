"use client";

import { useEffect, useState } from "react";
// import styles from "./Preloader.module.css"; // Usa estilos en línea por ahora si la ruta del módulo es un problema

// CORRECCIÓN CLAVE: Usamos 'export default' para coincidir con app/layout.tsx
export default function Preloader() { 
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Pensado más como transición de entrada que como carga real
    const timeout = setTimeout(() => setHidden(true), 700);
    return () => clearTimeout(timeout);
  }, []);

  if (hidden) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        backgroundColor: '#1e1713',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#f9f3ec',
        opacity: 1, // La opacidad se gestiona con el estado 'hidden'
        transition: 'opacity 0.7s ease',
      }}
    >
      <p style={{
        fontSize: '0.9rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
      }}>Loading Signature Experience...</p>
    </div>
  );
}