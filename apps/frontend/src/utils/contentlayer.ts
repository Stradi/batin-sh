import type { Project } from 'contentlayer/generated';
import { allPosts } from 'contentlayer/generated';

export function normalizeProject(project: Project) {
  if (!project.articleHref) return project;

  const article = allPosts.find((post) => post._raw.sourceFilePath === project.articleHref);
  if (!article) {
    return {
      ...project,
      articleHref: undefined,
    } as Project;
  }

  return {
    ...project,
    articleHref: `/blog/${article.slug}`,
  } as Project;
}
