"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { eventConfig } from "@/config/eventConfig";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Tracks", href: "#tracks" },
  { name: "Timeline", href: "#timeline" },
  { name: "Prizes", href: "#prizes" },
  { name: "Rules", href: "#rules" },
  { name: "FAQ", href: "#faq" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div 
            className={`flex items-center justify-between transition-all duration-500 rounded-2xl ${
              isScrolled 
                ? "glass-panel px-6 py-3" 
                : "bg-transparent px-2 py-2"
            }`}
          >
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 z-50 h-8">
              <img 
                src="/assets/neuro-x-mind-logo.jpg" 
                alt={eventConfig.organization} 
                className="h-full w-auto object-contain mix-blend-screen opacity-90"
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex gap-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    data-cursor-text="GO"
                    className="text-sm uppercase tracking-wider text-cloud-white/80 hover:text-white transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-warm-sunlight transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>
              <a 
                href={eventConfig.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="ENTER"
                className="px-5 py-2 text-sm font-bold uppercase tracking-wider text-deep-charcoal bg-cloud-white rounded-full hover:bg-warm-sunlight transition-colors"
              >
                Register
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-cloud-white z-50 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[90] bg-deep-charcoal/80 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8 w-full px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  className="text-3xl font-light tracking-widest text-cloud-white"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href={eventConfig.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * navLinks.length, duration: 0.4 }}
                className="mt-8 px-12 py-4 bg-cloud-white text-deep-charcoal text-lg font-bold uppercase tracking-widest rounded-full w-full text-center"
              >
                Register Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
