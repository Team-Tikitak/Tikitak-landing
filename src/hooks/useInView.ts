'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';
import { prefersReducedMotion } from '@/lib/prefersReducedMotion';

export function useInView<T extends Element>({
  threshold,
  rootMargin,
  root,
}: IntersectionObserverInit = {}): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin, root },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin, root]);

  return [ref, inView];
}
