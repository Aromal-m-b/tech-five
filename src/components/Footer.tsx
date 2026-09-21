import React from 'react';
import { TechFiveLogo } from './TechFiveLogo';
import { 
  GraduationCap, 
  Building2, 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface FooterProps {
  onOpenInquiry: (initialData?: { type?: string; projectTitle?: string }) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  return (
    <footer className="bg-[#050811] border-t border-slate-800/80 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <TechFiveLogo size={46} showWordmark withGlow />
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              <strong className="text-white">Tech Five (T5)</strong> is the premier engineering consultancy dedicated to university student projects (Main & Mini) and high-performance software engineering for startups and MNCs.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Plagiarism Free</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-[11px]">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>1-on-1 Viva Coaching</span>
              </div>
            </div>

            <div className="pt-2 text-slate-400 text-xs space-y-1">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>support@techfive.org &bull; contact@techfive.io</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>+91 94000 00000 (Student & Enterprise Hotline)</span>
              </div>
            </div>
          </div>

          {/* Student Projects Col */}
          <div>
            <h4 className="text-sm font-bold text-white font-['Space_Grotesk'] uppercase tracking-wider mb-3">
              Student Projects
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#student-projects" className="hover:text-cyan-400 transition-colors">Final Year Main Projects</a></li>
              <li><a href="#student-projects" className="hover:text-cyan-400 transition-colors">Semester Mini Projects</a></li>
              <li><a href="#student-projects" className="hover:text-cyan-400 transition-colors">IEEE 2025 AI / Deep Learning</a></li>
              <li><a href="#student-projects" className="hover:text-cyan-400 transition-colors">IoT & Hardware (ESP32 / Arduino)</a></li>
              <li><a href="#student-projects" className="hover:text-cyan-400 transition-colors">Full-Stack MERN & Next.js</a></li>
              <li><a href="#student-projects" className="hover:text-cyan-400 transition-colors">Blockchain & Smart Contracts</a></li>
            </ul>
          </div>

          {/* Software Services Col */}
          <div>
            <h4 className="text-sm font-bold text-white font-['Space_Grotesk'] uppercase tracking-wider mb-3">
              Software Services
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#software-services" className="hover:text-blue-400 transition-colors">Startup MVP in 2–4 Weeks</a></li>
              <li><a href="#software-services" className="hover:text-blue-400 transition-colors">Custom Web SaaS Platforms</a></li>
              <li><a href="#software-services" className="hover:text-blue-400 transition-colors">Cross-Platform Mobile Apps</a></li>
              <li><a href="#software-services" className="hover:text-blue-400 transition-colors">MNC Module Outsourcing</a></li>
              <li><a href="#software-services" className="hover:text-blue-400 transition-colors">RESTful & GraphQL API Suites</a></li>
              <li><a href="#software-services" className="hover:text-blue-400 transition-colors">Strict NDA & IP Handover</a></li>
            </ul>
          </div>

          {/* Universities & Quick Support */}
          <div>
            <h4 className="text-sm font-bold text-white font-['Space_Grotesk'] uppercase tracking-wider mb-3">
              Quick Connect
            </h4>
            <p className="text-slate-400 text-xs mb-3">
              Compliant with formats of VTU, Anna Univ, KTU, JNTU, Mumbai Univ, Pune Univ & Deemed Universities.
            </p>
            <div className="space-y-2">
              <button
                onClick={() => onOpenInquiry()}
                className="w-full py-2 px-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors"
              >
                Book Project / Call
              </button>
              <a
                href="https://wa.me/919400000000?text=Hi%20Tech%20Five,%20I%20need%20assistance%20with%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-lg bg-emerald-950 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/60 font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Coordinator</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Tech Five (T5). All rights reserved. Registered software & academic development consultancy.
          </div>
          <div className="flex items-center gap-4">
            <a href="#hero-section" className="hover:text-slate-300 transition-colors">Back to Top</a>
            <span>&bull;</span>
            <span className="text-slate-400">IEEE Standard Formats</span>
            <span>&bull;</span>
            <span className="text-slate-400">Remote Setup via AnyDesk</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
