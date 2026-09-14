"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { eventConfig } from "@/config/eventConfig";

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" ref={containerRef} className="py-32 bg-deep-charcoal text-cloud-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-warm-sunlight mb-4">
            The Ascent
          </h2>
          <h3 className="text-4xl md:text-5xl font-light">
            12-Hour Timeline
          </h3>
        </div>

        <div className="relative">
          {/* Animated Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 transform md:-translate-x-1/2">
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-warm-sunlight origin-top"
              style={{ scaleY: lineHeight, height: "100%" }}
            />
          </div>

          <div className="space-y-12">
            {eventConfig.timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center w-full pl-12 md:pl-0 ${
                    isEven ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  {/* Content Box */}
                  <div className={`md:w-5/12 ${isEven ? "md:pl-12" : "md:pr-12 md:text-right"} glass-panel p-6 rounded-2xl`}>
                    <span className="inline-block text-warm-sunlight font-bold text-sm tracking-widest mb-2">
                      {item.time}
                    </span>
                    <h4 className="text-xl font-bold mb-2">{item.event}</h4>
                    <p className="text-cloud-white/60 text-sm leading-relaxed">{item.description}</p>
                  </div>

                  {/* Node */}
                  <div className="absolute left-[11px] md:left-1/2 transform md:-translate-x-1/2 w-[10px] h-[10px] rounded-full bg-deep-charcoal border-2 border-warm-sunlight z-10" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
