import React from 'react';
import { X, Check, FileWarning, ShieldCheck } from 'lucide-react';
import { WHAT_IS_MOVILANCE } from '../constants';

export const About: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="about">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* What Is Movilance */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">{WHAT_IS_MOVILANCE.heading}</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {WHAT_IS_MOVILANCE.description}
          </p>
        </div>

        {/* Why Exists - Problem vs Solution */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Without Movilance */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            {/* Subtle chaos pattern background */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#64748b_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform rotate-12">
              <FileWarning className="w-32 h-32 text-slate-800" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-slate-700 mb-8 flex items-center gap-3">
                <span className="bg-slate-100 p-2 rounded-lg text-slate-500 border border-slate-200"><X className="w-5 h-5" /></span>
                Without Movilance
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 text-slate-600 group/item">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-400 group-hover/item:scale-150 transition-transform flex-shrink-0"></span>
                  <span>Manual paper registers prone to errors</span>
                </li>
                <li className="flex items-start gap-4 text-slate-600 group/item">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-400 group-hover/item:scale-150 transition-transform flex-shrink-0"></span>
                  <span>Scattered systems across departments</span>
                </li>
                <li className="flex items-start gap-4 text-slate-600 group/item">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-400 group-hover/item:scale-150 transition-transform flex-shrink-0"></span>
                  <span>Missing audit trails and blind spots</span>
                </li>
                <li className="flex items-start gap-4 text-slate-600 group/item">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-400 group-hover/item:scale-150 transition-transform flex-shrink-0"></span>
                  <span>Compliance risks and security gaps</span>
                </li>
                <li className="flex items-start gap-4 text-slate-600 group/item">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-400 group-hover/item:scale-150 transition-transform flex-shrink-0"></span>
                  <span>Delayed incident response</span>
                </li>
              </ul>
            </div>
          </div>

          {/* With Movilance */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl shadow-red-900/5 relative overflow-hidden transform md:scale-105 border-2 border-movilance-red group">
             {/* Tech pattern background */}
             <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(45deg,#dc2626_25%,transparent_25%,transparent_75%,#dc2626_75%,#dc2626),linear-gradient(45deg,#dc2626_25%,transparent_25%,transparent_75%,#dc2626_75%,#dc2626)] [background-size:20px_20px] [background-position:0_0,10px_10px]"></div>
             
             <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform -rotate-12">
              <ShieldCheck className="w-40 h-40 text-movilance-red" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-movilance-navy mb-8 flex items-center gap-3">
                <span className="bg-movilance-red p-2 rounded-lg text-white shadow-lg"><Check className="w-5 h-5" /></span>
                With Movilance
              </h3>
              <ul className="space-y-4">
                 <li className="flex items-start gap-4 text-slate-600">
                  <Check className="w-5 h-5 text-movilance-red shrink-0 mt-0.5" />
                  <span><strong className="text-movilance-navy">Digital logging</strong> with zero errors</span>
                </li>
                <li className="flex items-start gap-4 text-slate-600">
                  <Check className="w-5 h-5 text-movilance-red shrink-0 mt-0.5" />
                  <span><strong className="text-movilance-navy">One unified platform</strong> for all movements</span>
                </li>
                <li className="flex items-start gap-4 text-slate-600">
                  <Check className="w-5 h-5 text-movilance-red shrink-0 mt-0.5" />
                  <span><strong className="text-movilance-navy">Complete audit trails</strong> and visibility</span>
                </li>
                <li className="flex items-start gap-4 text-slate-600">
                  <Check className="w-5 h-5 text-movilance-red shrink-0 mt-0.5" />
                  <span><strong className="text-movilance-navy">Compliance-ready</strong> documentation</span>
                </li>
                <li className="flex items-start gap-4 text-slate-600">
                  <Check className="w-5 h-5 text-movilance-red shrink-0 mt-0.5" />
                  <span><strong className="text-movilance-navy">Real-time alerts</strong> and rapid response</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};