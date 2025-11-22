import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesScroll from '@/components/ServicesScroll';
import Process from '@/components/Process';
import PortfolioStrip from '@/components/PortfolioStrip';
import Contact from '@/components/Contact'; // <--- Nuevo Import
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      {/* 1. NAVEGACIÓN */}
      <Navbar />

      {/* 2. PORTADA */}
      <Hero />

      {/* 3. EXPERIENCIA (Servicios) */}
      <ServicesScroll />

      {/* 4. MÉTODO (Proceso) */}
      <Process />

      {/* 5. GALERÍA (Portafolio) */}
      <PortfolioStrip />

      {/* 6. CONVERSIÓN (Formulario) <--- NUEVA SECCIÓN */}
      <Contact />

      {/* 7. CIERRE (Footer) */}
      <Footer />
    </main>
  );
}