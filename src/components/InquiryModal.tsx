import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  GraduationCap, 
  Building2 
} from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    type?: string;
    projectTitle?: string;
  };
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const [clientType, setClientType] = useState<'student' | 'company'>('student');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    institution: '',
    serviceType: 'Final Year Main Project',
    notes: '',
    deadline: 'Within 2-3 Weeks',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (initialData?.type) {
      if (initialData.type.toLowerCase().includes('startup') || initialData.type.toLowerCase().includes('mnc') || initialData.type.toLowerCase().includes('enterprise') || initialData.type.toLowerCase().includes('software')) {
        setClientType('company');
        setFormData((prev) => ({
          ...prev,
          serviceType: initialData.type || 'Startup MVP Development',
          notes: initialData.projectTitle ? `Interested in: ${initialData.projectTitle}` : prev.notes,
        }));
      } else {
        setClientType('student');
        setFormData((prev) => ({
          ...prev,
          serviceType: initialData.type || 'Final Year Main Project',
          notes: initialData.projectTitle ? `Interested in: ${initialData.projectTitle}` : prev.notes,
        }));
      }
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const getWhatsAppDirectLink = () => {
    const text = `*New Tech Five Inquiry*\n` +
      `• Name: ${formData.name || 'Student/Client'}\n` +
      `• Role: ${clientType === 'student' ? 'Student' : 'Company/Startup'}\n` +
      `• College/Company: ${formData.institution || 'Not specified'}\n` +
      `• Requirement: ${formData.serviceType}\n` +
      `• Deadline: ${formData.deadline}\n` +
      `• Notes: ${formData.notes || 'Looking for details and consultation'}`;
    return `https://wa.me/919400000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#091122] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl shadow-cyan-950 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Quick Project Consultation</span>
              </div>
              <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-white">
                Book Project / Request Service
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Fill out your details below or connect directly on WhatsApp for an immediate response from our technical team.
              </p>
            </div>

            {/* Client Category Tabs */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              <button
                type="button"
                onClick={() => {
                  setClientType('student');
                  setFormData((prev) => ({ ...prev, serviceType: 'Final Year Main Project' }));
                }}
                className={`py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  clientType === 'student'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>I am a Student (Main / Mini)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setClientType('company');
                  setFormData((prev) => ({ ...prev, serviceType: 'Startup MVP Development' }));
                }}
                className={`py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  clientType === 'company'
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/50 shadow-sm'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Startup or MNC Client</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="e.g. rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {clientType === 'student' ? 'College / University & Branch' : 'Company or Startup Name'}
                  </label>
                  <input
                    type="text"
                    placeholder={clientType === 'student' ? 'e.g. VTU, CSE 8th Sem' : 'e.g. Acme Tech Solutions'}
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Requirement Type
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
                  >
                    {clientType === 'student' ? (
                      <>
                        <option value="Final Year Main Project">Final Year Main Project (IEEE)</option>
                        <option value="Semester Mini Project">Semester Mini Project (Fast-Track)</option>
                        <option value="Hardware / IoT Embedded Project">Hardware / IoT Embedded Project</option>
                        <option value="Custom Topic from College Guide">Custom Topic from College Guide</option>
                        <option value="Documentation & Viva Coaching Only">Documentation & Viva Coaching Only</option>
                      </>
                    ) : (
                      <>
                        <option value="Startup MVP Development">Startup MVP in 2–4 Weeks</option>
                        <option value="Custom Web / SaaS Application">Custom Web / SaaS Application</option>
                        <option value="Cross-Platform Mobile App">Cross-Platform Mobile App</option>
                        <option value="MNC Module Outsourcing">MNC Module Outsourcing</option>
                        <option value="API & Backend Integration">API & Backend Integration</option>
                      </>
                    )}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Submission Deadline
                  </label>
                  <select
                    value={formData.deadline}
                    onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="Urgent (Within 48-72 Hours)">Urgent (Within 48-72 Hours)</option>
                    <option value="Within 1 Week">Within 1 Week</option>
                    <option value="Within 2-3 Weeks">Within 2-3 Weeks</option>
                    <option value="1 Month or More">1 Month or More</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Project Topic / Guidelines / Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Specify domain preference (AI/ML, IoT, Web, etc.), specific IEEE paper title if any, or company software specifications..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-950 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Submitting Details...' : 'Submit Inquiry'}</span>
                </button>

                <a
                  href={getWhatsAppDirectLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-3 rounded-xl bg-emerald-950 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/60 font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Send via WhatsApp</span>
                </a>
              </div>

              <div className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Your information is strictly confidential &bull; NDA protected</span>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">
              Inquiry Received Successfully!
            </h3>

            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Thank you, <strong className="text-white">{formData.name}</strong>. A Tech Five engineering coordinator will review your requirement ({formData.serviceType}) and contact you via WhatsApp/Phone within 30 minutes.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-left max-w-md mx-auto space-y-1.5">
              <div className="text-slate-400">Reference ID: <span className="text-cyan-400 font-mono">T5-{Math.floor(100000 + Math.random() * 900000)}</span></div>
              <div className="text-slate-400">Target Deadline: <span className="text-white">{formData.deadline}</span></div>
              <div className="text-slate-400">Free remote consultation & setup: <span className="text-emerald-400 font-medium">Included</span></div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={getWhatsAppDirectLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open Instant WhatsApp Chat</span>
              </a>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
              >
                Done / Back to Website
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
