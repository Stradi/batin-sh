import { defineDocumentType } from 'contentlayer/source-files';
import { Post } from './post';

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/**/*.json',
  contentType: 'data',
  fields: {
    name: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    description: { type: 'string', required: true },
    articleHref: { type: 'reference', of: Post, required: false },
    demoHref: { type: 'string', required: false },
    sourceHref: { type: 'string', required: false },
  },
  computedFields: {
    slug: { type: 'string', resolve: (doc) => doc._raw.sourceFileName.replace(/\.json$/, '') },
  },
}));
