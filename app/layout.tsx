import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
// CORRECCIÓN: Todos los imports deben ser por defecto (sin llaves)
import SmoothScroller from "@/components/SmoothScroller"; 
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";        
import FloatingCTA from "@/components/FloatingCTA";
import Preloader from "@/components/Preloader"; 

// ... (El resto del archivo layout.tsx se mantiene igual)
// ...
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body className="antialiased bg-[#f9f3ec] text-[#1e1713]">
        {/* 1. MOTORES DE FLUIDEZ Y CARGA */}
        <SmoothScroller />
        <Preloader />
        <PageTransition />
        
        {/* 2. TEXTURA */}
        <div className="noise-overlay"></div>

        {/* 3. ELEMENTOS FIJOS */}
        <Navbar />
        <FloatingCTA />

        {/* 4. CONTENIDO */}
        <div className="relative z-10">
          {children}
        </div>

      </body>
    </html>
  );
}