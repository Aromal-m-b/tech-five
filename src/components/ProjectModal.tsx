import React from 'react';
import { StudentProject } from '../types';
import { 
  X, 
  CheckCircle2, 
  FileText, 
  Clock, 
  Cpu, 
  Users, 
  Sparkles, 
  DownloadCloud, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface ProjectModalProps {
  project: StudentProject | null;
  onClose: () => void;
  onBook: (project: StudentProject) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onBook }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-b from-[#0e172a] via-[#091122] to-[#080d18] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl shadow-cyan-950 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
            project.level === 'main'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
              : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
          }`}>
            {project.level === 'main' ? 'Final Year Main Project (8th Sem)' : 'Semester Mini Project'}
          </span>

          <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
            {project.domainLabel}
          </span>

          <span className="text-xs px-2.5 py-1 rounded-full bg-blue-950 text-blue-300 border border-blue-500/30">
            {project.highlight}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-white">
          {project.title}
        </h3>

        {/* Sub-headline */}
        <p className="mt-2 text-sm text-cyan-300 font-medium">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="mt-4 text-sm text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-5">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Technology Stack & Tools:
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span 
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded-md bg-slate-800/90 text-cyan-300 border border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Deliverables Breakdown */}
        <div className="mt-6 p-5 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>Complete Deliverables Package (Included with this project):</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ideal Branches & Duration */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 rounded-lg bg-slate-900/50 border border-slate-800">
            <span className="text-slate-400 font-semibold block mb-1">Recommended Academic Branches:</span>
            <div className="flex flex-wrap gap-1.5">
              {project.idealFor.map((branch, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  {branch}
                </span>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-slate-400 font-semibold block mb-0.5">Typical Timeline:</span>
              <span className="text-white font-medium">{project.durationWeeks} Weeks (Fast-track available)</span>
            </div>
            <Clock className="w-5 h-5 text-cyan-400" />
          </div>
        </div>

        {/* Modal Action Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Viva Pass Guarantee & Plagiarism Safe</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
            >
              Back to Catalog
            </button>
            <button
              onClick={() => {
                onClose();
                onBook(project);
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-lg shadow-cyan-950 flex items-center justify-center gap-2"
            >
              <span>Book This Project Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
