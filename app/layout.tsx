import type { Metadata } from "next";
import Script from 'next/script';
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import FloatingCTA from "@/components/FloatingCTA";
import SmoothScroller from "@/components/SmoothScroller";

// 1. Configuración de Fuentes
// Montserrat: Para cuerpos de texto, UI y datos técnicos (La "Razón")
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

// Cormorant Garamond: Para Títulos, citas y números grandes (La "Emoción")
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  title: "Comfort Studio | Arquitectura Atmosférica",
  description: "Especialistas en Outdoor Living, techos sol y sombra y arquitectura exterior en Perú.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        {/* Motor de Scroll Suave */}
        <SmoothScroller />

        {/* Preloader de Entrada */}
        <Preloader />

        {/* --- CAPA DE ATMÓSFERA (TEXTURA + FONDO) --- */}
        {/* Ruido Fílmico (Noise) sobre toda la web */}
        <div className="noise-overlay"></div>

        {/* Fondo Arquitectónico */}
        <div className="bg-root">
          <div className="bg-grid"></div>
        </div>

        {/* Contenido Principal */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Botón Flotante */}
        <FloatingCTA />

        {/* Scripts de Analítica */}
        {GA_ID && (
          <>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="google-analytics-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}