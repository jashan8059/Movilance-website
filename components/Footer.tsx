import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { useNavigate, useLocation } from 'react-router-dom';

interface FooterProps {
  onOpenDemo: () => void;
  onContactTeam: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo, onContactTeam }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (path === '/' && location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        navigate(path);
        window.scrollTo(0, 0);
    }
  };

  const handleScrollLink = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate({ pathname: '/', hash: href });
    } else {
       const element = document.querySelector(href);
       if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
       }
    }
  };

  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200">
      {/* Pre-footer CTA */}
      <div className="relative overflow-hidden bg-slate-50/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-red-50/50 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-movilance-navy mb-6 tracking-tight">Ready to secure your facility?</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Join the facilities that have upgraded to real-time vigilance, automated compliance, and absolute peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
             <Button size="lg" variant="primary" className="px-10" onClick={onOpenDemo}>Book a Demo</Button>
             <Button size="lg" variant="secondary" onClick={onContactTeam}>
               Talk to Our Team
             </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1 space-y-4">
              <a 
                href="/"
                className="flex items-center gap-2 cursor-pointer group"
                onClick={(e) => handleNav(e, '/')}
              >
                 <div className="bg-movilance-red p-1 rounded-md group-hover:bg-red-700 transition-colors">
                   <Shield className="w-5 h-5 text-white" />
                 </div>
                 <span className="text-xl font-bold text-movilance-navy tracking-tight group-hover:text-slate-900 transition-colors">Movilance</span>
              </a>
              <p className="text-sm text-slate-500 leading-relaxed">
                The enterprise standard for facility movement and vigilance. Monitor, control, and audit with precision.
              </p>
            </div>
            
            <div>
              <h4 className="text-movilance-navy font-semibold mb-6 text-sm uppercase tracking-wider">Platform</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#features" onClick={(e) => handleScrollLink(e, '#features')} className="hover:text-movilance-red transition-colors flex items-center gap-2 group cursor-pointer"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0 text-movilance-red" /> Features</a></li>
                <li><a href="#how-it-works" onClick={(e) => handleScrollLink(e, '#how-it-works')} className="hover:text-movilance-red transition-colors flex items-center gap-2 group cursor-pointer"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0 text-movilance-red" /> How it Works</a></li>
                <li><a href="#solutions" onClick={(e) => handleScrollLink(e, '#solutions')} className="hover:text-movilance-red transition-colors flex items-center gap-2 group cursor-pointer"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0 text-movilance-red" /> Solutions</a></li>
              </ul>
            </div>

            <div>
               <h4 className="text-movilance-navy font-semibold mb-6 text-sm uppercase tracking-wider">Company</h4>
               <ul className="space-y-3 text-sm">
                <li><a href="/about-us" onClick={(e) => handleNav(e, '/about-us')} className="hover:text-movilance-red transition-colors block cursor-pointer">About Us</a></li>
                <li><a href="/security-standards" onClick={(e) => handleNav(e, '/security-standards')} className="hover:text-movilance-red transition-colors block cursor-pointer">Security Standards</a></li>
                <li><a href="/careers" onClick={(e) => handleNav(e, '/careers')} className="hover:text-movilance-red transition-colors block cursor-pointer">Careers</a></li>
                <li><button onClick={onContactTeam} className="hover:text-movilance-red transition-colors text-left">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-movilance-navy font-semibold mb-6 text-sm uppercase tracking-wider">Contact</h4>
              <div className="space-y-3 text-sm text-slate-500">
                <p>hello@movilance.com</p>
                <p>+91 80108 80109</p>
                <p className="pt-4">
                  6th Floor, Magnus Tower,<br />
                  Sector 73, Noida,<br />
                  UP 201301 INDIA
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>&copy; 2026 Movilance. All rights reserved.</p>
            
            <div className="flex items-center">
              <span className="text-slate-400">Built at</span>
              <a href="https://alpheric.com" target="_blank" rel="noopener noreferrer" className="ml-1 font-mono font-bold text-movilance-red hover:text-red-700 transition-colors">{'</Alpheric>'}</a>
            </div>

            <div className="flex gap-6">
              <a href="/privacy-policy" onClick={(e) => handleNav(e, '/privacy-policy')} className="hover:text-movilance-navy cursor-pointer">Privacy Policy</a>
              <a href="/terms-of-service" onClick={(e) => handleNav(e, '/terms-of-service')} className="hover:text-movilance-navy cursor-pointer">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};