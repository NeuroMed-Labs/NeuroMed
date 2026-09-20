import { Link } from 'react-router-dom';
import { Brain, Github, Mail, Shield } from 'lucide-react';

const FOOTER_LINKS = {
  Product: [
    { label: 'Features', href: '/features' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Analyze MRI', href: '/analyze' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/about#contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'HIPAA Compliance', href: '#' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[var(--color-border)] bg-[var(--color-secondary)] text-white"
      role="contentinfo"
    >
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-white no-underline hover:text-[var(--color-primary-tint)] mb-4 inline-flex">
              <Brain className="h-6 w-6 text-[var(--color-primary)]" aria-hidden="true" />
              <span className="font-display text-lg font-bold tracking-tight">
                Neuromed
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              AI-powered brain tumor detection with clinical-grade accuracy and explainable results for healthcare professionals.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-[var(--radius-sm)] text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@neuromed.ai"
                className="p-2 rounded-[var(--radius-sm)] text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Email us"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5 list-none p-0 m-0">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors no-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Medical Disclaimer */}
        <div className="border-t border-white/10 pt-6 pb-2">
          <div className="flex items-start gap-3 bg-white/5 rounded-[var(--radius-md)] p-4 mb-6">
            <Shield className="h-5 w-5 text-[var(--color-primary)] shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-xs text-gray-400 leading-relaxed m-0">
              <strong className="text-gray-300">Medical Disclaimer:</strong>{' '}
              Neuromed is a clinical decision support tool designed to assist qualified healthcare professionals.
              It does not replace professional medical diagnosis, treatment advice, or clinical judgment.
              All results should be reviewed and validated by a licensed physician before any clinical decisions are made.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
            <p className="m-0">&copy; {currentYear} Neuromed. All rights reserved.</p>
            <p className="m-0">Built for clinicians, by clinicians.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
