import { PageContainer } from '@/components/layout/PageContainer';
import { AccordionItem } from '@/components/ui/Accordion';
import { Upload, Cpu, BarChart3, FileCheck, Eye, Download } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface FeatureDetail {
  id: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  details: string[];
}

const FEATURES: FeatureDetail[] = [
  {
    id: 'upload',
    icon: Upload,
    title: 'Secure MRI Upload',
    summary: 'Drag-and-drop brain MRI scans in DICOM, JPEG, or PNG format with client-side validation.',
    details: [
      'Supports DICOM (.dcm), JPEG, and PNG file formats commonly used in clinical imaging.',
      'Client-side file validation checks format and size before any data leaves the browser.',
      'Files up to 50MB are supported, covering high-resolution clinical MRI scans.',
      'Drag-and-drop interface with keyboard accessibility for screen reader users.',
    ],
  },
  {
    id: 'preprocessing',
    icon: Cpu,
    title: 'AI Preprocessing Pipeline',
    summary: 'Automatic image normalization, skull stripping, and quality validation before analysis.',
    details: [
      'Intensity normalization ensures consistent input regardless of scanner manufacturer or acquisition protocol.',
      'Skull stripping removes non-brain tissue to focus the model on relevant anatomy.',
      'Quality checks detect artifacts, motion blur, or insufficient contrast that could affect accuracy.',
      'The preprocessing pipeline is based on published neuroradiology best practices.',
    ],
  },
  {
    id: 'classification',
    icon: BarChart3,
    title: 'Deep Learning Classification',
    summary: 'State-of-the-art neural network classifies across four categories with 98.7% accuracy.',
    details: [
      'Convolutional neural network architecture trained on thousands of labeled brain MRI scans.',
      'Four-class classification: glioma, meningioma, pituitary tumor, or no tumor detected.',
      'Ensemble methods combine multiple model predictions for improved robustness.',
      'Regular model retraining on expanded datasets to maintain and improve accuracy over time.',
    ],
  },
  {
    id: 'explainability',
    icon: Eye,
    title: 'Grad-CAM Explainability',
    summary: 'Visual heatmap overlay showing which regions of the MRI influenced the AI prediction.',
    details: [
      'Gradient-weighted Class Activation Mapping (Grad-CAM) highlights anatomically relevant regions.',
      'Adjustable opacity slider lets clinicians compare the heatmap with the original scan.',
      'Color-coded activation intensity from blue (low) through red (high) for intuitive reading.',
      'Enables clinicians to verify that the model focuses on the correct anatomical structures.',
    ],
  },
  {
    id: 'confidence',
    icon: FileCheck,
    title: 'Confidence Scoring',
    summary: 'Full probability distribution across all classes so clinicians can assess prediction certainty.',
    details: [
      'Softmax probability distribution shows confidence across all four classification categories.',
      'Visual progress bars with percentage labels for instant readability.',
      'Helps clinicians identify borderline cases that may warrant additional imaging or biopsy.',
      'Supports clinical decision-making by quantifying diagnostic uncertainty.',
    ],
  },
  {
    id: 'reporting',
    icon: Download,
    title: 'Report Generation',
    summary: 'Download a structured PDF summary for patient records, second opinions, and documentation.',
    details: [
      'One-click PDF generation with classification results, confidence scores, and timestamps.',
      'Professional formatting suitable for inclusion in electronic health records (EHR).',
      'Includes medical disclaimer and report provenance information.',
      'Reports are generated entirely client-side — no patient data is transmitted to external servers.',
    ],
  },
];

export default function Features() {
  return (
    <PageContainer>
      <title>Features — Neuromed AI Brain Tumor Detection</title>
      <meta
        name="description"
        content="Explore Neuromed's 6-step AI workflow: secure upload, preprocessing, classification, Grad-CAM explainability, confidence scoring, and report generation."
      />

      <section className="section-padding" aria-label="Platform features">
        <div className="container-main">
          <div className="section-heading">
            <h1 className="mb-4">
              Platform <span className="gradient-text">Features</span>
            </h1>
            <p className="text-lg">
              Every step of the Neuromed pipeline is designed for clinical
              reliability, transparency, and ease of use.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden"
                >
                  {/* Feature card header */}
                  <div className="p-6 pb-2">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-[var(--radius-sm)] bg-[var(--color-primary-tint)] flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-[var(--color-primary)]" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-base mb-1">{feature.title}</h3>
                        <p className="text-sm text-[var(--color-muted)] m-0">
                          {feature.summary}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-4">
                    <AccordionItem id={`detail-${feature.id}`} title="View technical details">
                      <ul className="space-y-2 list-disc pl-5 text-sm">
                        {feature.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </AccordionItem>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
