import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MODULES } from '../constants';
import { ArrowRight } from 'lucide-react';

export const SolutionNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

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

  const currentPath = location.pathname;

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h2 className="text-2xl font-bold text-movilance-navy">Explore Other Modules</h2>
           <p className="text-slate-500 mt-2">Comprehensive facility vigilance suite.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {MODULES.map((mod, idx) => {
            const path = getPath(mod.title);
            if (path === currentPath) return null;

            return (
              <div 
                key={idx} 
                onClick={() => {
                  navigate(path);
                  window.scrollTo(0, 0);
                }}
                className="group flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-white hover:border-movilance-red/30 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-500 group-hover:bg-movilance-red group-hover:text-white transition-colors shrink-0 border border-slate-100 group-hover:border-movilance-red">
                  <mod.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                   <h3 className="font-semibold text-slate-800 text-sm truncate group-hover:text-movilance-navy transition-colors">{mod.title}</h3>
                   <div className="flex items-center gap-1 text-xs text-movilance-red opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                     <span>View</span>
                     <ArrowRight className="w-3 h-3" />
                   </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};