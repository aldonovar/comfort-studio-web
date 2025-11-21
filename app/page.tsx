import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesScroll from '@/components/ServicesScroll';
import PortfolioStrip from '@/components/PortfolioStrip';

export default function Home() {
  return (
    <main>
      <Navbar /> 
      {/* El Navbar ahora incluye internamente el TopBanner posicionado */}

      <Hero />

      <ServicesScroll />

      <PortfolioStrip />

      <footer style={{ backgroundColor: '#2c2c2c', color: '#faf8f1', padding: '4rem 5%', textAlign: 'center' }}>
        <h3 style={{ color: '#b07357', marginBottom: '1rem', fontSize: '1.5rem' }}>COMFORT STUDIO</h3>
        <div className="flex justify-center gap-4 mb-8 opacity-70 text-sm">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
        </div>
        <p style={{ opacity: 0.5, fontSize: '0.8rem' }}>
          © 2025 Comfort Studio. Lima, Perú.
        </p>
      </footer>
    </main>
  );
}