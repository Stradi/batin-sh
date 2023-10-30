import Link from 'next/link';
import { cn } from '@/utils/tailwind';

type Props = {
  label: string;
  href: string;
  isActive?: boolean;
};

export default function Item({ label, href, isActive }: Props) {
  return (
    <Link
      className={cn(
        'px-3 py-1 rounded-full transition duration-200',
        'group-hover/all:hover:text-neutral-950 group-hover/all:text-neutral-400',
        'dark:group-hover/all:hover:text-white group-hover/all:text-neutral-500',
        isActive && 'bg-neutral-300/50 dark:bg-neutral-600/50'
      )}
      href={href}
    >
      <li>{label}</li>
    </Link>
  );
}
