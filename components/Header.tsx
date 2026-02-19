import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, LogIn, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from './Button';
import { useNavigate, useLocation } from 'react-router-dom';
import { MODULES } from '../constants';

interface HeaderProps {
  onOpenDemo: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileFeaturesOpen, setIsMobileFeaturesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getPath = (title: string) => {
    switch (title) {
      case "Visitor Movement": return '/solutions/visitor-movement';
      case "Vehicle Entry & Exit": return '/solutions/vehicle-entry-exit';
      case "Material Movement": return '/solutions/material-movement';
      case "Courier Management": return '/solutions/courier-management';
      case "Asset Tracking": return '/solutions/asset-tracking';
      case "Cash Purchase": return '/solutions/cash-purchase';
      case "Incident Reporting": return '/solutions/incident-reporting';
      case "Lockers & Keys": return '/solutions/lockers-and-keys';
      case "Central Directories": return '/solutions/central-directories';
      case "Compliance & Audit": return '/solutions/compliance-and-audit';
      case "ERP Integration": return '/solutions/erp-integration';
      case "Variance Control": return '/solutions/variance-control';
      default: return '/';
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    
    if (href.startsWith('#')) {
      if (location.pathname === '/') {
        const element = document.querySelector(href);
        if (element) {
          setIsMobileMenuOpen(false);
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      } else {
        setIsMobileMenuOpen(false);
        navigate({ pathname: '/', hash: href });
      }
    } else {
      setIsMobileMenuOpen(false);
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo(0, 0);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-white/80 backdrop-blur-sm py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={handleLogoClick}
          >
            <div className="bg-movilance-red p-1.5 rounded-lg shadow-sm group-hover:bg-red-700 transition-colors">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-movilance-navy group-hover:text-slate-900 transition-colors">
              Movilance
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            
            {/* Features Mega Menu */}
            <div className="group relative">
                <button 
                    onClick={(e) => handleNavClick(e, '/#features')}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 hover:text-movilance-red hover:bg-slate-50 rounded-lg transition-all"
                >
                    Features <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                
                {/* Dropdown Container */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[800px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out transform group-hover:translate-y-0 translate-y-2">
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 overflow-hidden">
                        <div className="grid grid-cols-3 gap-4">
                            {MODULES.map((mod, idx) => (
                                <div 
                                    key={idx}
                                    onClick={(e) => handleNavClick(e, getPath(mod.title))}
                                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors group/item"
                                >
                                    <div className="mt-1 w-8 h-8 rounded-lg bg-red-50 text-movilance-red flex items-center justify-center shrink-0 group-hover/item:bg-movilance-red group-hover/item:text-white transition-colors">
                                        <mod.icon className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-800 group-hover/item:text-movilance-red transition-colors flex items-center gap-1">
                                            {mod.title}
                                        </h4>
                                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{mod.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center bg-slate-50 -mx-6 -mb-6 px-6 py-4">
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Explore the full suite</span>
                            <button 
                                onClick={(e) => handleNavClick(e, '/#features')}
                                className="text-sm font-bold text-movilance-red hover:text-red-700 flex items-center gap-1"
                            >
                                View All Features <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <a 
              href="#how-it-works"
              onClick={(e) => handleNavClick(e, '#how-it-works')}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-movilance-red hover:bg-slate-50 rounded-lg transition-all"
            >
              How it Works
            </a>
            <a 
              href="#solutions"
              onClick={(e) => handleNavClick(e, '#solutions')}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-movilance-red hover:bg-slate-50 rounded-lg transition-all"
            >
              Solutions
            </a>
            
            <button 
              onClick={() => navigate('/login')}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-movilance-navy transition-colors"
            >
              Log in
            </button>

            <div className="ml-2 pl-4 border-l border-slate-200">
               <Button size="sm" variant="primary" onClick={onOpenDemo}>Book Demo</Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`
        absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl md:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${isMobileMenuOpen ? 'max-h-[85vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}
      `}>
        <div className="p-4 flex flex-col gap-2">
          
          {/* Mobile Features Accordion */}
          <div>
              <button 
                onClick={() => setIsMobileFeaturesOpen(!isMobileFeaturesOpen)}
                className="w-full text-slate-700 font-medium py-3 px-4 hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between group"
              >
                Features
                <ChevronDown className={`w-4 h-4 transition-transform ${isMobileFeaturesOpen ? 'rotate-180 text-movilance-red' : ''}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${isMobileFeaturesOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="bg-slate-50 rounded-xl p-2 mt-2 grid grid-cols-1 gap-1">
                      {MODULES.map((mod, idx) => (
                          <div 
                            key={idx}
                            onClick={(e) => handleNavClick(e, getPath(mod.title))}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white active:bg-white cursor-pointer transition-colors"
                          >
                              <mod.icon className="w-4 h-4 text-movilance-red" />
                              <span className="text-sm font-medium text-slate-700">{mod.title}</span>
                          </div>
                      ))}
                  </div>
              </div>
          </div>

          <a 
            href="#how-it-works"
            className="text-slate-700 font-medium py-3 px-4 hover:bg-slate-50 hover:text-movilance-red rounded-lg transition-colors flex items-center justify-between"
            onClick={(e) => handleNavClick(e, '#how-it-works')}
          >
            How it Works
          </a>
          <a 
            href="#solutions"
            className="text-slate-700 font-medium py-3 px-4 hover:bg-slate-50 hover:text-movilance-red rounded-lg transition-colors flex items-center justify-between"
            onClick={(e) => handleNavClick(e, '#solutions')}
          >
            Solutions
          </a>

          <div className="h-px bg-slate-100 my-2"></div>
          
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              navigate('/login');
            }}
            className="w-full text-left text-slate-700 font-medium py-3 px-4 hover:bg-slate-50 hover:text-movilance-navy rounded-lg transition-colors flex items-center gap-2"
          >
            <LogIn className="w-4 h-4" /> Log in
          </button>

          <Button fullWidth onClick={() => {
            setIsMobileMenuOpen(false);
            onOpenDemo();
          }}>Book Demo</Button>
        </div>
      </div>
    </header>
  );
};