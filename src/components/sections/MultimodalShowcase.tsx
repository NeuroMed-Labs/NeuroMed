import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Activity, ChevronRight, Star, Brain } from 'lucide-react';

export function MultimodalShowcase() {
  return (
    <section className="relative overflow-hidden bg-slate-50/70 dark:bg-[#0E1729] bg-dot-grid py-16 lg:py-24 border-y border-slate-200/80 dark:border-slate-800" id="clinical">
      {/* Blue squiggle doodle top right */}
      <div className="absolute top-8 right-16 text-blue-500 pointer-events-none hidden md:block">
        <svg className="w-16 h-8" viewBox="0 0 60 25" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <path d="M 3 15 Q 15 2 30 14 T 57 12" />
        </svg>
      </div>

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Holographic 3D Neural Brain with Floating Cards */}
          <div className="relative flex items-center justify-center min-h-[380px] sm:min-h-[440px]">
            {/* Glowing background halo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-blue-500/10 dark:bg-cyan-500/15 blur-3xl" />
            </div>

            {/* Neural Brain Graphic */}
            <motion.div
              className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <svg className="w-full h-full drop-shadow-[0_0_35px_rgba(37,99,235,0.35)]" viewBox="0 0 240 240" fill="none">
                <defs>
                  <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38BDF8" />
                    <stop offset="50%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#1E3A8A" />
                  </linearGradient>
                  <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Left Hemisphere Synaptic Mesh */}
                <path
                  d="M110 40 C70 40 40 70 40 110 C40 135 52 155 68 170 C80 182 92 195 105 200 C110 200 112 180 112 150 C112 120 110 70 110 40 Z"
                  stroke="url(#brainGrad)"
                  strokeWidth="2.5"
                  fill="none"
                  filter="url(#neonGlow)"
                />
                {/* Right Hemisphere Synaptic Mesh */}
                <path
                  d="M130 40 C170 40 200 70 200 110 C200 135 188 155 172 170 C160 182 148 195 135 200 C130 200 128 180 128 150 C128 120 130 70 130 40 Z"
                  stroke="url(#brainGrad)"
                  strokeWidth="2.5"
                  fill="none"
                  filter="url(#neonGlow)"
                />

                {/* Neural interconnecting nodes and lines */}
                <g stroke="#38BDF8" strokeWidth="1.2" opacity="0.75">
                  <line x1="80" y1="80" x2="110" y2="95" />
                  <line x1="110" y1="95" x2="130" y2="95" />
                  <line x1="130" y1="95" x2="160" y2="80" />
                  <line x1="70" y1="120" x2="100" y2="130" />
                  <line x1="100" y1="130" x2="140" y2="130" />
                  <line x1="140" y1="130" x2="170" y2="120" />
                  <line x1="90" y1="160" x2="115" y2="165" />
                  <line x1="125" y1="165" x2="150" y2="160" />
                  <line x1="80" y1="80" x2="70" y2="120" />
                  <line x1="160" y1="80" x2="170" y2="120" />
                  <line x1="110" y1="95" x2="100" y2="130" />
                  <line x1="130" y1="95" x2="140" y2="130" />
                  <line x1="100" y1="130" x2="115" y2="165" />
                  <line x1="140" y1="130" x2="125" y2="165" />
                </g>

                {/* Sparkling synaptic nodes */}
                {[
                  [80, 80], [110, 95], [130, 95], [160, 80],
                  [70, 120], [100, 130], [140, 130], [170, 120],
                  [90, 160], [115, 165], [125, 165], [150, 160],
                  [120, 60], [120, 190], [55, 95], [185, 95]
                ].map(([cx, cy], i) => (
                  <circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r={i % 3 === 0 ? 3.5 : 2.5}
                    fill="#38BDF8"
                    filter="url(#neonGlow)"
                  />
                ))}
              </svg>
            </motion.div>

            {/* Floating Card Top-Left: HIPAA Secure */}
            <motion.div
              className="absolute top-4 left-0 sm:left-4 bg-white dark:bg-slate-900 rounded-2xl p-3.5 shadow-xl shadow-slate-900/10 border border-slate-100 dark:border-slate-800 flex items-center gap-3 z-20"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
                  HIPAA Secure
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  End-to-end encrypted
                </div>
              </div>
            </motion.div>

            {/* Floating Card Bottom-Right: Multimodal Analysis */}
            <motion.div
              className="absolute bottom-4 right-0 sm:right-6 bg-white dark:bg-slate-900 rounded-2xl p-3.5 shadow-xl shadow-slate-900/10 border border-slate-100 dark:border-slate-800 flex items-center gap-3 z-20"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
                  Multimodal Analysis
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  MRI + Clinical Data
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Doctor Character & Risk Score / Referral Network */}
          <div className="relative flex items-center justify-center min-h-[380px] sm:min-h-[440px]" id="referral-network">
            {/* Ambient background glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 rounded-full bg-blue-500/10 dark:bg-blue-600/15 blur-3xl" />
            </div>

            {/* Modern 3D Doctor Illustration Avatar */}
            <div className="relative w-52 sm:w-64 h-80 sm:h-96 flex items-end justify-center z-10">
              <div className="w-full h-full relative rounded-3xl overflow-hidden flex items-end justify-center">
                {/* SVG Clinician Avatar Illustration */}
                <svg className="w-full h-full max-h-[360px]" viewBox="0 0 200 280" fill="none">
                  {/* Doctor Lab Coat Body */}
                  <path d="M 50 140 C 50 120 70 100 100 100 C 130 100 150 120 150 140 L 165 280 L 35 280 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
                  {/* Scrub shirt inside */}
                  <path d="M 85 110 L 115 110 L 120 170 L 80 170 Z" fill="#0284C7" />
                  {/* Stethoscope */}
                  <path d="M 75 110 Q 70 160 90 190 Q 100 200 110 190 Q 130 160 125 110" fill="none" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="100" cy="200" r="8" fill="#94A3B8" stroke="#475569" strokeWidth="2" />
                  {/* Neck */}
                  <rect x="88" y="85" width="24" height="25" rx="6" fill="#FBCFE8" />
                  {/* Head */}
                  <ellipse cx="100" cy="65" rx="30" ry="36" fill="#FDE68A" />
                  {/* Hair */}
                  <path d="M 68 55 C 68 30 85 20 100 20 C 120 20 135 32 132 55 C 125 45 115 42 100 42 C 85 42 75 48 68 55 Z" fill="#1E293B" />
                  {/* Glasses */}
                  <rect x="76" y="55" width="18" height="14" rx="4" fill="none" stroke="#1E293B" strokeWidth="2.5" />
                  <rect x="106" y="55" width="18" height="14" rx="4" fill="none" stroke="#1E293B" strokeWidth="2.5" />
                  <line x1="94" y1="62" x2="106" y2="62" stroke="#1E293B" strokeWidth="2.5" />
                  {/* Friendly smile */}
                  <path d="M 92 82 Q 100 88 108 82" stroke="#B45309" strokeWidth="2" fill="none" strokeLinecap="round" />
                  {/* Hospital ID Badge */}
                  <rect x="65" y="145" width="22" height="30" rx="3" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
                  <rect x="70" y="150" width="12" height="10" rx="1" fill="#38BDF8" />
                  <line x1="68" y1="165" x2="84" y2="165" stroke="#94A3B8" strokeWidth="1.5" />
                  <line x1="68" y1="169" x2="78" y2="169" stroke="#94A3B8" strokeWidth="1.5" />
                  {/* Crossed Arms */}
                  <path d="M 45 155 Q 60 210 100 210 Q 140 210 155 155" fill="none" stroke="#F1F5F9" strokeWidth="18" strokeLinecap="round" />
                  <path d="M 45 155 Q 60 210 100 210 Q 140 210 155 155" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Floating Card Top-Left: RISK SCORE */}
            <motion.div
              className="absolute top-0 left-0 sm:-left-6 bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-xl shadow-slate-900/10 border border-slate-100 dark:border-slate-800 w-52 sm:w-56 z-20"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
                  RISK SCORE
                </span>
                <Activity className="h-4 w-4 text-blue-500" />
              </div>

              {/* Circular Gauge 76 */}
              <div className="flex justify-center mb-3">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#E2E8F0" strokeWidth="3.5" className="dark:stroke-slate-800" />
                    <circle
                      cx="18"
                      cy="18"
                      r="14"
                      fill="none"
                      stroke="#EF4444"
                      strokeWidth="3.5"
                      strokeDasharray="88"
                      strokeDashoffset="21"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute text-xl font-bold text-slate-900 dark:text-white">
                    76
                  </span>
                </div>
              </div>

              {/* Symptom Severity List */}
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    Headaches
                  </span>
                  <span className="text-slate-400 dark:text-slate-500 font-medium">Severe</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    Seizures
                  </span>
                  <span className="text-slate-400 dark:text-slate-500 font-medium">Moderate</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    Vision
                  </span>
                  <span className="text-slate-400 dark:text-slate-500 font-medium">Mild</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Card Bottom-Right: REFERRAL NETWORK */}
            <motion.div
              className="absolute -bottom-6 -right-2 sm:-right-8 bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-2xl shadow-slate-900/10 border border-slate-100 dark:border-slate-800 w-56 sm:w-64 z-20"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="text-[11px] font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase mb-3">
                REFERRAL NETWORK
              </div>

              {/* Specialist 1 */}
              <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-slate-800 group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/40 rounded-lg px-1 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-cyan-500 text-white font-bold text-xs flex items-center justify-center">
                    SC
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                      Dr. Sarah Chen
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      Neurosurgeon
                    </div>
                    <div className="flex items-center gap-0.5 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-2 w-2 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </div>

              {/* Specialist 2 */}
              <div className="flex items-center justify-between py-1.5 group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/40 rounded-lg px-1 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                    RA
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                      Dr. Raza Ahmed
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      Oncologist
                    </div>
                    <div className="flex items-center gap-0.5 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-2 w-2 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </div>

              {/* Status Pill & Action */}
              <div className="flex items-center justify-between pt-2.5 mt-1 border-t border-slate-100 dark:border-slate-800">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-[11px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available now
                </div>
                <button
                  className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white flex items-center justify-center shadow-md shadow-blue-500/20 border-none cursor-pointer transition-transform"
                  aria-label="Connect with specialist"
                >
                  <Brain className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
