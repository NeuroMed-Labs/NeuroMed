import { Zap, Clock, FileImage } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const METRICS = [
  { icon: Zap, value: '98.7%', label: 'Classification Accuracy' },
  { icon: Clock, value: '<3s', label: 'Processing Time' },
  { icon: FileImage, value: 'DICOM/JPG/PNG', label: 'Supported Formats' },
];

export function ProductPreview() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section className="section-padding" aria-label="Key metrics" ref={sectionRef}>
      <div className="container-main">
        <div className="section-heading" data-reveal>
          <h2 className="mb-4">
            Built for <span className="gradient-text">Clinical Precision</span>
          </h2>
          <p className="text-lg">
            Neuromed combines state-of-the-art deep learning with an interface designed
            for the realities of clinical workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto" data-reveal-stagger>
          {METRICS.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="text-center p-6 rounded-[var(--radius-md)] bg-[var(--color-surface)] border border-[var(--color-border)] transition-all duration-300 hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 hover:border-[var(--color-primary)]/30"
                data-reveal
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary-tint)] flex items-center justify-center mx-auto mb-3">
                  <Icon className="h-6 w-6 text-[var(--color-primary)]" aria-hidden="true" />
                </div>
                <div className="text-2xl font-display font-bold text-[var(--color-text)] mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-[var(--color-muted)]">{metric.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
