/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StudentProjectsHub } from './components/StudentProjectsHub';
import { SoftwareServicesHub } from './components/SoftwareServicesHub';
import { ProjectEstimator } from './components/ProjectEstimator';
import { WhyTechFive } from './components/WhyTechFive';
import { TestimonialsAndFAQ } from './components/TestimonialsAndFAQ';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { InquiryModal } from './components/InquiryModal';
import { ComingSoon } from './components/ComingSoon';
import { STUDENT_PROJECTS } from './data/mockData';
import { StudentProject } from './types';
import { ArrowLeft, Sparkles, Clock } from 'lucide-react';

export default function App() {
  // Determine initial route based on browser pathname or hash
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const hash = window.location.hash;
      const search = window.location.search;
      if (
        path === '/upcoming' || 
        path.startsWith('/upcoming') || 
        hash === '#/upcoming' || 
        search.includes('view=upcoming')
      ) {
        return '/upcoming';
      }
    }
    return '/';
  });

  const [selectedProject, setSelectedProject] = useState<StudentProject | null>(null);
  const [inquiryModalState, setInquiryModalState] = useState<{
    isOpen: boolean;
    initialData?: {
      type?: string;
      projectTitle?: string;
    };
  }>({
    isOpen: false,
  });

  // Listen to browser forward/backward navigation and hash change
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      const search = window.location.search;
      if (
        path === '/upcoming' || 
        path.startsWith('/upcoming') || 
        hash === '#/upcoming' || 
        search.includes('view=upcoming')
      ) {
        setCurrentPath('/upcoming');
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateToUpcoming = () => {
    setCurrentPath('/upcoming');
    window.history.pushState(null, '', '/upcoming');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentPath('/');
    window.history.pushState(null, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (initialData?: { type?: string; projectTitle?: string }) => {
    setInquiryModalState({
      isOpen: true,
      initialData,
    });
  };

  const handleCloseInquiry = () => {
    setInquiryModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleSelectProject = (project: StudentProject) => {
    setSelectedProject(project);
  };

  const handleBookProject = (project: StudentProject) => {
    handleOpenInquiry({
      type: project.level === 'main' ? 'Final Year Main Project' : 'Semester Mini Project',
      projectTitle: project.title,
    });
  };

  const handleRequestCustomTopic = () => {
    handleOpenInquiry({
      type: 'Custom College Guide Topic',
      projectTitle: 'Custom University Requirement',
    });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // If user is at root '/', show the Coming Soon landing page with 1-month countdown!
  if (currentPath !== '/upcoming') {
    return (
      <>
        <ComingSoon
          onNavigateToUpcoming={navigateToUpcoming}
          onOpenInquiry={handleOpenInquiry}
        />

        <InquiryModal
          isOpen={inquiryModalState.isOpen}
          onClose={handleCloseInquiry}
          initialData={inquiryModalState.initialData}
        />
      </>
    );
  }

  // If user is at '/upcoming', show the full platform preview
  return (
    <div className="min-h-screen bg-[#080d18] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-cyan-500/30 selection:text-cyan-300">
      
      {/* Top Banner indicating Upcoming Platform Preview */}
      <div className="bg-gradient-to-r from-blue-950 via-cyan-950 to-slate-900 border-b border-cyan-500/30 py-2 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-cyan-200">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="font-semibold text-white">Upcoming Platform Preview:</span>
            <span className="text-slate-300">Official launch countdown active (1 month)</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={navigateToHome}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 hover:text-cyan-200 font-medium transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Countdown (/)</span>
            </button>
            <span className="text-slate-600 hidden sm:inline">&bull;</span>
            <span className="text-slate-400 font-mono text-[11px] hidden sm:inline">Path: /upcoming</span>
          </div>
        </div>
      </div>

      {/* Sticky Header Navigation */}
      <Navbar 
        onOpenInquiry={handleOpenInquiry} 
        onNavigateHome={navigateToHome}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreProjects={() => scrollToSection('student-projects')}
          onExploreServices={() => scrollToSection('software-services')}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* Student Projects Hub (Main & Mini) */}
        <StudentProjectsHub
          projects={STUDENT_PROJECTS}
          onSelectProject={handleSelectProject}
          onBookProject={handleBookProject}
          onRequestCustomTopic={handleRequestCustomTopic}
        />

        {/* Software Services Hub (Startups & MNCs) */}
        <SoftwareServicesHub onOpenInquiry={handleOpenInquiry} />

        {/* Transparent Interactive Project & Service Estimator */}
        <ProjectEstimator onOpenInquiry={handleOpenInquiry} />

        {/* Why Tech Five (5-Point Guarantee & 5-Step Process) */}
        <WhyTechFive />

        {/* Student & Client Testimonials + FAQ */}
        <TestimonialsAndFAQ />
      </main>

      {/* Footer */}
      <Footer 
        onOpenInquiry={handleOpenInquiry} 
        onNavigateHome={navigateToHome}
      />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onBook={handleBookProject}
      />

      <InquiryModal
        isOpen={inquiryModalState.isOpen}
        onClose={handleCloseInquiry}
        initialData={inquiryModalState.initialData}
      />
    </div>
  );
}
