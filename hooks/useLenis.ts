"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.12,
      wheelMultiplier: 0.9,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}
