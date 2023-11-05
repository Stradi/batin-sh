import { makeSource } from 'contentlayer/source-files';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import type { Options } from 'rehype-pretty-code';
import rehypePrettyCode from 'rehype-pretty-code';
import { Post } from './_content/defs/post';

const rehypePrettyCodeOptions: Partial<Options> = {
  theme: {
    dark: 'one-dark-pro',
    light: 'min-light',
  },
  keepBackground: false,
};

export default makeSource({
  disableImportAliasWarning: true,
  contentDirPath: './_content',
  documentTypes: [Post],
  mdx: {
    // TODO: add Remark GFM plugin
    // https://github.com/contentlayerdev/contentlayer/issues/558
    rehypePlugins: [
      [rehypePrettyCode, rehypePrettyCodeOptions],
      [rehypeSlug],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['heading-anchor'],
          },
        },
      ],
    ],
  },
});
