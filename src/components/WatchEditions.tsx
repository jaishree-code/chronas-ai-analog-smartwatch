import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Droplets,
  Cpu,
  Maximize2,
  Check,
  Sparkles,
  Shield,
  Battery,
  Heart,
  Languages,
  Activity,
  X,
  ArrowRight,
  Compass,
} from "lucide-react";
// @ts-ignore
import roseGoldImg from "../assets/images/rose_gold_dial_1791655781975.jpg";
// @ts-ignore
import titaniumSportImg from "../assets/images/titanium_dial_1791655791108.jpg";
// @ts-ignore
import obsidianImg from "../assets/images/obsidian_dial_1791655822043.jpg";

interface WatchEdition {
  id: string;
  tag: string;
  name: string;
  editionNumber: string;
  price: string;
  caseMaterial: string;
  strap: string;
  glass: string;
  waterResistance: string;
  batteryLife: string;
  description: string;
  image: string;
  inbuiltAiFeature: {
    title: string;
    badge: string;
    summary: string;
    metrics: string[];
    hardwareTech: string;
  };
}

export default function WatchEditions() {
  const [inspectingWatch, setInspectingWatch] = useState<WatchEdition | null>(null);

  const editions: WatchEdition[] = [
    {
      id: "rose-gold",
      tag: "Heritage Edition",
      name: "Chronos Rose Gold",
      editionNumber: "Edition 01 of 03",
      price: "$1,450",
      caseMaterial: "18K Rose Gold Finished 316L Stainless Steel (41mm)",
      strap: "Hand-Stitched Cognac Italian Calfskin Leather",
      glass: "Curved Double-Domed Anti-Reflective Sapphire Crystal",
      waterResistance: "5ATM (50m / 165ft) Marine Grade Water Resistance",
      batteryLife: "30-Day Analog Movement / 7-Day Active AI OLED",
      description:
        "Classic horology meets discreet intelligence. A warm champagne guilloché dial with gold Roman numerals houses our patented micro-OLED circular sub-dial at 6 o'clock.",
      image: roseGoldImg,
      inbuiltAiFeature: {
        title: "Sub-Glass AI Vitals & Activity Sub-Dial",
        badge: "Inbuilt Micro-OLED",
        summary:
          "Seamlessly integrated at 6 o'clock, the circular OLED displays continuous biometric vitals (74 BPM), pedometer telemetry (8,420 steps), and AI recovery scores without cluttering the classic dial face.",
        metrics: [
          "Real-Time PPG Heart Rate & HRV Tracking",
          "AI Pedometer & Daily Activity Target Tracker",
          "Sub-Glass Luminescent Amber Typography",
          "Automated Low-Light Ambient Dimming",
        ],
        hardwareTech: "0.85-inch Circular Micro-OLED (400 ppi) layered beneath semi-translucent guilloché sapphire.",
      },
    },
    {
      id: "titanium-sport",
      tag: "Field Edition",
      name: "Chronos Titanium Sport",
      editionNumber: "Edition 02 of 03",
      price: "$1,280",
      caseMaterial: "Aerospace Grade 5 Brushed Titanium Bezel & Chassis (42mm)",
      strap: "High-Tensile Woven Charcoal Ballistic Tactical Strap",
      glass: "Scratchproof Flat Sapphire with Diamond Hydrophobic Coating",
      waterResistance: "5ATM (50m / 165ft) Reinforced Pressure Sealed",
      batteryLife: "45-Day Analog Movement / 10-Day Sport Tracking",
      description:
        "Engineered for tactical endurance and outdoor expeditions. Lightweight brushed titanium with high-contrast luminous markers and an integrated horizontal sapphire OLED telemetry hub.",
      image: titaniumSportImg,
      inbuiltAiFeature: {
        title: "Inbuilt Tactical Telemetry & GPS Hub",
        badge: "Integrated HUD Screen",
        summary:
          "Positioned directly into the lower textured dial, the ultra-crisp ice-white OLED provides instant mission telemetry: exact digital sync (10:10), active heart rate (84 BPM), step tracking (12,450 steps), and battery state (88%).",
        metrics: [
          "Luminous High-Contrast High-Sunlight Visibility",
          "Dual-Band Altimeter, Barometer & GPS Sync",
          "Active Workout Telemetry & Cadence Logging",
          "Smart Power Distribution: 88% Battery Efficiency",
        ],
        hardwareTech: "Curved Ultra-Thin OLED Band embedded in slate dial with matte anti-glare etching.",
      },
    },
    {
      id: "obsidian-stealth",
      tag: "Stealth Edition",
      name: "Chronos Obsidian",
      editionNumber: "Edition 03 of 03",
      price: "$1,390",
      caseMaterial: "Matte Black PVD / Diamond-Like Carbon (DLC) Steel (41.5mm)",
      strap: "Ultra-Matte Obsidian Black Leather with Deployant Clasp",
      glass: "Smoked Edge Anti-Fingerprint Sapphire Crystal",
      waterResistance: "5ATM (50m / 165ft) Complete Sealing",
      batteryLife: "30-Day Analog Movement / 8-Day Live Interpreter",
      description:
        "The pinnacle of stealth minimalism. Matte black chassis with subtle gold mechanical hands, featuring a built-in curved translation window that listens and translates international speech in real-time.",
      image: obsidianImg,
      inbuiltAiFeature: {
        title: "Inbuilt Real-Time AI Speech Translation Dial",
        badge: "Live Audio HUD",
        summary:
          "Integrated into the lower curvature of the stealth dial at 6 o'clock, this dedicated AI neural display streams live speech translation (e.g. Spanish ➔ English) alongside an active acoustic audio waveform.",
        metrics: [
          "Dual Noise-Cancelling Beamforming Microphones",
          "Instant On-Device Neural Translation Matrix",
          "Real-Time Waveform Voice Activity Visualization",
          "Haptic Feedback on Detected Speech Confirmation",
        ],
        hardwareTech: "Conformal Curved Micro-OLED with stealth gold phosphor emissive pixels.",
      },
    },
  ];

  const handleReserve = (watchName: string) => {
    setInspectingWatch(null);
    const element = document.getElementById("waitlist");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="editions" className="py-24 bg-charcoal-950 px-6 relative border-t border-gold-900/10">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-gold-500/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-950/40 border border-gold-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="font-mono text-xs uppercase tracking-widest text-gold-400 font-semibold">
              The 3 Chronos Editions
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Horological Craft. <span className="text-glow-gold text-gold-400">Inbuilt Intelligence.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm md:text-base font-light">
            Every edition combines genuine physical mechanical hands and Swiss calibre engineering with our
            sub-glass micro-OLED displays built directly into the dial.
          </p>
        </div>

        {/* 3 Watches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {editions.map((edition) => (
            <div
              key={edition.id}
              className="bg-charcoal-900/90 rounded-2xl overflow-hidden border border-gold-900/20 hover:border-gold-500/40 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(212,175,55,0.08)] flex flex-col group"
            >
              {/* Image Container with Integrated Badge & Action */}
              <div className="relative aspect-square w-full overflow-hidden bg-charcoal-950">
                <img
                  src={edition.image}
                  alt={`${edition.name} showing inbuilt AI digital dial display`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* 5ATM Waterproof Badge */}
                <div className="absolute top-4 left-4 bg-charcoal-950/90 backdrop-blur-md px-3 py-1 rounded-full border border-gold-500/30 flex items-center space-x-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.6)] z-20">
                  <Droplets className="w-3 h-3 text-gold-400" />
                  <span className="text-[9px] font-mono tracking-wider font-semibold text-gold-300 uppercase">
                    5ATM WATERPROOF
                  </span>
                </div>

                {/* Inspect Dial Button */}
                <button
                  onClick={() => setInspectingWatch(edition)}
                  className="absolute bottom-4 right-4 bg-charcoal-950/90 hover:bg-gold-500 hover:text-charcoal-950 text-gold-300 backdrop-blur-md px-3 py-1.5 rounded-full border border-gold-500/30 hover:border-gold-400 transition-all duration-300 flex items-center space-x-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.6)] cursor-pointer text-xs font-mono font-medium z-20 group-hover:translate-y-0"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>Inspect Dial</span>
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow space-y-6">
                <div className="space-y-4">
                  {/* Top Meta */}
                  <div className="flex items-center justify-between border-b border-gold-900/15 pb-3">
                    <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase font-semibold">
                      {edition.tag}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                      {edition.editionNumber}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                      {edition.name}
                    </h3>
                    <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed mt-2">
                      {edition.description}
                    </p>
                  </div>

                  {/* Inbuilt AI Feature Callout Box */}
                  <div className="bg-charcoal-950/80 rounded-xl p-4 border border-gold-900/25 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1.5 text-xs font-mono font-semibold text-gold-300">
                        <Cpu className="w-3.5 h-3.5 text-gold-400" />
                        <span>{edition.inbuiltAiFeature.title}</span>
                      </div>
                      <span className="text-[8.5px] font-mono uppercase px-2 py-0.5 rounded bg-gold-950/80 border border-gold-500/25 text-gold-400 font-semibold">
                        {edition.inbuiltAiFeature.badge}
                      </span>
                    </div>

                    <p className="text-slate-300 text-xs font-light leading-relaxed">
                      {edition.inbuiltAiFeature.summary}
                    </p>

                    {/* Quick Metric Pills */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gold-900/15">
                      <div className="text-[11px] text-slate-400 font-mono flex items-center space-x-1.5">
                        <Battery className="w-3 h-3 text-gold-400/80 flex-shrink-0" />
                        <span className="truncate">{edition.batteryLife.split("/")[0]}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono flex items-center space-x-1.5">
                        <Shield className="w-3 h-3 text-gold-400/80 flex-shrink-0" />
                        <span className="truncate">50M Dive Sealed</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Area */}
                <div className="pt-4 border-t border-gold-900/15 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">Starting Allocation</span>
                    <span className="text-lg font-serif font-bold text-gold-300">{edition.price}</span>
                  </div>

                  <button
                    onClick={() => handleReserve(edition.name)}
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-gold-500/10 hover:bg-gold-500 text-gold-300 hover:text-charcoal-950 border border-gold-500/30 hover:border-gold-400 transition-all duration-300 text-xs font-semibold tracking-wider font-mono uppercase cursor-pointer"
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Horology Guarantee Note */}
        <div className="mt-16 bg-charcoal-900/40 rounded-xl p-6 border border-gold-900/15 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/25 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white tracking-wide">
                True Mechanical Hybrid Craftsmanship
              </h4>
              <p className="text-xs text-slate-400 font-light mt-0.5">
                Every dial features genuine physical mechanical hands that never turn off, driven by high-precision Swiss movement alongside the embedded micro-OLED.
              </p>
            </div>
          </div>
          <a
            href="#specs"
            className="text-xs font-mono uppercase tracking-widest text-gold-400 hover:text-gold-300 flex items-center space-x-1 whitespace-nowrap"
          >
            <span>View Technical Specifications</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* INSPECT DIAL MODAL */}
      <AnimatePresence>
        {inspectingWatch && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-charcoal-900 border border-gold-500/40 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative max-h-[92vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-5 border-b border-gold-900/20 flex items-center justify-between bg-charcoal-950/80">
                <div className="flex items-center space-x-3">
                  <div className="px-2.5 py-1 rounded bg-gold-950 border border-gold-500/30 text-[10px] font-mono uppercase tracking-widest text-gold-400 font-semibold">
                    {inspectingWatch.tag}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                    {inspectingWatch.name} — Dial Inspector
                  </h3>
                </div>
                <button
                  onClick={() => setInspectingWatch(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-charcoal-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="overflow-y-auto p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Watch Macro View */}
                <div className="md:col-span-6 relative aspect-square rounded-xl overflow-hidden bg-charcoal-950 border border-gold-500/25 shadow-xl">
                  <img
                    src={inspectingWatch.image}
                    alt={inspectingWatch.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 bg-charcoal-950/90 backdrop-blur px-3 py-1 rounded-full border border-gold-500/30 text-[10px] font-mono text-gold-300">
                    High-Res Macro Dial View
                  </div>
                </div>

                {/* Detailed Dial Architecture Specs */}
                <div className="md:col-span-6 space-y-5">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-gold-400 font-semibold block mb-1">
                      Inbuilt Display Technology
                    </span>
                    <h4 className="text-lg font-serif font-bold text-white">
                      {inspectingWatch.inbuiltAiFeature.title}
                    </h4>
                    <p className="text-xs text-slate-300 font-light leading-relaxed mt-2">
                      {inspectingWatch.inbuiltAiFeature.hardwareTech}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2 pt-2 border-t border-gold-900/15">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 font-semibold block mb-2">
                      Embedded Capabilities
                    </span>
                    {inspectingWatch.inbuiltAiFeature.metrics.map((metric, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-slate-200">
                        <Check className="w-3.5 h-3.5 text-gold-400 mt-0.5 flex-shrink-0" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Physical Materials */}
                  <div className="space-y-2 pt-3 border-t border-gold-900/15 text-xs text-slate-400 font-mono">
                    <div>
                      <strong className="text-slate-300">Case:</strong> {inspectingWatch.caseMaterial}
                    </div>
                    <div>
                      <strong className="text-slate-300">Crystal:</strong> {inspectingWatch.glass}
                    </div>
                    <div>
                      <strong className="text-slate-300">Strap:</strong> {inspectingWatch.strap}
                    </div>
                    <div>
                      <strong className="text-slate-300">Waterproofing:</strong> {inspectingWatch.waterResistance}
                    </div>
                  </div>

                  {/* Modal Action */}
                  <div className="pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">Direct Price</span>
                      <span className="text-xl font-serif font-bold text-gold-300">{inspectingWatch.price}</span>
                    </div>
                    <button
                      onClick={() => handleReserve(inspectingWatch.name)}
                      className="px-6 py-2.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-mono font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] cursor-pointer"
                    >
                      Reserve {inspectingWatch.name.split(" ")[1]}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
