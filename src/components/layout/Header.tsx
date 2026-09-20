import { useState, useCallback, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useDarkMode();

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // Scroll-aware sticky shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-[var(--z-sticky)] border-b bg-[var(--color-background)]/90 backdrop-blur-md transition-all duration-300',
          scrolled
            ? 'header-scrolled border-transparent'
            : 'border-[var(--color-border)]',
        )}
        role="banner"
      >
        <nav
          className="w-full max-w-7xl mx-auto flex items-center justify-between gap-6 px-4 sm:px-6 lg:px-10 py-3 md:py-4"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center px-5 py-2 text-[#381d2a] dark:text-white hover:opacity-80 transition-opacity no-underline"
            onClick={closeMobile}
          >
            <span className="px-500 py-2  font-sans text-2xl font-semibold tracking-tight">
              neuroMed
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1.5 list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    cn(
                      'relative px-4 py-2 rounded-[var(--radius-sm)] text-sm font-medium transition-all duration-200 no-underline',
                      isActive
                        ? 'text-[var(--color-primary)] bg-[var(--color-primary-tint)] nav-link-active'
                        : 'text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-secondary-tint)]',
                    )
                  }
                  end={link.href === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-[var(--radius-sm)] text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-secondary-tint)] transition-all duration-200 cursor-pointer border-none bg-transparent flex items-center justify-center"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Link to="/login" className="no-underline">
              <Button variant="ghost" className="px-500 py-2">
                Log In
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-[var(--radius-sm)] text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors cursor-pointer border-none bg-transparent flex items-center justify-center"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="p-2 rounded-[var(--radius-sm)] text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors cursor-pointer border-none bg-transparent flex items-center justify-center"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[var(--color-background)]',
            mobileOpen
              ? 'max-h-[28rem] opacity-100 border-t border-[var(--color-border)]'
              : 'max-h-0 opacity-0',
          )}
        >
          <div className="px-4 sm:px-6 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={closeMobile}
                className={({ isActive }) =>
                  cn(
                    'block px-4 py-3 rounded-[var(--radius-sm)] text-base font-medium transition-all duration-200 no-underline',
                    isActive
                      ? 'text-[var(--color-primary)] bg-[var(--color-primary-tint)]'
                      : 'text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-secondary-tint)]',
                  )
                }
                end={link.href === '/'}
              >
                {link.label}
              </NavLink>
            ))}
            <hr className="border-[var(--color-border)] my-3" />
            <div className="pt-1">
              <Link to="/login" onClick={closeMobile} className="block no-underline">
                <Button variant="outline" className="w-full px-5 py-2">
                  Log In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile backdrop overlay */}
      <div
        className={cn('mobile-menu-backdrop', mobileOpen && 'active')}
        onClick={closeMobile}
        aria-hidden="true"
      />
    </>
  );
}
