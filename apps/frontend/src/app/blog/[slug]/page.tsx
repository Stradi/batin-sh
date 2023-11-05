import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { toRelativeDate } from '@/utils/date';

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

function getPost(slug: string) {
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) {
    return notFound();
  }

  return post;
}

type Props = {
  params: { slug: string };
};

// TODO: Stats
export default function Page({ params }: Props) {
  const post = getPost(params.slug);
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="mb-16 mt-8">
      <header className="mb-8 space-y-1">
        <h1 className="text-4xl text-black dark:text-white">{post.title}</h1>
        <div className="flex items-center gap-2 text-neutral-500">
          <p>
            <time dateTime={post.publishedAt}>{toRelativeDate(post.publishedAt)}</time>
          </p>
          &middot;
          <p>16,352 views</p>
          &middot;
          <p>6,243 likes</p>
          &middot;
          <p>12 comments</p>
        </div>
      </header>
      <main className="prose prose-neutral dark:prose-invert prose-pre:my-[unset] max-w-none">
        <MDXContent />
      </main>
    </article>
  );
}
