import type { Metadata } from "next";
import Script from 'next/script'; // 1. Importar el componente Script
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 2. Obtener IDs de Variables de Entorno (Accesibles porque son NEXT_PUBLIC_)
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const META_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 3. Optimización SEO (Metadatos Competitivos)
export const metadata: Metadata = {
  // Título que aparece en el navegador y resultados de Google.
  title: "Comfort Studio | Diseño y Construcción de Terrazas de Lujo en Lima",
  // Descripción para Google. Debe generar un clic.
  description: "Especialistas en la creación de terrazas y espacios exteriores de alto valor en Perú. Competimos con Mimetika y Solideas con un diseño moderno, materiales premium y acabados impecables.",
  
  // Tags clave para Google
  keywords: ['terrazas de lujo', 'diseño de terrazas', 'azoteas', 'Mimetika', 'Solideas', 'arquitectura exterior', 'diseño de jardines'],

  // Opcional, pero recomendado: URL canónica
  alternates: {
    canonical: 'https://www.comfortstudioperu.com/',
  },

  // Opcional, pero recomendado: OpenGraph para compartir en redes
  openGraph: {
    title: 'Comfort Studio | Terrazas y Diseño de Lujo',
    description: 'Especialistas en la creación de terrazas y espacios exteriores de alto valor en Perú.',
    url: 'https://www.comfortstudioperu.com',
    siteName: 'Comfort Studio',
    // type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es"> {/* 4. Cambiar 'lang="en"' a 'lang="es"' por SEO e idioma */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* ======================================= */}
        {/* 📊 SCRIPT DE GOOGLE ANALYTICS 4 (GA4) */}
        {/* ======================================= */}
        {GA_ID && (
            <>
              <Script 
                async 
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} 
                strategy="afterInteractive" // Carga tardía para mejorar el rendimiento
              />
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

        {/* ======================================= */}
        {/* 📘 SCRIPT DE META/FACEBOOK PIXEL */}
        {/* ======================================= */}
        {META_ID && (
          <Script id="meta-pixel-init" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </body>
    </html>
  );
}