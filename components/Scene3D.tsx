'use client';
import { useState, useEffect } from 'react';
// Importamos Spline de manera normal, next.config se encarga del resto
import Spline from '@splinetool/react-spline';

export default function Scene3D() {
  const [isLoading, setIsLoading] = useState(true);
  // Estado para asegurar que solo cargue en el cliente
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="w-full h-full bg-transparent" />;
  }

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-500 pointer-events-none">
          <div className="w-10 h-10 border-2 border-[#b07357] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <Spline 
        scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" 
        onLoad={() => setIsLoading(false)}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}