import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import FloatingCTA from "@/components/FloatingCTA";

// --- CONFIGURACIÓN TIPOGRÁFICA "PAREJA DE PODER" ---
// Montserrat: Para textos técnicos, navegación y UI (Modernidad)
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Cormorant Garamond: Para títulos editoriales y números (Lujo/Elegancia)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  style: ["normal", "italic"],
});

// --- METADATA SEO ---
export const metadata: Metadata = {
  title: "Comfort Studio | Arquitectura & Outdoor Living",
  description: "Especialistas en diseño y construcción de terrazas de lujo, techos sol y sombra y espacios bioclimáticos en Perú.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body className="antialiased bg-[#f9f3ec] text-[#1e1713]">
        
        {/* 1. MOTOR DE SCROLL SUAVE (Lenis) 
            Hace que toda la experiencia de navegación se sienta "premium". */}
        <SmoothScroller />
        
        {/* 2. TELÓN DE ENTRADA (Page Transition)
            La cortina negra que sube al cargar la página. */}
        <PageTransition />
        
        {/* 3. CAPA DE TEXTURA (Noise Overlay)
            Añade un grano sutil tipo "film" sobre toda la web. */}
        <div className="noise-overlay"></div>

        {/* 4. ELEMENTOS FIJOS DE NAVEGACIÓN */}
        <Navbar />
        <FloatingCTA />

        {/* 5. CONTENIDO DINÁMICO DE LAS PÁGINAS */}
        <div className="relative z-10">
          {children}
        </div>

      </body>
    </html>
  );
}