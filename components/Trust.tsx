import React from 'react';
import { BENEFITS } from '../constants';
import { Shield, Lock, Globe, Server } from 'lucide-react';

export const Trust: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {BENEFITS.map((benefit, idx) => (
            <div key={idx} className="space-y-3 relative pl-6 border-l-2 border-slate-100 hover:border-movilance-red transition-colors duration-300">
              <h3 className="text-xl font-bold text-movilance-navy">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators - Light Theme */}
        <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-2xl">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,#f1f5f9_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-50"></div>
            
            {/* Top Red Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-movilance-red via-red-500 to-orange-400"></div>

            <div className="relative z-10 px-8 py-16 md:p-16 text-center">
                <div className="inline-block mb-8 p-3 rounded-full bg-red-50 border border-red-100 shadow-md">
                    <Shield className="w-8 h-8 text-movilance-red" />
                </div>
                
                <h3 className="text-3xl font-bold mb-4 text-movilance-navy">Enterprise-Grade Security Infrastructure</h3>
                <p className="text-slate-600 mb-12 max-w-2xl mx-auto">Built for facilities that require uncompromising vigilance and global compliance standards.</p>

                <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100 border-t border-slate-100 pt-12">
                    <div className="px-4">
                        <div className="flex justify-center mb-4 text-movilance-red">
                            <Lock className="w-8 h-8" />
                        </div>
                        <h4 className="font-bold text-lg mb-2 text-slate-800">Audit-Ready Logs</h4>
                        <p className="text-sm text-slate-500">Immutable historical data available instantly for compliance checks.</p>
                    </div>
                    <div className="px-4 pt-8 md:pt-0">
                        <div className="flex justify-center mb-4 text-movilance-red">
                            <Globe className="w-8 h-8" />
                        </div>
                        <h4 className="font-bold text-lg mb-2 text-slate-800">Global Compliance</h4>
                        <p className="text-sm text-slate-500">Designed to meet international security and data privacy standards.</p>
                    </div>
                    <div className="px-4 pt-8 md:pt-0">
                         <div className="flex justify-center mb-4 text-movilance-red">
                            <Server className="w-8 h-8" />
                        </div>
                        <h4 className="font-bold text-lg mb-2 text-slate-800">Secure Cloud</h4>
                        <p className="text-sm text-slate-500">99.9% uptime with encrypted data storage and transmission.</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};