// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, DM_Sans } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Comfort Studio — Arquitectura exterior que se siente hogar",
  description:
    "Comfort Studio diseña y construye terrazas, azoteas y espacios exteriores que se sienten hogar. Arquitectura, diseño y ejecución llave en mano en Lima.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
