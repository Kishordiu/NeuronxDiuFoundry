"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ProblemStatement } from "@/config/problemStatements";
import { X, CheckCircle2, AlertTriangle, Target } from "lucide-react";

interface ProblemDetailModalProps {
  problem: ProblemStatement | null;
  onClose: () => void;
}

export function ProblemDetailModal({ problem, onClose }: ProblemDetailModalProps) {
  return (
    <AnimatePresence>
      {problem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10"
        >
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            onClick={onClose}
            className="absolute inset-0 bg-deep-charcoal/80"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-5xl max-h-full overflow-hidden flex flex-col glass-panel border border-white/10 rounded-3xl shadow-2xl bg-mountain-slate/90"
          >
            {/* Header */}
            <div className={`p-6 md:p-10 border-b border-white/5 bg-gradient-to-r ${problem.accentMetadata} bg-opacity-10`}>
              <div className="flex justify-between items-start gap-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-warm-sunlight uppercase tracking-widest text-xs font-bold">
                    <problem.icon size={16} />
                    {problem.domain}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    {problem.title}
                  </h2>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/70 hover:text-white shrink-0"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 text-cloud-white/80 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                {/* Left Column: Context & Requirements */}
                <div className="lg:col-span-2 space-y-10">
                  <section>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Target size={20} className="text-warm-sunlight" />
                      Problem Context
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed">
                      {problem.context}
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-emerald-400" />
                      What we want you to build
                    </h3>
                    <ul className="space-y-4">
                      {problem.whatWeWantToBuild.map((item, idx) => (
                        <motion.li 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * idx }}
                          key={idx} 
                          className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </section>
                </div>

                {/* Right Column: Rules & Judging */}
                <div className="space-y-10">
                  <section>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <AlertTriangle size={20} className="text-amber-400" />
                      Ground Rules
                    </h3>
                    <ul className="space-y-3">
                      {problem.groundRules.map((rule, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm leading-relaxed">
                          <span className="text-amber-400 font-bold mt-0.5">•</span>
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-white mb-4">Judging</h3>
                    <div className="space-y-4">
                      {problem.judging.map((criteria, idx) => (
                        <div key={idx} className="flex flex-col gap-1">
                          <div className="flex justify-between items-start gap-4">
                            <span className="text-sm font-medium leading-tight">{criteria.text}</span>
                            <span className="text-warm-sunlight font-bold">{criteria.weight}</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: criteria.weight }}
                              transition={{ duration: 1, delay: 0.2 + (0.1 * idx) }}
                              className="h-full bg-warm-sunlight/80 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

              </div>
            </div>
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
