import React, { useState, useEffect } from "react";
import { Cpu, ShieldAlert, Users } from "lucide-react";

interface HeaderProps {
  scrollToWaitlist: () => void;
}

export default function Header({ scrollToWaitlist }: HeaderProps) {
  const [spotsLeft, setSpotsLeft] = useState(57);

  // Slowly decrement spots to simulate high-demand urgency
  useEffect(() => {
    const timer = setInterval(() => {
      setSpotsLeft((prev) => {
        if (prev <= 7) return 7; // cap at 7
        // Small chance to decrement
        return Math.random() > 0.85 ? prev - 1 : prev;
      });
    }, 12000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-charcoal-950/80 backdrop-blur-md border-b border-gold-900/30 px-6 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <div className="relative flex items-center justify-center w-9 h-9 rounded-full border border-gold-500/50 bg-charcoal-900 shadow-[0_0_10px_rgba(212,175,55,0.15)]">
            <span className="font-serif text-lg font-bold text-gold-500 tracking-tighter">C</span>
            <div className="absolute inset-0 rounded-full border border-gold-400/20 animate-ping opacity-25 pointer-events-none" />
          </div>
          <div>
            <span className="font-serif text-xl font-bold text-gold-200 tracking-widest block uppercase text-glow-gold">
              Chronos <span className="text-gold-500 text-sm font-sans font-light align-super">AI</span>
            </span>
          </div>
        </div>

        {/* Status indicator (Urgency) */}
        <div className="hidden md:flex items-center space-x-2 bg-charcoal-900/80 px-4 py-1.5 rounded-full border border-gold-900/30 text-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
          </span>
          <span className="text-gold-200/80 font-medium tracking-wide">
            Batch 1 Allocation: <strong className="text-gold-400 font-bold">{spotsLeft}</strong> units remaining
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button
            onClick={scrollToWaitlist}
            className="group relative px-5 py-2.5 bg-gradient-to-r from-gold-700 to-gold-500 hover:from-gold-600 hover:to-gold-400 text-charcoal-950 font-semibold rounded-sm text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] cursor-pointer"
          >
            <span className="relative z-10">Waitlist</span>
            <div className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>
    </header>
  );
}
