import type { Post } from 'contentlayer/generated';
import Link from 'next/link';
import { toRelativeDate } from '@/utils/date';

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <Link className="group flex items-center justify-between gap-4" href={`/blog/${post.slug}`} title={post.title}>
      <p className="truncate text-neutral-600 transition duration-100 group-hover:text-neutral-800 group-hover:underline dark:text-neutral-400 dark:group-hover:text-neutral-200">
        {post.title}
      </p>
      <time className="shrink-0 font-mono text-sm text-amber-600 dark:text-amber-500">
        {toRelativeDate(post.publishedAt)}
      </time>
    </Link>
  );
}