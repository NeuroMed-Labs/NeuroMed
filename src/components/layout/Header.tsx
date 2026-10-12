import { useState, useCallback, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Moon, Sun, Info, Brain } from 'lucide-react';
import { useDarkMode } from '@/hooks/useDarkMode';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'MRI Analysis', href: '/analyze' },
  { label: 'Clinical', href: '/features' },
  { label: 'Referral Network', href: '/#referral-network' },
  { label: 'About', href: '/about', hasInfoIcon: true },
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
          'sticky top-0 z-[var(--z-sticky)] bg-white/90 dark:bg-[#0B1120]/90 backdrop-blur-md transition-all duration-300',
          scrolled
            ? 'header-scrolled border-b border-slate-200/80 dark:border-slate-800'
            : 'border-b border-slate-100 dark:border-slate-800/60',
        )}
        role="banner"
      >
        <nav
          className="w-full max-w-7xl mx-auto flex items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 py-3.5"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-[#0F172A] dark:text-white hover:opacity-90 transition-opacity no-underline group"
            onClick={closeMobile}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 via-sky-400 to-cyan-300 flex items-center justify-center shadow-sm shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Brain className="h-4.5 w-4.5 text-white stroke-[2.2]" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white font-sans">
              NeuroMed
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-1.5 text-sm font-medium transition-colors duration-150 no-underline',
                      isActive && link.href !== '/#referral-network'
                        ? 'text-blue-700 dark:text-blue-400 font-semibold'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white',
                    )
                  }
                  end={link.href === '/'}
                >
                  {link.hasInfoIcon && <Info className="h-4 w-4 text-slate-400" />}
                  <span>{link.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer border-none bg-transparent flex items-center justify-center"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Link to="/analyze" className="no-underline">
              <button className="px-5 py-2.5 rounded-full bg-[#1E40AF] hover:bg-[#1D4ED8] active:scale-95 text-white text-sm font-semibold border-none cursor-pointer shadow-sm hover:shadow transition-all duration-150 flex items-center gap-2">
                <span>Access Platform</span>
                <span className="text-base leading-none">&rarr;</span>
              </button>
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
              <Link to="/analyze" onClick={closeMobile} className="block no-underline">
                <button className="w-full py-3 rounded-full bg-[#1E40AF] text-white font-semibold text-center border-none shadow cursor-pointer">
                  Access Platform &rarr;
                </button>
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
