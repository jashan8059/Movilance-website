import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Shield, Loader2, MessageSquare } from 'lucide-react';
import { Button } from './Button';

interface BookDemoModalProps {
  isOpen: boolean;
  mode?: 'demo' | 'contact';
  onClose: () => void;
}

export const BookDemoModal: React.FC<BookDemoModalProps> = ({ isOpen, mode = 'demo', onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: 'Security Head',
    message: ''
  });

  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      setStep('form');
      setFormData(prev => ({ ...prev, message: '' }));
    }
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setStep('success');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (!isOpen) return null;

  const isDemo = mode === 'demo';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {step === 'form' ? (
            <>
              <div className="mb-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-50 text-movilance-red mb-4">
                  {isDemo ? <Shield className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  {isDemo ? "Schedule Your Demo" : "Talk to Our Team"}
                </h2>
                <p className="text-slate-500 mt-2 text-sm">
                  {isDemo 
                    ? "See how Movilance brings total vigilance to your facility."
                    : "Have questions about integration, pricing, or compliance?"}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-movilance-red focus:ring-2 focus:ring-movilance-red/20 outline-none transition-all placeholder:text-slate-400 text-slate-900 bg-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-movilance-red focus:ring-2 focus:ring-movilance-red/20 outline-none transition-all placeholder:text-slate-400 text-slate-900 bg-white"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-movilance-red focus:ring-2 focus:ring-movilance-red/20 outline-none transition-all placeholder:text-slate-400 text-slate-900 bg-white"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-1.5">Role</label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-movilance-red focus:ring-2 focus:ring-movilance-red/20 outline-none transition-all text-slate-900 bg-white"
                    >
                      <option>Security Head</option>
                      <option>Facility Manager</option>
                      <option>IT / Admin</option>
                      <option>Executive</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {!isDemo && (
                   <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">How can we help?</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-movilance-red focus:ring-2 focus:ring-movilance-red/20 outline-none transition-all placeholder:text-slate-400 text-slate-900 bg-white resize-none"
                      placeholder="I'm interested in..."
                    />
                  </div>
                )}

                <div className="pt-2">
                  <Button fullWidth type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                      </span>
                    ) : (
                      isDemo ? "Confirm Booking" : "Send Inquiry"
                    )}
                  </Button>
                  <p className="text-center text-xs text-slate-400 mt-4">
                    By clicking submit, you agree to our privacy policy.
                  </p>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-8 animate-in fade-in zoom-in-95 duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
              <p className="text-slate-500 mb-8 max-w-xs mx-auto">
                Thank you, {formData.name.split(' ')[0]}. {isDemo ? "Our security experts will contact you shortly to schedule your demo." : "We'll get back to you within 24 hours."}
              </p>
              <Button variant="secondary" onClick={onClose}>Close Window</Button>
            </div>
          )}
        </div>
        
        {/* Bottom decorative bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-movilance-red via-red-500 to-orange-400"></div>
      </div>
    </div>
  );
};