import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type Props = ComponentPropsWithoutRef<'section'> & {
  title: string;
  rightSide?: ReactNode;
};

export default function Section({ title, rightSide, className, children, ...props }: Props) {
  return (
    <section className="space-y-4" {...props}>
      <header className="relative flex items-center justify-between gap-2">
        <h2 className="text-xl text-black dark:text-white">{title}</h2>
        <div className="h-1 grow rounded-sm bg-black/5 dark:bg-white/5" />
        {rightSide}
      </header>
      <main className={className}>{children}</main>
    </section>
  );
}
