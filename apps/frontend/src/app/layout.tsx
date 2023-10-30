import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Container from '@/components/container';
import NavigationBar from '@/components/navigation-bar';
import './globals.css';
import { cn } from '@/utils/tailwind';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Batin Evirgen',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn('bg-white dark:bg-neutral-900 text-black dark:text-white', inter.className)}>
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
          <div className="mt-16">{children}</div>
        </Container>
      </body>
    </html>
  );
}
