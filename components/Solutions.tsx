import React from 'react';
import { SOLUTIONS } from '../constants';
import { Check, ArrowRight } from 'lucide-react';

export const Solutions: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100 scroll-mt-32" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <span className="text-movilance-red font-bold tracking-widest uppercase text-xs bg-red-50 px-3 py-1 rounded-full border border-red-100">Industry Verticals</span>
           <h2 className="text-3xl md:text-4xl font-bold text-movilance-navy mt-6 mb-4">Tailored Solutions for Every Facility</h2>
           <p className="text-lg text-slate-600">Whether you manage a high-rise residential complex or a high-security warehouse, Movilance adapts to your specific compliance needs.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
           {SOLUTIONS.map((sol, idx) => (
             <div key={idx} className="group flex flex-col sm:flex-row gap-6 p-8 rounded-2xl bg-white border border-slate-100 hover:border-movilance-red/30 hover:shadow-xl hover:shadow-movilance-navy/5 transition-all duration-300">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-movilance-red group-hover:border-movilance-red transition-all duration-300">
                    <sol.icon className="w-7 h-7 text-slate-600 group-hover:text-white transition-colors" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-movilance-navy transition-colors">{sol.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm">{sol.description}</p>
                  
                  <ul className="space-y-3">
                    {sol.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-600 group-hover/item:text-slate-800">
                        <Check className="w-4 h-4 text-movilance-red shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center gap-2 text-movilance-red text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                    <span>Explore solution</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};