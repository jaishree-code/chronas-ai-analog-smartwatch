import React from "react";
import { Hammer, BatteryCharging, Shield, Activity, Anchor } from "lucide-react";

export default function TechSpecs() {
  const specs = [
    {
      category: "Movement & Mechanics",
      items: [
        { label: "Caliber", value: "Chronos C-1 Swiss Automatic Hybrid" },
        { label: "Power Reserve (Analog)", value: "30 Days continuous physical movement" },
        { label: "Jewels", value: "25 Synthetic Rubies" },
        { label: "Vibration Frequency", value: "28,800 Alt/h (4Hz)" },
      ],
    },
    {
      category: "Materials & Exterior",
      items: [
        { label: "Chassis Core", value: "Grade 5 Brushed Titanium" },
        { label: "Bezel Accents", value: "18k Solid Rose Gold / Black Ceramic" },
        { label: "Dial Crystal", value: "Double-Dome Sapphire with Dual Anti-Reflective Coating" },
        { label: "Water Resistance", value: "50 Meters (5 ATM)" },
      ],
    },
    {
      category: "Smart Core & Sensors",
      items: [
        { label: "Display Material", value: "Patented Micro-Thin Invisible Retina OLED" },
        { label: "Processor Unit", value: "Ultra-Low-Power Edge Neural Accelerator" },
        { label: "Battery Life (Smart)", value: "Up to 7 Days active translation per charge" },
        { label: "Audio Hardware", value: "High-Sensitivity Directional Beamforming Microphone" },
      ],
    },
  ];

  return (
    <section id="specs" className="py-20 bg-charcoal-900 border-t border-gold-900/10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-mono text-xs text-gold-500 uppercase tracking-widest block mb-2">Detailed Craftsmanship</span>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-white">Technical Specifications</h2>
          </div>
          <p className="max-w-md text-slate-400 text-xs md:text-sm font-light mt-4 md:mt-0 leading-relaxed">
            Every Chronos AI timepiece is hand-assembled in Geneva, Switzerland, fusing centuries-old physical mechanical excellence with Silicon Valley AI firmware.
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {specs.map((group, groupIdx) => (
            <div key={groupIdx} className="bg-charcoal-950/50 p-8 rounded-lg border border-gold-900/10 hover:border-gold-500/20 transition-all duration-300">
              <h3 className="font-serif text-lg font-bold text-gold-400 mb-6 pb-2 border-b border-gold-900/30 tracking-wide uppercase text-glow-gold">
                {group.category}
              </h3>
              <div className="space-y-5">
                {group.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex flex-col space-y-1">
                    <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                      {item.label}
                    </span>
                    <span className="text-sm font-sans font-medium text-slate-200">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Accents Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-gold-900/20">
          <div className="text-center">
            <span className="text-3xl md:text-4xl font-serif font-bold text-gold-400 text-glow-gold block">30d</span>
            <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block mt-1">Analog Power Reserve</span>
          </div>
          <div className="text-center">
            <span className="text-3xl md:text-4xl font-serif font-bold text-gold-400 text-glow-gold block">5 ATM</span>
            <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block mt-1">Water Resistance</span>
          </div>
          <div className="text-center">
            <span className="text-3xl md:text-4xl font-serif font-bold text-gold-400 text-glow-gold block">18k</span>
            <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block mt-1">Rose Gold Bezel</span>
          </div>
          <div className="text-center">
            <span className="text-3xl md:text-4xl font-serif font-bold text-gold-400 text-glow-gold block">40+</span>
            <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block mt-1">Languages Supported</span>
          </div>
        </div>
      </div>
    </section>
  );
}
