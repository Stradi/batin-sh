/* eslint-disable react/jsx-no-leaked-render -- looks ugly and since we are not using React Native, we can disable it safely */
import { CodeIcon, NewspaperIcon, PlayIcon } from 'lucide-react';
import BadgeLink from './badge-link';
import { cn } from '@/utils/tailwind';

type Props = {
  year: number;
  name: string;
  shortDescription: string;

  articleHref?: string;
  demoHref?: string;
  sourceHref?: string;
};

export default function ProjectCard({ year, name, shortDescription, articleHref, demoHref, sourceHref }: Props) {
  return (
    <article
      className={cn(
        'flex flex-col gap-3 rounded-md border p-4 transition duration-100',
        'border-neutral-300 bg-neutral-100',
        'dark:border-neutral-700 dark:bg-neutral-800'
      )}
    >
      <header>
        <time className="font-mono text-sm text-amber-500">{year}</time>
        <h3 className="font-mono text-lg text-black dark:text-white">{name}</h3>
      </header>
      <main className="grow">
        <p className="text-sm dark:text-neutral-400">{shortDescription}</p>
      </main>
      <footer className="flex flex-wrap gap-1">
        {articleHref && (
          <BadgeLink hideIcon href={articleHref}>
            <NewspaperIcon className="h-4 w-4" /> Article
          </BadgeLink>
        )}
        {demoHref && (
          <BadgeLink hideIcon href={demoHref}>
            <PlayIcon className="h-4 w-4" /> Demo
          </BadgeLink>
        )}
        {sourceHref && (
          <BadgeLink hideIcon href={sourceHref}>
            <CodeIcon className="h-4 w-4" /> Source
          </BadgeLink>
        )}
      </footer>
    </article>
  );
}
