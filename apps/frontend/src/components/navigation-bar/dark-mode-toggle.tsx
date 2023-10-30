'use client';

import useTheme from '@/hooks/use-theme';

export default function DarkModeToggle() {
  const [theme, _, toggleTheme] = useTheme();

  return (
    <button onClick={toggleTheme} type="button">
      {theme === 'dark' ? '🌚' : '🌞'}
    </button>
  );
}
