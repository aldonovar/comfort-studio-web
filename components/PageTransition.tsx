"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import styles from "./PageTransition.module.css"; // Asegúrate de que exista o comenta

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      {/* Si tienes estilos para la cortina, úsalos aquí. Si no, este div vacío no molesta. */}
      <div className={styles?.overlay} style={{ pointerEvents: 'none' }}>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.6, ease: [0.2, 0.75, 0.24, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}