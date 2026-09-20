import { useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export function PageContainer({ children, className }: PageContainerProps) {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <main className={className} role="main">
      {children}
    </main>
  );
}
