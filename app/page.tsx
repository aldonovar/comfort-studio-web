import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesScroll from '@/components/ServicesScroll';
import PortfolioStrip from '@/components/PortfolioStrip';
import Footer from '@/components/Footer'; // <--- Importamos el nuevo Footer

export default function Home() {
  return (
    <main>
      {/* 1. NAVEGACIÓN */}
      <Navbar />

      {/* 2. HERO PRINCIPAL */}
      <Hero />

      {/* 3. EXPERIENCIA SCROLL (Servicios) */}
      <ServicesScroll />

      {/* 4. PORTAFOLIO */}
      <PortfolioStrip />

      {/* 5. FOOTER */}
      <Footer />
    </main>
  );
}