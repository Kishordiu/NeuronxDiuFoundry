"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ThreeDCardCarousel } from "./carousel/ThreeDCardCarousel";
import { problemStatements, ProblemStatement } from "@/config/problemStatements";
import { ProblemDetailModal } from "./carousel/ProblemDetailModal";
import { Lock } from "lucide-react";

import { eventConfig } from "@/config/eventConfig";

/**
 * When problems are locked, strip all sensitive content from the items
 * so none of it ships to the client. Only keep the minimal fields
 * needed to render locked placeholder cards.
 */
function getSanitizedItems(): ProblemStatement[] {
  if (eventConfig.problemStatementsRevealed) {
    return problemStatements;
  }
  // Return redacted placeholders — same length so carousel geometry works,
  // but no titles, context, requirements, or judging details.
  return problemStatements.map((ps, idx) => ({
    id: `locked-${idx}`,
    domain: "LOCKED",
    title: `Problem Statement ${String(idx + 1).padStart(2, "0")}`,
    context: "",
    whatWeWantToBuild: [],
    groundRules: [],
    judging: [],
    icon: Lock,
    accentMetadata: ps.accentMetadata, // safe — only a CSS gradient class
  }));
}

export default function Tracks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProblem, setSelectedProblem] = useState<ProblemStatement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const displayItems = getSanitizedItems();

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
            <h3 className="text-4xl md:text-6xl font-light text-cloud-white mb-4">
              Hackathon Tracks
            </h3>
            <p className="text-sm md:text-base text-cloud-white/70 max-w-xl mx-auto tracking-wide">
              {eventConfig.problemStatementsRevealed
                ? "Select a track to view full problem context, requirements, and judging criteria."
                : eventConfig.problemStatementReleaseText}
            </p>
          </div>

          <ThreeDCardCarousel 
            items={displayItems} 
            onCardClick={(item) => {
              if (eventConfig.problemStatementsRevealed) {
                setSelectedProblem(item);
              }
            }} 
          />
        </div>
      </section>

      {eventConfig.problemStatementsRevealed && (
        <ProblemDetailModal 
          problem={selectedProblem} 
          onClose={() => setSelectedProblem(null)} 
        />
      )}
    </>
  );
}
