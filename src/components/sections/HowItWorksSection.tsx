import { Upload, Cpu, ClipboardCheck } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const STEPS = [
  {
    icon: Upload,
    number: 1,
    title: 'Upload',
    description: 'Drag and drop your brain MRI scan. We accept DICOM, JPEG, and PNG formats up to 50MB.',
  },
  {
    icon: Cpu,
    number: 2,
    title: 'Analyze',
    description: 'Our deep learning model preprocesses and classifies the scan in under 3 seconds with clinical-grade accuracy.',
  },
  {
    icon: ClipboardCheck,
    number: 3,
    title: 'Review',
    description: 'Examine the classification, confidence scores, and Grad-CAM heatmap to understand what the AI found.',
  },
];

export function HowItWorksSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section className="section-padding" aria-label="How it works overview" ref={sectionRef}>
      <div className="container-main">
        <div className="section-heading" data-reveal>
          <h2 className="mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg">
            Three simple steps between uploading a scan and receiving an explainable AI analysis.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[16.5%] right-[16.5%] h-0.5 bg-[var(--color-border)]" aria-hidden="true">
            <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)] opacity-30" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12" data-reveal-stagger>
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="text-center relative" data-reveal>
                  <div className="relative z-10 mx-auto w-16 h-16 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center mb-5 shadow-lg shadow-[var(--color-primary)]/20 transition-transform duration-300 hover:scale-110">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 text-xs font-bold text-[var(--color-primary)] bg-[var(--color-primary-tint)] w-6 h-6 rounded-full flex items-center justify-center z-20">
                    {step.number}
                  </div>
                  <h3 className="text-xl mb-2">{step.title}</h3>
                  <p className="text-sm max-w-xs mx-auto m-0">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
