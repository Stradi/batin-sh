import { defineDocumentType } from 'contentlayer/source-files';
import GitHubSlugger from 'github-slugger';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    description: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' } },
  },
  computedFields: {
    slug: { type: 'string', resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '') },
    tableOfContents: {
      type: 'json',
      resolve: (doc) => {
        const slugger = new GitHubSlugger();
        const headingRegex = /\n\n(?<flag>#{1,6})\s+(?<content>.+)/g;

        const headings = Array.from(doc.body.raw.matchAll(headingRegex)).map((match) => {
          const flag = match.groups?.flag;
          const content = match.groups?.content;
          return {
            heading: flag?.length,
            text: content,
            slug: content ? slugger.slug(content) : undefined,
          };
        });

        return headings;
      },
    },
  },
}));
