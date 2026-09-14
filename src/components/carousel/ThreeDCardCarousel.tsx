"use client";

import { useState, useEffect } from "react";
import { motion, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselCard } from "./CarouselCard";

import { ProblemStatement } from "@/config/problemStatements";

interface ThreeDCardCarouselProps {
  items: ProblemStatement[];
  renderCard?: (item: ProblemStatement, isCenter: boolean) => React.ReactNode;
  onCardClick?: (item: ProblemStatement) => void;
}

export function ThreeDCardCarousel({ items, renderCard, onCardClick }: ThreeDCardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Autoplay
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length, isHovered]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [items.length]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -50) handleNext();
    if (info.offset.x > 50) handlePrev();
  };

  // If we only have 2 items, the circular math looks empty on the sides.
  // We duplicate them to create a full carousel ring for better aesthetics.
  const displayItems = items.length <= 2 ? [...items, ...items, ...items] : items;

  return (
    <div 
      className="relative w-full py-10 flex flex-col items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="relative w-full max-w-sm md:max-w-md h-[450px] flex items-center justify-center"
        style={{ perspective: isMobile ? "1000px" : "1500px" }}
      >
        {displayItems.map((item, index) => {
          // Circular distance calculation
          let dist = index - currentIndex;
          const length = displayItems.length;
          
          if (dist > length / 2) dist -= length;
          if (dist < -length / 2) dist += length;
          
          const isCenter = dist === 0;
          const absDist = Math.abs(dist);

          // Spatial calculations
          const rotateY = dist * -35; 
          const translateX = dist * (isMobile ? 80 : 120); 
          const translateZ = absDist * -120;
          const scale = 1 - absDist * 0.15;
          const opacity = absDist >= 3 ? 0 : 1 - absDist * 0.2;
          const zIndex = 50 - absDist;

          return (
            <motion.div
              key={`${item.id}-${index}`}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              initial={false}
              animate={{
                rotateY,
                x: `${translateX}%`,
                z: translateZ,
                scale,
                opacity,
              }}
              transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.8 }}
              style={{
                position: isCenter ? "relative" : "absolute",
                zIndex,
                transformStyle: "preserve-3d",
              }}
              className="w-full h-full cursor-grab active:cursor-grabbing"
              onClick={() => {
                if (!isCenter) {
                  // If clicking a side card, rotate it to center
                  setCurrentIndex(index % items.length);
                } else if (onCardClick) {
                  onCardClick(item);
                }
              }}
            >
              {renderCard ? renderCard(item, isCenter) : <CarouselCard item={item} isCenter={isCenter} />}
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-6 mt-12 z-50">
        <button 
          onClick={handlePrev}
          aria-label="Previous card"
          className="p-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-cloud-white hover:bg-white/20 hover:text-warm-sunlight transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={handleNext}
          aria-label="Next card"
          className="p-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-cloud-white hover:bg-white/20 hover:text-warm-sunlight transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
