import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/utils/tailwind';

type Props = ComponentPropsWithoutRef<'div'>;

export default function Container({ children, className, ...props }: Props) {
  return (
    <div className={cn('container mx-auto max-w-3xl px-4', className)} {...props}>
      {children}
    </div>
  );
}
