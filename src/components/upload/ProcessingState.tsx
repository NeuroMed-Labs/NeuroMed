import { Brain } from 'lucide-react';
import { PROCESSING_STEP_LABELS, type ProcessingStep } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ProcessingStateProps {
  step: ProcessingStep;
}

const STEPS: ProcessingStep[] = ['preprocessing', 'running_model', 'generating_heatmap'];

export function ProcessingState({ step }: ProcessingStateProps) {
  const currentIndex = STEPS.indexOf(step);

  return (
    <div className="w-full max-w-lg mx-auto text-center space-y-8 py-8">
      {/* Animated brain icon */}
      <div className="relative mx-auto w-24 h-24">
        <div className="absolute inset-0 rounded-full bg-[var(--color-primary)] opacity-20 animate-ping" />
        <div className="absolute inset-2 rounded-full bg-[var(--color-primary)] opacity-10 animate-pulse" />
        <div className="relative w-full h-full rounded-full bg-[var(--color-primary-tint)] flex items-center justify-center">
          <Brain className="h-10 w-10 text-[var(--color-primary)] animate-pulse" aria-hidden="true" />
        </div>
      </div>

      {/* Status text */}
      <div>
        <h3 className="text-xl font-display mb-2">Analyzing your scan</h3>
        <p className="text-[var(--color-muted)] text-sm m-0">
          {PROCESSING_STEP_LABELS[step]}
        </p>
      </div>

      {/* Step indicators */}
      <div className="flex items-center justify-center gap-4">
        {STEPS.map((s, i) => {
          const isActive = i === currentIndex;
          const isComplete = i < currentIndex;
          return (
            <div key={s} className="flex items-center gap-4">
              <div
                className={cn(
                  'w-3 h-3 rounded-full transition-all duration-300',
                  isComplete && 'bg-[var(--color-success)] scale-100',
                  isActive && 'bg-[var(--color-primary)] scale-125 animate-pulse',
                  !isComplete && !isActive && 'bg-[var(--color-border)] scale-100',
                )}
                aria-label={`Step ${i + 1}: ${PROCESSING_STEP_LABELS[s]}`}
              />
              {i < STEPS.length - 1 && (
                <div
                  className={cn(
                    'w-12 h-0.5 transition-colors duration-300',
                    isComplete ? 'bg-[var(--color-success)]' : 'bg-[var(--color-border)]',
                  )}
                  aria-hidden="true"
                />
              )}
            </div>
          );
        })}
      </div>

      <p className="text-xs text-[var(--color-muted)]">
        This typically takes 2–4 seconds. Please do not close this window.
      </p>
    </div>
  );
}
