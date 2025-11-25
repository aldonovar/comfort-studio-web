"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const SECTIONS = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "proyectos", label: "Proyectos" },
  { id: "proceso", label: "Proceso" },
  { id: "estudio", label: "El estudio" },
  { id: "contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);

      // detectar sección activa
      let current = "inicio";
      SECTIONS.forEach((s) => {
        const el = document.getElementById(s.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = s.id;
        }
      });
      setActive(current);
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    setOpen(false);
    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
    >
      <div className={styles.inner}>
        <button
          className={styles.brand}
          onClick={() => handleClick("inicio")}
          aria-label="Ir al inicio"
        >
          <div className={styles.brandMark}>
            <Image
              src="/logo.png" // pon aquí tu logo (en /public)
              alt="Comfort Studio"
              fill
            />
          </div>
          <span className={styles.brandText}>Comfort Studio</span>
        </button>

        <nav
          className={`${styles.nav} ${open ? styles.navOpen : ""}`}
          aria-label="Navegación principal"
        >
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              className={`${styles.navLink} ${
                active === s.id ? styles.navLinkActive : ""
              }`}
              onClick={() => handleClick(s.id)}
            >
              {s.label}
            </button>
          ))}
        </nav>

        <button
          className={`${styles.toggle} ${open ? styles.toggleOpen : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
