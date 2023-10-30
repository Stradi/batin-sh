import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { cn } from '@/utils/tailwind';

type Props<T extends ElementType = 'div'> = ComponentPropsWithoutRef<'div'> & {
  as?: T;
};

export default function Container<T extends ElementType = 'div'>({ as, children, className, ...props }: Props<T>) {
  const Component = as || 'div';

  return (
    <Component className={cn('container mx-auto max-w-3xl px-4', className)} {...props}>
      {children}
    </Component>
  );
}
