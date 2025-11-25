import type { Metadata } from "next";
import Script from 'next/script';
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";
import PageTransition from "@/components/PageTransition"; // El nuevo telón
import FloatingCTA from "@/components/FloatingCTA";

// Configuración Tipográfica "Pareja de Poder"
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Comfort Studio | Outdoor Living de Lujo",
  description: "Arquitectura, diseño y construcción de terrazas premium en Perú.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body className="antialiased bg-[#f9f3ec]">
        {/* 1. Lógica de Scroll */}
        <SmoothScroller />

        {/* 2. Transición de Entrada (El efecto Ribbit) */}
        <PageTransition />

        {/* 3. Textura Global */}
        <div className="noise-layer"></div>

        {/* 4. Contenido */}
        {children}

        {/* 5. Botón Flotante (Siempre visible) */}
        <FloatingCTA />
      </body>
    </html>
  );
}