"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { eventConfig } from "@/config/eventConfig";
import { Plus, Minus } from "lucide-react";

const AccordionItem = ({ title, content, isOpen, onClick }: { title: string, content: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-white/10 overflow-hidden">
      <button 
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-xl font-bold group-hover:text-warm-sunlight transition-colors">{title}</span>
        <div className="text-white/50 group-hover:text-warm-sunlight transition-colors">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="pb-6 text-cloud-white/70 leading-relaxed text-lg">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function RulesAndFAQ() {
  const [openRuleIdx, setOpenRuleIdx] = useState<number | null>(0);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  return (
    <section id="rules" className="py-32 bg-deep-charcoal text-cloud-white">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          
          {/* Rules Column */}
          <div>
            <div className="mb-12">
              <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-warm-sunlight mb-4">
                The Code
              </h2>
              <h3 className="text-4xl font-light">Rules</h3>
            </div>
            <div className="flex flex-col">
              {eventConfig.rules.map((rule, idx) => (
                <AccordionItem 
                  key={idx}
                  title={rule.title}
                  content={rule.content}
                  isOpen={openRuleIdx === idx}
                  onClick={() => setOpenRuleIdx(openRuleIdx === idx ? null : idx)}
                />
              ))}
            </div>
          </div>

          {/* FAQ Column */}
          <div id="faq">
            <div className="mb-12">
              <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-warm-sunlight mb-4">
                Before You Climb
              </h2>
              <h3 className="text-4xl font-light">FAQ</h3>
            </div>
            <div className="flex flex-col">
              {eventConfig.faq.map((item, idx) => (
                <AccordionItem 
                  key={idx}
                  title={item.question}
                  content={item.answer}
                  isOpen={openFaqIdx === idx}
                  onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
