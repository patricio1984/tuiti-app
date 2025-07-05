import { TwitterLogo } from './TwitterLogo';
import { ThemeToggle } from './ThemeToggle';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/60">
      <div className="flex items-center justify-between max-w-2xl mx-auto px-4 h-14">
        <Link href="/" aria-label="Inicio" className="flex items-center gap-2">
          <TwitterLogo />
        </Link>

        <ThemeToggle />
      </div>

      <h1 className="sr-only">Aplicación de Posts - JSONPlaceholder</h1>
    </header>
  );
};
