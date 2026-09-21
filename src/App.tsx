/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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
import { STUDENT_PROJECTS } from './data/mockData';
import { StudentProject } from './types';

export default function App() {
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

  return (
    <div className="min-h-screen bg-[#080d18] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-cyan-500/30 selection:text-cyan-300">
      {/* Sticky Header Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

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
      <Footer onOpenInquiry={handleOpenInquiry} />

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
