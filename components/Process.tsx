'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  {
    number: "01",
    title: "Diseño & 3D",
    desc: "Visualiza tu terraza antes de construir. Creamos renders hiperrealistas para garantizar que el resultado sea exacto a lo soñado."
  },
  {
    number: "02",
    title: "Planificación",
    desc: "Cronograma exacto y selección de materiales premium (madera, aluminio, acero). Sin sorpresas ni costos ocultos."
  },
  {
    number: "03",
    title: "Ejecución",
    desc: "Instalación limpia y técnica. Nuestro equipo cuida cada detalle, desde la estructura hasta la iluminación final."
  }
];

export default function Process() {
  const revealRef = useScrollReveal();

  return (
    <section id="experiencia" ref={revealRef} style={{ padding: '6rem 5%', backgroundColor: '#ffffff' }}>
      <div className="container-safe">
        {/* Cabecera */}
        <div style={{ marginBottom: '4rem', textAlign: 'left' }}>
          <span style={{ color: '#b07357', fontWeight: 700, letterSpacing: '2px', fontSize: '0.9rem', textTransform: 'uppercase' }}>
            MÉTODO COMFORT
          </span>
          <h2 style={{ fontSize: '2.5rem', color: '#2c2c2c', marginTop: '10px', fontFamily: 'var(--font-montserrat)', maxWidth: '600px' }}>
            No improvisamos.<br/>Diseñamos y construimos.
          </h2>
        </div>

        {/* Grid de Pasos */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '3rem',
          borderTop: '1px solid #eee',
          paddingTop: '3rem'
        }}>
          {steps.map((step, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ 
                fontSize: '4rem', 
                fontWeight: 700, 
                color: 'rgba(176, 115, 87, 0.15)', // Terracota transparente
                fontFamily: 'var(--font-montserrat)',
                lineHeight: 1
              }}>
                {step.number}
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#2c2c2c', fontWeight: 600 }}>{step.title}</h3>
              <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}