import React from "react";
import { Sparkles, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal-950 border-t border-gold-900/30 px-6 py-12 text-slate-500 text-xs relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Left Side: Brand name and Swiss credit */}
        <div className="flex flex-col items-center md:items-start space-y-1.5 text-center md:text-left">
          <span className="font-serif text-gold-300 font-bold uppercase tracking-widest text-sm">
            CHRONOS <span className="text-[10px] text-gold-500 font-sans font-light align-super">AI</span>
          </span>
          <p className="text-[10px] text-slate-500 font-mono tracking-wider uppercase">
            Designed in Geneva & Silicon Valley
          </p>
        </div>

        {/* Center Section: Core design principles */}
        <div className="flex items-center space-x-1 bg-charcoal-900 px-4 py-2 rounded border border-gold-900/10 text-[10px] font-mono text-gold-500/80 uppercase tracking-widest">
          <Sparkles className="w-3 h-3 text-gold-500 animate-pulse mr-1" />
          <span>The Soul of a Mechanical Watch. The Brain of Advanced AI.</span>
        </div>

        {/* Right Side: Back to Top */}
        <div className="flex flex-col items-center md:items-end space-y-2">
          <button
            onClick={handleScrollTop}
            className="flex items-center space-x-1.5 hover:text-gold-400 transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <span className="text-[10px] text-slate-600 font-sans">
            &copy; {new Date().getFullYear()} Chronos AI. All Rights Reserved.
          </span>
        </div>

      </div>

      {/* Luxury fine print */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gold-900/10 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-600 space-y-3 sm:space-y-0 text-center sm:text-left">
        <p className="max-w-md">
          Disclaimer: Simulated interfaces shown. Final product design, packaging materials, and firmware updates are subject to fine adjustments prior to Batch 1 delivery.
        </p>
        <div className="flex space-x-4">
          <span className="hover:text-gold-500 transition-colors cursor-pointer">Privacy Policy</span>
          <span>&middot;</span>
          <span className="hover:text-gold-500 transition-colors cursor-pointer">Terms of Assembly</span>
          <span>&middot;</span>
          <span className="hover:text-gold-500 transition-colors cursor-pointer">Warranty Certificate</span>
        </div>
      </div>
    </footer>
  );
}
