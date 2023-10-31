import { useEffect } from 'react';
import useLocalStorage from './use-local-storage';

export default function useTheme() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  return [theme, setTheme, toggleTheme] as const;
}
