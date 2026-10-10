import React from "react";
import { Eye, Languages, Cpu, Sparkles } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Eye,
      title: "Sub-Glass Retina Module",
      description: "Text glows through the physical watch face dial only when active. Completely invisible when deactivated, retaining the classical Swiss aesthetic.",
      accent: "Active Luminescence",
    },
    {
      icon: Languages,
      title: "Real-Time Interpreter",
      description: "Instantly translates foreign speech directly onto your watch dial. Supports over 40 languages with natural, context-aware translation logic.",
      accent: "Direct Translation",
    },
    {
      icon: Cpu,
      title: "Voice Command Center",
      description: "Full integration with Google Assistant and Gemini. Tap the tactile crown button once to speak, query, and manage your day directly from your wrist.",
      accent: "Gemini Core Integration",
    },
  ];

  return (
    <section id="features" className="py-24 bg-charcoal-950 px-6 relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-400/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="font-serif text-xs md:text-sm tracking-widest text-gold-500 uppercase block mb-3 font-medium">Engineering Marvel</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Classical Mechanics. <span className="text-glow-gold text-gold-400">Quantum Intelligence.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm md:text-base font-light">
            Crafted for those who reject compromise. Enjoy the weight and heritage of an analog watch, with the ultimate power of modern generative AI.
          </p>
        </div>

        {/* Features Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-charcoal-900 rounded-xl border border-gold-900/10 hover:border-gold-500/30 transition-all duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.08)] flex flex-col justify-between overflow-hidden"
              >
                {/* Accent gold top border on hover */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold-800 via-gold-400 to-gold-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div>
                  {/* Icon Box */}
                  <div className="inline-flex p-3 rounded-lg bg-charcoal-950 border border-gold-900/30 text-gold-400 mb-6 group-hover:text-gold-200 group-hover:border-gold-500/40 transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-gold-100 transition-colors duration-300">
                    {feat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                    {feat.description}
                  </p>
                </div>

                {/* Accent Tag */}
                <div className="flex items-center space-x-1.5 mt-auto">
                  <Sparkles className="w-3 h-3 text-gold-500" />
                  <span className="text-[10px] font-mono tracking-widest text-gold-400/85 uppercase">
                    {feat.accent}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
