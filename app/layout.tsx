import type { Metadata } from "next";
import Script from 'next/script';
// 1. IMPORTAR MONTSERRAT (Tu tipografía corporativa)
import { Montserrat } from "next/font/google";
import "./globals.css";

// 2. CONFIGURAR FUENTE
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ['300', '400', '500', '600', '700'], // Pesos para diseño fino y títulos fuertes
  display: 'swap',
});

// IDs de seguimiento
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const META_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export const metadata: Metadata = {
  title: "Comfort Studio | Diseño de Terrazas y Techos Sol y Sombra",
  description: "Especialistas en arquitectura exterior, techos bioclimáticos y Outdoor Living en Perú.",
  icons: {
    icon: '/favicon.ico', // Asegúrate de tener esto pronto
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body>
        {/* Textura de fondo para dar sensación de materialidad */}
        <div className="bg-texture"></div>
        
        {children}

        {/* ANALYTICS (No tocar) */}
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