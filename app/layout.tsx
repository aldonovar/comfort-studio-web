import type { Metadata } from "next";
import Script from 'next/script';
// 1. IMPORTAR MONTSERRAT
import { Montserrat } from "next/font/google";
import "./globals.css";

// 2. CONFIGURAR MONTSERRAT
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ['300', '400', '500', '600', '700'],
});

// IDs de seguimiento (Se mantienen igual)
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const META_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

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
    <html lang="es">
      <body className={`${montserrat.variable} antialiased`}>
        {/* FONDO ANIMADO (Mantenemos tu fondo, pero adaptaremos los colores en CSS) */}
        <div className="bg-root">
          <div className="bg-grid"></div>
        </div>
        
        {children}

        {/* SCRIPTS DE SEGUIMIENTO (Mantenidos) */}
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