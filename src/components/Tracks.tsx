"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ThreeDCardCarousel } from "./carousel/ThreeDCardCarousel";
import { problemStatements, ProblemStatement } from "@/config/problemStatements";
import { ProblemDetailModal } from "./carousel/ProblemDetailModal";

export default function Tracks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProblem, setSelectedProblem] = useState<ProblemStatement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <>
      <section
        id="tracks"
        ref={containerRef}
        className="relative w-full py-32 bg-mountain-slate text-cloud-white overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?q=80&w=2500&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"
          style={{ y: yBg }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-warm-sunlight mb-4">
              Choose Your Terrain
            </h2>
            <h3 className="text-4xl md:text-6xl font-light text-cloud-white">
              Hackathon Tracks
            </h3>
          </div>

          <ThreeDCardCarousel 
            items={problemStatements} 
            onCardClick={(item) => setSelectedProblem(item)} 
          />
        </div>
      </section>

      <ProblemDetailModal 
        problem={selectedProblem} 
        onClose={() => setSelectedProblem(null)} 
      />
    </>
  );
}
