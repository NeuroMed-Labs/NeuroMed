import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ErrorBoundary } from '@/components/layout/ErrorBoundary';
import { SkeletonCard } from '@/components/ui/Skeleton';
import Home from '@/routes/Home';

// Lazy-loaded routes (all except Home)
const Features = lazy(() => import('@/routes/Features'));
const HowItWorksPage = lazy(() => import('@/routes/HowItWorksPage'));
const About = lazy(() => import('@/routes/About'));
const Analyze = lazy(() => import('@/routes/Analyze'));
const Login = lazy(() => import('@/routes/Login'));
const Signup = lazy(() => import('@/routes/Signup'));

function PageFallback() {
  return (
    <div className="container-main section-padding">
      <div className="max-w-3xl mx-auto space-y-6">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />

        <div className="flex-1">
          <ErrorBoundary>
            <Suspense fallback={<PageFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/features" element={<Features />} />
                <Route path="/how-it-works" element={<HowItWorksPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/analyze" element={<Analyze />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </div>

        <Footer />
      </div>

      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'var(--color-surface)',
            color: 'var(--color-text)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-sm)',
            fontSize: '14px',
          },
          success: {
            iconTheme: {
              primary: '#16A34A',
              secondary: 'white',
            },
          },
          error: {
            iconTheme: {
              primary: '#DC2626',
              secondary: 'white',
            },
          },
        }}
      />
    </BrowserRouter>
  );
}
