import type { Project } from 'contentlayer/generated';
import { allPosts, allProjects } from 'contentlayer/generated';

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

export function getProjectBySlug(slug: string) {
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) throw new Error(`Project with slug "${slug}" not found`);

  return normalizeProject(project);
}

export function getPostBySlug(slug: string) {
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Post with slug "${slug}" not found`);

  return post;
}
