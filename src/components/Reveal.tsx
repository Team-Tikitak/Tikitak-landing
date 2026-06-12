'use client';

import { type ElementType, type ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/cn';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  from?: 'up' | 'down' | 'left' | 'right' | 'scale';
  className?: string;
  as?: 'div' | 'li' | 'section';
};

const HIDDEN: Record<NonNullable<RevealProps['from']>, string> = {
  up: 'translate-y-8',
  down: '-translate-y-8',
  left: 'translate-x-8',
  right: '-translate-x-8',
  scale: 'scale-95',
};

export function Reveal({
  children,
  delay = 0,
  from = 'up',
  className = '',
  as = 'div',
}: RevealProps) {
  const [ref, shown] = useInView<HTMLElement>({
    threshold: 0.2,
    rootMargin: '0px 0px -15% 0px',
  });

  const Tag = as as ElementType;
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition-all duration-700 ease-out will-change-transform',
        shown ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : `opacity-0 ${HIDDEN[from]}`,
        className,
      )}
    >
      {children}
    </Tag>
  );
}
