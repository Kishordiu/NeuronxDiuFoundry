"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { eventConfig } from "@/config/eventConfig";
import { Trophy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AnimatedCounter = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-IN").format(Math.floor(latest));
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
};

export default function Prizes() {
  const prizeAmount = parseInt(eventConfig.prizePool.replace(/[^0-9]/g, ''), 10) || 15000;

  return (
    <section id="prizes" className="relative w-full py-32 bg-deep-charcoal text-cloud-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-mountain-slate/20 to-deep-charcoal pointer-events-none" />
      
      {/* Background Particles/Shimmer */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(252, 211, 77, 0.15) 0%, transparent 60%)'
        }}
      />

      <div className="container mx-auto px-6 max-w-4xl relative z-10 flex flex-col items-center">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.3em] uppercase text-warm-sunlight mb-4"
          >
            The Summit
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-light"
          >
            Rewards for Builders
          </motion.h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative w-full max-w-2xl glass-panel border-warm-sunlight/30 rounded-[40px] p-12 md:p-20 flex flex-col items-center justify-center text-center shadow-[0_0_80px_rgba(252,211,77,0.15)] group overflow-hidden"
        >
          {/* Subtle hover gradient inside card */}
          <div className="absolute inset-0 bg-gradient-to-t from-warm-sunlight/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.6, duration: 1.5 }}
            className="mb-8 p-6 bg-white/5 rounded-full border border-warm-sunlight/20 relative"
          >
            <div className="absolute inset-0 rounded-full shadow-[0_0_30px_rgba(252,211,77,0.2)] animate-pulse" />
            <Trophy size={48} className="text-warm-sunlight relative z-10" />
          </motion.div>

          <h4 className="text-cloud-white/80 font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-6">
            Total Prize Pool
          </h4>
          
          <div className="text-6xl md:text-8xl lg:text-9xl font-black text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] tracking-tighter flex items-center justify-center">
            <span className="text-warm-sunlight mr-2">₹</span>
            <AnimatedCounter value={prizeAmount} />
          </div>

          {/* Bottom structural reflection */}
          <div className="absolute bottom-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-warm-sunlight/50 to-transparent opacity-50" />
        </motion.div>
      </div>
    </section>
  );
}
