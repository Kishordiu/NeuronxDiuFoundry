"use client";

import { motion } from "framer-motion";
import { eventConfig } from "@/config/eventConfig";
import { Calendar, Clock, Lock, MapPin, ArrowUpRight } from "lucide-react";

export default function EventFacts() {
  const facts = [
    {
      label: "DATE",
      value: eventConfig.date,
      subtext: "Official Hackathon Day",
      icon: Calendar,
      isLink: false,
    },
    {
      label: "DURATION",
      value: "8 Hours",
      subtext: "Intensive Build Sprint",
      icon: Clock,
      isLink: false,
    },
    {
      label: "PRIZE POOL",
      value: "Revealing Soon",
      subtext: "Classified by Organizers",
      icon: Lock,
      isLink: false,
      highlight: true,
    },
    {
      label: "VENUE",
      value: "View on Google Maps",
      subtext: "Official Location",
      icon: MapPin,
      isLink: true,
      href: eventConfig.venueUrl,
    },
  ];

  return (
    <section className="relative w-full py-12 bg-deep-charcoal border-y border-white/5 z-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {facts.map((fact, index) => {
            const Icon = fact.icon;
            const content = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-6 rounded-2xl glass-panel border border-white/10 hover:border-warm-sunlight/40 transition-all duration-300 flex flex-col justify-between h-full group ${
                  fact.highlight ? "bg-warm-sunlight/[0.03]" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold tracking-[0.25em] text-cloud-white/60 uppercase">
                    {fact.label}
                  </span>
                  <div className="p-2 rounded-lg bg-white/5 text-warm-sunlight group-hover:bg-warm-sunlight group-hover:text-deep-charcoal transition-colors">
                    <Icon size={16} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xl md:text-2xl font-bold text-cloud-white group-hover:text-warm-sunlight transition-colors">
                    <span>{fact.value}</span>
                    {fact.isLink && (
                      <ArrowUpRight size={18} className="text-warm-sunlight group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    )}
                  </div>
                  <p className="text-xs text-cloud-white/50 tracking-wider uppercase mt-1">
                    {fact.subtext}
                  </p>
                </div>
              </motion.div>
            );

            if (fact.isLink && fact.href) {
              return (
                <a
                  key={fact.label}
                  href={fact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus:outline-none focus:ring-2 focus:ring-warm-sunlight/50 rounded-2xl"
                  aria-label="View official venue on Google Maps"
                >
                  {content}
                </a>
              );
            }

            return <div key={fact.label}>{content}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
