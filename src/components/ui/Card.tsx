import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverable?: boolean;
  padded?: boolean;
}

export function Card({
  children,
  hoverable = false,
  padded = true,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-300',
        hoverable &&
          'hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 hover:border-[var(--color-primary)]/30 cursor-pointer',
        padded && 'p-6',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
