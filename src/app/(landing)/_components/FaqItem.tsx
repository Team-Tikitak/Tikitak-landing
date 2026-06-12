'use client';

import { useState } from 'react';
import { cn } from '@/lib/cn';
import type { Faq } from '../_constants/types';

export function FaqItem({ q, a }: Faq) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left font-bold"
      >
        {q}
        <span
          className={cn(
            'text-brand shrink-0 text-xl transition-transform duration-300',
            open && 'rotate-45',
          )}
        >
          +
        </span>
      </button>
      <div
        className={cn(
          'grid transition-all duration-300 ease-out',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <p className="pb-5 leading-relaxed text-gray-500">{a}</p>
        </div>
      </div>
    </div>
  );
}
