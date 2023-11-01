import type { Metadata } from 'next';
import { GeistSans, GeistMono } from 'geist/font';
import Container from '@/components/container';
import NavigationBar from '@/components/navigation-bar';
import './globals.css';
import { cn } from '@/utils/tailwind';
import BackgroundNoise from '@/components/background-noise';

export const metadata: Metadata = {
  title: 'Batin Evirgen',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-white font-sans text-black dark:bg-neutral-900 dark:text-neutral-300',
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <BackgroundNoise />
        <Container>
          <NavigationBar
            items={[
              {
                label: 'About',
                href: '/about',
              },
              {
                label: 'Projects',
                href: '/projects',
              },
              {
                label: 'Blog',
                href: '/blog',
              },
            ]}
          />
          <div className="pt-16">{children}</div>
        </Container>
      </body>
    </html>
  );
}
