import React from 'react';
import { ChevronRight, ShieldCheck, CheckCircle2, AlertOctagon, Activity, MapPin, Search } from 'lucide-react';
import { Button } from './Button';
import { HERO_CONTENT } from '../constants';

interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative bg-white pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden">
      {/* Technical Grid Background - Light Mode */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none"></div>
      
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 skew-x-12 translate-x-20 pointer-events-none blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-50/50 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-movilance-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-movilance-red"></span>
              </span>
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-widest">Enterprise Security Standard</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Every Movement. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-movilance-red via-red-500 to-orange-400">
                Under Vigilance.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed border-l-2 border-movilance-red/20 pl-6">
              {HERO_CONTENT.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                size="lg" 
                variant="primary" 
                className="transform hover:-translate-y-0.5" 
                onClick={onOpenDemo}
              >
                {HERO_CONTENT.ctaPrimary}
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => {
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {HERO_CONTENT.ctaSecondary}
              </Button>
            </div>

            <div className="pt-6 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-movilance-red" /> ISO 27001 Ready
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-movilance-red" /> SOC 2 Compliant
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-movilance-red" /> 99.99% Uptime
              </span>
            </div>
          </div>

          {/* Abstract Dashboard Graphic - Light Mode */}
          <div className="relative hidden lg:block perspective-1000">
            <div className="relative rounded-2xl bg-white border border-slate-200 shadow-2xl p-1 transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700 ease-out">
              {/* Inner container */}
              <div className="bg-slate-50 rounded-xl overflow-hidden relative">
                {/* Header of fake UI */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white">
                  <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  </div>
                  <div className="flex items-center gap-4 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-100">
                    <Search className="w-3 h-3 text-slate-400" />
                    <div className="w-32 h-2 bg-slate-200 rounded-full"></div>
                  </div>
                  <div className="text-movilance-red text-[10px] font-mono tracking-wider flex items-center gap-2 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-movilance-red animate-pulse"></span>
                    LIVE MONITORING
                  </div>
                </div>
                
                {/* Body of fake UI */}
                <div className="p-6 grid grid-cols-12 gap-6">
                  {/* Left Sidebar */}
                  <div className="col-span-3 space-y-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className={`h-8 rounded-lg ${i === 1 ? 'bg-white border-l-2 border-movilance-red shadow-sm' : 'bg-transparent'} flex items-center px-3`}>
                        <div className={`w-20 h-2 rounded-full ${i === 1 ? 'bg-slate-800' : 'bg-slate-300'}`}></div>
                      </div>
                    ))}
                  </div>

                  {/* Main Feed */}
                  <div className="col-span-9 space-y-4">
                    <div className="flex justify-between items-end mb-2">
                      <h4 className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Gate Activity Feed</h4>
                      <Activity className="w-4 h-4 text-movilance-red" />
                    </div>

                    {/* Simulated Log Entries */}
                    {[1, 2].map((i) => (
                      <div key={i} className="flex items-center gap-4 bg-white p-3 rounded-lg border border-slate-200 shadow-sm hover:border-slate-300 transition-colors group">
                        <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                            <ShieldCheck className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-slate-800 text-sm font-medium">Visitor Access Granted</span>
                              <span className="text-[10px] bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded border border-emerald-100 font-medium">ID verified</span>
                            </div>
                            <div className="h-1.5 w-32 bg-slate-100 rounded"></div>
                        </div>
                        <div className="text-right">
                            <div className="text-slate-400 text-[10px] font-mono">10:42:{10 + i} AM</div>
                        </div>
                      </div>
                    ))}

                    {/* Simulated Alert Entry */}
                    <div className="flex items-center gap-4 bg-red-50 p-3 rounded-lg border border-red-100 shadow-sm">
                        <div className="w-10 h-10 rounded-lg bg-white border border-red-100 flex items-center justify-center relative">
                            <AlertOctagon className="w-5 h-5 text-movilance-red" />
                            <span className="absolute top-0 right-0 w-2 h-2 bg-movilance-red rounded-full animate-ping"></span>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-slate-900 text-sm font-bold">Unauthorized Vehicle</span>
                              <span className="text-[10px] bg-white text-movilance-red px-1.5 py-0.5 rounded border border-red-100 font-bold">Alert</span>
                            </div>
                            <div className="h-1.5 w-24 bg-red-200/50 rounded"></div>
                        </div>
                        <div className="text-right">
                            <div className="text-slate-500 text-[10px] font-mono">10:45:02 AM</div>
                        </div>
                      </div>
                  </div>
                </div>

                {/* Bottom Status Bar */}
                <div className="bg-white border-t border-slate-200 px-6 py-3 flex justify-between items-center text-[10px] text-slate-500 font-mono">
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> SYSTEM: ONLINE</span>
                    <span>LATENCY: 12ms</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <MapPin className="w-3 h-3" />
                    <span>SECTOR 4</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute top-1/2 -left-12 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow max-w-[200px]">
                 <div className="bg-movilance-red p-2.5 rounded-lg shadow-lg shadow-movilance-red/20">
                    <ShieldCheck className="w-6 h-6 text-white" />
                 </div>
                 <div>
                    <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">Audit Status</p>
                    <p className="text-xs text-emerald-600 flex items-center gap-1 mt-0.5"><CheckCircle2 className="w-3 h-3" /> Compliant</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};