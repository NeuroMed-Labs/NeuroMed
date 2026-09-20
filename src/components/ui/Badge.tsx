import type { ReactNode } from 'react';
import { TumorClass, TUMOR_CLASS_LABELS } from '@/lib/types';
import { cn } from '@/lib/utils';

interface BadgeProps {
  tumorClass: TumorClass;
  size?: 'sm' | 'md';
  children?: ReactNode;
}

const badgeColorMap: Record<TumorClass, string> = {
  [TumorClass.GLIOMA]: 'bg-red-100 text-red-800 border-red-200',
  [TumorClass.MENINGIOMA]: 'bg-amber-100 text-amber-800 border-amber-200',
  [TumorClass.PITUITARY]: 'bg-violet-100 text-violet-800 border-violet-200',
  [TumorClass.NONE]: 'bg-emerald-100 text-emerald-800 border-emerald-200',
};

export function Badge({ tumorClass, size = 'md', children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium border rounded-full',
        badgeColorMap[tumorClass],
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm',
      )}
    >
      {children ?? TUMOR_CLASS_LABELS[tumorClass]}
    </span>
  );
}
