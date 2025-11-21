'use client';
import Spline from '@splinetool/react-spline';
import { useState } from 'react';

export default function Scene3D() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {/* Skeleton Loader */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-500">
          <div className="w-10 h-10 border-2 border-[#b07357] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Escena Spline */}
      <Spline 
        scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" 
        onLoad={() => setIsLoading(false)}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}