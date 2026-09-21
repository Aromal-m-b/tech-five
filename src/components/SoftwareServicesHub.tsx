import React from 'react';
import { SOFTWARE_SERVICES } from '../data/mockData';
import { SoftwareService } from '../types';
import { 
  Building2, 
  Rocket, 
  Layers, 
  Smartphone, 
  ShieldCheck, 
  Zap, 
  GitBranch, 
  Lock, 
  Clock, 
  ArrowRight,
  Sparkles,
  Server
} from 'lucide-react';

interface SoftwareServicesHubProps {
  onOpenInquiry: (initialData?: { type?: string; projectTitle?: string }) => void;
}

export const SoftwareServicesHub: React.FC<SoftwareServicesHubProps> = ({ onOpenInquiry }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-cyan-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-blue-400" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-indigo-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-emerald-400" />;
      default:
        return <Server className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="software-services" className="py-20 bg-[#080e1b] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-4">
            <Building2 className="w-4 h-4 text-blue-400" />
            <span>Commercial Software Division</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight">
            Software Services for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">Startups & MNCs</span>
          </h2>
          
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            Beyond academic innovation, Tech Five engineers commercial-grade software. Whether you are a seed-stage startup needing a rapid MVP or an MNC outsourcing specialized modules under strict NDAs, our agile engineering team delivers.
          </p>
        </div>

        {/* Corporate Trust Highlights */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
            <Lock className="w-5 h-5 text-cyan-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Strict NDA Guarantee</div>
              <div className="text-[10px] text-slate-400">100% IP & Code Ownership</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
            <Zap className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Rapid 2–4 Wk MVPs</div>
              <div className="text-[10px] text-slate-400">Fast Market Validation</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
            <GitBranch className="w-5 h-5 text-blue-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Clean Git Workflows</div>
              <div className="text-[10px] text-slate-400">PR Reviews & CI/CD</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Post-Launch Warranty</div>
              <div className="text-[10px] text-slate-400">Bug-Fixes & SLA Support</div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {SOFTWARE_SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="rounded-2xl bg-gradient-to-b from-[#0e172e] via-slate-900/95 to-[#0a1224] border border-slate-800 hover:border-blue-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl group hover:shadow-blue-950/30"
            >
              <div>
                {/* Top Row: Icon and Turnaround */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 group-hover:border-blue-500/50 transition-colors">
                    {getIcon(service.icon)}
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-950/80 border border-blue-500/30 text-blue-300">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>{service.turnaround}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors font-['Space_Grotesk']">
                  {service.title}
                </h3>

                {/* Tagline */}
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {service.tagline}
                </p>

                {/* Feature Bullet Points */}
                <div className="mt-6 space-y-2.5">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="mt-6 pt-5 border-t border-slate-800/80">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Technologies We Deploy:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-800/90 text-cyan-200 border border-slate-700/80 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between">
                <div className="text-xs text-slate-400 font-medium">
                  Includes Architecture & Code Handover
                </div>

                <button
                  id={`inquire-service-${service.id}`}
                  onClick={() => onOpenInquiry({ type: service.title })}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MNC / Startup Collaboration Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0b162c] to-slate-900 border border-slate-800 p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white font-['Space_Grotesk']">
              Need a Dedicated Sprint Team or Custom API Service?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              We provide fixed-cost milestone agreements or flexible developer bandwidth for startups and tech companies looking to scale quickly.
            </p>
          </div>
          <button
            onClick={() => onOpenInquiry({ type: 'Enterprise / MNC Service' })}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg whitespace-nowrap"
          >
            Speak to Engineering Lead
          </button>
        </div>

      </div>
    </section>
  );
};
