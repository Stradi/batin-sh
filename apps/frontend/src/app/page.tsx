import ProjectCard from './_components/project-card';
import BadgeLink from '@/components/badge-link';

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
      <div className="grid grid-cols-3 gap-2">
        <ProjectCard
          className="col-span-1"
          href="#"
          images={['https://picsum.photos/1080/1920#1']}
          rotationAngle={-1}
          title="UltimateComic"
        />
        <ProjectCard
          className="col-span-2"
          href="#"
          images={[
            'https://picsum.photos/1080/1920#2',
            'https://picsum.photos/1080/1920#3',
            'https://picsum.photos/1080/1920#4',
          ]}
          title="LeetChess"
        />
      </div>
    </main>
  );
}
