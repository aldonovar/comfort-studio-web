import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesScroll from '@/components/ServicesScroll'; // <--- IMPORTAR
import PortfolioStrip from '@/components/PortfolioStrip';

export default function Home() {
  return (
    <main>
      {/* 1. NAVEGACIÓN */}
      <Navbar />

      {/* 2. HERO PRINCIPAL */}
      <Hero />

      {/* 3. EXPERIENCIA SCROLL (Efecto Tech) */}
      {/* Reemplazamos el div de prueba con nuestro componente potente */}
      <ServicesScroll />

      {/* 4. PORTAFOLIO */}
      <PortfolioStrip />

      {/* 5. FOOTER (Simple por ahora) */}
      <footer style={{ 
        backgroundColor: '#2c2c2c', 
        color: '#faf8f1', 
        padding: '3rem 5%', 
        textAlign: 'center',
        marginTop: '0' // Quitamos margen porque el scroll termina exacto
      }}>
        <h3 style={{ color: '#b07357', marginBottom: '1rem' }}>COMFORT STUDIO</h3>
        <p>Diseño y Construcción de Terrazas en Lima, Perú.</p>
        <p style={{ opacity: 0.5, marginTop: '2rem', fontSize: '0.9rem' }}>
          © 2024 Comfort Studio. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}