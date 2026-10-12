import { PageContainer } from '@/components/layout/PageContainer';
import { Hero } from '@/components/sections/Hero';
import { MultimodalShowcase } from '@/components/sections/MultimodalShowcase';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { FeatureMriIntelligence } from '@/components/sections/FeatureMriIntelligence';
import { FeatureClinicalSystem } from '@/components/sections/FeatureClinicalSystem';
import { TrustSection } from '@/components/sections/TrustSection';
import { ClinicianBanner } from '@/components/sections/ClinicianBanner';

export default function Home() {
  return (
    <PageContainer>
      <title>NeuroMed — AI-Powered Brain Tumor Diagnostics</title>
      <meta
        name="description"
        content="Clinical Decision Support System (CDSS) for radiologists and physicians. Enhance diagnostic confidence with AI-powered MRI analysis and a seamless cross-consultation network."
      />

      {/* Photo 1: Hero */}
      <Hero />

      {/* Photo 2: Multimodal & Specialist Referral Showcase */}
      <MultimodalShowcase />

      {/* Photo 3: How It Works 3-Step Flow */}
      <HowItWorksSection />

      {/* Photo 4: 01 / MRI Intelligence Feature */}
      <FeatureMriIntelligence />

      {/* Photo 5: 02 / Clinical System Feature */}
      <FeatureClinicalSystem />

      {/* Clinical Trust & Waitlist */}
      <TrustSection />
      <ClinicianBanner />
    </PageContainer>
  );
}
