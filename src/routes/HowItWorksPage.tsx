import { PageContainer } from '@/components/layout/PageContainer';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { Accordion } from '@/components/ui/Accordion';

const FAQ_ITEMS = [
  {
    id: 'faq-1',
    title: 'What types of brain tumors can Neuromed detect?',
    content:
      'Neuromed classifies brain MRI scans into four categories: glioma, meningioma, pituitary tumor, or no tumor detected. These represent the most common types of primary brain tumors encountered in clinical practice.',
  },
  {
    id: 'faq-2',
    title: 'How accurate is the AI classification?',
    content:
      'Our model achieves 98.7% accuracy on validation datasets, using cross-validated evaluation on publicly available, peer-reviewed brain MRI datasets. However, accuracy on clinical cases may vary depending on image quality and acquisition protocols.',
  },
  {
    id: 'faq-3',
    title: 'Is my patient data secure?',
    content:
      'In the current demo, all processing happens locally in your browser — no image data is transmitted to external servers. In production deployments, Neuromed uses end-to-end encryption and follows HIPAA-conscious design principles.',
  },
  {
    id: 'faq-4',
    title: 'What image formats are supported?',
    content:
      'Neuromed accepts DICOM (.dcm), JPEG (.jpg, .jpeg), and PNG (.png) files up to 50MB. DICOM is the clinical standard for medical imaging, while JPEG and PNG are supported for research and educational use cases.',
  },
  {
    id: 'faq-5',
    title: 'What is Grad-CAM and how does it help?',
    content:
      'Grad-CAM (Gradient-weighted Class Activation Mapping) is an explainability technique that generates a heatmap showing which regions of the MRI scan most influenced the AI prediction. This helps clinicians verify that the model is focusing on anatomically relevant areas.',
  },
  {
    id: 'faq-6',
    title: "Can Neuromed replace a radiologist's diagnosis?",
    content:
      'No. Neuromed is a clinical decision support tool designed to assist — not replace — qualified healthcare professionals. All results should be reviewed and validated by a licensed physician before any clinical decisions are made.',
  },
  {
    id: 'faq-7',
    title: 'How long does analysis take?',
    content:
      'A typical analysis completes in under 3 seconds, including preprocessing, neural network inference, and Grad-CAM heatmap generation. Processing time may vary depending on image resolution and browser performance.',
  },
  {
    id: 'faq-8',
    title: 'Can I generate reports for patient records?',
    content:
      'Yes. After each analysis, you can download a structured PDF report containing the classification result, confidence scores, timestamps, and a medical disclaimer. Reports are generated entirely client-side for privacy.',
  },
];

export default function HowItWorksPage() {
  return (
    <PageContainer>
      <title>How It Works — Neuromed AI Brain Tumor Detection</title>
      <meta
        name="description"
        content="Learn how Neuromed analyzes brain MRI scans in three simple steps: upload, analyze, and review with AI-powered explainability."
      />

      <HowItWorksSection />

      <section className="section-padding bg-[var(--color-surface)] border-t border-[var(--color-border)]" aria-label="Frequently asked questions">
        <div className="container-main">
          <div className="section-heading">
            <h2 className="mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg">
              Common questions about Neuromed&apos;s AI analysis, data security, and clinical use.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
