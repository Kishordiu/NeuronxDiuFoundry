"use client";

import { useState, useEffect } from "react";
import { eventConfig } from "@/config/eventConfig";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Globe, Phone, Mail } from "lucide-react";

const OrganizerCard = ({ isMobile }: { isMobile: boolean }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], isMobile ? ["0deg", "0deg"] : ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], isMobile ? ["0deg", "0deg"] : ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col md:flex-row items-center md:items-start gap-6 p-6 rounded-2xl glass-panel-light cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(252,211,77,0.1)] transition-shadow duration-500 overflow-hidden group w-full md:w-auto"
    >
      {/* Pointer Highlight */}
      <motion.div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
        style={{
          background: `radial-gradient(circle at calc(50% + ${x.get() * 100}%) calc(50% + ${
            y.get() * 100
          }%), rgba(255,255,255,0.2) 0%, transparent 60%)`,
        }}
      />

      <div style={{ transform: isMobile ? "translateZ(0px)" : "translateZ(30px)" }} className="relative z-10 shrink-0">
        <img 
          src="/assets/mukesh.jpg" 
          alt={eventConfig.contact.organizer}
          className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border border-white/20 shadow-lg"
        />
      </div>

      <div style={{ transform: isMobile ? "translateZ(0px)" : "translateZ(40px)" }} className="relative z-10 flex flex-col gap-2 text-center md:text-left">
        <div className="flex flex-col">
          <span className="text-xl font-bold text-warm-sunlight">{eventConfig.contact.organizer}</span>
          <span className="text-cloud-white font-bold tracking-widest uppercase text-[10px] md:text-xs opacity-80">
            Organizer • {eventConfig.organization} / {eventConfig.eventName}
          </span>
        </div>
        
        <div className="flex flex-col gap-1.5 mt-1">
          <a href={eventConfig.contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 text-sm hover:text-warm-sunlight transition-colors text-white/80">
            <Globe size={14} /> @{eventConfig.contact.instagram}
          </a>
          <a href={`tel:${eventConfig.contact.phone.replace(/\s+/g, '')}`} className="flex items-center justify-center md:justify-start gap-2 text-sm hover:text-warm-sunlight transition-colors text-white/80">
            <Phone size={14} /> {eventConfig.contact.phone}
          </a>
          <a href={`mailto:${eventConfig.contact.email}`} className="flex items-center justify-center md:justify-start gap-2 text-sm hover:text-warm-sunlight transition-colors text-white/80">
            <Mail size={14} /> {eventConfig.contact.email}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <footer className="bg-[#0a0f18] text-cloud-white/60 py-16 border-t border-white/5 perspective-[2000px]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left" style={{ perspective: "1000px" }}>
          
          <div className="flex flex-col gap-2 items-center md:items-start">
            <span className="text-sm font-bold tracking-[0.2em] text-cloud-white uppercase">
              {eventConfig.eventName}
            </span>
            <span className="text-xs tracking-widest uppercase text-white/40">{eventConfig.edition}</span>
            <span className="text-xs mt-6 text-white/30">© {currentYear} {eventConfig.organization}</span>
          </div>

          <div className="flex justify-center">
            <OrganizerCard isMobile={isMobile} />
          </div>

          <div className="flex flex-col gap-6 items-center md:items-end text-sm">
            <div className="flex flex-col gap-4 items-center md:items-end">
              <div className="flex flex-col gap-1 items-center md:items-end">
                <span className="text-cloud-white font-bold tracking-widest uppercase text-xs">Community Partner</span>
                <img 
                  src="/assets/diu-foundry-logo.jpg" 
                  alt={eventConfig.communityPartner} 
                  className="h-10 w-auto object-contain mix-blend-screen opacity-70 hover:opacity-100 transition-opacity"
                />
                <span className="text-xs tracking-widest uppercase text-white/50">{eventConfig.communityPartner}</span>
              </div>

              <div className="flex flex-col gap-1 items-center md:items-end">
                <span className="text-cloud-white font-bold tracking-widest uppercase text-xs">Supporting Partner</span>
                <span className="text-sm font-semibold tracking-wider text-warm-sunlight">{eventConfig.supportingPartner}</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 items-center md:items-end mt-2">
              <span className="text-cloud-white font-bold tracking-widest uppercase mb-1 text-xs">Links</span>
              <a 
                href={eventConfig.venueUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-warm-sunlight transition-colors text-xs tracking-wider uppercase flex items-center gap-1"
              >
                VIEW VENUE ↗
              </a>
              <a 
                href={eventConfig.registrationUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-warm-sunlight transition-colors text-xs tracking-wider uppercase"
              >
                Registration Form ↗
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
