'use client';

import { type ComponentPropsWithoutRef } from 'react';
import { usePathname } from 'next/navigation';
import Container from '../container';
import Logo from '../logo';
import DarkModeToggle from './dark-mode-toggle';
import SoundEffectsToggle from './sound-effects-toggle';
import Item from './item';
import useScrollPosition from '@/hooks/use-scroll-position';
import { cn } from '@/utils/tailwind';

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
        'fixed inset-x-0 top-0 z-50 px-6 py-3 flex justify-between items-center',
        'transition-[background-color,top,transform,border-radius,box-shadow] duration-300 ease-out',
        shouldFloat &&
          'bg-white/75 dark:bg-neutral-800/75 backdrop-blur top-2 scale-[0.975] rounded-3xl ring-1 ring-black/10'
      )}
    >
      <Logo />
      <ul className="flex gap-2 text-sm group/all">
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
