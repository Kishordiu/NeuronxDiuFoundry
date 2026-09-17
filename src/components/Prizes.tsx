"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Sparkles, ShieldCheck } from "lucide-react";

export default function Prizes() {
  const [isTapped, setIsTapped] = useState(false);

  return (
    <section id="prizes" className="relative w-full py-32 bg-deep-charcoal text-cloud-white overflow-hidden">
      {/* Background Ambience & Spotlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-mountain-slate/20 via-deep-charcoal to-deep-charcoal pointer-events-none" />
      
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(252, 211, 77, 0.12) 0%, rgba(10, 15, 24, 0) 70%)"
        }}
      />

      <div className="container mx-auto px-6 max-w-4xl relative z-10 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs md:text-sm font-bold tracking-[0.35em] uppercase text-warm-sunlight mb-4"
          >
            The Summit
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight"
          >
            Rewards for Builders
          </motion.h3>
        </div>

        {/* The Premium Vault Capsule Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.94, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          whileHover={{ y: -6 }}
          onClick={() => setIsTapped(!isTapped)}
          className="relative w-full max-w-2xl glass-panel border border-warm-sunlight/25 rounded-[32px] md:rounded-[40px] p-8 sm:p-12 md:p-16 flex flex-col items-center justify-center text-center shadow-[0_20px_80px_rgba(0,0,0,0.7)] group overflow-hidden cursor-pointer select-none"
        >
          {/* Subtle Ambient Light Sweep on Container */}
          <div className="absolute inset-0 bg-gradient-to-tr from-warm-sunlight/[0.04] via-transparent to-white/[0.03] opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
          
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none transform -skew-x-12"
          />

          {/* Top Status Pill */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mb-8 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-warm-sunlight/20 backdrop-blur-md shadow-inner"
          >
            <ShieldCheck size={13} className="text-warm-sunlight" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-cloud-white/80 uppercase">
              OFFICIAL POOL • CLASSIFIED
            </span>
          </motion.div>

          {/* Glowing Sealed Capsule with Lock Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.6 }}
            className="mb-6 p-6 sm:p-7 bg-white/[0.03] rounded-full border border-warm-sunlight/30 relative shadow-[0_0_40px_rgba(252,211,77,0.12)] group-hover:shadow-[0_0_60px_rgba(252,211,77,0.22)] transition-shadow duration-500"
          >
            {/* Ambient Pulse Ring */}
            <div className="absolute inset-0 rounded-full border border-warm-sunlight/20 animate-ping opacity-20 pointer-events-none" />
            <motion.div
              animate={{ rotate: [0, -3, 3, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Lock size={40} className="text-warm-sunlight relative z-10" />
            </motion.div>
          </motion.div>

          {/* Category Tag */}
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="text-cloud-white/70 font-bold tracking-[0.35em] uppercase text-xs md:text-sm mb-3"
          >
            TOTAL PRIZE POOL
          </motion.h4>
          
          {/* Primary Classified Reveal Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.85, duration: 0.9 }}
            className="relative my-2"
          >
            <div className="text-5xl sm:text-7xl md:text-8xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-cloud-white via-soft-ivory to-warm-sunlight/70 drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
              CLASSIFIED
            </div>
          </motion.div>

          {/* Factual Supporting Line */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="text-cloud-white/80 text-base md:text-lg font-light tracking-wide max-w-md mx-auto mt-4 mb-8"
          >
            The total prize pool will be revealed later.
          </motion.p>

          {/* Status Badge & Hover/Tap Microcopy */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1 }}
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-warm-sunlight/10 border border-warm-sunlight/30 text-warm-sunlight font-semibold text-xs tracking-[0.2em] uppercase backdrop-blur-sm group-hover:bg-warm-sunlight/20 transition-colors"
          >
            <Sparkles size={13} className="animate-spin" style={{ animationDuration: "6s" }} />
            <span>{isTapped ? "THE NUMBER IS COMING" : "REVEALING SOON"}</span>
          </motion.div>

          {/* Bottom Structural Reflection */}
          <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-warm-sunlight/40 to-transparent opacity-60" />
        </motion.div>
      </div>
    </section>
  );
}
