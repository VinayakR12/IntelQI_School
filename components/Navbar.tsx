"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  const links = ["Product", "Solutions", "About", "Customers", "Pricing", "Resources"];
  
  return (
    <nav 
      className="iq-nav sticky top-0 z-50 transition-all duration-300"
      style={{ 
        background: scrolled ? "rgba(255,255,255,.85)" : "rgba(255,255,255,.6)", 
        borderBottom: scrolled ? "1px solid var(--iq-border)" : "1px solid transparent",
        backdropFilter: "saturate(180%) blur(14px)",
        WebkitBackdropFilter: "saturate(180%) blur(14px)"
      }}
    >
      <div className="iq-container flex items-center justify-between" style={{ height: 68 }}>
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "var(--iq-brand)" }}>
            <GraduationCap size={20} color="#fff" />
          </div>
          <span className="iq-display font-semibold text-[20px]">intelQI</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href="#" className="iq-nav-link text-sm font-medium opacity-85 hover:opacity-100 hover:text-[var(--iq-brand)] transition-all">
              {l}
            </a>
          ))}
        </div>
        
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="iq-nav-link text-sm font-medium opacity-85 hover:opacity-100">Sign in</a>
          <a href="#" className="iq-btn iq-btn-brand">
            Book Demo <ArrowRight size={14} />
          </a>
        </div>
        
        <button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: "auto", opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            className="md:hidden overflow-hidden border-t"
            style={{ borderColor: "var(--iq-border)", background: "#fff" }}
          >
            <div className="iq-container py-4 flex flex-col gap-3">
              {links.map(l => (
                <a key={l} href="#" className="iq-nav-link py-2 text-sm font-medium">
                  {l}
                </a>
              ))}
              <a href="#" className="iq-btn iq-btn-brand justify-center mt-2">
                Book Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;