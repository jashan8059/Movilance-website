import React from 'react';
import { MODULES } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Modules: React.FC = () => {
  const navigate = useNavigate();

  const handleModuleClick = (title: string) => {
    if (title === "Visitor Movement") {
      navigate('/solutions/visitor-movement');
      window.scrollTo(0, 0);
    } else if (title === "Vehicle Entry & Exit") {
      navigate('/solutions/vehicle-entry-exit');
      window.scrollTo(0, 0);
    } else if (title === "Material Movement") {
      navigate('/solutions/material-movement');
      window.scrollTo(0, 0);
    } else if (title === "Courier Management") {
      navigate('/solutions/courier-management');
      window.scrollTo(0, 0);
    } else if (title === "Asset Tracking") {
      navigate('/solutions/asset-tracking');
      window.scrollTo(0, 0);
    } else if (title === "Cash Purchase") {
      navigate('/solutions/cash-purchase');
      window.scrollTo(0, 0);
    } else if (title === "Incident Reporting") {
      navigate('/solutions/incident-reporting');
      window.scrollTo(0, 0);
    } else if (title === "Lockers & Keys") {
      navigate('/solutions/lockers-and-keys');
      window.scrollTo(0, 0);
    } else if (title === "Central Directories") {
      navigate('/solutions/central-directories');
      window.scrollTo(0, 0);
    } else if (title === "Compliance & Audit") {
      navigate('/solutions/compliance-and-audit');
      window.scrollTo(0, 0);
    } else if (title === "ERP Integration") {
      navigate('/solutions/erp-integration');
      window.scrollTo(0, 0);
    } else if (title === "Variance Control") {
      navigate('/solutions/variance-control');
      window.scrollTo(0, 0);
    }
  };

  const isClickable = (title: string) => {
    return [
      "Visitor Movement", 
      "Vehicle Entry & Exit", 
      "Material Movement", 
      "Courier Management",
      "Asset Tracking",
      "Cash Purchase",
      "Incident Reporting",
      "Lockers & Keys",
      "Central Directories",
      "Compliance & Audit",
      "ERP Integration",
      "Variance Control"
    ].includes(title);
  };

  return (
    <section className="py-32 bg-white scroll-mt-32" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-movilance-red font-bold tracking-widest uppercase text-xs bg-red-50 px-3 py-1 rounded-full border border-red-100">Comprehensive Coverage</span>
          <h2 className="text-3xl md:text-4xl font-bold text-movilance-navy mt-6 mb-4">One Platform. All Movements.</h2>
          <p className="text-lg text-slate-600">
            Eliminate fragmentation. Control every entry, exit, and asset movement from a centralized command center.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MODULES.map((mod, idx) => {
            const clickable = isClickable(mod.title);
            return (
              <div 
                key={idx} 
                onClick={() => handleModuleClick(mod.title)}
                className={`
                  group relative p-8 rounded-2xl border border-slate-100 bg-white 
                  hover:border-movilance-red/20 shadow-sm hover:shadow-xl hover:shadow-movilance-navy/5 
                  transition-all duration-300 flex flex-col h-full
                  ${clickable ? 'cursor-pointer' : ''}
                `}
              >
                
                {clickable && (
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5 text-movilance-red" />
                  </div>
                )}

                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-movilance-red group-hover:text-white transition-all duration-300 border border-slate-100 group-hover:border-movilance-red">
                  <mod.icon className="w-7 h-7 text-slate-600 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-movilance-navy transition-colors">{mod.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{mod.description}</p>
                
                {/* Bottom decorative line */}
                <div className="mt-auto pt-6">
                  <div className="h-1 w-12 bg-slate-100 group-hover:w-full group-hover:bg-movilance-red/10 rounded-full transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
