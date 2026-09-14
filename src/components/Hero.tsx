"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { eventConfig } from "@/config/eventConfig";
import { AtmosphericFog } from "./hero/AtmosphericFog";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax layer transforms
  const ySky = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yMountains = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yClouds = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const yMain = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const scaleLogo = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[100svh] overflow-hidden bg-deep-charcoal"
    >
      {/* LAYER 01 - SKY */}
      <motion.div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-[#1a2942] to-[#2a3b5c]"
        style={{ y: ySky }}
      />

      {/* LAYER 02 - DISTANT MOUNTAINS */}
      <motion.div 
        className="absolute inset-0 z-10 bg-cover bg-center bg-no-repeat opacity-60 mix-blend-screen"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=2500&auto=format&fit=crop")',
          y: yMountains 
        }}
      />

      {/* LAYER 03 - CLOUD SEA */}
      <motion.div 
        className="absolute inset-0 z-20 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1552086780-6060c23933de?q=80&w=2500&auto=format&fit=crop")',
          y: yClouds,
          filter: 'blur(4px)'
        }}
      />

      {/* LAYER 04 - MAIN MOUNTAIN */}
      <motion.div 
        className="absolute inset-0 z-30 bg-cover bg-bottom bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2500&auto=format&fit=crop")',
          maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
          y: yMain 
        }}
      />

      {/* LAYER 03.5 - ATMOSPHERIC FOG (SLOW MOVING) */}
      <AtmosphericFog />

      {/* OVERLAY GRADIENT FOR TEXT LEGIBILITY */}
      <div className="absolute inset-0 z-40 bg-gradient-to-t from-deep-charcoal via-deep-charcoal/40 to-transparent" />
      <div className="absolute inset-0 z-40 bg-gradient-to-b from-[#1a2942]/30 via-transparent to-transparent pointer-events-none" />

      {/* LAYER 05, 06, 07 - CONTENT */}
      <div className="relative z-50 flex flex-col items-center justify-center h-full px-6 text-center">
        
        {/* TYPOGRAPHY & BRAND HIERARCHY */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          style={{ y: yText, opacity: opacityText }}
          className="max-w-4xl"
        >
          <div className="flex flex-col items-center justify-center gap-2 mb-6">
            <h2 className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-cloud-white/80 drop-shadow-md">
              <span className="text-warm-sunlight">{eventConfig.organization}</span> PRESENTS
            </h2>
            <div className="flex items-center gap-3 text-[10px] md:text-xs tracking-[0.3em] uppercase text-cloud-white/50">
              <span>Community Partner: {eventConfig.communityPartner}</span>
              <span>•</span>
              <span className="text-warm-sunlight/80">{eventConfig.date}</span>
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-9xl font-black text-cloud-white text-heading tracking-tight mb-4 drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
            {eventConfig.eventName}
          </h1>
          <p className="text-xl md:text-2xl font-light text-soft-ivory/90 tracking-wide mb-8 drop-shadow-md">
            {eventConfig.edition}
          </p>
          <p className="text-sm md:text-base text-cloud-white/60 tracking-widest uppercase mb-12 max-w-2xl mx-auto leading-relaxed">
            {eventConfig.description}
          </p>
        </motion.div>

        {/* UI CONTROLS / CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          style={{ y: yText }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a 
            href={eventConfig.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-text="ENTER"
            className="group relative px-8 py-4 bg-cloud-white text-deep-charcoal font-bold uppercase tracking-wider rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Register Now</span>
            <div className="absolute inset-0 bg-warm-sunlight transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
          </a>
          
          <a 
            href="#about"
            data-cursor="pointer"
            className="text-sm uppercase tracking-widest text-cloud-white/70 hover:text-cloud-white transition-colors flex items-center gap-2"
          >
            Explore the Hackathon
            <motion.span 
              animate={{ y: [0, 5, 0] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
