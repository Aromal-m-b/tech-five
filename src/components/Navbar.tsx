import React, { useState, useEffect } from 'react';
import { TechFiveLogo } from './TechFiveLogo';
import { MessageSquare, Menu, X, ArrowUpRight, GraduationCap, Building2, Calculator, Sparkles, Clock, ArrowLeft } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: (initialData?: { type?: string; projectTitle?: string }) => void;
  onNavigateHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry, onNavigateHome }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      id="main-navigation-bar" 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#080d18]/90 backdrop-blur-md border-b border-cyan-900/30 py-3 shadow-lg shadow-black/40' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo & Countdown Link */}
        <div className="flex items-center gap-3">
          <button 
            type="button"
            onClick={onNavigateHome || (() => { window.location.href = '/'; })}
            className="flex items-center gap-2 group transition-transform hover:scale-[1.02] text-left cursor-pointer"
            title="Tech Five Home"
          >
            <TechFiveLogo size={42} showWordmark withGlow />
          </button>

          {onNavigateHome && (
            <button
              type="button"
              onClick={onNavigateHome}
              className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-[11px] text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3 h-3 text-cyan-400" />
              <span>Launch Countdown (/)</span>
            </button>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a 
            href="#student-projects" 
            className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors py-1"
          >
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>Student Projects</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
              Main & Mini
            </span>
          </a>

          <a 
            href="#software-services" 
            className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors py-1"
          >
            <Building2 className="w-4 h-4 text-blue-400" />
            <span>Startups & MNCs</span>
          </a>

          <a 
            href="#project-estimator" 
            className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors py-1"
          >
            <Calculator className="w-4 h-4 text-emerald-400" />
            <span>Cost Estimator</span>
          </a>

          <a 
            href="#why-tech-five" 
            className="hover:text-cyan-400 transition-colors py-1"
          >
            5-Point Guarantee
          </a>

          <a 
            href="#faq-section" 
            className="hover:text-cyan-400 transition-colors py-1"
          >
            FAQ
          </a>
        </div>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Quick WhatsApp Link */}
          <a
            href="https://wa.me/919400000000?text=Hi%20Tech%20Five,%20I%20am%20looking%20for%20a%20project%20/%20software%20service."
            target="_blank"
            rel="noopener noreferrer"
            id="navbar-whatsapp-button"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/50 hover:border-emerald-400/50 transition-all duration-200"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp Quick-Chat</span>
          </a>

          {/* Book / Inquire Button */}
          <button
            id="navbar-inquire-button"
            onClick={() => onOpenInquiry()}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Book Project / Call</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            id="mobile-menu-toggle-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-drawer-menu"
          className="lg:hidden bg-[#0a1020]/98 border-b border-cyan-900/30 px-6 py-6 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-4 text-base font-medium">
            <a 
              href="#student-projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 border-b border-slate-800/80 text-slate-200 hover:text-cyan-400"
            >
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <span>Student Projects (Main & Mini)</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500" />
            </a>

            <a 
              href="#software-services" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 border-b border-slate-800/80 text-slate-200 hover:text-blue-400"
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-400" />
                <span>Startup & MNC Software Services</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500" />
            </a>

            <a 
              href="#project-estimator" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 border-b border-slate-800/80 text-slate-200 hover:text-emerald-400"
            >
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-emerald-400" />
                <span>Instant Cost Estimator</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500" />
            </a>

            <a 
              href="#why-tech-five" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800/80 text-slate-200 hover:text-cyan-400"
            >
              5-Point Guarantee & Process
            </a>

            <a 
              href="#faq-section" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800/80 text-slate-200 hover:text-cyan-400"
            >
              Frequently Asked Questions
            </a>

            <div className="pt-3 flex flex-col gap-3">
              <button
                id="mobile-inquire-button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Project / Get Consultation</span>
              </button>

              <a
                href="https://wa.me/919400000000?text=Hi%20Tech%20Five,%20I%20am%20interested%20in%20a%20student%20project%20/%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 font-semibold text-xs flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat Directly on WhatsApp</span>
              </a>

              {onNavigateHome && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateHome();
                  }}
                  className="w-full py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 font-medium text-xs flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Return to Launch Countdown (/)</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
