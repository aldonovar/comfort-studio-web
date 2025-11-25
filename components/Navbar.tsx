"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4 bg-[#f5f2eb]/90 backdrop-blur-md shadow-sm' : 'py-8 bg-transparent'}`}>
      <div className="container-safe flex justify-between items-center px-[5%] max-w-[1800px] mx-auto">
        
        {/* LOGO: Forzamos tamaño y visibilidad */}
        <Link href="/" className="relative z-50 flex items-center gap-3">
          <div className="relative w-12 h-12">
             <Image src="/logo.png" alt="Logo" fill className="object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-[#1e1713] font-bold text-sm tracking-[0.25em]">COMFORT</span>
            <span className="text-[#b07357] font-medium text-[0.6rem] tracking-[0.4em]">STUDIO</span>
          </div>
        </Link>

        {/* MENÚ DESKTOP: Negro sólido, imposible no ver */}
        <nav className="hidden md:flex gap-12">
          {["Inicio", "Servicios", "Proyectos", "Contacto"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-xs font-bold text-[#1e1713] uppercase tracking-[0.2em] hover:text-[#b07357] transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* BOTÓN CTA */}
        <Link href="#contacto" className="hidden md:block btn-primary text-xs !py-3 !px-6">
          Cotizar Ahora
        </Link>

      </div>
    </header>
  );
}