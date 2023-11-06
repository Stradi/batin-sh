/* eslint-disable react/jsx-no-leaked-render -- looks ugly and since we are not using React Native, we can disable it safely */
import { CodeIcon, NewspaperIcon, PlayIcon } from 'lucide-react';
import type { Project } from 'contentlayer/generated';
import BadgeLink from './badge-link';
import { cn } from '@/utils/tailwind';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article
      className={cn(
        'flex flex-col gap-3 rounded-md border p-4 transition duration-100',
        'border-neutral-300 bg-neutral-100',
        'dark:border-neutral-700 dark:bg-neutral-800'
      )}
    >
      <header>
        <time className="font-mono text-sm text-amber-500">{new Date(project.publishedAt).getFullYear()}</time>
        <h3 className="font-mono text-lg text-black dark:text-white">{project.name}</h3>
      </header>
      <main className="grow">
        <p className="text-sm dark:text-neutral-400">{project.description}</p>
      </main>
      <footer className="flex flex-wrap gap-1">
        {project.articleHref && (
          <BadgeLink hideIcon href={project.articleHref}>
            <NewspaperIcon className="h-4 w-4" /> Article
          </BadgeLink>
        )}
        {project.demoHref && (
          <BadgeLink hideIcon href={project.demoHref}>
            <PlayIcon className="h-4 w-4" /> Demo
          </BadgeLink>
        )}
        {project.sourceHref && (
          <BadgeLink hideIcon href={project.sourceHref}>
            <CodeIcon className="h-4 w-4" /> Source
          </BadgeLink>
        )}
      </footer>
    </article>
  );
}
