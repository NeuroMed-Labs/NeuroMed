import { useCallback, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export function useDarkMode(): {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
} {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first
    const stored = localStorage.getItem('neuromed-theme') as Theme | null;
    if (stored === 'light' || stored === 'dark') return stored;

    // Fall back to system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('neuromed-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  return { theme, toggleTheme, isDark: theme === 'dark' };
}
