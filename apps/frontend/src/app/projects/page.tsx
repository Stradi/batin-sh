import ProjectCard from '@/components/project-card';
import { normalizeProject } from '@/utils/contentlayer';
import { allProjects } from 'contentlayer/generated';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: "Things I've built.",
};

export default function Page() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl md:text-4xl">Projects</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {allProjects
          .sort((a, b) => a.publishedAt.localeCompare(b.publishedAt))
          .toReversed()
          .map((project) => (
            <ProjectCard
              key={project.slug}
              project={normalizeProject(project)}
            />
          ))}
      </div>
    </div>
  );
}
