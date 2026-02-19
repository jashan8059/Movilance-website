import React from 'react';
import { AUDIENCE } from '../constants';
import { Check } from 'lucide-react';

export const Audience: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50" id="audience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-movilance-navy">Built for Teams That Take Security Seriously</h2>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">Empowering every stakeholder in the facility ecosystem with role-specific tools.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUDIENCE.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-slate-200 hover:border-movilance-red/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-50">
                <div className="p-3 bg-red-50 rounded-xl text-movilance-red shadow-sm">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-800 text-lg">{item.role}</h3>
              </div>
              <ul className="space-y-4 flex-1">
                {item.benefits.map((benefit, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="mt-0.5 bg-green-50 rounded-full p-0.5">
                      <Check className="w-3 h-3 text-movilance-red" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};