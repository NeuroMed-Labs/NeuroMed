import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle, Check, ArrowUp } from 'lucide-react';

const CLINICAL_POINTS = [
  '12-point neurological symptom questionnaire',
  'Real-time risk stratification: Low / Medium / High',
  'Automatically correlates with MRI analysis results',
  'Generates printable clinical summary PDF report',
];

export function FeatureClinicalSystem() {
  return (
    <section className="section-padding bg-slate-50/50 dark:bg-[#0B1120] relative overflow-hidden" id="clinical-system">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Clipboard Graphic */}
          <motion.div
            className="lg:col-span-6 order-2 lg:order-1 relative flex items-center justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-lg aspect-[4/3] rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-8 shadow-sm flex items-center justify-center relative overflow-hidden">
              
              {/* Subtle background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

              {/* Central Clipboard Illustration */}
              <div className="relative w-52 sm:w-60 h-68 sm:h-76 bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-md p-5 flex flex-col justify-between">
                
                {/* Clipboard Top Clip */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-slate-600 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-400" />
                </div>

                {/* Form placeholder lines */}
                <div className="space-y-3 pt-4">
                  <div className="w-16 h-2 bg-slate-200 dark:bg-slate-700 rounded-full" />
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full" />
                  <div className="w-3/4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full" />
                  <div className="w-5/6 h-2 bg-slate-100 dark:bg-slate-800 rounded-full" />
                </div>

                {/* Donut Gauge 78 */}
                <div className="flex justify-center pb-2">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#E2E8F0" strokeWidth="3" className="dark:stroke-slate-800" />
                      <circle
                        cx="18"
                        cy="18"
                        r="14"
                        fill="none"
                        stroke="#8B5CF6"
                        strokeWidth="3.2"
                        strokeDasharray="88"
                        strokeDashoffset="19"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute text-xl font-bold text-slate-800 dark:text-white">
                      78
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Top-Right Purple Badge: High Risk Detected */}
              <motion.div
                className="absolute top-6 right-4 sm:right-8 bg-[#8B5CF6] text-white px-4 py-2 rounded-2xl shadow-xl shadow-purple-500/20 text-xs sm:text-sm font-semibold flex items-center gap-2 z-20"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <AlertTriangle className="h-4 w-4" />
                <span>High Risk Detected</span>
              </motion.div>

              {/* Floating Left Checkmark Card */}
              <motion.div
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border-2 border-purple-200 dark:border-purple-800 shadow-lg flex items-center justify-center text-purple-600 dark:text-purple-400 z-20"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Check className="h-6 w-6 stroke-[2.5]" />
              </motion.div>

              {/* Floating Right Upward Arrow Card */}
              <motion.div
                className="absolute right-4 sm:right-8 bottom-10 w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/70 border-2 border-blue-200 dark:border-blue-800 shadow-lg flex items-center justify-center text-blue-600 dark:text-blue-400 z-20"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowUp className="h-6 w-6 stroke-[2.5]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Copy & Checklist */}
          <motion.div
            className="lg:col-span-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Pill Badge */}
            <div className="inline-block px-3.5 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 text-xs font-semibold tracking-wider uppercase mb-5">
              02 / CLINICAL SYSTEM
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-slate-900 dark:text-white leading-[1.15] tracking-tight mb-5">
              Smart symptom-based <br />
              risk evaluation.
            </h2>

            {/* Paragraph */}
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl">
              Before imaging is even available, our structured clinical assessment evaluates 12+ neurological warning signs — computing a real-time risk score that correlates with MRI findings.
            </p>

            {/* Checklist */}
            <div className="space-y-3.5 mb-8">
              {CLINICAL_POINTS.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 shrink-0" />
                  <span className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-200">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
