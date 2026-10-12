import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Play, Zap, ShieldCheck, Target, Brain, AlertTriangle, TrendingUp } from 'lucide-react';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 25 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#0B1120] bg-dot-grid py-14 lg:py-20" aria-label="Hero">
      {/* Decorative ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-10 right-1/4 w-[400px] h-[300px] bg-sky-400/5 dark:bg-sky-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <motion.div className="lg:col-span-6 text-left" {...fadeUp}>
            {/* Top Eyebrow Tag */}
            <div className="inline-block text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase mb-4">
              AI-POWERED BRAIN TUMOR DIAGNOSTICS
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-slate-900 dark:text-white leading-[1.12] tracking-tight mb-5 font-sans">
              Detect, diagnose, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400">
                and save lives.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl">
              Clinical Decision Support System (CDSS) for radiologists and physicians.
              Enhance diagnostic confidence with AI-powered MRI analysis and a seamless
              cross-consultation network.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link to="/analyze" className="no-underline">
                <button className="px-7 py-3.5 rounded-full bg-[#1E40AF] hover:bg-blue-700 active:scale-95 text-white font-semibold text-sm sm:text-base border-none cursor-pointer shadow-lg shadow-blue-900/15 transition-all flex items-center gap-2">
                  <span>Start Free Analysis</span>
                  <ArrowRight className="h-4.5 w-4.5" />
                </button>
              </Link>
              <Link to="/how-it-works" className="no-underline">
                <button className="px-6 py-3.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60 active:scale-95 text-slate-700 dark:text-slate-200 font-semibold text-sm sm:text-base cursor-pointer shadow-sm transition-all flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                    <Play className="h-2.5 w-2.5 fill-slate-700 dark:fill-slate-200 text-slate-700 dark:text-slate-200 ml-0.5" />
                  </span>
                  <span>See How It Works</span>
                </button>
              </Link>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-slate-200/80 dark:border-slate-800">
              {/* Stat 1 */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-base sm:text-xl font-bold text-slate-900 dark:text-white leading-tight">
                    98.6%
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Accuracy Rate
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-base sm:text-xl font-bold text-slate-900 dark:text-white leading-tight">
                    2.4s
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Avg. Analysis Time
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-base sm:text-xl font-bold text-slate-900 dark:text-white leading-tight">
                    50+
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Clinics Connected
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Graphic */}
          <motion.div
            className="lg:col-span-6 relative flex items-center justify-center pt-8 pb-12 lg:py-0"
            {...(shouldReduceMotion
              ? {}
              : {
                  initial: { opacity: 0, scale: 0.96 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const },
                })}
          >
            {/* Blue squiggly doodle accent floating top */}
            <div className="absolute top-0 left-12 text-blue-500/80 pointer-events-none">
              <svg className="w-12 h-6" viewBox="0 0 50 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M 2 12 Q 12 0 25 10 T 48 8" />
              </svg>
            </div>

            {/* Heart doodle accent floating bottom left */}
            <div className="absolute bottom-2 left-6 text-sky-400/50 pointer-events-none">
              <svg className="w-9 h-9" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>

            {/* Central Mock MRI Device Frame */}
            <div className="relative w-[280px] sm:w-[320px] aspect-[9/14] rounded-[2.5rem] p-3 bg-gradient-to-b from-slate-800 to-slate-950 shadow-2xl shadow-blue-900/20 border-4 border-slate-700/60 overflow-hidden">
              {/* Device Screen */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-slate-950 flex items-center justify-center">
                {/* Stylized realistic axial MRI scan preview */}
                <div className="absolute inset-0 bg-cover bg-center opacity-85">
                  <svg className="w-full h-full" viewBox="0 0 300 400" preserveAspectRatio="none">
                    <defs>
                      <radialGradient id="mriBrainGlow" cx="50%" cy="45%" r="45%">
                        <stop offset="0%" stopColor="#818CF8" stopOpacity="0.25" />
                        <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.08" />
                        <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
                      </radialGradient>
                      <radialGradient id="tumorHotspot" cx="62%" cy="40%" r="22%">
                        <stop offset="0%" stopColor="#EF4444" stopOpacity="0.8" />
                        <stop offset="45%" stopColor="#F59E0B" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <rect width="300" height="400" fill="#0A0F1D" />
                    {/* Brain anatomical contours */}
                    <ellipse cx="150" cy="190" rx="105" ry="135" fill="#17223A" stroke="#334155" strokeWidth="2" />
                    <ellipse cx="150" cy="190" rx="90" ry="120" fill="url(#mriBrainGlow)" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
                    {/* Ventricles and sulci */}
                    <path d="M 150 100 Q 140 180 150 280" stroke="#475569" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
                    <path d="M 130 160 Q 145 190 135 220" stroke="#64748B" strokeWidth="2.5" fill="none" />
                    <path d="M 170 160 Q 155 190 165 220" stroke="#64748B" strokeWidth="2.5" fill="none" />
                    {/* Tumor region */}
                    <circle cx="185" cy="165" r="42" fill="url(#tumorHotspot)" />
                    <circle cx="185" cy="165" r="18" fill="#EF4444" fillOpacity="0.6" stroke="#FCA5A5" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* Tumor Detected Pill Tag */}
                <div className="absolute top-1/2 right-3 -translate-y-1/2 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 z-20">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span>Tumor Detected</span>
                </div>
              </div>
            </div>

            {/* Floating Card 1: Top-Left (MRI RESULT) */}
            <motion.div
              className="absolute -top-4 -left-4 sm:-left-8 bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-xl shadow-slate-900/10 border border-slate-100 dark:border-slate-800 w-56 sm:w-64 z-30"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Brain className="h-4 w-4" />
                </div>
                <span className="text-[11px] font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
                  MRI RESULT
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 p-0.5 shadow-sm">
                  <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                    <Brain className="h-5 w-5 text-cyan-300" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                    Glioblastoma
                  </div>
                  <div className="inline-flex items-center gap-1 text-[11px] text-amber-600 dark:text-amber-400 font-medium">
                    <AlertTriangle className="h-3 w-3" />
                    <span>High Grade</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Confidence</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">97.3%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: '97.3%' }} />
                </div>
              </div>
            </motion.div>

            {/* Floating Brain Icon Circle Badge */}
            <motion.div
              className="absolute top-28 -left-3 sm:-left-6 w-11 h-11 rounded-2xl bg-white dark:bg-slate-900 shadow-lg border border-slate-100 dark:border-slate-800 flex items-center justify-center text-blue-600 z-30"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Brain className="h-5 w-5 stroke-[2.2]" />
            </motion.div>

            {/* Floating Card 2: Bottom-Right (ANALYSIS SPEED) */}
            <motion.div
              className="absolute -bottom-4 -right-2 sm:-right-6 bg-[#1E40AF] text-white rounded-2xl p-4 sm:p-5 shadow-2xl shadow-blue-900/30 w-52 sm:w-56 z-30"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="text-[10px] sm:text-[11px] font-semibold text-blue-200 tracking-wider uppercase mb-1">
                ANALYSIS SPEED
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white leading-none mb-1 tracking-tight">
                2.4s
              </div>
              <div className="text-xs text-blue-200 mb-3">
                avg. per scan
              </div>
              <div className="inline-flex items-center gap-1.5 bg-blue-900/60 border border-blue-400/20 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                <TrendingUp className="h-3 w-3 text-emerald-400" />
                <span>98.6% accurate</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

