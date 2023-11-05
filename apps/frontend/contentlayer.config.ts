import { makeSource } from 'contentlayer/source-files';
import { Post } from './_content/defs/post';

export default makeSource({
  contentDirPath: './_content',
  documentTypes: [Post],
});
