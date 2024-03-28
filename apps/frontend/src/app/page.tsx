import type { Metadata } from 'next';
import BadgeLink from '@/components/badge-link';
import PostCard from '@/components/post-card';
import ProjectCard from '@/components/project-card';
import Section from '@/components/section';
import { getLatestPosts, getProjectBySlug } from '@/utils/contentlayer';

export const metadata: Metadata = {
  title: 'Batin Evirgen',
  description:
    "I'm a frontend developer and this is my digital garden. I currently work as React developer at OANDA. In here, you can find my thoughts, projects and learn more about me.",
};

export default function Home() {
  return (
    <main>
      <h1 className="text-xl font-bold">hey, I&apos;m Batin 👋</h1>
      <br />
      <p className="leading-loose">
        I&apos;m a frontend developer and this is my{' '}
        digital garden. I currently work as React.js team leader at{' '}
        <BadgeLink href="https://www.oanda.com">OANDA</BadgeLink>. In
        here, you can find my <BadgeLink href="/blog">thoughts</BadgeLink>,{' '}
        <BadgeLink href="/projects">projects</BadgeLink> and learn{' '}
        <BadgeLink href="/about">more about me</BadgeLink>.
      </p>
      <br />
      <Section
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        rightSide={<BadgeLink href="/projects">View all</BadgeLink>}
        title="Featured Projects"
      >
        <ProjectCard project={getProjectBySlug('fake-sh')} />
        <ProjectCard project={getProjectBySlug('imgflow')} />
      </Section>
      <br />
      <Section
        className="space-y-1"
        rightSide={<BadgeLink href="/blog">View all</BadgeLink>}
        title="Latest Posts"
      >
        {getLatestPosts(5).map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </Section>
    </main>
  );
}
