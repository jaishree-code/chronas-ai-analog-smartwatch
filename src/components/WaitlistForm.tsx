import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Check, Calendar, ArrowRight, Share2, Users, Sparkles } from "lucide-react";

interface WaitlistFormProps {
  onSuccess?: (email: string) => void;
}

export default function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [queueNumber, setQueueNumber] = useState(0);
  const [error, setError] = useState("");
  const [recentSignups, setRecentSignups] = useState<string[]>([
    "Alexander V. from London secured access 2 mins ago",
    "Elena R. from Tokyo secured access 5 mins ago",
    "James L. from New York secured access 12 mins ago",
  ]);

  // Check if user has already joined waitlist in this browser
  useEffect(() => {
    const savedEmail = localStorage.getItem("chronos_waitlist_email");
    const savedQueue = localStorage.getItem("chronos_waitlist_queue");
    if (savedEmail && savedQueue) {
      setEmail(savedEmail);
      setQueueNumber(parseInt(savedQueue));
      setIsSubmitted(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !email.includes("@")) {
      setError("Please enter a valid luxury-class email address.");
      return;
    }

    // Baseline queue number starting at a prestigious high luxury count
    const baseline = 1842;
    const existingWaitlist = JSON.parse(localStorage.getItem("chronos_waitlist_list") || "[]");
    
    if (existingWaitlist.includes(email)) {
      // Already signed up, retrieve existing or generate new position
      const pos = baseline + existingWaitlist.indexOf(email) + 1;
      setQueueNumber(pos);
      setIsSubmitted(true);
      localStorage.setItem("chronos_waitlist_email", email);
      localStorage.setItem("chronos_waitlist_queue", pos.toString());
      return;
    }

    // Save new signup
    existingWaitlist.push(email);
    localStorage.setItem("chronos_waitlist_list", JSON.stringify(existingWaitlist));
    
    const newQueueNum = baseline + existingWaitlist.length;
    setQueueNumber(newQueueNum);
    setIsSubmitted(true);
    localStorage.setItem("chronos_waitlist_email", email);
    localStorage.setItem("chronos_waitlist_queue", newQueueNum.toString());

    // Update real-time signup ticker with the current user
    setRecentSignups((prev) => [
      `You secured access just now`,
      ...prev.slice(0, 2),
    ]);

    if (onSuccess) {
      onSuccess(email);
    }
  };

  const copyShareLink = () => {
    const text = `I just secured early access to Chronos AI hybrid luxury smartwatch! Queue Position: #${queueNumber}. Join the waitlist here:`;
    const url = window.location.href;
    navigator.clipboard.writeText(`${text} ${url}`);
    alert("Share text with your exclusive queue position copied to clipboard!");
  };

  return (
    <section id="waitlist" className="py-24 bg-charcoal-950 border-t border-gold-900/10 px-6 relative overflow-hidden">
      {/* Background glow flares */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center">
        <span className="font-serif text-xs md:text-sm tracking-widest text-gold-400 uppercase block mb-3 font-medium">Limited Manufacture</span>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Secure <span className="text-glow-gold text-gold-500">Early Access</span>
        </h2>
        <p className="max-w-lg mx-auto text-slate-400 text-sm md:text-base font-light mb-12">
          Batch 1 production is limited to strictly 500 numbered units worldwide. Secure your position in the exclusive queue to guarantee allocation.
        </p>

        {/* Signup Card Container */}
        <div className="bg-charcoal-900 border border-gold-500/20 shadow-glow-gold rounded-2xl p-8 md:p-12 max-w-2xl mx-auto relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="signup-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
                  <div className="relative flex-grow">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-4 bg-charcoal-950 border border-gold-900/30 rounded focus:border-gold-400 focus:outline-none text-white text-sm placeholder-slate-500 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-charcoal-950 font-semibold px-8 py-4 rounded text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-glow-gold flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Secure Early Access</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                {error && <p className="text-xs text-rose-400 font-mono text-left pl-1">{error}</p>}

                <div className="flex items-center justify-center text-slate-500 text-xs pt-4 border-t border-gold-900/10">
                  <span className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1.5 text-gold-500" /> Batch 1 Ships Nov 2026
                  </span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="signup-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-950 border border-gold-400/50 text-gold-400 mb-2 shadow-glow-gold">
                  <Check className="w-8 h-8 animate-bounce" />
                </div>
                
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                    Allocation Priority Secured
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto leading-relaxed">
                    Thank you. Your exclusive registration has been recorded. We will contact you at <strong className="text-gold-200">{email}</strong> once your numbered build is ready.
                  </p>
                </div>

                {/* Queue Position Ticket */}
                <div className="bg-charcoal-950 py-5 px-6 rounded-lg border border-gold-500/30 shadow-inner max-w-sm mx-auto relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gold-500/10 rounded-bl-full pointer-events-none" />
                  <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block">
                    Exclusive Priority Queue
                  </span>
                  <span className="text-4xl font-serif font-bold text-gold-400 text-glow-gold tracking-tight block mt-1.5">
                    #{queueNumber}
                  </span>
                  <span className="text-[9px] font-mono tracking-wider text-gold-500 uppercase block mt-1">
                    Batch 1 Premium Allocation
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
                  <button
                    onClick={copyShareLink}
                    className="flex items-center space-x-2 px-5 py-2.5 bg-charcoal-950 border border-gold-900/30 rounded text-xs text-gold-200 hover:text-white hover:border-gold-400 transition-colors cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share Queue Status</span>
                  </button>
                  <button
                    onClick={() => {
                      localStorage.removeItem("chronos_waitlist_email");
                      localStorage.removeItem("chronos_waitlist_queue");
                      setIsSubmitted(false);
                      setEmail("");
                    }}
                    className="text-slate-500 hover:text-slate-400 text-[11px] underline"
                  >
                    Register with a different account
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Real-time Ticker */}
        <div className="mt-12 flex flex-col items-center">
          <div className="flex items-center space-x-2 text-xs text-slate-500 bg-charcoal-900/40 px-4 py-2 rounded-full border border-gold-900/10">
            <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-spin" style={{ animationDuration: '4s' }} />
            <AnimatePresence mode="popLayout">
              <motion.span
                key={recentSignups[0]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="font-mono text-gold-300/80 text-[10.5px] uppercase tracking-wider"
              >
                {recentSignups[0]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
