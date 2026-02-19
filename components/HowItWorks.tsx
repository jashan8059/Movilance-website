import React from 'react';
import { HOW_IT_WORKS } from '../constants';
import { ArrowDown } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden scroll-mt-32" id="how-it-works">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-movilance-navy tracking-tight">How Movilance Works</h2>
          <p className="text-slate-600 mt-4 text-lg">Security made simple in three steps.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-slate-200 via-movilance-red/30 to-slate-200 z-0"></div>

          {HOW_IT_WORKS.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              
              {/* Step Number Circle */}
              <div className="w-32 h-32 rounded-full bg-white border-8 border-slate-100 flex items-center justify-center mb-8 shadow-xl relative transition-transform duration-500 group-hover:scale-105 group-hover:border-movilance-red/20">
                <div className="absolute inset-0 rounded-full border border-movilance-red/20 opacity-0 group-hover:opacity-100 animate-ping"></div>
                <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-movilance-red to-orange-500">{step.number}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-movilance-red transition-colors">{step.title}</h3>
              <p className="text-slate-600 text-base leading-relaxed max-w-xs">{step.description}</p>
              
              {/* Mobile Arrow */}
              {idx !== HOW_IT_WORKS.length - 1 && (
                <div className="md:hidden my-8 flex justify-center w-full">
                  <ArrowDown className="w-6 h-6 text-slate-400 animate-bounce" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};