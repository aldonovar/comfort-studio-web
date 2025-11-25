import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesScroll from '@/components/ServicesScroll';
import Process from '@/components/Process';
import PortfolioStrip from '@/components/PortfolioStrip';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* 1. NAVEGACIÓN (Estilo Ribbit: Fija y Transparente/Overlay) */}
      <Navbar />

      {/* 2. PORTADA */}
      <Hero />

      {/* 3. EXPERIENCIA (Servicios con Scroll Lateral) */}
      <ServicesScroll />

      {/* 4. MÉTODO (Proceso de trabajo) */}
      <Process />

      {/* 5. GALERÍA (Portafolio) */}
      <PortfolioStrip />

      {/* 6. CONVERSIÓN (Formulario WhatsApp) */}
      <Contact />

      {/* 7. CIERRE (Pie de página) */}
      <Footer />
    </main>
  );
}