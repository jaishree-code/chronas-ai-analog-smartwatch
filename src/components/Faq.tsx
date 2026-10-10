import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "How does the hybrid movement actually work?",
      answer: "Chronos AI features a dual-core architectural build. The primary analog chronograph is powered by our Swiss Caliber C-1 Automatic mechanical movement. Sitting directly beneath the sapphire glass, but above the physical gold hands, is a transparent, micro-thin OLED sub-glass retina dial that remains completely invisible until activated via the crown button.",
    },
    {
      question: "What is the battery life of the mechanical and digital parts?",
      answer: "We solved smart watch anxiety. The physical watch movement runs for up to 30 days on a single charge. The high-contrast sub-glass digital display holds up to 7 days of heavy interactive voice translation. Both subsystems charge simultaneously on the included solid walnut and gold inductive desktop stand in less than 45 minutes.",
    },
    {
      question: "How secure is my translation data and voice recording?",
      answer: "Chronos AI features local, on-chip voice activity detection. The translations are processed via encrypted secure pipelines, and no audio is ever stored on external servers without your explicit permission. You retain full control of your translation logs via the mobile app.",
    },
    {
      question: "Is the timepiece water-resistant?",
      answer: "Yes, Chronos AI is fully sealed and engineered for 5 ATM (50 meters) of water resistance. The grade 5 titanium case, solid sapphire glass, and customized microphone membrane are fully capable of handling swimming, showering, and rainfall.",
    },
    {
      question: "Can I customize the mechanical hands and physical straps?",
      answer: "Each Chronos AI watch comes with a custom interchangeable strap mechanism. We include both a brushed grade 5 titanium band and a hand-stitched obsidian Italian leather strap inside the luxury solid cedar storage chest.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-charcoal-900 border-t border-gold-900/10 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <HelpCircle className="w-8 h-8 text-gold-500 mx-auto mb-3 animate-pulse" />
          <span className="font-mono text-xs text-gold-500 uppercase tracking-widest block mb-1">Frequently Answered</span>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-white tracking-tight">Timepiece Inquiries</h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-charcoal-950/40 rounded border border-gold-900/10 hover:border-gold-500/25 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                >
                  <span className="font-serif text-sm md:text-base font-bold text-slate-200 hover:text-gold-300 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gold-500 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      isOpen ? "rotate-180 text-gold-400" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-slate-400 leading-relaxed font-light border-t border-gold-900/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
