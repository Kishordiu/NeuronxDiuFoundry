"use client";

import { motion } from "framer-motion";
import { eventConfig } from "@/config/eventConfig";

export default function FinalCTA() {
  return (
    <section className="relative w-full h-[80svh] flex flex-col items-center justify-center bg-deep-charcoal overflow-hidden text-cloud-white">
      {/* Background Image: Reaching the Summit */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2500&auto=format&fit=crop")',
          filter: 'blur(2px)',
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-deep-charcoal via-deep-charcoal/50 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-deep-charcoal via-transparent to-transparent" />

      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-warm-sunlight mb-6">
            Reach The Summit
          </h2>
          <h3 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 drop-shadow-2xl">
            READY TO BUILD?
          </h3>
          <p className="text-xl md:text-3xl font-light text-soft-ivory/80 mb-12">
            12 HOURS. ONE IDEA. MAKE IT REAL.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={eventConfig.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-text="ENTER"
              className="group relative px-10 py-5 bg-warm-sunlight text-deep-charcoal font-black uppercase tracking-widest rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(252,211,77,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Register Now <span className="text-lg leading-none">↗</span>
              </span>
              <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            </a>

            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm uppercase tracking-widest text-cloud-white/70 hover:text-cloud-white transition-colors flex items-center gap-2 mt-4 sm:mt-0"
            >
              Back to Top ↑
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
