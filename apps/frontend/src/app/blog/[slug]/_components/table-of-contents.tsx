import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'aside'> & {
  items: {
    label: string;
    slug: string;
    level: number;
  }[];
};

export default function TableOfContents({ items, ...props }: Props) {
  return (
    <aside {...props}>
      <p className="mb-2 text-sm uppercase text-neutral-400 dark:text-neutral-500 md:dark:text-neutral-700">
        On this page
      </p>
      <ul className="space-y-1 text-neutral-500 [&>*]:block dark:[&>*]:text-neutral-400 md:dark:[&>*]:text-neutral-600">
        {items.map((item) => (
          <Link
            className="text-sm transition duration-100 hover:text-neutral-800 hover:underline md:dark:hover:text-neutral-400"
            href={`#${item.slug}`}
            key={item.slug}
            style={{
              paddingLeft: `${(item.level - 2) * 0.75}rem`,
            }}
          >
            {item.label}
          </Link>
        ))}
      </ul>
    </aside>
  );
}
