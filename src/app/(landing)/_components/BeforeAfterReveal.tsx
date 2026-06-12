'use client';

import { type ReactNode } from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';

interface BeforeAfterRevealProps {
  children: ReactNode;
  curtainClass?: string;
  className?: string;
}

export function BeforeAfterReveal({
  children,
  curtainClass = 'bg-white',
  className = '',
}: BeforeAfterRevealProps) {
  const [ref, progress] = useScrollProgress<HTMLDivElement>({ start: 1.0, end: 0.1 });
  const shift = progress * 100;

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {children}
      <div
        aria-hidden
        style={{ transform: `translate3d(-${shift}%, 0, 0)` }}
        className={`pointer-events-none absolute inset-y-0 left-0 hidden w-1/2 will-change-transform md:block ${curtainClass}`}
      />
      <div
        aria-hidden
        style={{ transform: `translate3d(${shift}%, 0, 0)` }}
        className={`pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 will-change-transform md:block ${curtainClass}`}
      />
    </div>
  );
}
