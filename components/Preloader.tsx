"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const containerRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setVisible(false)
    });

    // 1. Logo aparece
    tl.fromTo(logoRef.current, 
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    )
    // 2. Pausa dramática
    .to({}, { duration: 0.5 })
    // 3. Cortina sube
    .to(containerRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "power4.inOut"
    });

  }, []);

  if (!visible) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 z-[1000] bg-[#1e1713] flex items-center justify-center">
      <div ref={logoRef} className="relative w-48 h-48">
        {/* Asegúrate de que logo.png sea BLANCO o tenga contraste sobre fondo oscuro */}
        <Image 
          src="/logo.png" 
          alt="Comfort Studio" 
          fill 
          className="object-contain filter invert brightness-0 invert-1" // Truco para volverlo blanco si es negro
          priority
        />
      </div>
    </div>
  );
}