import { Upload, Cpu, BarChart3, FileCheck, Eye, Download } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const WORKFLOW_STEPS = [
  {
    icon: Upload,
    title: 'Upload MRI',
    description: 'Drag and drop brain MRI scans in DICOM, JPEG, or PNG format.',
  },
  {
    icon: Cpu,
    title: 'AI Preprocessing',
    description: 'Automatic image normalization, skull stripping, and quality validation.',
  },
  {
    icon: BarChart3,
    title: 'Neural Network Analysis',
    description: 'Deep learning model classifies across four categories with high accuracy.',
  },
  {
    icon: Eye,
    title: 'Grad-CAM Explainability',
    description: 'Visual heatmap overlay showing which regions influenced the prediction.',
  },
  {
    icon: FileCheck,
    title: 'Confidence Scoring',
    description: 'Probability distribution across all classes so clinicians can assess certainty.',
  },
  {
    icon: Download,
    title: 'Report Generation',
    description: 'Download a structured PDF summary for patient records and second opinions.',
  },
];

export function WorkflowSteps() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      className="section-padding bg-[var(--color-surface)] border-y border-[var(--color-border)]"
      aria-label="Workflow steps"
      ref={sectionRef}
    >
      <div className="container-main">
        <div className="section-heading" data-reveal>
          <h2 className="mb-4">
            Six Steps to a{' '}
            <span className="gradient-text">Confident Diagnosis</span>
          </h2>
          <p className="text-lg">
            Every scan goes through a rigorous AI pipeline designed in collaboration
            with neuroradiologists.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal-stagger>
          {WORKFLOW_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={step.title} hoverable className="relative" data-reveal>
                <div className="absolute top-4 right-4 text-4xl font-display font-bold text-[var(--color-border)] select-none">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-primary-tint)] flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-[var(--color-primary)]" aria-hidden="true" />
                </div>
                <h3 className="text-lg mb-2">{step.title}</h3>
                <p className="text-sm m-0">{step.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
