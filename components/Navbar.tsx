"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

type NavItem = {
  id: string;
  label: string;
  description: string;
};

const NAV_ITEMS: NavItem[] = [
  {
    id: "inicio",
    label: "Inicio",
    description: "Hero audiovisual. Resumen de la promesa de Comfort Studio.",
  },
  {
    id: "servicios",
    label: "Servicios",
    description: "Qué hacemos: diseño, ingeniería, iluminación y ejecución.",
  },
  {
    id: "proyectos",
    label: "Proyectos",
    description: "Casos reales de terrazas y rooftops transformados.",
  },
  {
    id: "cotiza",
    label: "Cotiza",
    description: "Wizard simple para cotizar tu terraza en segundos.",
  },
  {
    id: "contacto",
    label: "Contacto",
    description: "Formularios y canales directos para hablar con el estudio.",
  },
];

export function Navbar() {
  const [beyondHero, setBeyondHero] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("inicio");
  const [hovered, setHovered] = useState<NavItem | null>(null);

  useEffect(() => {
    function onScroll() {
      const heroHeight = window.innerHeight * 0.7;
      setBeyondHero(window.scrollY > heroHeight);

      let current = "inicio";
      NAV_ITEMS.forEach((s) => {
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

  const handleNavClick = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    setOpen(false);
    window.scrollTo({
      top: target.offsetTop - 96,
      behavior: "smooth",
    });
  };

  const headerClasses = [
    styles.header,
    beyondHero ? styles.headerTransparent : "",
  ].join(" ");

  return (
    <header className={headerClasses}>
      <div className={styles.inner}>
        {/* Marca */}
        <button
          className={styles.brand}
          onClick={() => handleNavClick("inicio")}
          aria-label="Ir al inicio"
        >
          <div className={styles.brandLogo}>
            <Image
              src="/logo.png"
              alt="Comfort Studio"
              fill
              priority
              sizes="52px"
            />
          </div>
          <div className={styles.brandTextBlock}>
            <span className={styles.brandTitle}>Comfort Studio</span>
            <span className={styles.brandSubtitle}>
              Arquitectura exterior &amp; terrazas
            </span>
          </div>
        </button>

        {/* Links desktop */}
        <nav
          className={`${styles.nav} ${open ? styles.navOpen : ""}`}
          aria-label="Navegación principal"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`${styles.navLink} ${
                active === item.id ? styles.navLinkActive : ""
              }`}
              onClick={() => handleNavClick(item.id)}
              onMouseEnter={() => setHovered(item)}
              onFocus={() => setHovered(item)}
              onMouseLeave={() => setHovered((h) => (h?.id === item.id ? null : h))}
            >
              <span className={styles.navLabel}>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Panel de detalle */}
        <div className={styles.navDetailWrapper}>
          <div
            className={`${styles.navDetail} ${
              hovered ? styles.navDetailVisible : ""
            }`}
          >
            <p className={styles.navDetailTitle}>
              {hovered?.label ?? "Navegación"}
            </p>
            <p className={styles.navDetailText}>
              {hovered?.description ??
                "Desplázate por la experiencia de Comfort Studio."}
            </p>
          </div>
        </div>

        {/* CTA + Toggle mobile */}
        <div className={styles.rightZone}>
          <button
            className={styles.navCta}
            onClick={() => handleNavClick("cotiza")}
          >
            Cotiza tu terraza
          </button>

          <button
            className={`${styles.toggle} ${open ? styles.toggleOpen : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
