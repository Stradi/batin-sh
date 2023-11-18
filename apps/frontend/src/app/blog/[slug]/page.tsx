import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import TableOfContents from './_components/table-of-contents';
import { format } from '@/utils/date';

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

function toTableOfContentItem(item: { text: string; slug: string; heading: number }) {
  return {
    label: item.text,
    slug: item.slug,
    level: item.heading,
  };
}

// TODO: Stats
export default function Page({ params }: Props) {
  const post = getPost(params.slug);
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="relative pb-16 pt-8">
      <header className="mb-8 space-y-1">
        <h1 className="text-2xl text-black dark:text-white md:text-4xl">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-500 md:text-base">
          <p>
            <time dateTime={post.publishedAt}>{format(post.publishedAt)}</time>
          </p>
          &middot;
          <p>16,352 views</p>
          &middot;
          <p>6,243 likes</p>
          &middot;
          <p>12 comments</p>
        </div>
      </header>
      <div className="mb-4 rounded-xl bg-neutral-200 p-4 dark:bg-neutral-800 md:absolute md:-right-8 md:mb-0 md:h-full md:min-h-screen md:translate-x-full md:bg-[unset] md:p-0 md:dark:bg-[unset]">
        <TableOfContents
          className="md:sticky md:top-20 md:h-0"
          items={post.tableOfContents.map(toTableOfContentItem)}
        />
      </div>
      <main className="prose prose-neutral dark:prose-invert prose-pre:my-[unset] max-w-none">
        <MDXContent />
      </main>
    </article>
  );
}
