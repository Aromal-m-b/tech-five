import React, { useState, useMemo } from 'react';
import { Calculator, Check, Sparkles, MessageSquare, ArrowRight, Shield, Zap } from 'lucide-react';

interface ProjectEstimatorProps {
  onOpenInquiry: (initialData?: { type?: string; projectTitle?: string }) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onOpenInquiry }) => {
  const [projectCategory, setProjectCategory] = useState<'student_mini' | 'student_main' | 'startup_mvp' | 'custom_software'>('student_main');
  const [domain, setDomain] = useState<string>('ai_ml');
  const [teamSize, setTeamSize] = useState<number>(4);
  const [addOns, setAddOns] = useState<{ [key: string]: boolean }>({
    vivaCoaching: true,
    fullReport: true,
    rushDelivery: false,
    hardwareKit: false,
    cloudDeploy: false,
  });

  const toggleAddOn = (key: string) => {
    setAddOns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Dynamic estimate calculation logic
  const estimate = useMemo(() => {
    let basePrice = 0;
    let timelineDays = 14;

    if (projectCategory === 'student_mini') {
      basePrice = 2500;
      timelineDays = 3;
    } else if (projectCategory === 'student_main') {
      basePrice = 7500;
      timelineDays = 18;
    } else if (projectCategory === 'startup_mvp') {
      basePrice = 35000;
      timelineDays = 21;
    } else if (projectCategory === 'custom_software') {
      basePrice = 48000;
      timelineDays = 30;
    }

    // Domain multiplier
    if (domain === 'ai_ml') basePrice += (projectCategory.startsWith('student') ? 1200 : 8000);
    if (domain === 'iot_embedded') basePrice += (projectCategory.startsWith('student') ? 1500 : 10000);
    if (domain === 'blockchain') basePrice += (projectCategory.startsWith('student') ? 1800 : 12000);

    // Addons
    if (addOns.rushDelivery) {
      basePrice += (projectCategory.startsWith('student') ? 1000 : 6000);
      timelineDays = Math.max(2, Math.floor(timelineDays / 2));
    }
    if (addOns.hardwareKit) basePrice += 2800;
    if (addOns.cloudDeploy) basePrice += (projectCategory.startsWith('student') ? 800 : 4000);

    return {
      price: basePrice,
      timelineDays,
      perMember: projectCategory.startsWith('student') && teamSize > 1 ? Math.round(basePrice / teamSize) : null,
    };
  }, [projectCategory, domain, teamSize, addOns]);

  const handleInquireEstimate = () => {
    const title = `${projectCategory === 'student_mini' ? 'Mini Project' : projectCategory === 'student_main' ? 'Main Project' : projectCategory} (${domain.toUpperCase()})`;
    onOpenInquiry({
      type: projectCategory.startsWith('student') ? 'Student Academic Project' : 'Startup / Company Software',
      projectTitle: `Estimated ${title} - Approx ₹${estimate.price.toLocaleString('en-IN')}`,
    });
  };

  const getWhatsAppEstimateLink = () => {
    const text = `Hi Tech Five, I calculated an estimate on your website for a ${projectCategory} in ${domain}. Estimated amount: approx ₹${estimate.price.toLocaleString('en-IN')}. Please share availability and details.`;
    return `https://wa.me/919400000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="project-estimator" className="py-20 bg-[#090f1e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-4">
            <Calculator className="w-4 h-4 text-emerald-400" />
            <span>Transparent Pricing Calculator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight">
            Interactive Project & Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Estimator</span>
          </h2>
          
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            Get an instant estimate for your project requirements with student group cost-splitting or custom startup MVP scope breakdown.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Project Type Selection */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                1. Select Engagement Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setProjectCategory('student_main')}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    projectCategory === 'student_main'
                      ? 'bg-cyan-950/60 border-cyan-500 text-white shadow-md shadow-cyan-950'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold text-sm text-cyan-300">Final Year Main Project</div>
                  <div className="text-xs text-slate-400 mt-1">Full IEEE base paper, 80+ page report, PPT & Viva drill</div>
                </button>

                <button
                  type="button"
                  onClick={() => setProjectCategory('student_mini')}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    projectCategory === 'student_mini'
                      ? 'bg-cyan-950/60 border-cyan-500 text-white shadow-md shadow-cyan-950'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold text-sm text-emerald-300">Semester Mini Project</div>
                  <div className="text-xs text-slate-400 mt-1">Fast 48-72h turnaround, 30-page report, easy demo</div>
                </button>

                <button
                  type="button"
                  onClick={() => setProjectCategory('startup_mvp')}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    projectCategory === 'startup_mvp'
                      ? 'bg-blue-950/60 border-blue-500 text-white shadow-md shadow-blue-950'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold text-sm text-blue-300">Startup MVP in 2–4 Wks</div>
                  <div className="text-xs text-slate-400 mt-1">Clickable SaaS / mobile app ready for user tests</div>
                </button>

                <button
                  type="button"
                  onClick={() => setProjectCategory('custom_software')}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    projectCategory === 'custom_software'
                      ? 'bg-blue-950/60 border-blue-500 text-white shadow-md shadow-blue-950'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold text-sm text-purple-300">Custom MNC / Web Portal</div>
                  <div className="text-xs text-slate-400 mt-1">Enterprise scale, automated workflows, API suites</div>
                </button>
              </div>
            </div>

            {/* Step 2: Domain Selection */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                2. Select Core Technology Domain
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                {[
                  { id: 'ai_ml', label: 'AI & Machine Learning' },
                  { id: 'web_fullstack', label: 'MERN / Next.js Web' },
                  { id: 'iot_embedded', label: 'IoT & Microcontrollers' },
                  { id: 'mobile_apps', label: 'Mobile Apps (Flutter)' },
                  { id: 'cloud_cyber', label: 'Cybersecurity & Cloud' },
                  { id: 'blockchain', label: 'Blockchain & Smart Contracts' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setDomain(item.id)}
                    className={`p-3 rounded-lg text-left font-medium transition-all ${
                      domain === item.id
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                        : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Add-Ons & Customizations */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                3. Optional Add-ons & Fast-Track Options
              </label>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer hover:border-slate-700">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={addOns.rushDelivery}
                      onChange={() => toggleAddOn('rushDelivery')}
                      className="w-4 h-4 rounded text-cyan-500 bg-slate-800 border-slate-700"
                    />
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                        <span>Priority Rush Delivery</span>
                      </div>
                      <div className="text-[11px] text-slate-400">Halves standard turnaround time for imminent college deadlines</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400">+ Fast-track</span>
                </label>

                {domain === 'iot_embedded' && (
                  <label className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer hover:border-slate-700">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={addOns.hardwareKit}
                        onChange={() => toggleAddOn('hardwareKit')}
                        className="w-4 h-4 rounded text-cyan-500 bg-slate-800 border-slate-700"
                      />
                      <div>
                        <div className="text-xs font-bold text-white">Tested Physical Hardware Kit Courier</div>
                        <div className="text-[11px] text-slate-400">Assembled & programmed sensors/board safely delivered to your doorstep</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-cyan-400">+ Hardware</span>
                  </label>
                )}

                <label className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer hover:border-slate-700">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={addOns.cloudDeploy}
                      onChange={() => toggleAddOn('cloudDeploy')}
                      className="w-4 h-4 rounded text-cyan-500 bg-slate-800 border-slate-700"
                    />
                    <div>
                      <div className="text-xs font-bold text-white">Live Cloud URL & SSL Hosting</div>
                      <div className="text-[11px] text-slate-400">Deployed to AWS/Vercel/GCP so anyone can access the project via browser link</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400">+ Live Hosting</span>
                </label>
              </div>

              {/* Team Size Slider for Student Groups */}
              {projectCategory.startsWith('student') && (
                <div className="mt-5 pt-4 border-t border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
                    <span>Project Team Size (for split-cost calculation):</span>
                    <span className="font-bold text-cyan-400">{teamSize} Students</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    value={teamSize}
                    onChange={(e) => setTeamSize(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>Solo (1)</span>
                    <span>2</span>
                    <span>3</span>
                    <span>Standard Group (4)</span>
                    <span>5</span>
                    <span>6</span>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Right Summary Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-2xl bg-gradient-to-b from-slate-900 via-[#0e1933] to-slate-950 border border-cyan-500/40 p-6 sm:p-8 shadow-2xl shadow-cyan-950/60">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    Instant Estimation
                  </span>
                  <h3 className="text-xl font-extrabold text-white font-['Space_Grotesk'] mt-0.5">
                    Package Overview
                  </h3>
                </div>
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {/* Price Display */}
              <div className="mt-6">
                <div className="text-xs text-slate-400">Estimated Total (Inclusive of deliverables)</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk'] mt-1 flex items-baseline gap-2">
                  <span>₹{estimate.price.toLocaleString('en-IN')}</span>
                  <span className="text-xs font-normal text-slate-400">approx *</span>
                </div>

                {estimate.perMember && (
                  <div className="mt-2 text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    <span>Only ~₹{estimate.perMember.toLocaleString('en-IN')} per student in your group of {teamSize}!</span>
                  </div>
                )}
              </div>

              {/* Delivery Speed */}
              <div className="mt-6 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Estimated Turnaround:</span>
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>{estimate.timelineDays} Business Days</span>
                </span>
              </div>

              {/* Deliverables Checklist */}
              <div className="mt-6 space-y-2 text-xs text-slate-300">
                <div className="font-semibold text-slate-400 uppercase tracking-wider text-[11px] mb-2">
                  Included in this Package:
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>100% Executable Source Code & Dependency Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Full University / IEEE Documentation Report & Diagrams</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Ready-to-Present PPT with System Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>1-on-1 Remote Setup on Your Laptop (AnyDesk/Meet)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Live Viva Mock Demonstration Coaching</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <button
                  id="estimator-inquire-button"
                  onClick={handleInquireEstimate}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-cyan-950 flex items-center justify-center gap-2 transition-all"
                >
                  <span>Book at This Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getWhatsAppEstimateLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Send Estimate to WhatsApp</span>
                </a>
              </div>

              <div className="mt-4 text-[10px] text-slate-400 text-center flex items-center justify-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-slate-500" />
                <span>Exact quotes finalized based on college guide review specs</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
