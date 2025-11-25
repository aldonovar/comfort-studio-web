import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
// Importaciones por defecto (sin llaves) para evitar errores de tipo
import SmoothScroller from "@/components/SmoothScroller";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";        
import FloatingCTA from "@/components/FloatingCTA"; 
import Preloader from "@/components/Preloader"; 

// --- CONFIGURACIÓN TIPOGRÁFICA "PAREJA DE PODER" (ESTE CÓDIGO DEBE ESTAR AQUÍ: TOP LEVEL) ---
// Solución al error de Scope: Montamos las fuentes fuera de la función RootLayout.
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Comfort Studio | Arquitectura & Outdoor Living",
  description: "Especialistas en diseño y construcción de terrazas de lujo, techos sol y sombra y espacios bioclimáticos en Perú.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // AQUÍ SE USAN LAS CONSTANTES EN EL ÁMBITO GLOBAL. Esto ya no fallará.
    <html lang="es" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body className="antialiased bg-[#f9f3ec] text-[#1e1713]">
        
        {/* 1. MOTORES DE FLUIDEZ Y CARGA */}
        <SmoothScroller />
        <Preloader />
        <PageTransition />
        
        {/* 2. TEXTURA Y ATMÓSFERA */}
        <div className="noise-overlay"></div>

        {/* 3. ELEMENTOS FIJOS (Visibilidad Asegurada con z-index alto) */}
        <Navbar />
        <FloatingCTA />

        {/* 4. CONTENIDO DE PÁGINA */}
        <div className="relative z-10">
          {children}
        </div>

      </body>
    </html>
  );
}