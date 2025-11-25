'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function PageTransition() {
    const curtainRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Secuencia de Entrada: 
        // 1. La cortina negra sube
        // 2. El logo o loader desaparece (opcional)
        // 3. La web se revela
        tl.to(curtainRef.current, {
            height: '0%',
            duration: 1.2,
            ease: 'power4.inOut',
            delay: 0.2
        });
    }, []);

    return (
        <div
            ref={curtainRef}
            className="fixed top-0 left-0 w-full h-screen bg-[#1e1713] z-[9999] flex items-center justify-center overflow-hidden"
        >
            {/* Aquí podrías poner una animación de logo rápida si quisieras */}
            <div className="text-[#f9f3ec] font-serif italic text-2xl tracking-widest opacity-50 animate-pulse">
                Loading Experience...
            </div>
        </div>
    );
}