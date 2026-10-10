import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Mic, Volume2, Globe, Cpu, Calendar, ShieldCheck, HeartPulse } from "lucide-react";
// @ts-ignore
import watchImage from "../assets/images/chronos_watch_mockup_1784635681215.jpg";

interface TranslationSample {
  original: string;
  lang: string;
  translated: string;
}

const TRANSLATION_SAMPLES: TranslationSample[] = [
  { original: "¿Dónde está la galería de arte más cercana?", lang: "Spanish", translated: "Where is the nearest art gallery?" },
  { original: "Merci beaucoup pour votre hospitalité ce soir.", lang: "French", translated: "Thank you very much for your hospitality tonight." },
  { original: "この腕時計は本当に美しいですね。", lang: "Japanese", translated: "This wristwatch is truly beautiful, isn't it?" },
  { original: "Wie spät ist es bei unserem nächsten Meeting?", lang: "German", translated: "What time is it for our next meeting?" },
];

export default function WatchSimulator() {
  const [selectedMode, setSelectedMode] = useState<"hidden" | "interpreter" | "gemini" | "health">("hidden");
  const [selectedPhraseIndex, setSelectedPhraseIndex] = useState(0);
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationStep, setTranslationStep] = useState<"idle" | "listening" | "original" | "translated">("idle");
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [hours, setHours] = useState(new Date().getHours());

  // Keep a ticking analog clock rotation state (for mechanical hands overlay)
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setSeconds(now.getSeconds());
      setMinutes(now.getMinutes());
      setHours(now.getHours());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const triggerTranslation = () => {
    if (isTranslating) return;
    setIsTranslating(true);
    setTranslationStep("listening");

    // Phase 1: Listening
    setTimeout(() => {
      setTranslationStep("original");
      // Phase 2: Show original text
      setTimeout(() => {
        setTranslationStep("translated");
        // Phase 3: Show translation
        setTimeout(() => {
          setIsTranslating(false);
        }, 4000);
      }, 2500);
    }, 2000);
  };

  // When changing mode, stop any ongoing translation
  useEffect(() => {
    setIsTranslating(false);
    setTranslationStep("idle");
  }, [selectedMode]);

  // Analog hands angles calculation
  const secAngle = seconds * 6;
  const minAngle = minutes * 6 + seconds * 0.1;
  const hrAngle = (hours % 12) * 30 + minutes * 0.5;

  return (
    <div id="product-concept" className="py-20 bg-charcoal-900 border-y border-gold-900/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-serif text-sm tracking-widest text-gold-400 uppercase block mb-3">Interactive Showcase</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Experience the <span className="text-glow-gold text-gold-400">Chronos Dial</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm md:text-base font-light">
            Toggle between standard elegance and advanced intelligence. Our patented Sub-Glass Retina display material
            glows cleanly through the physical watch face dial on demand.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Watch Mockup Visual Container (Product Image Section) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border border-gold-500/30 shadow-glow-gold bg-charcoal-950 p-3 group">
              
              {/* Inner bezel framing the watch */}
              <div className="absolute inset-0 border-[6px] border-charcoal-700 rounded-3xl pointer-events-none z-10" />
              
              {/* Gold luxury accents inside card corners */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold-400 opacity-60 pointer-events-none z-10" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold-400 opacity-60 pointer-events-none z-10" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold-400 opacity-60 pointer-events-none z-10" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold-400 opacity-60 pointer-events-none z-10" />

              {/* The primary luxury mockup image */}
              <img
                src={watchImage}
                alt="Chronos AI luxury hybrid smartwatch design on wrist"
                className="w-full h-full object-cover rounded-2xl opacity-75 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                referrerPolicy="no-referrer"
              />

              {/* OVERLAY: Interactive Sub-Glass Digital Retina display simulation */}
              <div className="absolute inset-0 flex items-center justify-center rounded-2xl pointer-events-none">
                <div className="relative w-[58%] h-[58%] rounded-full bg-black/40 backdrop-blur-[1px] flex flex-col items-center justify-center p-4 border border-gold-900/20 shadow-inner z-20 overflow-hidden">
                  
                  {/* Subtle ticking seconds ring behind hands */}
                  <div className="absolute inset-0 rounded-full border border-gold-500/5 opacity-10 animate-spin" style={{ animationDuration: '60s' }} />

                  {/* DIGITAL MODES (Underneath the physical hands simulation) */}
                  <AnimatePresence mode="wait">
                    {selectedMode === "hidden" && (
                      <motion.div
                        key="hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center"
                      >
                        {/* Empty/Classic Analog Watch Screen */}
                        <div className="text-[10px] tracking-widest font-serif text-gold-400/35 uppercase">Chronos AI</div>
                        <div className="text-[8px] tracking-wide text-slate-500/40 uppercase mt-1">Swiss Movement</div>
                      </motion.div>
                    )}

                    {selectedMode === "interpreter" && (
                      <motion.div
                        key="interpreter"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="w-full text-center flex flex-col items-center justify-center"
                      >
                        <Globe className="w-4 h-4 text-gold-400 mb-1 animate-pulse" />
                        <div className="text-[9px] uppercase tracking-widest text-gold-400 font-semibold mb-0.5">Interpreter</div>
                        
                        {/* Interactive text states */}
                        <div className="h-10 flex items-center justify-center px-1">
                          {translationStep === "idle" && (
                            <span className="text-[8px] text-slate-400/80 italic">Tap "Begin Translation" below</span>
                          )}
                          {translationStep === "listening" && (
                            <div className="flex flex-col items-center">
                              <span className="text-[8px] text-gold-300 font-mono animate-pulse">LISTENING...</span>
                              <div className="flex space-x-0.5 mt-0.5">
                                <span className="w-0.5 h-1.5 bg-gold-400 animate-bounce" style={{ animationDelay: '0.1s' }} />
                                <span className="w-0.5 h-2.5 bg-gold-400 animate-bounce" style={{ animationDelay: '0.3s' }} />
                                <span className="w-0.5 h-1.5 bg-gold-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
                              </div>
                            </div>
                          )}
                          {translationStep === "original" && (
                            <span className="text-[8.5px] font-mono leading-tight text-gold-100 font-light truncate w-full max-w-[120px] block">
                              "{TRANSLATION_SAMPLES[selectedPhraseIndex].original}"
                            </span>
                          )}
                          {translationStep === "translated" && (
                            <span className="text-[9px] font-mono leading-tight text-gold-400 text-glow-gold font-semibold uppercase block animate-fade-in px-0.5">
                              {TRANSLATION_SAMPLES[selectedPhraseIndex].translated}
                            </span>
                          )}
                        </div>
                      </motion.div>
                    )}

                    {selectedMode === "gemini" && (
                      <motion.div
                        key="gemini"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-center flex flex-col items-center justify-center w-full"
                      >
                        <Sparkles className="w-4 h-4 text-gold-400 mb-1 animate-pulse" />
                        <div className="text-[8px] tracking-wider text-slate-400/70 uppercase">Chronos Voice</div>
                        <div className="text-[9.5px] font-mono text-gold-200 text-glow-gold font-medium mt-1 leading-tight px-2">
                          "Next: Design Review at 2:30 PM"
                        </div>
                        <span className="text-[7.5px] text-gold-500/80 mt-1 uppercase tracking-widest font-mono">Crown Held</span>
                      </motion.div>
                    )}

                    {selectedMode === "health" && (
                      <motion.div
                        key="health"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="text-center flex flex-col items-center justify-center"
                      >
                        <HeartPulse className="w-4 h-4 text-rose-500 mb-1 animate-pulse" style={{ animationDuration: '0.8s' }} />
                        <div className="text-[8px] tracking-widest text-slate-400/80 uppercase">Vitals Core</div>
                        <div className="flex items-baseline space-x-1 mt-0.5">
                          <span className="text-sm font-mono font-bold text-gold-400 text-glow-gold">74</span>
                          <span className="text-[7px] text-slate-400 uppercase font-light">BPM</span>
                        </div>
                        <div className="text-[7px] text-emerald-400 font-mono uppercase mt-0.5">Stress: Optimal</div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* MECHANICAL HANDS OVERLAY (Classic watches keep physical gold hands) */}
                  <div className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center">
                    {/* Dial Center Pin */}
                    <div className="w-2 h-2 rounded-full bg-gold-400 border border-gold-950 z-40" />

                    {/* Hour Hand */}
                    <div
                      className="absolute w-1 h-11 bg-gradient-to-t from-gold-500 to-gold-300 rounded-full origin-bottom"
                      style={{
                        transform: `rotate(${hrAngle}deg) translateY(-22px)`,
                        transition: "transform 0.5s ease-in-out",
                      }}
                    />

                    {/* Minute Hand */}
                    <div
                      className="absolute w-0.5 h-16 bg-gradient-to-t from-gold-400 to-gold-200 rounded-full origin-bottom"
                      style={{
                        transform: `rotate(${minAngle}deg) translateY(-32px)`,
                        transition: "transform 0.5s ease-in-out",
                      }}
                    />

                    {/* Sweep Second Hand */}
                    <div
                      className="absolute w-[1px] h-18 bg-gold-500 origin-bottom"
                      style={{
                        transform: `rotate(${secAngle}deg) translateY(-36px)`,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* "Chronos AI Watch Concept" Label Container (Requested) */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 bg-charcoal-950/90 px-4 py-1.5 rounded-full border border-gold-500/30 shadow-glow-gold text-center">
                <span className="text-[10px] tracking-widest font-semibold uppercase text-gold-400 block font-serif">
                  Chronos AI Watch Concept
                </span>
                <span className="text-[8px] text-slate-400 block uppercase font-mono tracking-widest mt-0.5">
                  Hidden Retina Dial Simulation
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interaction Controls */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div>
              <span className="text-gold-500 font-mono text-xs uppercase tracking-widest">Patented Fusion</span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mt-1 mb-3">
                Select Your Watch Mode
              </h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Click a configuration below to dynamically transform the sub-glass digital micro-retina dial. Watch how physical mechanical hands and digital AI assistance unify beautifully.
              </p>
            </div>

            {/* Mode Selectors */}
            <div className="grid grid-cols-1 gap-3">
              {/* Mode 1 */}
              <button
                onClick={() => setSelectedMode("hidden")}
                className={`flex items-start p-4 rounded-lg border text-left transition-all duration-300 cursor-pointer ${
                  selectedMode === "hidden"
                    ? "bg-charcoal-800 border-gold-500/50 shadow-[0_0_15px_rgba(212,175,55,0.05)]"
                    : "bg-charcoal-900/40 border-slate-800/80 hover:bg-charcoal-800/50 hover:border-gold-500/20"
                }`}
              >
                <div className={`p-2 rounded-full mr-4 ${selectedMode === "hidden" ? "bg-gold-500 text-charcoal-950" : "bg-charcoal-700 text-gold-500"}`}>
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-white tracking-wide">Analog Discretion (Default)</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    The smart digital module remains completely invisible behind the obsidian watch dial, showcasing only pure Swiss physical mechanics.
                  </p>
                </div>
              </button>

              {/* Mode 2 */}
              <button
                onClick={() => setSelectedMode("interpreter")}
                className={`flex items-start p-4 rounded-lg border text-left transition-all duration-300 cursor-pointer ${
                  selectedMode === "interpreter"
                    ? "bg-charcoal-800 border-gold-500/50 shadow-[0_0_15px_rgba(212,175,55,0.05)]"
                    : "bg-charcoal-900/40 border-slate-800/80 hover:bg-charcoal-800/50 hover:border-gold-500/20"
                }`}
              >
                <div className={`p-2 rounded-full mr-4 ${selectedMode === "interpreter" ? "bg-gold-500 text-charcoal-950" : "bg-charcoal-700 text-gold-500"}`}>
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-white tracking-wide">Real-Time Interpreter</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Instantly translates foreign speech directly onto your watch dial. Test the interpreter using the controller panel below.
                  </p>
                </div>
              </button>

              {/* Mode 3 */}
              <button
                onClick={() => setSelectedMode("gemini")}
                className={`flex items-start p-4 rounded-lg border text-left transition-all duration-300 cursor-pointer ${
                  selectedMode === "gemini"
                    ? "bg-charcoal-800 border-gold-500/50 shadow-[0_0_15px_rgba(212,175,55,0.05)]"
                    : "bg-charcoal-900/40 border-slate-800/80 hover:bg-charcoal-800/50 hover:border-gold-500/20"
                }`}
              >
                <div className={`p-2 rounded-full mr-4 ${selectedMode === "gemini" ? "bg-gold-500 text-charcoal-950" : "bg-charcoal-700 text-gold-500"}`}>
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-white tracking-wide">Gemini Voice Assistant</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Hold the gold physical crown to invoke Gemini. Real-time calendar synchronization and agenda warnings appear behind the mechanical hands.
                  </p>
                </div>
              </button>

              {/* Mode 4 */}
              <button
                onClick={() => setSelectedMode("health")}
                className={`flex items-start p-4 rounded-lg border text-left transition-all duration-300 cursor-pointer ${
                  selectedMode === "health"
                    ? "bg-charcoal-800 border-gold-500/50 shadow-[0_0_15px_rgba(212,175,55,0.05)]"
                    : "bg-charcoal-900/40 border-slate-800/80 hover:bg-charcoal-800/50 hover:border-gold-500/20"
                }`}
              >
                <div className={`p-2 rounded-full mr-4 ${selectedMode === "health" ? "bg-gold-500 text-charcoal-950" : "bg-charcoal-700 text-gold-500"}`}>
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-white tracking-wide">Vitals Core Sensors</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Displays luxury wellness tracking, heart rhythm variations, and dynamic stress calculations via the sub-glass lens when selected.
                  </p>
                </div>
              </button>
            </div>

            {/* Simulated Interpreter Command Console */}
            {selectedMode === "interpreter" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-charcoal-950 p-5 rounded-lg border border-gold-900/40"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-gold-400 tracking-wider uppercase flex items-center">
                    <Mic className="w-3.5 h-3.5 mr-1 text-gold-500 animate-pulse" /> Live Interpreter Controller
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">V.2.0-ALGORITHMS</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-[11px] text-slate-400 uppercase tracking-widest mb-1.5 font-medium">
                      Select Input Language Phrase
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {TRANSLATION_SAMPLES.map((sample, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setSelectedPhraseIndex(idx);
                            setIsTranslating(false);
                            setTranslationStep("idle");
                          }}
                          className={`px-3 py-2 rounded text-xs border text-left truncate transition-all cursor-pointer ${
                            selectedPhraseIndex === idx
                              ? "bg-gold-950/40 border-gold-500/60 text-gold-200"
                              : "bg-charcoal-900 border-slate-800 hover:border-gold-500/25 text-slate-400"
                          }`}
                        >
                          <span className="block font-semibold text-[10px] text-gold-400 tracking-wider uppercase mb-0.5">
                            {sample.lang}
                          </span>
                          <span className="text-[11px] italic font-mono block truncate">"{sample.original}"</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={triggerTranslation}
                    disabled={isTranslating}
                    className={`w-full py-2.5 rounded text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center cursor-pointer ${
                      isTranslating
                        ? "bg-charcoal-800 text-slate-500 border border-slate-700 cursor-not-allowed"
                        : "bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-charcoal-950 shadow-md hover:shadow-glow-gold"
                    }`}
                  >
                    {isTranslating ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Simulating Real-Time Translation...
                      </span>
                    ) : (
                      "Trigger Translator on Wrist"
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
