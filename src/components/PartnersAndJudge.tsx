"use client";

import { motion } from "framer-motion";
import { eventConfig } from "@/config/eventConfig";
import { Award, Users, Gem } from "lucide-react";

export default function PartnersAndJudge() {
  return (
    <section id="partners-and-judge" className="relative w-full py-28 bg-deep-charcoal text-cloud-white overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs md:text-sm font-bold tracking-[0.35em] uppercase text-warm-sunlight mb-3">
            EVALUATION & ALLIANCE
          </h2>
          <h3 className="text-3xl md:text-5xl font-light tracking-tight">
            Judge & Partners
          </h3>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* JUDGE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between hover:border-warm-sunlight/40 transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-bold tracking-[0.25em] text-warm-sunlight uppercase px-3 py-1 rounded-full bg-warm-sunlight/10 border border-warm-sunlight/20">
                  JUDGE
                </span>
                <div className="p-2.5 rounded-full bg-white/5 text-warm-sunlight">
                  <Award size={18} />
                </div>
              </div>

              <h4 className="text-2xl font-bold text-cloud-white group-hover:text-warm-sunlight transition-colors mb-1">
                {eventConfig.judge.name}
              </h4>
              <span className="text-xs font-semibold tracking-widest text-cloud-white/60 uppercase block mb-4">
                {eventConfig.judge.qualification}
              </span>

              <div className="pt-4 border-t border-white/5 space-y-1">
                <p className="text-sm font-medium text-cloud-white/90">
                  {eventConfig.judge.role}
                </p>
                <p className="text-xs text-warm-sunlight tracking-wider uppercase font-semibold">
                  {eventConfig.judge.organization}
                </p>
              </div>
            </div>

            <div className="mt-8 text-[11px] text-cloud-white/40 uppercase tracking-widest">
              Evaluation Panel
            </div>
          </motion.div>

          {/* COMMUNITY PARTNER CARD */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between hover:border-warm-sunlight/40 transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-bold tracking-[0.25em] text-cloud-white/80 uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  COMMUNITY PARTNER
                </span>
                <div className="p-2.5 rounded-full bg-white/5 text-cloud-white/80">
                  <Users size={18} />
                </div>
              </div>

              <div className="h-16 flex items-center mb-4">
                <img 
                  src="/assets/diu-foundry-logo.jpg" 
                  alt={eventConfig.communityPartner} 
                  className="max-h-12 w-auto object-contain mix-blend-screen opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>

              <h4 className="text-xl font-bold text-cloud-white group-hover:text-warm-sunlight transition-colors mb-1">
                {eventConfig.communityPartner}
              </h4>
              <p className="text-xs text-cloud-white/50 tracking-wider uppercase">
                Supporting Innovation & Builder Ecosystem
              </p>
            </div>

            <div className="mt-8 text-[11px] text-cloud-white/40 uppercase tracking-widest">
              Community Partner
            </div>
          </motion.div>

          {/* SUPPORTING PARTNER CARD */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between hover:border-warm-sunlight/40 transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-bold tracking-[0.25em] text-warm-sunlight/90 uppercase px-3 py-1 rounded-full bg-warm-sunlight/10 border border-warm-sunlight/20">
                  SUPPORTING PARTNER
                </span>
                <div className="p-2.5 rounded-full bg-white/5 text-warm-sunlight">
                  <Gem size={18} />
                </div>
              </div>

              <div className="h-16 flex items-center mb-4">
                <span className="text-2xl md:text-3xl font-serif tracking-widest text-cloud-white group-hover:text-warm-sunlight transition-colors">
                  {eventConfig.supportingPartner}
                </span>
              </div>

              <h4 className="text-xl font-bold text-cloud-white group-hover:text-warm-sunlight transition-colors mb-1">
                {eventConfig.supportingPartner}
              </h4>
              <p className="text-xs text-cloud-white/50 tracking-wider uppercase">
                Official Supporting Partner
              </p>
            </div>

            <div className="mt-8 text-[11px] text-cloud-white/40 uppercase tracking-widest">
              Supporting Partner
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
