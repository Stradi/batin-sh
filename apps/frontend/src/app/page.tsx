import BadgeLink from '@/components/badge-link';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl font-medium">hey, I&apos;m Batin 👋</h1>
      <br />
      <p className="leading-loose">
        I&apos;m a frontend developer and this is my <BadgeLink href="/digital-garden">digital garden</BadgeLink>. I
        currently work as React developer at <BadgeLink href="https://www.coinpass.com">coinpass</BadgeLink>. In here,
        you can find my <BadgeLink href="/blog">thoughts</BadgeLink>, <BadgeLink href="/projects">projects</BadgeLink>{' '}
        and learn <BadgeLink href="/about">more about me</BadgeLink>.
      </p>
    </main>
  );
}
