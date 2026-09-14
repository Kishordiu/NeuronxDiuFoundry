import { ProblemStatement } from "@/config/problemStatements";
import { ArrowUpRight } from "lucide-react";

export function CarouselCard({ item, isCenter }: { item: ProblemStatement; isCenter: boolean }) {
  const Icon = item.icon;
  return (
    <div 
      className={`relative w-full h-full rounded-[2rem] overflow-hidden glass-panel-light flex flex-col justify-end transition-all duration-500 shadow-2xl ${
        isCenter ? "shadow-[0_30px_60px_rgba(0,0,0,0.6)] border-white/20" : "shadow-[0_15px_30px_rgba(0,0,0,0.4)] border-white/5 opacity-80"
      }`}
    >
      {/* Background Motif */}
      <div 
        className={`absolute inset-0 opacity-20 bg-gradient-to-tr ${item.accentMetadata} transition-opacity duration-700 ${isCenter ? "opacity-40" : ""}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal via-deep-charcoal/80 to-transparent" />
      
      {/* Floating Content */}
      <div className="relative z-10 p-8 flex flex-col h-full justify-between">
        <div className="flex items-center gap-3 bg-white/10 w-fit px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
          <Icon size={16} className="text-cloud-white" />
          <span className="text-xs font-bold tracking-widest text-cloud-white uppercase">
            {item.domain}
          </span>
        </div>

        <div className="flex flex-col">
          <h4 className="text-2xl md:text-3xl font-bold mb-3 text-cloud-white drop-shadow-md leading-tight">
            {item.title}
          </h4>
          <p className="text-cloud-white/80 text-sm mb-6 leading-relaxed line-clamp-2">
            {item.context}
          </p>
          
          <div className={`transition-all duration-500 ${isCenter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cloud-white text-deep-charcoal font-bold text-xs uppercase tracking-widest shadow-xl cursor-pointer hover:scale-105 active:scale-95 transition-transform">
              VIEW PROBLEM <ArrowUpRight size={14} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
