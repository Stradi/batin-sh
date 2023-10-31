import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/utils/tailwind';

type Props = Omit<ComponentPropsWithoutRef<'svg'>, 'height' | 'width' | 'children'>;

export default function BackgroundNoise({ className, ...props }: Props) {
  return (
    <svg
      className={cn(
        'pointer-events-none fixed z-50 inset-0 opacity-50 mix-blend-darken dark:opacity-70 dark:mix-blend-soft-light',
        className
      )}
      height="100%"
      width="100%"
      {...props}
    >
      <filter id="background-noise">
        <feTurbulence baseFrequency="0.80" numOctaves="4" stitchTiles="stitch" type="fractalNoise" />
      </filter>
      <rect filter="url(#background-noise)" height="100%" width="100%" />
    </svg>
  );
}
