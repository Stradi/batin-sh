'use client';

import { type ComponentPropsWithoutRef } from 'react';
import { usePathname } from 'next/navigation';
import useScrollPosition from '@/hooks/use-scroll-position';
import { cn } from '@/utils/tailwind';
import Container from '../container';
import Logo from '../logo';
import DarkModeToggle from './dark-mode-toggle';
import SoundEffectsToggle from './sound-effects-toggle';
import Item from './item';

type Item = {
  label: string;
  href: string;
};

type Props = ComponentPropsWithoutRef<'nav'> & {
  items: Item[];
};

export default function NavigationBar({ items }: Props) {
  const scrollPosition = useScrollPosition();
  const shouldFloat = scrollPosition > 10;

  const pathname = usePathname();
  const activeItem = items.find((item) => item.href === pathname);

  return (
    <Container
      as="nav"
      className={cn(
        'fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-3',
        'transition-[background-color,top,transform,border-radius,box-shadow] duration-300 ease-out',
        shouldFloat &&
          'top-2 scale-[0.975] rounded-3xl bg-white/75 ring-1 ring-black/10 backdrop-blur dark:bg-neutral-800/75'
      )}
    >
      <Logo />
      <ul className="group/all flex gap-2 text-sm">
        {items.map((item) => (
          <Item isActive={activeItem?.href === item.href} key={item.href} {...item} />
        ))}
      </ul>
      <div className="flex gap-2">
        <DarkModeToggle />
        <SoundEffectsToggle />
      </div>
    </Container>
  );
}
