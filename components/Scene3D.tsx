'use client';
import Spline from '@splinetool/react-spline';
import { useState } from 'react';

export default function Scene3D() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {/* Skeleton Loader: Se muestra mientras el 3D carga */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-500" 
             style={{ backgroundColor: 'transparent' }}>
          {/* Spinner sutil color Terracota */}
          <div className="w-10 h-10 border-2 border-[#b07357] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Escena Spline */}
      {/* He colocado un modelo de arquitectura minimalista de ejemplo. 
          Más adelante lo reemplazaremos por TU diseño de terraza específico. */}
      <Spline 
        scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" 
        onLoad={() => setIsLoading(false)}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}