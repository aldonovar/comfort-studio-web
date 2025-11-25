import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import FloatingCTA from "@/components/FloatingCTA";
import Preloader from "@/components/Preloader";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
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
  description: "Especialistas en diseño y construcción de terrazas de lujo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body className="antialiased bg-[#f9f3ec] text-[#1e1713]">
        
        {/* 1. Motores Globales */}
        <SmoothScroller />
        <Preloader />
        
        {/* 2. Elementos Fijos (Fuera de la transición para que no parpadeen) */}
        <Navbar />
        <FloatingCTA />
        <div className="noise-overlay"></div>

        {/* 3. Contenido con Transición (CORRECCIÓN: Envuelve children) */}
        <PageTransition>
          <div className="relative z-10">
            {children}
          </div>
        </PageTransition>

      </body>
    </html>
  );
}