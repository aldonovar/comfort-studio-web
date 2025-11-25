"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import styles from "./PageTransition.module.css";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <div className={styles.overlay}>
        <div className={`${styles.panel} ${styles.left}`} />
        <div className={`${styles.panel} ${styles.right}`} />
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
