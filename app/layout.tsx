import type { Metadata } from "next";
import Script from 'next/script';
import { Montserrat } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader"; // Importar Preloader
import FloatingCTA from "@/components/FloatingCTA"; // Importar Botón Flotante

// Configuración de fuente Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  title: "Comfort Studio | Diseño y Construcción de Terrazas",
  description: "Especialistas en Outdoor Living, techos sol y sombra y arquitectura exterior en Perú.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body>
        {/* 1. Preloader Cinemático (Carga antes que nada) */}
        <Preloader />
        
        {/* 2. Textura de fondo sutil */}
        <div className="bg-texture"></div>
        
        {/* 3. Contenido de la página */}
        {children}
        
        {/* 4. Botón de Acción Flotante (WhatsApp) */}
        <FloatingCTA />

        {/* 5. Scripts de Analítica */}
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