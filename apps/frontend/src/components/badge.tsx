import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/utils/tailwind';

type Props = ComponentPropsWithoutRef<'span'>;

export default function Badge({ children, className, ...props }: Props) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-md border px-1 py-0.5 text-sm',
        'border-neutral-300 bg-neutral-100',
        'transition duration-100',
        'dark:border-neutral-700 dark:bg-neutral-800',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
