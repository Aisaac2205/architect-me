import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export const SectionTitle = ({ children, className }: SectionTitleProps) => (
  <h2
    className={cn('font-bold leading-[0.88] uppercase tracking-tight text-balance whitespace-pre-line', className)}
    style={{ fontSize: 'clamp(2.75rem, 5.5vw, 8rem)' }}
  >
    {children}
  </h2>
);
