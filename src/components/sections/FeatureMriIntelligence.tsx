import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Brain } from 'lucide-react';

const MRI_POINTS = [
  'Classifies 4 tumor types with 98.6% accuracy',
  'Grad-CAM explainability heatmap overlay',
  'Supports DICOM and standard image formats',
  'Full results delivered in under 3 seconds',
];

export function FeatureMriIntelligence() {
  return (
    <section className="section-padding bg-white dark:bg-[#0B1120] bg-dot-grid relative overflow-hidden" id="mri-analysis">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy & Checklist */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Pill Badge */}
            <div className="inline-block px-3.5 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 text-xs font-semibold tracking-wider uppercase mb-5">
              01 / MRI INTELLIGENCE
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-slate-900 dark:text-white leading-[1.15] tracking-tight mb-5">
              Precision tumor detection <br />
              you can trust.
            </h2>

            {/* Paragraph */}
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl">
              Upload any brain MRI and get an instant, explainable AI classification — tumor type, grade, region — with a visual Grad-CAM heatmap overlay for transparent, audit-ready decisions.
            </p>

            {/* Checklist */}
            <div className="space-y-3.5 mb-9">
              {MRI_POINTS.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-200">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link to="/analyze" className="no-underline">
              <button className="px-7 py-3.5 rounded-full bg-[#1E40AF] hover:bg-blue-700 active:scale-95 text-white font-semibold text-sm sm:text-base border-none cursor-pointer shadow-md shadow-blue-900/15 transition-all flex items-center gap-2">
                <span>Try MRI Analysis</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </button>
            </Link>
          </motion.div>

          {/* Right Column: Visual Diagram */}
          <motion.div
            className="lg:col-span-6 relative flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* White card with subtle grid background */}
            <div className="w-full max-w-lg aspect-[4/3] rounded-3xl bg-slate-50/60 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-8 shadow-sm flex items-center justify-center relative overflow-hidden">
              
              {/* Subtle background coordinate grid */}
              <div className="absolute inset-0 bg-dot-grid opacity-60" />

              {/* Brain cross-section wireframe & Scanline */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 240 240" fill="none">
                  {/* Grid Lines */}
                  <line x1="120" y1="20" x2="120" y2="220" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
                  
                  {/* Laser Scanline in vibrant green */}
                  <line x1="20" y1="135" x2="220" y2="135" stroke="#10B981" strokeWidth="2.5" />

                  {/* Stylized Brain Hemisphere Contours */}
                  <path
                    d="M 120 45 C 80 45 45 75 45 125 C 45 160 70 195 105 205 C 115 208 120 185 120 160 Z"
                    stroke="#2563EB"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M 120 45 C 160 45 195 75 195 125 C 195 160 170 195 135 205 C 125 208 120 185 120 160 Z"
                    stroke="#2563EB"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                    fill="none"
                  />

                  {/* Inner brain folds */}
                  <path
                    d="M 60 100 Q 80 110 75 140 Q 95 155 105 140"
                    stroke="#93C5FD"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 180 100 Q 160 110 165 140 Q 145 155 135 140"
                    stroke="#93C5FD"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* Red/Orange Grad-CAM Hotspot */}
                  <circle cx="160" cy="135" r="28" fill="#EF4444" fillOpacity="0.25" />
                  <circle cx="160" cy="135" r="18" fill="#EF4444" fillOpacity="0.55" />
                  <circle cx="160" cy="135" r="8" fill="#DC2626" />
                </svg>

                {/* Floating pill badge overlay: Glioblastoma GBM */}
                <motion.div
                  className="absolute bottom-2 left-2 sm:left-4 bg-white dark:bg-slate-900 rounded-2xl p-3 shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3 z-20"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Brain className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
                      Glioblastoma GBM
                    </div>
                    <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                      97.3% confidence
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
