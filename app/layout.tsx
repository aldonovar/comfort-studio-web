import type { Metadata } from "next";
import Script from 'next/script';
// Importamos la pareja tipográfica: Sans para estructura, Serif para elegancia
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import FloatingCTA from "@/components/FloatingCTA";
import SmoothScroller from "@/components/SmoothScroller";

// 1. CONFIGURACIÓN TIPOGRÁFICA
// Montserrat: Técnica, moderna, legible (Para UI, menús, párrafos largos)
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

// Cormorant Garamond: Editorial, lujosa, expresiva (Para Títulos, Heros, Números)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  style: ['normal', 'italic'], // Importante para esos toques itálicos elegantes
});

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  title: "Comfort Studio | Arquitectura & Outdoor Living",
  description: "Diseño y construcción de terrazas de lujo, techos sol y sombra y espacios bioclimáticos en Perú.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Inyectamos ambas variables CSS en el HTML
    <html lang="es" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body className="antialiased relative">

        {/* Motor de Inercia (Scroll Suave) */}
        <SmoothScroller />

        {/* Preloader Cinemático */}
        <Preloader />

        {/* --- ATMÓSFERA GLOBAL --- */}

        {/* 1. Capa de Ruido (Noise): Da textura de papel/film */}
        <div className="noise-overlay fixed inset-0 z-[9999] pointer-events-none opacity-[0.035] mix-blend-overlay"></div>

        {/* 2. Fondo Arquitectónico: Un gradiente muy sutil y cálido */}
        <div className="bg-root fixed inset-0 z-[-1]">
          <div className="bg-grid absolute inset-[-50px] opacity-40 mix-blend-multiply"></div>
        </div>

        {/* Contenido de la página */}
        <div className="relative z-10 selection:bg-[#b07357] selection:text-white">
          {children}
        </div>

        {/* Botón de Conversión Flotante */}
        <FloatingCTA />

        {/* Google Analytics */}
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