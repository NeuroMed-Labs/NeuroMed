import { PageContainer } from '@/components/layout/PageContainer';
import { Hero } from '@/components/sections/Hero';
import { ProductPreview } from '@/components/sections/ProductPreview';
import { WorkflowSteps } from '@/components/sections/WorkflowSteps';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { ClinicianBanner } from '@/components/sections/ClinicianBanner';

export default function Home() {
  return (
    <PageContainer>
      <title>Neuromed — AI-Powered Brain Tumor Detection</title>
      <meta
        name="description"
        content="Upload brain MRI scans and receive instant AI classification with confidence scores and Grad-CAM explainability. Built for radiologists and neurologists."
      />

      <Hero />
      <ProductPreview />
      <WorkflowSteps />
      <HowItWorksSection />
      <TrustSection />
      <ClinicianBanner />
    </PageContainer>
  );
}
