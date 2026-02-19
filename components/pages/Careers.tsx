import React from 'react';
import { Rocket, Heart, Zap, ArrowRight } from 'lucide-react';
import { Button } from '../Button';

export const Careers: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-movilance-navy mb-6">Build the Future of Physical Security</h1>
          <p className="text-xl text-slate-600">
            Join a team that is redefining how the world moves. We are looking for builders, thinkers, and problem solvers.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
            <div className="text-center p-6">
                <div className="w-12 h-12 bg-red-50 text-movilance-red rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-movilance-navy">Move Fast</h3>
                <p className="text-slate-600">We iterate quickly to solve complex real-world problems.</p>
            </div>
             <div className="text-center p-6">
                <div className="w-12 h-12 bg-red-50 text-movilance-red rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-movilance-navy">Customer Obsessed</h3>
                <p className="text-slate-600">We build what our customers need to feel safe and secure.</p>
            </div>
             <div className="text-center p-6">
                <div className="w-12 h-12 bg-red-50 text-movilance-red rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-movilance-navy">Impact Driven</h3>
                <p className="text-slate-600">Your work directly affects the safety of thousands of people.</p>
            </div>
        </div>

        {/* Open Roles */}
        <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-movilance-navy mb-8 border-b border-slate-200 pb-4">Open Positions</h2>
            
            <div className="space-y-4">
                {/* Job 1 */}
                <div className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-xl border border-slate-200 hover:border-movilance-red/30 hover:shadow-md transition-all cursor-pointer">
                    <div>
                        <h3 className="font-bold text-lg text-slate-800 group-hover:text-movilance-red transition-colors">Senior Frontend Engineer</h3>
                        <p className="text-slate-500 text-sm mt-1">Remote / Noida • Engineering</p>
                    </div>
                    <div className="mt-4 sm:mt-0 flex items-center gap-2 text-movilance-red font-medium text-sm">
                        Apply Now <ArrowRight className="w-4 h-4" />
                    </div>
                </div>

                 {/* Job 2 */}
                <div className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-xl border border-slate-200 hover:border-movilance-red/30 hover:shadow-md transition-all cursor-pointer">
                    <div>
                        <h3 className="font-bold text-lg text-slate-800 group-hover:text-movilance-red transition-colors">Enterprise Sales Manager</h3>
                        <p className="text-slate-500 text-sm mt-1">Bangalore • Sales</p>
                    </div>
                    <div className="mt-4 sm:mt-0 flex items-center gap-2 text-movilance-red font-medium text-sm">
                        Apply Now <ArrowRight className="w-4 h-4" />
                    </div>
                </div>

                 {/* Job 3 */}
                <div className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-xl border border-slate-200 hover:border-movilance-red/30 hover:shadow-md transition-all cursor-pointer">
                    <div>
                        <h3 className="font-bold text-lg text-slate-800 group-hover:text-movilance-red transition-colors">Product Designer</h3>
                        <p className="text-slate-500 text-sm mt-1">Noida • Design</p>
                    </div>
                    <div className="mt-4 sm:mt-0 flex items-center gap-2 text-movilance-red font-medium text-sm">
                        Apply Now <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </div>

             <div className="mt-12 text-center bg-slate-50 rounded-2xl p-8">
                <h3 className="font-bold text-slate-800 mb-2">Don't see a role for you?</h3>
                <p className="text-slate-600 mb-6">We are always looking for great talent. Send your CV to careers@movilance.com</p>
                <Button variant="outline">Email Us</Button>
            </div>
        </div>
      </div>
    </div>
  );
};