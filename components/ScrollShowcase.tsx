"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
// import styles from "./ScrollShowcase.module.css"; // Descomenta si tienes los estilos

export default function ScrollShowcase() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.03]);

  return (
    <section id="cotiza" ref={ref} className="py-20 bg-[#f4ebe4] overflow-hidden">
      <div className="container-safe grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[#b07357] font-bold tracking-[0.25em] text-xs uppercase mb-2">Cotización guiada</p>
          <h2 className="text-4xl font-serif text-[#1e1713] mb-4">
            Una sola sección para entender tu terraza
            <span className="text-[#b07357]"> y empezar el proyecto.</span>
          </h2>
          <p className="text-lg text-[#1e1713]/80 mb-8">
            En lugar de un formulario frío, esta sección acompaña al visitante
            paso a paso.
          </p>
          
          <a href="#contacto" className="inline-block border-b border-[#b07357] text-[#1e1713] uppercase tracking-widest text-xs pb-1 hover:text-[#b07357]">
            Quiero empezar mi cotización →
          </a>
        </div>

        <div className="relative min-h-[400px] flex justify-center items-center">
          <motion.div
            style={{ rotateZ: rotate, y, scale }}
            className="relative w-full max-w-md aspect-[3/4] shadow-2xl rounded-lg overflow-hidden"
          >
             <div className="bg-gray-200 w-full h-full flex items-center justify-center text-gray-500">
                {/* Placeholder de imagen si no carga la externa */}
                Render de Terraza
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}