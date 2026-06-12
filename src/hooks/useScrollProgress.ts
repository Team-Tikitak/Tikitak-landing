'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';
import { prefersReducedMotion } from '@/lib/prefersReducedMotion';

interface UseScrollProgressOptions {
  start?: number;
  end?: number;
}

export function useScrollProgress<T extends Element>({
  start = 1,
  end = 0.35,
}: UseScrollProgressOptions = {}): [RefObject<T | null>, number] {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setProgress(1);
      return;
    }

    let rafId = 0;

    const update = () => {
      rafId = 0;
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const viewH = window.innerHeight;
      const startPx = viewH * start;
      const endPx = viewH * end;
      const range = startPx - endPx;
      const next = (startPx - rect.top) / range;
      setProgress(Math.max(0, Math.min(1, next)));
    };

    const schedule = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [start, end]);

  return [ref, progress];
}
