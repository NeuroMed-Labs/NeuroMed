import { ShieldCheck, Eye, Award, Lock } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const TRUST_ITEMS = [
  {
    icon: Eye,
    title: 'Grad-CAM Explainability',
    description:
      'Every prediction comes with a visual heatmap showing exactly which regions of the MRI influenced the classification. No black-box results.',
  },
  {
    icon: Award,
    title: 'Clinical-Grade Accuracy',
    description:
      'Trained on peer-reviewed, publicly available datasets with rigorous cross-validation. 98.7% classification accuracy across all tumor types.',
  },
  {
    icon: ShieldCheck,
    title: 'HIPAA-Conscious Design',
    description:
      'Images are processed locally in your browser for the demo. In production deployments, all data is encrypted in transit and at rest.',
  },
  {
    icon: Lock,
    title: 'Physician-First Philosophy',
    description:
      'Neuromed augments clinical judgment — it never replaces it. Results are designed to support second opinions and faster triage, not autonomous diagnosis.',
  },
];

export function TrustSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      className="section-padding bg-[var(--color-secondary)] text-white relative overflow-hidden"
      aria-label="Trust and transparency"
      ref={sectionRef}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[var(--color-primary)] opacity-[0.06] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[var(--color-primary)] opacity-[0.04] blur-3xl" />
      </div>

      <div className="container-main relative z-10">
        <div className="section-heading" data-reveal>
          <h2 className="text-white mb-4">
            Transparent AI You Can{' '}
            <span className="text-[var(--color-primary)]">Trust</span>
          </h2>
          <p className="text-gray-400 text-lg">
            We believe explainability is not optional in clinical AI. Every result
            is backed by evidence you can see and verify.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-reveal-stagger>
          {TRUST_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                hoverable
                data-reveal
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-[var(--radius-sm)] bg-white/10 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-[var(--color-primary)]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base text-white mb-1.5">{item.title}</h3>
                    <p className="text-sm text-gray-400 m-0 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
