import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/utils/tailwind';

type Props = Omit<ComponentPropsWithoutRef<typeof Link>, 'href'>;

export default function Logo({ className, ...props }: Props) {
  return (
    <Link className={cn('tracking-tight font-medium lowercase', className)} href="/" {...props}>
      be.
    </Link>
  );
}
