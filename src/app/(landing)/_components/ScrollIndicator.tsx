'use client';

import { useScrolled } from '@/hooks/useScrolled';
import { cn } from '@/lib/cn';

export function ScrollIndicator() {
  const scrolled = useScrolled(720);

  const goNext = () => {
    document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={goNext}
      aria-label="다음 섹션으로 이동"
      className={cn(
        'absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 cursor-pointer p-2 transition-opacity duration-300 sm:block',
        scrolled ? 'pointer-events-none opacity-0' : 'opacity-100',
      )}
    >
      <svg
        className="animate-nudge text-gray-400"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  );
}
