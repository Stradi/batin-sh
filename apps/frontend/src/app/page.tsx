import BadgeLink from '@/components/badge-link';
import ProjectCard from '@/components/project-card';
import Section from '@/components/section';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl font-bold">hey, I&apos;m Batin 👋</h1>
      <br />
      <p className="leading-loose">
        I&apos;m a frontend developer and this is my <BadgeLink href="/digital-garden">digital garden</BadgeLink>. I
        currently work as React developer at <BadgeLink href="https://www.coinpass.com">coinpass</BadgeLink>. In here,
        you can find my <BadgeLink href="/blog">thoughts</BadgeLink>, <BadgeLink href="/projects">projects</BadgeLink>{' '}
        and learn <BadgeLink href="/about">more about me</BadgeLink>.
      </p>
      <br />
      <Section
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        rightSide={<BadgeLink href="/projects">View all</BadgeLink>}
        title="Featured Projects"
      >
        <ProjectCard name="Test Project" shortDescription="Some project description" year={2020} />
        <ProjectCard
          articleHref="#"
          demoHref="#"
          name="Another Project"
          shortDescription="Another short project description"
          sourceHref="#"
          year={2023}
        />
      </Section>
    </main>
  );
}
