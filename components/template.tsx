'use client';
import { useEffect } from 'react';
import gsap from 'gsap';

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Animación de entrada (Cortinas se retiran)
    const tl = gsap.timeline();
    
    tl.to('#banner-1', { height: '0%', duration: 0.5, ease: 'power2.inOut' })
      .to('#banner-2', { height: '0%', duration: 0.5, ease: 'power2.inOut' }, "-=0.3")
      .to('#banner-3', { height: '0%', duration: 0.5, ease: 'power2.inOut' }, "-=0.3");
  }, []);

  return (
    <div>
      {/* Cortinas de Transición */}
      <div id="banner-1" className="fixed top-0 left-0 w-full h-screen bg-[#1e1713] z-[9999]" />
      <div id="banner-2" className="fixed top-0 left-0 w-full h-screen bg-[#b86f4b] z-[9998]" />
      <div id="banner-3" className="fixed top-0 left-0 w-full h-screen bg-[#f9f3ec] z-[9997]" />
      
      {children}
    </div>
  );
}