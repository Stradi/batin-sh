import { notFound } from 'next/navigation';
import { allStaticPages } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import type { Metadata } from 'next';
import { format } from '@/utils/date';

type Props = {
  params: { slug: string };
};

function getPage(slug: string) {
  const page = allStaticPages.find((p) => p.slug === slug);
  if (!page) {
    return notFound();
  }

  return page;
}

export function generateStaticParams() {
  return allStaticPages.map((page) => ({
    slug: page.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const page = getPage(params.slug);

  return {
    title: page.title,
    description: page.description,
  }
}

export default function Page({ params }: Props) {
  const page = getPage(params.slug);
  const MDXContent = useMDXComponent(page.body.code);

  return (
    <article className="relative pb-16 pt-8">
      <header className="mb-8 space-y-1">
        <h1 className="text-2xl text-black dark:text-white md:text-4xl">{page.title}</h1>
        <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-500 md:text-base">
          <p>
            <time dateTime={page.publishedAt}>{format(page.publishedAt)}</time>
          </p>
          {/* &middot;
          <p>16,352 views</p>
          &middot;
          <p>6,243 likes</p>
          &middot;
          <p>12 comments</p> */}
        </div>
      </header>
      <main className="prose prose-neutral dark:prose-invert prose-pre:my-[unset] max-w-none">
        <MDXContent />
      </main>
    </article>
  );
}
