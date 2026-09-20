import { PageContainer } from '@/components/layout/PageContainer';
import { Card } from '@/components/ui/Card';
import { Brain, Eye, Shield, Users, Target, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

const VALUES: Value[] = [
  {
    icon: Eye,
    title: 'Transparency First',
    description: 'Every AI prediction is accompanied by visual evidence. We reject black-box medicine.',
  },
  {
    icon: Shield,
    title: 'Clinical Safety',
    description: 'Our tools augment physician judgment — they never replace it. Safety is non-negotiable.',
  },
  {
    icon: Users,
    title: 'Physician-Centered Design',
    description: 'Built in collaboration with neuroradiologists to fit real clinical workflows.',
  },
  {
    icon: Target,
    title: 'Rigorous Validation',
    description: 'Models are validated against peer-reviewed datasets with published methodology.',
  },
  {
    icon: Heart,
    title: 'Patient Impact',
    description: 'Every feature we build is measured by its potential to improve patient outcomes.',
  },
  {
    icon: Brain,
    title: 'Continuous Learning',
    description: 'Regular model retraining and performance monitoring ensure accuracy improves over time.',
  },
];

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

const TEAM: TeamMember[] = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Medical Officer',
    bio: 'Board-certified neuroradiologist with 15 years of experience in neuroimaging and AI-assisted diagnostics.',
  },
  {
    name: 'Dr. James Okonkwo',
    role: 'Head of AI Research',
    bio: 'Former lead ML researcher with expertise in medical image classification and explainable AI systems.',
  },
  {
    name: 'Maria Gutierrez',
    role: 'VP of Engineering',
    bio: 'Healthcare technology veteran who has built HIPAA-compliant platforms serving over 200 hospitals.',
  },
  {
    name: 'Dr. Raj Patel',
    role: 'Clinical Advisor',
    bio: 'Practicing neurologist and clinical informatics specialist focused on integrating AI into diagnostic workflows.',
  },
];

export default function About() {
  const valuesRef = useScrollReveal<HTMLElement>();
  const teamRef = useScrollReveal<HTMLElement>();

  return (
    <PageContainer>
      <title>About — Neuromed AI Brain Tumor Detection</title>
      <meta
        name="description"
        content="Learn about Neuromed's mission to bring transparent, explainable AI to neuroimaging and brain tumor detection."
      />

      {/* Mission Section */}
      <section className="section-padding" aria-label="Our mission">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="mb-6">
              Our <span className="gradient-text">Mission</span>
            </h1>
            <p className="text-xl leading-relaxed mb-6">
              Neuromed exists to make AI-powered neuroimaging analysis accessible,
              transparent, and trustworthy for every clinician who needs it.
            </p>
            <p className="text-base leading-relaxed">
              We believe that artificial intelligence in medicine must be explainable.
              Clinicians deserve to see not just what the AI predicts, but why — because
              trust is earned through transparency, not claimed through marketing.
              Our Grad-CAM explainability layer ensures every prediction is accompanied
              by visual evidence that physicians can evaluate, challenge, and learn from.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding bg-[var(--color-surface)] border-y border-[var(--color-border)]" aria-label="Our values" ref={valuesRef}>
        <div className="container-main">
          <div className="section-heading" data-reveal>
            <h2 className="mb-4">
              What We <span className="gradient-text">Stand For</span>
            </h2>
            <p className="text-lg">
              Principles that guide every decision we make, from model architecture to interface design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal-stagger>
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} hoverable data-reveal>
                  <div className="w-11 h-11 rounded-[var(--radius-sm)] bg-[var(--color-primary-tint)] flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-[var(--color-primary)]" aria-hidden="true" />
                  </div>
                  <h3 className="text-base mb-2">{value.title}</h3>
                  <p className="text-sm m-0">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding" aria-label="Our team" ref={teamRef}>
        <div className="container-main">
          <div className="section-heading" data-reveal>
            <h2 className="mb-4">
              The <span className="gradient-text">Team</span>
            </h2>
            <p className="text-lg">
              Clinicians, engineers, and researchers united by the goal of better neuroimaging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {TEAM.map((member) => (
              <Card key={member.name}>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-white font-display font-bold text-lg shrink-0">
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-base mb-0.5">{member.name}</h3>
                    <p className="text-sm text-[var(--color-primary)] font-medium m-0 mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm m-0">{member.bio}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
