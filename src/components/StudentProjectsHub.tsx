import React, { useState } from 'react';
import { StudentProject, ProjectLevel, TechDomain } from '../types';
import { 
  GraduationCap, 
  Search, 
  Sparkles, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  FileText, 
  Layers,
  BookOpen,
  Cpu
} from 'lucide-react';

interface StudentProjectsHubProps {
  projects: StudentProject[];
  onSelectProject: (project: StudentProject) => void;
  onBookProject: (project: StudentProject) => void;
  onRequestCustomTopic: () => void;
}

export const StudentProjectsHub: React.FC<StudentProjectsHubProps> = ({
  projects,
  onSelectProject,
  onBookProject,
  onRequestCustomTopic,
}) => {
  const [levelFilter, setLevelFilter] = useState<ProjectLevel>('all');
  const [domainFilter, setDomainFilter] = useState<TechDomain>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const domainsList: { id: TechDomain; label: string }[] = [
    { id: 'all', label: 'All Domains' },
    { id: 'ai_ml', label: 'AI & Machine Learning' },
    { id: 'web_fullstack', label: 'Web & Full-Stack' },
    { id: 'iot_embedded', label: 'IoT & Hardware' },
    { id: 'mobile_apps', label: 'Mobile Apps' },
    { id: 'cloud_cyber', label: 'Cyber & Cloud' },
    { id: 'blockchain', label: 'Blockchain & Web3' },
  ];

  const filteredProjects = projects.filter((project) => {
    // Level filter
    if (levelFilter !== 'all' && project.level !== levelFilter) {
      return false;
    }
    // Domain filter
    if (domainFilter !== 'all' && project.domain !== domainFilter) {
      return false;
    }
    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchesTitle = project.title.toLowerCase().includes(q);
      const matchesDesc = project.description.toLowerCase().includes(q);
      const matchesStack = project.techStack.some((t) => t.toLowerCase().includes(q));
      if (!matchesTitle && !matchesDesc && !matchesStack) return false;
    }
    return true;
  });

  return (
    <section id="student-projects" className="py-20 bg-[#070c17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-4">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>Academic Project Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight">
            Student Projects: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Main & Mini</span>
          </h2>
          
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            From 8th semester Final Year IEEE capstone projects to 4th/5th semester lab mini projects. 
            Every project includes executable code, university-compliant reports, PPT slides, and 1-on-1 viva coaching.
          </p>
        </div>

        {/* Dual Mode Switcher (Main vs Mini vs All) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            id="filter-level-all"
            onClick={() => setLevelFilter('all')}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
              levelFilter === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-950'
                : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700'
            }`}
          >
            <span>All Student Projects</span>
            <span className="text-xs px-1.5 py-0.5 rounded-full bg-white/20">
              {projects.length}
            </span>
          </button>

          <button
            id="filter-level-main"
            onClick={() => setLevelFilter('main')}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
              levelFilter === 'main'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-950'
                : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700'
            }`}
          >
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span>Final Year (Main Projects)</span>
            <span className="text-xs px-1.5 py-0.5 rounded-full bg-white/20">
              {projects.filter(p => p.level === 'main').length}
            </span>
          </button>

          <button
            id="filter-level-mini"
            onClick={() => setLevelFilter('mini')}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
              levelFilter === 'mini'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-950'
                : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700'
            }`}
          >
            <Cpu className="w-4 h-4 text-emerald-300" />
            <span>Semester (Mini Projects)</span>
            <span className="text-xs px-1.5 py-0.5 rounded-full bg-white/20">
              {projects.filter(p => p.level === 'mini').length}
            </span>
          </button>
        </div>

        {/* Search and Domain Filters */}
        <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              id="project-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics (e.g. YOLO, ESP32, Flutter, Web3)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

          {/* Domain Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {domainsList.map((d) => (
              <button
                key={d.id}
                onClick={() => setDomainFilter(d.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  domainFilter === d.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'bg-slate-900/60 text-slate-400 border border-slate-800/80 hover:text-slate-200'
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isMain = project.level === 'main';
            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0c1424] border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 p-6 flex flex-col justify-between group shadow-xl hover:shadow-cyan-950/30"
              >
                <div>
                  {/* Card Header Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                        isMain
                          ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                          : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                      }`}
                    >
                      {isMain ? 'Final Year Main Project' : 'Semester Mini Project'}
                    </span>
                    
                    <span className="text-[11px] text-slate-400 font-medium">
                      {project.domainLabel}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="mt-2 text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Included Deliverables Preview */}
                  <div className="mt-5 pt-4 border-t border-slate-800/70 space-y-1.5">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Package Includes:
                    </div>
                    {project.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                  >
                    <span>View Syllabus & Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onBookProject(project)}
                    className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-md shadow-cyan-950 transition-all"
                  >
                    Book Project
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State if Search Fails */}
        {filteredProjects.length === 0 && (
          <div className="mt-12 text-center py-12 rounded-2xl bg-slate-900/40 border border-slate-800 p-8 max-w-lg mx-auto">
            <Search className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <h4 className="text-base font-bold text-white">No specific match found</h4>
            <p className="text-xs text-slate-400 mt-1">
              Have a custom project topic assigned by your college guide or department? We build custom topics from scratch!
            </p>
            <button
              onClick={onRequestCustomTopic}
              className="mt-4 px-4 py-2 rounded-lg bg-cyan-500 text-white text-xs font-bold shadow hover:bg-cyan-400 transition-colors"
            >
              Request Custom Topic Guidance
            </button>
          </div>
        )}

        {/* Custom Topic Callout Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#0d1c38] via-[#09152b] to-[#0d1c38] border border-cyan-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex-shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
                Have a Custom Topic or Specific University Guidelines?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-2xl">
                Got a custom IEEE base paper, special sensor module, or college-specific synopsis format? 
                Share your requirements with Tech Five. We build custom implementations tailored directly to your college review requirements.
              </p>
            </div>
          </div>

          <button
            id="custom-topic-request-cta"
            onClick={onRequestCustomTopic}
            className="whitespace-nowrap px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md flex-shrink-0"
          >
            Submit Custom Topic Requirements
          </button>
        </div>

      </div>
    </section>
  );
};
