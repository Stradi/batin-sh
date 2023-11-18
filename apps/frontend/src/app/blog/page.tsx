import { allPosts } from 'contentlayer/generated';
import type { Metadata } from 'next';
import PostCard from '@/components/post-card';
import Section from '@/components/section';
import { groupBy } from '@/utils/group-by';

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts and ideas.",
}

export default function Page() {
  const postsGroupedByYear = groupBy(allPosts, (post) => new Date(post.publishedAt).getFullYear().toString());

  return (
    <div className="space-y-12">
      <h1 className="text-2xl md:text-4xl">Blog</h1>
      {Object.keys(postsGroupedByYear)
        .sort()
        .toReversed()
        .map((year) => (
          <Section className="space-y-1" key={year} title={year.toString()}>
            {postsGroupedByYear[year].map((post) => (
              <PostCard excludeYearInDate key={post.slug} post={post} />
            ))}
          </Section>
        ))}
    </div>
  );
}
