import { motion } from 'framer-motion';
import { Upload, Brain, Stethoscope } from 'lucide-react';

export function HowItWorksSection() {
  return (
    <section className="section-padding bg-white dark:bg-[#0B1120] relative" id="how-it-works" aria-label="How it works">
      <div className="container-main">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 text-xs font-semibold tracking-wider uppercase mb-5">
            HOW IT WORKS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-slate-900 dark:text-white leading-[1.15] tracking-tight">
            From scan to diagnosis <br />
            in three steps
          </h2>
        </div>

        {/* 3 Steps Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Step 1 */}
          <motion.div
            className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div>
              {/* Top Row: Icon + Step Badge */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Upload className="h-6 w-6 stroke-[2]" />
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-wide">
                  Step 1
                </span>
              </div>

              {/* Graphic Illustration */}
              <div className="h-32 flex items-center justify-center mb-6">
                <div className="w-28 h-20 rounded-2xl bg-blue-50/60 dark:bg-slate-800/60 border-2 border-blue-100 dark:border-slate-700 relative flex items-center justify-center">
                  {/* Tray notch */}
                  <div className="absolute top-2 w-12 h-2 rounded-full bg-blue-200 dark:bg-slate-700" />
                  {/* Upward arrow with dotted path */}
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full border border-blue-400 border-dashed mb-1" />
                    <svg className="w-6 h-7 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="19" x2="12" y2="5" />
                      <polyline points="5 12 12 5 19 12" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Title & Copy */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Upload MRI Scan
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
                Securely upload DICOM or standard image formats. Zero setup. Our system handles all preprocessing automatically.
              </p>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              {/* Top Row: Icon + Step Badge */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <Brain className="h-6 w-6 stroke-[2]" />
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 text-xs font-bold tracking-wide">
                  Step 2
                </span>
              </div>

              {/* Graphic Illustration */}
              <div className="h-32 flex items-center justify-center mb-6">
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <svg className="w-full h-full text-purple-400" viewBox="0 0 100 100" fill="none">
                    {/* Concentric radar rings */}
                    <circle cx="50" cy="50" r="38" stroke="#E9D5FF" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="50" cy="50" r="24" stroke="#D8B4FE" strokeWidth="1.2" />
                    <circle cx="50" cy="50" r="10" fill="#9333EA" fillOpacity="0.2" stroke="#9333EA" strokeWidth="1.5" />
                    <circle cx="50" cy="50" r="4" fill="#9333EA" />
                    {/* Radial satellite nodes */}
                    <circle cx="20" cy="50" r="3.5" fill="#C084FC" />
                    <circle cx="80" cy="50" r="3.5" fill="#C084FC" />
                    <circle cx="50" cy="20" r="3.5" fill="#C084FC" />
                    <circle cx="50" cy="80" r="3.5" fill="#C084FC" />
                    <circle cx="28" cy="28" r="2.5" fill="#A855F7" />
                    <circle cx="72" cy="72" r="2.5" fill="#A855F7" />
                    <line x1="23.5" y1="50" x2="40" y2="50" stroke="#E9D5FF" strokeWidth="1" />
                    <line x1="60" y1="50" x2="76.5" y2="50" stroke="#E9D5FF" strokeWidth="1" />
                    <line x1="50" y1="23.5" x2="50" y2="40" stroke="#E9D5FF" strokeWidth="1" />
                    <line x1="50" y1="60" x2="50" y2="76.5" stroke="#E9D5FF" strokeWidth="1" />
                  </svg>
                </div>
              </div>

              {/* Title & Copy */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                AI Classification
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
                Our explainable deep-learning model classifies tumor type, grade, and location — with Grad-CAM heatmap overlays.
              </p>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div>
              {/* Top Row: Icon + Step Badge */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                  <Stethoscope className="h-6 w-6 stroke-[2]" />
                </div>
                <span className="px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 text-xs font-bold tracking-wide">
                  Step 3
                </span>
              </div>

              {/* Graphic Illustration */}
              <div className="h-32 flex items-center justify-center mb-6">
                <div className="flex items-center gap-3">
                  {/* Badge 1 */}
                  <div className="w-14 h-18 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border-2 border-emerald-200 dark:border-emerald-800 flex flex-col items-center justify-center p-2 shadow-sm">
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 mb-1.5" />
                    <div className="w-8 h-1.5 rounded-full bg-emerald-300 dark:bg-emerald-700 mb-1" />
                    <div className="w-6 h-1 rounded-full bg-emerald-200 dark:bg-emerald-800" />
                  </div>
                  {/* Badge 2 */}
                  <div className="w-14 h-18 rounded-2xl bg-blue-50 dark:bg-blue-950/50 border-2 border-blue-200 dark:border-blue-800 flex flex-col items-center justify-center p-2 shadow-sm">
                    <div className="w-3.5 h-3.5 rounded-full bg-blue-500 mb-1.5" />
                    <div className="w-8 h-1.5 rounded-full bg-blue-300 dark:bg-blue-700 mb-1" />
                    <div className="w-6 h-1 rounded-full bg-blue-200 dark:bg-blue-800" />
                  </div>
                </div>
              </div>

              {/* Title & Copy */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Specialist Referral
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
                Review AI results and instantly connect with vetted neurosurgeons and oncologists matched to your findings.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

