import React from 'react';
import { Shield, Target, Users } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-movilance-navy mb-6">Securing the Physical World with Digital Intelligence</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Movilance is on a mission to transform how enterprises manage, monitor, and secure their physical spaces.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
           <div>
              <h2 className="text-2xl font-bold text-movilance-navy mb-4">Our Story</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  In a world where digital security is cutting-edge, physical security often remains stuck in the past—reliant on paper logs, fragmented systems, and manual checks.
                </p>
                <p>
                  Movilance was born from a simple observation: <strong>Visibility is the key to security.</strong> We set out to build a unified operating system for facility vigilance that brings every movement—visitor, vehicle, or asset—into a single, real-time digital dashboard.
                </p>
                <p>
                  Today, we empower security teams at Fortune 500 companies, large residential townships, and critical infrastructure sites to operate with precision and peace of mind.
                </p>
              </div>
           </div>
           <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="grid grid-cols-1 gap-6">
                 <div className="flex gap-4">
                    <div className="bg-red-50 p-3 rounded-lg h-fit text-movilance-red"><Shield className="w-6 h-6"/></div>
                    <div>
                        <h3 className="font-bold text-movilance-navy">Safety First</h3>
                        <p className="text-sm text-slate-600">We believe every entry and exit matters.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="bg-red-50 p-3 rounded-lg h-fit text-movilance-red"><Target className="w-6 h-6"/></div>
                    <div>
                        <h3 className="font-bold text-movilance-navy">Precision</h3>
                        <p className="text-sm text-slate-600">Zero error tolerance in compliance and logging.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="bg-red-50 p-3 rounded-lg h-fit text-movilance-red"><Users className="w-6 h-6"/></div>
                    <div>
                        <h3 className="font-bold text-movilance-navy">Empowerment</h3>
                        <p className="text-sm text-slate-600">Giving security guards the best technology tools.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};