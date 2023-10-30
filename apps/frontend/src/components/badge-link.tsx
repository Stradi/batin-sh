import Link from 'next/link';
import { type ComponentPropsWithoutRef } from 'react';
import { ExternalLinkIcon } from 'lucide-react';
import Badge from './badge';

type Props = ComponentPropsWithoutRef<typeof Link>;

export default function BadgeLink({ children, ...props }: Props) {
  const isExternal = (props.href as string).startsWith('http');

  return (
    <Link {...props}>
      <Badge className="hover:bg-neutral-200 dark:hover:bg-neutral-700 dark:hover:border-neutral-600">
        {children} {isExternal ? <ExternalLinkIcon className="w-3 h-3" strokeWidth={2.25} /> : null}
      </Badge>
    </Link>
  );
}
