'use client';

export default function TopBanner() {
  return (
    <div style={{
      backgroundColor: '#b07357', // Terracota sólido
      color: '#ffffff',
      fontSize: '0.75rem',
      padding: '8px 0',
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      fontWeight: 600,
      position: 'relative',
      zIndex: 102 // Encima del Navbar
    }}>
      <div className="container-safe flex justify-center items-center gap-2">
        <span>✨ Diseñamos tu verano 2025</span>
        <span style={{ opacity: 0.6 }}>|</span>
        <a href="#contacto" style={{ textDecoration: 'underline', cursor: 'pointer' }}>
          Agenda una visita técnica hoy
        </a>
      </div>
    </div>
  );
}