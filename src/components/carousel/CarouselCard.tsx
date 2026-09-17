"use client";

import { ProblemStatement } from "@/config/problemStatements";
import { eventConfig } from "@/config/eventConfig";
import { ArrowUpRight, Lock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function CarouselCard({
  item,
  isCenter,
  index = 0,
}: {
  item: ProblemStatement;
  isCenter: boolean;
  index?: number;
}) {
  const isRevealed = eventConfig.problemStatementsRevealed;
  const Icon = item.icon;
  const trackNumber = String((index % 5) + 1).padStart(2, "0");

  if (!isRevealed) {
    return (
      <div
        className={`relative w-full h-full rounded-[2rem] overflow-hidden glass-panel-light flex flex-col justify-between p-8 transition-all duration-500 shadow-2xl ${
          isCenter
            ? "shadow-[0_30px_60px_rgba(0,0,0,0.6)] border-warm-sunlight/30"
            : "shadow-[0_15px_30px_rgba(0,0,0,0.4)] border-white/5 opacity-80"
        }`}
      >
        {/* Ambient Gradient Glow */}
        <div
          className={`absolute inset-0 opacity-20 bg-gradient-to-tr ${item.accentMetadata} transition-opacity duration-700 ${
            isCenter ? "opacity-35" : ""
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal via-deep-charcoal/90 to-transparent" />

        {/* Animated Light Sweep on Center Card */}
        {isCenter && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none transform -skew-x-12"
          />
        )}

        {/* Header / Track Number */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/10">
            <Lock size={13} className="text-warm-sunlight" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-cloud-white uppercase">
              TRACK {trackNumber}
            </span>
          </div>

          <span className="text-[10px] font-semibold tracking-[0.2em] text-warm-sunlight/80 uppercase px-2.5 py-1 rounded-full bg-warm-sunlight/10 border border-warm-sunlight/20">
            LOCKED
          </span>
        </div>

        {/* Central Mystery Emblem */}
        <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center py-4">
          <motion.div
            animate={isCenter ? { scale: [1, 1.05, 1] } : {}}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="p-5 rounded-full bg-white/5 border border-white/10 mb-4 relative shadow-[0_0_30px_rgba(252,211,77,0.1)]"
          >
            <Lock size={32} className="text-warm-sunlight/90" />
            <div className="absolute inset-0 rounded-full border border-warm-sunlight/20 animate-ping opacity-25 pointer-events-none" />
          </motion.div>

          <h4 className="text-xl md:text-2xl font-bold text-cloud-white tracking-wide mb-2">
            Problem Statement {trackNumber}
          </h4>
          <p className="text-xs text-cloud-white/60 tracking-wider uppercase max-w-xs">
            {eventConfig.problemStatementReleaseText}
          </p>
        </div>

        {/* Footer / Badge */}
        <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] text-cloud-white/70 tracking-widest uppercase">
            <Sparkles size={12} className="text-warm-sunlight" />
            <span>REVEALING SOON</span>
          </div>

          <span className="text-[10px] font-bold tracking-[0.15em] text-warm-sunlight/90 uppercase">
            STAY TUNED
          </span>
        </div>
      </div>
    );
  }

  // Revealed State (shown when problemStatementsRevealed === true)
  return (
    <div
      className={`relative w-full h-full rounded-[2rem] overflow-hidden glass-panel-light flex flex-col justify-end transition-all duration-500 shadow-2xl ${
        isCenter
          ? "shadow-[0_30px_60px_rgba(0,0,0,0.6)] border-white/20"
          : "shadow-[0_15px_30px_rgba(0,0,0,0.4)] border-white/5 opacity-80"
      }`}
    >
      {/* Background Motif */}
      <div
        className={`absolute inset-0 opacity-20 bg-gradient-to-tr ${item.accentMetadata} transition-opacity duration-700 ${
          isCenter ? "opacity-40" : ""
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal via-deep-charcoal/80 to-transparent" />

      {/* Floating Content */}
      <div className="relative z-10 p-8 flex flex-col h-full justify-between">
        <div className="flex items-center gap-3 bg-white/10 w-fit px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
          <Icon size={16} className="text-cloud-white" />
          <span className="text-xs font-bold tracking-widest text-cloud-white uppercase">
            {item.domain}
          </span>
        </div>

        <div className="flex flex-col">
          <h4 className="text-2xl md:text-3xl font-bold mb-3 text-cloud-white drop-shadow-md leading-tight">
            {item.title}
          </h4>
          <p className="text-cloud-white/80 text-sm mb-6 leading-relaxed line-clamp-2">
            {item.context}
          </p>

          <div
            className={`transition-all duration-500 ${
              isCenter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cloud-white text-deep-charcoal font-bold text-xs uppercase tracking-widest shadow-xl cursor-pointer hover:scale-105 active:scale-95 transition-transform">
              VIEW PROBLEM <ArrowUpRight size={14} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
