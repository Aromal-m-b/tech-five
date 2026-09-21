export type ProjectLevel = 'all' | 'main' | 'mini' | 'research';

export type TechDomain = 
  | 'all'
  | 'ai_ml'
  | 'web_fullstack'
  | 'mobile_apps'
  | 'iot_embedded'
  | 'cloud_cyber'
  | 'blockchain';

export interface StudentProject {
  id: string;
  title: string;
  tagline: string;
  level: 'main' | 'mini';
  domain: TechDomain;
  domainLabel: string;
  techStack: string[];
  description: string;
  deliverables: string[];
  durationWeeks: number;
  highlight: string;
  idealFor: string[];
}

export interface SoftwareService {
  id: string;
  title: string;
  tagline: string;
  category: 'startup_mvp' | 'enterprise_mnc' | 'custom_software';
  features: string[];
  technologies: string[];
  turnaround: string;
  deliverables: string[];
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  type: 'student' | 'startup' | 'mnc';
  content: string;
  rating: number;
  projectOrService: string;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'student' | 'company' | 'general';
}
