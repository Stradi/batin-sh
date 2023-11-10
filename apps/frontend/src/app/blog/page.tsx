import { allPosts } from 'contentlayer/generated';
import PostCard from '@/components/post-card';
import Section from '@/components/section';
import { groupBy } from '@/utils/group-by';

export default function Page() {
  const postsGroupedByYear = groupBy(allPosts, (post) => new Date(post.publishedAt).getFullYear().toString());

  return (
    <div className="space-y-12">
      <h1 className="text-2xl md:text-4xl">Blog</h1>
      {Object.keys(postsGroupedByYear)
        .sort()
        .toReversed()
        .map((year) => (
          <Section key={year} title={year.toString()}>
            {postsGroupedByYear[year].map((post) => (
              <PostCard excludeYearInDate key={post.slug} post={post} />
            ))}
          </Section>
        ))}
    </div>
  );
}
