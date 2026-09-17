"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { eventConfig } from "@/config/eventConfig";

const philosophySteps = [
  { step: "01", title: "Learn", desc: "Absorb new tech stacks and paradigms." },
  { step: "02", title: "Ideate", desc: "Formulate ideas to solve real problems." },
  { step: "03", title: "Build", desc: "Turn concepts into functional code." },
  { step: "04", title: "Mentor", desc: "Gain insights from industry veterans." },
  { step: "05", title: "Iterate", desc: "Refine and polish your prototypes." },
  { step: "06", title: "Demo", desc: "Showcase your build to the world." },
  { step: "07", title: "Network", desc: "Connect with the builder community." },
];

export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section 
      id="about"
      ref={containerRef} 
      className="relative w-full py-32 bg-deep-charcoal text-cloud-white overflow-hidden"
    >
      {/* Subtle Background Texture */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03] bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center"
        style={{ y: yBg }}
      />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-32 relative">
          <div className="mb-20">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-warm-sunlight mb-4">
              {eventConfig.organization}
            </h2>
            <h3 className="text-sm tracking-[0.4em] uppercase text-cloud-white/60 mb-8">
              Student Builder Community
            </h3>
            <p className="text-xl md:text-3xl font-light text-cloud-white/90 max-w-3xl mx-auto leading-relaxed">
              &quot;{eventConfig.communityDescription}&quot;
            </p>
          </div>

          <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent mx-auto mb-20" />

          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-warm-sunlight mb-4">
            Why We Build
          </h2>
          <p className="text-3xl md:text-5xl font-light text-cloud-white/90 max-w-3xl mx-auto leading-tight">
            One idea. <span className="font-bold">Eight hours.</span> One team. One build.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line (The Path) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 transform md:-translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-warm-sunlight origin-top"
              style={{ scaleY: pathLength, height: "100%" }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16">
            {philosophySteps.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-start md:items-center relative w-full ${isEven ? "md:justify-start" : "md:justify-end"}`}
                >
                  <div className={`md:w-1/2 pl-16 md:pl-0 flex flex-col ${isEven ? "md:pr-16 md:items-end md:text-right" : "md:pl-16 md:items-start md:text-left"}`}>
                    <span className="text-warm-sunlight/50 font-bold tracking-widest text-sm mb-2">{item.step}</span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{item.title}</h3>
                    <p className="text-cloud-white/60 text-lg leading-relaxed max-w-xs">{item.desc}</p>
                  </div>
                  
                  {/* Node */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-deep-charcoal border-2 border-warm-sunlight z-10 shadow-[0_0_15px_rgba(252,211,77,0.5)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
