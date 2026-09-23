import React, { useState, useEffect } from 'react';
import { TechFiveLogo } from './TechFiveLogo';
import { 
  ArrowRight, 
  MessageSquare, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Send,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface ComingSoonProps {
  onNavigateToUpcoming: () => void;
  onOpenInquiry: (initialData?: { type?: string; projectTitle?: string }) => void;
}

export const ComingSoon: React.FC<ComingSoonProps> = ({ 
  onNavigateToUpcoming, 
  onOpenInquiry 
}) => {
  // Store or retrieve 30-day launch target date
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 30, hours: 0, minutes: 0, seconds: 0 });

  // Early notification subscription state
  const [contactInput, setContactInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const STORAGE_KEY = 'techfive_launch_target_v1';
    let targetTime: number;

    const savedTarget = localStorage.getItem(STORAGE_KEY);
    if (savedTarget && !isNaN(Number(savedTarget))) {
      targetTime = Number(savedTarget);
    } else {
      // 30 days from current date
      targetTime = Date.now() + 30 * 24 * 60 * 60 * 1000;
      localStorage.setItem(STORAGE_KEY, targetTime.toString());
    }

    const updateTimer = () => {
      const now = Date.now();
      const difference = Math.max(0, targetTime - now);

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactInput.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const list = JSON.parse(localStorage.getItem('techfive_notified_leads') || '[]');
      list.push({ contact: contactInput, date: new Date().toISOString() });
      localStorage.setItem('techfive_notified_leads', JSON.stringify(list));

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <div className="h-screen w-full bg-[#080d18] text-slate-100 flex flex-col justify-between relative overflow-hidden select-none font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background Cyber Tech Grid & Glow Orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-cyan-500/20 via-blue-600/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-28 -right-10 w-[400px] h-[300px] bg-cyan-600/10 blur-[100px] pointer-events-none rounded-full" />

      {/* 1. Header (Compact) */}
      <header className="relative z-10 w-full px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between border-b border-slate-800/60 bg-[#080d18]/40 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <TechFiveLogo size={38} showWordmark withGlow />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onNavigateToUpcoming}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-cyan-300 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all cursor-pointer"
          >
            <span>Upcoming Platform</span>
            <span className="text-[10px] px-1 py-0.2 rounded bg-cyan-500/20 text-cyan-300 font-mono">/upcoming</span>
            <ExternalLink className="w-3 h-3 text-cyan-400" />
          </button>
        </div>
      </header>

      {/* 2. Centered Main Viewport Hero */}
      <main className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center my-auto py-2">
        
        {/* Pulsing Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-4 shadow-lg shadow-cyan-950/30">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span className="font-mono uppercase tracking-widest text-[11px]">COUNTDOWN TO LAUNCH</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white font-['Space_Grotesk'] leading-tight mb-3">
          Tech Five{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
            Launching Soon
          </span>
        </h1>

        {/* Concise Description */}
        <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-6 sm:mb-8">
          The unified hub for <span className="text-slate-200 font-medium">University Final Year & Mini Projects</span> and custom <span className="text-slate-200 font-medium">Software Engineering Sprints</span> for startups and enterprises.
        </p>

        {/* 1-Month Countdown Units */}
        <div className="grid grid-cols-4 gap-2.5 sm:gap-4 w-full max-w-lg mb-6 sm:mb-8">
          {/* Days */}
          <div className="p-3 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 shadow-md backdrop-blur-sm">
            <div className="text-2xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
              {String(timeLeft.days).padStart(2, '0')}
            </div>
            <div className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-cyan-400 font-mono mt-0.5">
              Days
            </div>
          </div>

          {/* Hours */}
          <div className="p-3 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 shadow-md backdrop-blur-sm">
            <div className="text-2xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-cyan-400 font-mono mt-0.5">
              Hours
            </div>
          </div>

          {/* Minutes */}
          <div className="p-3 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 shadow-md backdrop-blur-sm">
            <div className="text-2xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-cyan-400 font-mono mt-0.5">
              Minutes
            </div>
          </div>

          {/* Seconds */}
          <div className="p-3 sm:p-4 rounded-xl bg-slate-900/80 border border-cyan-500/30 shadow-md backdrop-blur-sm">
            <div className="text-2xl sm:text-4xl font-extrabold text-cyan-400 font-['Space_Grotesk'] tracking-tight">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-cyan-300 font-mono mt-0.5">
              Seconds
            </div>
          </div>
        </div>

        {/* Short & Clean Notify / Early Access Input */}
        <div className="w-full max-w-md">
          {isSubmitted ? (
            <div className="py-2.5 px-4 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-xs text-cyan-300 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>You're on the priority notification list! Use code <strong className="text-white font-mono">T5LAUNCH15</strong></span>
            </div>
          ) : (
            <form onSubmit={handleNotifySubmit} className="flex items-center gap-2">
              <input
                type="text"
                required
                value={contactInput}
                onChange={(e) => setContactInput(e.target.value)}
                placeholder="Email or WhatsApp for launch alert"
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 text-xs text-white placeholder-slate-500 outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <span>Notify Me</span>
                <Send className="w-3 h-3" />
              </button>
            </form>
          )}
        </div>

      </main>

      {/* 3. Bottom Bar: Simple Short Contacting Credentials (Non-bulk, Single Viewport) */}
      <footer className="relative z-10 w-full border-t border-slate-800/80 bg-[#050811]/90 backdrop-blur-md px-5 sm:px-8 py-3 sm:py-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          
          {/* Quick contact channels */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-slate-300">
            <a 
              href="mailto:support@techfive.org" 
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>support@techfive.org</span>
            </a>

            <span className="text-slate-700 hidden sm:inline">&bull;</span>

            <a 
              href="https://wa.me/919400000000?text=Hi%20Tech%20Five,%20I%20saw%20your%20launching%20soon%20page%20and%20want%20to%20inquire%20about%20a%20project." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp: +91 94000 00000</span>
            </a>
          </div>

          {/* Action button & Rights */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenInquiry({ type: 'Pre-Launch Project Booking' })}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
            >
              Book Project Now
            </button>
            <span className="text-slate-600 text-[11px] hidden md:inline">&copy; {new Date().getFullYear()} Tech Five</span>
          </div>

        </div>
      </footer>
    </div>
  );
};
