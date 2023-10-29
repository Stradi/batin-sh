import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/utils/tailwind';

type Props = ComponentPropsWithoutRef<'div'>;

export default function Container({ children, className, ...props }: Props) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call -- Weird errors
    <div className={cn('container mx-auto max-w-3xl px-4', className)} {...props}>
      {children}
    </div>
  );
}
