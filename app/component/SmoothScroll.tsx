'use client';

import { ReactNode, useEffect } from 'react';
import Lenis from 'lenis';
import HasMounted from './HasMounted';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Check if it's a touch device to avoid scroll-trapping bugs on mobile
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) return;

    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
