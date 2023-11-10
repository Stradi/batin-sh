import { allProjects } from 'contentlayer/generated';
import ProjectCard from '@/components/project-card';
import { normalizeProject } from '@/utils/contentlayer';

export default function Page() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl md:text-4xl">Projects</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {allProjects.map((project) => (
          <ProjectCard key={project.slug} project={normalizeProject(project)} />
        ))}
      </div>
    </div>
  );
}
