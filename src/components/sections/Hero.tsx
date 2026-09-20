import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Scan } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <section className="relative overflow-hidden" aria-label="Hero">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[var(--color-primary)] opacity-[0.04] blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-[var(--color-primary)] opacity-[0.03] blur-3xl" />
      </div>

      <div className="container-main relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-16 lg:py-24">
          {/* Copy */}
          <motion.div className="flex-1 text-center lg:text-left max-w-2xl" {...fadeUp}>
            <div className="inline-flex items-center gap-2 bg-[var(--color-primary-tint)] text-[var(--color-primary)] px-3 py-1.5 rounded-full text-sm font-medium mb-6">
              <Scan className="h-4 w-4" aria-hidden="true" />
              Clinical-Grade AI Analysis
            </div>

            <h1 className="mb-6 leading-[1.1]">
              AI-Powered{' '}
              <span className="gradient-text">Brain Tumor</span>{' '}
              Detection
            </h1>

            <p className="text-lg lg:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Upload brain MRI scans and receive instant classification — glioma,
              meningioma, pituitary tumor, or no tumor — with confidence scores
              and Grad-CAM explainability that clinicians can trust.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link to="/analyze" className="no-underline">
                <Button variant="primary" size="lg">
                  Analyze MRI
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Button>
              </Link>
              <Link to="/how-it-works" className="no-underline">
                <Button variant="outline" size="lg">
                  Learn How It Works
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-10 justify-center lg:justify-start text-sm text-[var(--color-muted)]"
              {...(shouldReduceMotion
                ? {}
                : {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 0.5, delay: 0.4 },
                  })}
            >
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[var(--color-success)]" />
                98.7% Accuracy
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                HIPAA Conscious
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                Explainable AI
              </div>
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            className="flex-1 max-w-lg w-full"
            {...(shouldReduceMotion
              ? {}
              : {
                  initial: { opacity: 0, scale: 0.95 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const },
                })}
          >
            <div className="relative">
              {/* Mock analysis card */}
              <div className="rounded-[var(--radius-xl)] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-[var(--shadow-xl)] p-6 space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--color-primary-tint)] flex items-center justify-center">
                    <Scan className="h-5 w-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-text)] m-0">MRI Analysis Complete</p>
                    <p className="text-xs text-[var(--color-muted)] m-0">Processed in 2.4 seconds</p>
                  </div>
                </div>

                {/* Mock MRI scan area */}
                <div className="aspect-square rounded-[var(--radius-md)] bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 rounded-full bg-[var(--color-primary)] blur-xl" />
                  </div>
                  <div className="text-center text-white/60 z-10">
                    <Scan className="h-12 w-12 mx-auto mb-2 opacity-40" />
                    <p className="text-sm m-0">Brain MRI Scan</p>
                  </div>
                </div>

                {/* Mock results */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[var(--color-text)]">Classification</span>
                    <span className="px-2.5 py-0.5 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
                      Meningioma
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-[var(--color-muted)]">Confidence</span>
                      <span className="font-semibold text-[var(--color-text)]">94.2%</span>
                    </div>
                    <div className="h-2 rounded-full bg-[var(--color-border)] overflow-hidden">
                      <div className="h-full rounded-full bg-amber-500 w-[94%] transition-all duration-700" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 bg-[var(--color-success)] text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                ✓ Grad-CAM Available
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
