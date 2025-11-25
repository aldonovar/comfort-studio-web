import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import SmoothScroller from "@/components/SmoothScroller";
import PageTransition from "@/components/PageTransition";
import FloatingCTA from "@/components/FloatingCTA";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Comfort Studio | Outdoor Living",
  description: "Arquitectura de terrazas de lujo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body className="antialiased bg-[#f9f3ec] text-[#1e1713]">
        {/* 1. Motor de Scroll */}
        <SmoothScroller />
        
        {/* 2. Transición de Página (Cortina) */}
        <PageTransition />
        
        {/* 3. Ruido Visual */}
        <div className="noise-overlay"></div>

        {/* 4. Contenido */}
        <div className="relative z-10">
          {children}
        </div>

        {/* 5. Floating CTA */}
        <FloatingCTA />
      </body>
    </html>
  );
}