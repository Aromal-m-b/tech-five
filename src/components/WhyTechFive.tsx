import React from 'react';
import { TechFiveLogo } from './TechFiveLogo';
import { 
  ShieldCheck, 
  FileCheck2, 
  UserCheck, 
  Cpu, 
  RefreshCw,
  Search,
  Code2,
  MonitorCheck,
  BookMarked,
  Award
} from 'lucide-react';

export const WhyTechFive: React.FC = () => {
  const fiveGuarantees = [
    {
      number: '01',
      title: '100% Working Code on Your Machine',
      description: 'We don’t just zip files and leave you stranded. We connect remotely via AnyDesk or Google Meet, install all libraries, and demonstrate it running live on your screen.',
      icon: MonitorCheck,
      color: 'text-cyan-400',
      border: 'border-cyan-500/30'
    },
    {
      number: '02',
      title: 'Plagiarism-Safe College Reports',
      description: 'Comprehensive 80+ page project reports custom-formatted to your university (VTU, Anna Univ, KTU, Mumbai Univ, etc.) with verified IEEE base papers and complete ER/DFD diagrams.',
      icon: FileCheck2,
      color: 'text-sky-400',
      border: 'border-sky-500/30'
    },
    {
      number: '03',
      title: '1-on-1 Viva Defense & Demonstration Coaching',
      description: 'Ace external viva examination. We explain the exact code flow line-by-line, anticipate tricky examiner questions, and ensure you present like a pro.',
      icon: UserCheck,
      color: 'text-blue-400',
      border: 'border-blue-500/30'
    },
    {
      number: '04',
      title: 'Industry-Standard Modern Technologies',
      description: 'Never get rejected for using outdated decade-old code. We build on current industry stacks: YOLOv8, React 19, Next.js, PyTorch, ESP32, Flutter, and Tailwind.',
      icon: Cpu,
      color: 'text-indigo-400',
      border: 'border-indigo-500/30'
    },
    {
      number: '05',
      title: 'Free Review & Guide Revisions',
      description: 'College guide suggested adding a feature or tweaking the documentation format? We provide prompt revisions during your preliminary and final internal reviews.',
      icon: RefreshCw,
      color: 'text-emerald-400',
      border: 'border-emerald-500/30'
    },
  ];

  const workflowSteps = [
    {
      step: '1',
      title: 'Topic & Abstract Selection',
      desc: 'Choose from our verified IEEE/Industry catalog or bring your university guide’s custom problem statement.',
      icon: Search
    },
    {
      step: '2',
      title: 'Architecture & Development',
      desc: 'Our senior developers write clean, modular, and fully commented code with unit tests and clear folder structure.',
      icon: Code2
    },
    {
      step: '3',
      title: 'Live Remote Installation',
      desc: 'We connect to your laptop via AnyDesk/Meet and configure the complete running environment and database.',
      icon: MonitorCheck
    },
    {
      step: '4',
      title: 'Report, PPT & Base Paper',
      desc: 'Receive the bound-ready project report, high-impact PPT slides, and system sequence diagrams.',
      icon: BookMarked
    },
    {
      step: '5',
      title: 'Viva Drill & Final Submission',
      desc: 'Attend a live mock viva session, review examiner FAQs, and submit with total confidence to secure an ‘O’ or ‘A+’ grade.',
      icon: Award
    },
  ];

  return (
    <section id="why-tech-five" className="py-20 bg-[#070c17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>The Tech Five Standard</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight">
            Our 5-Point <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Student & Client Guarantee</span>
          </h2>
          
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            Named after the 5 pillars of technological craftsmanship. Here is why over 1,200 engineering students and dozens of tech startups choose Tech Five.
          </p>
        </div>

        {/* 5 Guarantees Bento Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fiveGuarantees.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className={`rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0b1426] border ${item.border} p-6 flex flex-col justify-between shadow-xl relative overflow-hidden`}
              >
                <div className="absolute top-4 right-5 text-4xl font-extrabold font-['Space_Grotesk'] text-slate-800/40 select-none">
                  {item.number}
                </div>

                <div>
                  <div className={`p-3 rounded-xl bg-slate-800/80 w-fit ${item.color} mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Guaranteed by Tech Five Engineers</span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Brand Showcase */}
          <div className="rounded-2xl bg-gradient-to-br from-cyan-950/60 via-slate-900 to-blue-950/60 border border-cyan-500/40 p-6 flex flex-col items-center justify-center text-center shadow-xl">
            <TechFiveLogo size={72} withGlow />
            <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white mt-4">
              TECH FIVE
            </h3>
            <p className="text-xs text-slate-300 mt-2 max-w-xs">
              Five sides of the pentagon represent our 5 core engineering tenets: Quality, Authenticity, Speed, Clarity, and Lifelong Support.
            </p>
          </div>
        </div>

        {/* 5-Step Process Section */}
        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              Seamless Delivery Roadmap
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk'] mt-1">
              5 Steps From Idea to Top Viva Score
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {workflowSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.step}
                  className="rounded-xl bg-slate-900/60 border border-slate-800 p-5 flex flex-col justify-between relative group hover:border-cyan-500/40 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                        Step {step.step}
                      </span>
                      <StepIcon className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                    </div>

                    <h4 className="text-sm font-bold text-white font-['Space_Grotesk']">
                      {step.title}
                    </h4>

                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
