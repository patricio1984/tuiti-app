'use client';

import { useTheme } from '@/lib/theme';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className="cursor-pointer ml-auto p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition"
    >
      {theme === 'dark' ? (
        <Moon className="w-5 h-5 text-white" />
      ) : (
        <Sun className="w-5 h-5 text-[#1DA1F2]" />
      )}
    </button>
  );
};
