import React, { useState } from 'react';
import { TESTIMONIALS, FAQS } from '../data/mockData';
import { 
  Star, 
  Quote, 
  ChevronDown, 
  HelpCircle, 
  GraduationCap, 
  Building2, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const TestimonialsAndFAQ: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [testimonialFilter, setTestimonialFilter] = useState<'all' | 'student' | 'startup'>('all');

  const filteredTestimonials = TESTIMONIALS.filter((t) => {
    if (testimonialFilter === 'all') return true;
    return t.type === testimonialFilter;
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-20 bg-[#080d1a] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-4">
            <Star className="w-4 h-4 text-cyan-400 fill-cyan-400" />
            <span>Success Stories & Ratings</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight">
            Hear From Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Students & Founders</span>
          </h2>
          
          <p className="mt-3 text-slate-300 text-sm">
            Read authentic experiences from college graduates who cleared their final vivas with distinction and startups that scaled their MVPs with Tech Five.
          </p>

          {/* Testimonial Filter Switch */}
          <div className="mt-6 inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
            <button
              onClick={() => setTestimonialFilter('all')}
              className={`px-4 py-1.5 rounded-lg font-medium transition-all ${
                testimonialFilter === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Reviews
            </button>
            <button
              onClick={() => setTestimonialFilter('student')}
              className={`px-4 py-1.5 rounded-lg font-medium transition-all ${
                testimonialFilter === 'student'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Student Projects
            </button>
            <button
              onClick={() => setTestimonialFilter('startup')}
              className={`px-4 py-1.5 rounded-lg font-medium transition-all ${
                testimonialFilter === 'startup'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Startups & MVPs
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0c1426] border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                    {item.projectOrService}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{item.content}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border border-cyan-500/40"
                  loading="lazy"
                />
                <div>
                  <div className="text-sm font-bold text-white font-['Space_Grotesk']">
                    {item.name}
                  </div>
                  <div className="text-xs text-cyan-400">
                    {item.role}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {item.affiliation}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-3">
              <HelpCircle className="w-4 h-4 text-blue-400" />
              <span>Everything You Need to Know</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-white">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-xl transition-all border overflow-hidden ${
                    isOpen
                      ? 'bg-slate-900/90 border-cyan-500/40 shadow-lg'
                      : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-cyan-400 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
