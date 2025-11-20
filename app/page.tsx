import Hero from '@/components/Hero';
import PortfolioStrip from '@/components/PortfolioStrip';

export default function Home() {
  return (
    <main>
      {/* 1. HERO - La portada */}
      <Hero />

      {/* 2. SEPARADOR - Simula espacio para scroll */}
      <div style={{ 
        height: '50vh', 
        padding: '50px', 
        backgroundColor: '#f9f3ec', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'column'
      }}>
        <h2 style={{ fontSize: '2rem', color: '#b86f4b', marginBottom: '1rem' }}>
          [SECCIÓN SERVICIOS]
        </h2>
        <p>Haz scroll hacia abajo para ver la animación del portafolio</p>
      </div>

      {/* 3. PORTAFOLIO */}
      <PortfolioStrip />

      {/* 4. FOOTER FALSO - Para dar espacio final */}
      <div style={{ height: '30vh', background: '#1a1a1a' }}></div>
    </main>
  );
}