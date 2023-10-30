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
        'group-hover/all:hover:text-gray-950 group-hover/all:text-gray-400',
        isActive && 'bg-neutral-300/50'
      )}
      href={href}
    >
      <li>{label}</li>
    </Link>
  );
}
