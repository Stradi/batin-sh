import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const localTheme = localStorage.getItem('theme') as Theme | null;
    return localTheme || 'light';
  });

  function toggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    localStorage.setItem('theme', theme);
  }, [theme, setTheme]);

  return [theme, setTheme, toggleTheme] as const;
}
