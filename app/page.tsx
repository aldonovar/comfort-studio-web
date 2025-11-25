import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      
      {/* SECCIÓN 1: PORTADA (HERO) 
          La primera impresión. Debe ser impecable.
      */}
      <Hero />

      {/* ESPACIO TEMPORAL PARA SCROLL 
        Esto es solo para que puedas probar el efecto de "Vidrio Esmerilado" 
        de la barra de navegación al bajar. 
        Lo reemplazaremos pronto con la sección de "Servicios".
      */}
      <div className="h-screen w-full flex items-center justify-center bg-[#f9f3ec]">
        <div className="text-center opacity-30">
          <span className="block text-xs font-bold tracking-[0.3em] uppercase mb-2">
            Próximamente
          </span>
          <h2 className="text-4xl font-serif italic text-[#1e1713]">
            Experiencia de Scroll
          </h2>
        </div>
      </div>

    </main>
  );
}