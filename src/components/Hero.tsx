import React from 'react';
import { TechFiveLogo } from './TechFiveLogo';
import { 
  GraduationCap, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  ShieldCheck, 
  Sparkles,
  Zap,
  Code2,
  FileCheck
} from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
  onExploreServices: () => void;
  onOpenInquiry: (initialData?: { type?: string; projectTitle?: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProjects,
  onExploreServices,
  onOpenInquiry,
}) => {
  return (
    <section 
      id="hero-section" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#080d18] via-[#091122] to-[#080d18]"
    >
      {/* Background Decorative Mesh Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-[450px] h-[450px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Pentagon Grid lines in background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#00d5b5_1px,transparent_1px)] [background-size:28px_28px]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Trust Pill */}
            <div 
              id="hero-trust-badge"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide mb-6 shadow-sm shadow-cyan-950"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>Trusted by 1,200+ Engineering Students & Emerging Startups</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-['Space_Grotesk'] tracking-tight text-white leading-[1.12]">
              Engineering Student <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
                Main & Mini Projects
              </span> <br />
              & Enterprise Software
            </h1>

            {/* Sub-headline */}
            <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              <strong className="text-white font-semibold">Tech Five (T5)</strong> powers final-year & semester engineering students with verified source code, IEEE documentation, PPT & 1-on-1 viva coaching. 
              We also deliver scalable software, custom MVPs, and outsourced tech modules for startups and MNCs.
            </p>

            {/* Key Deliverable Pills */}
            <div className="mt-6 flex flex-wrap gap-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900/90 border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>100% Executable Code</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900/90 border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>Plagiarism-Free IEEE Report</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900/90 border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>1-on-1 Viva Preparation</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900/90 border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                <span>Startup MVP & MNC Services</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                id="hero-explore-projects-cta"
                onClick={onExploreProjects}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <GraduationCap className="w-5 h-5" />
                <span>Explore Student Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-explore-services-cta"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-200"
              >
                <Building2 className="w-4 h-4 text-blue-400" />
                <span>Startup & MNC Services</span>
              </button>
            </div>

            {/* Quick Micro-Note */}
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Remote laptop setup via AnyDesk/Meet included &bull; Fast turnaround</span>
            </div>
          </div>

          {/* Right Column: Interactive Brand & Tech Visual */}
          <div className="lg:col-span-5 relative">
            {/* Outer Container with Tech Border */}
            <div 
              id="hero-visual-card"
              className="relative rounded-2xl bg-gradient-to-b from-slate-900/95 via-[#0d172e]/90 to-slate-950/95 border border-cyan-500/30 p-5 sm:p-6 shadow-2xl shadow-cyan-950/50 backdrop-blur-xl overflow-hidden"
            >
              {/* Top Bar of the Interactive Terminal Card */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-slate-400 ml-2">tech-five-engine.ts</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-cyan-400 font-mono">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  <span>ONLINE v2.4</span>
                </div>
              </div>

              {/* Central Graphic: Animated Tech Five Pentagon Emblem */}
              <div className="flex flex-col items-center justify-center py-4 relative">
                <div className="relative group">
                  <TechFiveLogo size={140} withGlow className="animate-hover" />
                </div>
                <div className="mt-3 text-center">
                  <div className="text-lg font-bold font-['Space_Grotesk'] text-white">
                    TECH FIVE
                  </div>
                  <div className="text-xs text-cyan-400 font-mono">
                    Academic Innovation &bull; Commercial Software
                  </div>
                </div>
              </div>

              {/* Live Terminal Output / Delivery Matrix */}
              <div className="mt-2 rounded-lg bg-black/60 border border-slate-800/80 p-3.5 font-mono text-xs space-y-1.5">
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>delivery_status.sh</span>
                  </span>
                  <span className="text-emerald-400 font-semibold">[READY]</span>
                </div>
                
                <div className="text-slate-300 text-[11px] space-y-1 pt-1">
                  <p className="text-cyan-300">
                    <span className="text-slate-500">&gt; </span>
                    <span>main_project: </span>
                    <span className="text-white font-medium">IEEE 2025 AI Drone / IoT / Web3</span>
                  </p>
                  <p className="text-cyan-300">
                    <span className="text-slate-500">&gt; </span>
                    <span>mini_project: </span>
                    <span className="text-white font-medium">Fast 48h Turnaround + Ready Report</span>
                  </p>
                  <p className="text-blue-300">
                    <span className="text-slate-500">&gt; </span>
                    <span>mnc_startup: </span>
                    <span className="text-white font-medium">Production MVP & API Microservices</span>
                  </p>
                </div>
              </div>

              {/* Interactive Quick Quote trigger button inside card */}
              <button
                id="hero-terminal-inquire-cta"
                onClick={() => onOpenInquiry({ type: 'Student Main Project' })}
                className="w-full mt-4 py-2.5 px-4 rounded-lg bg-gradient-to-r from-cyan-900/60 to-blue-900/60 hover:from-cyan-800/70 hover:to-blue-800/70 border border-cyan-500/40 text-cyan-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>Request Custom Project / Service Quote</span>
              </button>
            </div>

            {/* Floating Achievement Badges */}
            <div className="hidden sm:flex absolute -bottom-5 -left-6 rounded-xl bg-[#0b1428] border border-cyan-500/30 p-3 shadow-xl items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Full Source Code</div>
                <div className="text-[10px] text-slate-400">Zero Plagiarism &bull; Clean Architecture</div>
              </div>
            </div>

            <div className="hidden sm:flex absolute -top-4 -right-4 rounded-xl bg-[#0b1428] border border-blue-500/30 p-3 shadow-xl items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">IEEE Format Documentation</div>
                <div className="text-[10px] text-slate-400">Complete with PPT & Viva Prep</div>
              </div>
            </div>
          </div>

        </div>

        {/* Highlight Stats Strip */}
        <div 
          id="hero-stats-strip"
          className="mt-16 sm:mt-20 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-white">
              1,200+
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Engineering Projects Completed
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-cyan-400">
              99.4%
            </div>
            <div className="text-xs text-slate-400 mt-1">
              First-Attempt College Approval
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-blue-400">
              35+
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Startup MVPs & MNC Modules
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-emerald-400">
              1-on-1
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Live Viva Coaching & Remote Setup
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
