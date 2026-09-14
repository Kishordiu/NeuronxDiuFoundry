"use client";

import { motion } from "framer-motion";

export function AtmosphericFog() {
  return (
    <>
      {/* LAYER 03.5 - ATMOSPHERIC FOG (SLOW MOVING) */}
      <motion.div 
        className="absolute top-[20%] left-0 w-[200%] h-[80%] z-[25] opacity-30 mix-blend-screen pointer-events-none"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1498855926480-d98e83099315?q=80&w=2500&auto=format&fit=crop")',
          backgroundSize: 'cover',
          filter: 'blur(10px) contrast(1.2)',
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
        }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div 
        className="absolute top-[30%] left-0 w-[200%] h-[70%] z-[26] opacity-20 mix-blend-screen pointer-events-none"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1552086780-6060c23933de?q=80&w=2500&auto=format&fit=crop")',
          backgroundSize: 'cover',
          filter: 'blur(15px)',
          maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
        }}
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Base mist layer with vertical fade to blend with mountain peak */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1/2 z-[24] opacity-40 mix-blend-screen pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)',
          filter: 'blur(20px)'
        }}
      />
    </>
  );
}
