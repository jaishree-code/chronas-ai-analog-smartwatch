import React, { useRef } from "react";
import Header from "./components/Header";
import WatchSimulator from "./components/WatchSimulator";
import WatchEditions from "./components/WatchEditions";
import Features from "./components/Features";
import TechSpecs from "./components/TechSpecs";
import WaitlistForm from "./components/WaitlistForm";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import { Sparkles, ArrowDown, Award, Star, Quote } from "lucide-react";

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const pressQuotes = [
    { text: "A breathtaking triumph of modern horology.", source: "Robb Report", stars: 5 },
    { text: "The first smartwatch that belongs in a luxury boardroom.", source: "Hodinkee", stars: 5 },
    { text: "The sub-glass retina screen feels like pure magic.", source: "GQ Magazine", stars: 5 },
  ];

  return (
    <div className="min-h-screen bg-charcoal-950 font-sans selection:bg-gold-500 selection:text-charcoal-950">
      {/* Top sticky navigation bar */}
      <Header scrollToWaitlist={() => scrollToSection("waitlist")} />

      {/* Main Container */}
      <main className="relative">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-12 pb-24 overflow-hidden">
          {/* Ambient vector gold lights background */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] bg-gold-500/5 rounded-full filter blur-[120px] pointer-events-none" />
          
          <div className="max-w-5xl mx-auto text-center space-y-8 z-10">
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 bg-charcoal-900 px-4 py-2 rounded-full border border-gold-500/30 text-xs font-mono uppercase tracking-widest text-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.08)]">
              <Award className="w-4 h-4 text-gold-500" />
              <span>Unveiling Geneva Edition 2026</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] md:leading-[1.15] max-w-4xl mx-auto">
              The Soul of a Mechanical Watch. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-200 text-glow-gold">
                The Brain of Advanced AI.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl mx-auto text-slate-300 text-sm md:text-lg font-light leading-relaxed">
              A premium, classic analog timepiece featuring a hidden sub-glass retina module for real-time AI voice translation and assistance.
            </p>

            {/* Primary Action Button */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <button
                onClick={() => scrollToSection("waitlist")}
                className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-charcoal-950 font-bold rounded-sm text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_35px_rgba(212,175,55,0.45)] cursor-pointer"
              >
                Join the Exclusive Waitlist
                <div className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button
                onClick={() => scrollToSection("product-concept")}
                className="flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-4 bg-charcoal-900 hover:bg-charcoal-800 text-gold-200 hover:text-white rounded-sm text-sm font-semibold tracking-widest uppercase border border-gold-900/30 hover:border-gold-500/40 transition-all duration-300 cursor-pointer"
              >
                <span>Explore Design</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>
            </div>
          </div>
        </section>

        {/* PRESS AND CRITICS BENCHMARK (Testimonial section for depth & prestige) */}
        <section className="bg-charcoal-950 border-y border-gold-900/10 py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pressQuotes.map((quote, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center p-6 bg-charcoal-900/30 rounded border border-gold-900/5 hover:border-gold-500/10 transition-colors"
                >
                  <div className="flex space-x-0.5 mb-3">
                    {[...Array(quote.stars)].map((_, sIdx) => (
                      <Star key={sIdx} className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <p className="text-slate-400 text-xs md:text-sm italic font-light leading-relaxed mb-3">
                    "{quote.text}"
                  </p>
                  <span className="text-[10px] font-serif tracking-widest text-gold-500 uppercase font-semibold">
                    — {quote.source}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCT IMAGE SECTION (Interactive Simulator component) */}
        <WatchSimulator />

        {/* WATCH EDITIONS GALLERY SECTION */}
        <WatchEditions />

        {/* KEY FEATURES MATRIX */}
        <Features />

        {/* TECHNICAL SPECIFICATIONS ACCORDION/GRID */}
        <TechSpecs />

        {/* WAITLIST SIGNUP COMPONENT */}
        <WaitlistForm />

        {/* FREQUENTLY ANSWERED QUESTIONS */}
        <Faq />

      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
