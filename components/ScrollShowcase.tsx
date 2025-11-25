"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
// import styles from "./ScrollShowcase.module.css"; 

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
    <section id="cotiza" ref={ref} className="py-24 bg-[#f4ebe4] overflow-hidden">
      <div className="container-safe grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#b07357] font-bold tracking-[0.25em] text-xs uppercase mb-4">Cotización guiada</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1e1713] mb-6">
            Una sola sección para entender tu terraza
            <span className="text-[#b07357] italic"> y empezar el proyecto.</span>
          </h2>
          <p className="text-lg text-[#1e1713]/80 mb-10 font-light">
            En lugar de un formulario frío, esta sección acompaña al visitante
            paso a paso: tipo de espacio, uso principal y nivel de inversión.
          </p>
          
          <a href="#contacto" className="inline-block border-b-2 border-[#b07357] text-[#1e1713] uppercase tracking-widest text-xs pb-2 hover:text-[#b07357] transition-colors font-bold">
            Quiero empezar mi cotización →
          </a>
        </div>

        <div className="relative min-h-[500px] flex justify-center items-center">
          <motion.div
            style={{ rotateZ: rotate, y, scale }}
            className="relative w-full max-w-md aspect-[3/4] shadow-2xl rounded-2xl overflow-hidden border border-white/20"
          >
            <div className="absolute inset-0 bg-[#1e1713]">
               {/* Placeholder de imagen si la externa falla */}
               <Image 
                  src="https://images.unsplash.com/photo-1600566753086-00f18cf27f43?q=80&w=1000&auto=format&fit=crop"
                  alt="Render Showcase"
                  fill
                  className="object-cover opacity-80"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/20 text-6xl font-serif italic">Cotizador</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}