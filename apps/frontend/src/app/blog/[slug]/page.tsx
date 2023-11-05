import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

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

export default function Page({ params }: Props) {
  const post = getPost(params.slug);
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div>
      <h1>{post.title}</h1>
      <main>
        <MDXContent />
      </main>
    </div>
  );
}
