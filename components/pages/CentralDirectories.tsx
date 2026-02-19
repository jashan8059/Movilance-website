import React, { useEffect } from 'react';
import { 
  BookOpen, Users, Database, Search, FileText, 
  ShieldCheck, RefreshCw, UserCheck, Building2, 
  GraduationCap, Stethoscope, Briefcase, ArrowDown, LayoutGrid
} from 'lucide-react';
import { Button } from '../Button';

interface CentralDirectoriesProps {
  onOpenDemo: () => void;
  onContact: () => void;
}

export const CentralDirectories: React.FC<CentralDirectoriesProps> = ({ onOpenDemo, onContact }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none"></div>
        
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 skew-x-12 translate-x-20 pointer-events-none blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-50/50 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-movilance-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-movilance-red"></span>
              </span>
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-widest">Master Data Management</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-8 max-w-4xl mx-auto">
              One Central Source of Truth <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-movilance-red via-red-500 to-orange-400">
                for People and Roles.
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Maintain a unified, accurate directory of employees, residents, vendors, and support staff used across all security and operational workflows.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={onOpenDemo}>Book a Demo</Button>
              <Button size="lg" variant="secondary" onClick={onContact}>Talk to Our Team</Button>
            </div>
        </div>
      </section>

      {/* The Challenge & Solution */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
            
            {/* The Challenge */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#64748b_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <div className="bg-red-50 p-2 rounded-lg text-red-500 border border-red-100"><Database className="w-6 h-6" /></div>
                  The Challenge
                </h2>
                <p className="text-slate-600 mb-6">
                  People information is often scattered across spreadsheets, registers, and multiple systems, resulting in:
                </p>
                <ul className="space-y-4">
                  {[
                    "Outdated or incorrect identity records causing security gaps",
                    "Inconsistent data across security, admin, and HR teams",
                    "Delays during visitor or access verification processes",
                    "Weak control during audits due to duplicate entries"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 group/item">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-400 group-hover/item:scale-150 transition-transform flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* The Solution */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl shadow-red-900/5 relative overflow-hidden border-2 border-movilance-red group">
               <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(45deg,#dc2626_25%,transparent_25%,transparent_75%,#dc2626_75%,#dc2626),linear-gradient(45deg,#dc2626_25%,transparent_25%,transparent_75%,#dc2626_75%,#dc2626)] [background-size:20px_20px] [background-position:0_0,10px_10px]"></div>
               
               <div className="relative z-10">
                 <h2 className="text-2xl font-bold text-movilance-navy mb-6 flex items-center gap-3">
                    <div className="bg-movilance-red p-2 rounded-lg text-white shadow-lg"><BookOpen className="w-6 h-6" /></div>
                    The Movilance Solution
                 </h2>
                 <p className="text-lg text-slate-600 leading-relaxed mb-6">
                   Movilance Central Directories provides a centralized, always-updated master database of people, enabling faster verification, accurate access decisions, and consistent data across all modules.
                 </p>
                 <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                   <p className="text-slate-700 font-medium italic border-l-4 border-movilance-red pl-4">
                     "We finally have a single source of truth for every individual on our campus, eliminating data silos instantly."
                   </p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-movilance-red font-bold tracking-widest uppercase text-xs bg-red-50 px-3 py-1 rounded-full border border-red-100">Features</span>
            <h2 className="text-3xl font-bold text-movilance-navy mt-4 mb-4">Key Capabilities</h2>
            <p className="text-slate-600 text-lg">Clean, unified, and actionable people data.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: LayoutGrid,
                title: "Unified Registry",
                features: ["Employees, contractors, residents", "Department & role mapping", "Single profile for all modules"]
              },
              {
                icon: RefreshCw,
                title: "Real-Time Updates",
                features: ["Instant sync across workflows", "Eliminate duplicate data entry", "Reduce manual errors"]
              },
              {
                icon: UserCheck,
                title: "Identity Verification",
                features: ["Quick lookup at gates", "Accurate employee association", "Better access decisions"]
              },
              {
                icon: Search,
                title: "Search & Manage",
                features: ["Search by name, ID, or role", "Filter active/inactive records", "Clean & structured data"]
              },
              {
                icon: ShieldCheck,
                title: "Access Control Support",
                features: ["Link directories to permissions", "Auto-revoke on deactivation", "Audit-ready history"]
              },
              {
                icon: FileText,
                title: "Bulk Operations",
                features: ["Import/Export via Excel/CSV", "Batch updates for departments", "Mass status changes"]
              }
            ].map((cap, idx) => (
              <div key={idx} className="group relative p-8 rounded-2xl border border-slate-100 bg-white hover:border-movilance-red/20 shadow-sm hover:shadow-xl hover:shadow-movilance-navy/5 transition-all duration-300 flex flex-col">
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-movilance-red group-hover:text-white transition-all duration-300 border border-slate-100 group-hover:border-movilance-red">
                  <cap.icon className="w-7 h-7 text-slate-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-movilance-navy transition-colors">{cap.title}</h3>
                <ul className="space-y-3 mt-auto">
                  {cap.features.map((f, i) => (
                    <li key={i} className="text-sm text-slate-600 flex items-start gap-2.5">
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-movilance-red/50"></div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
             <h2 className="text-3xl md:text-4xl font-bold text-movilance-navy tracking-tight">How It Works</h2>
             <p className="text-slate-600 mt-4 text-lg">Centralize your data in four simple steps.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
             {/* Connector Line (Desktop) */}
             <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-slate-200 via-movilance-red/30 to-slate-200 z-0"></div>

             {[
               { step: "01", title: "Create", desc: "Import or create people records centrally." },
               { step: "02", title: "Use", desc: "Data populates visitor & access workflows." },
               { step: "03", title: "Update", desc: "Role/Status changes updated instantly." },
               { step: "04", title: "Audit", desc: "Complete history stored for compliance." }
             ].map((item, idx) => (
               <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center mb-6 shadow-lg relative transition-transform duration-500 group-hover:scale-105 group-hover:border-movilance-red/20">
                     <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-movilance-red to-orange-500">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-movilance-red transition-colors">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed px-2">{item.desc}</p>
                  
                  {idx !== 3 && (
                    <div className="md:hidden my-6">
                      <ArrowDown className="w-5 h-5 text-slate-300" />
                    </div>
                  )}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-movilance-navy mb-8 border-l-4 border-movilance-red pl-4">Operational Benefits</h3>
              <div className="space-y-6">
                {[
                  "Faster identity verification at all entry points",
                  "Significantly reduced data duplication and errors",
                  "Improved coordination between admin & security"
                ].map((b, i) => (
                   <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                     <div className="bg-white rounded-full p-1 h-fit text-emerald-600 shadow-sm border border-emerald-100"><ShieldCheck className="w-5 h-5" /></div>
                     <span className="text-slate-700 font-medium">{b}</span>
                   </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-movilance-navy mb-8 border-l-4 border-movilance-red pl-4">Governance & Control</h3>
              <div className="space-y-6">
                {[
                  "Consistent and reliable people data across systems",
                  "Improved accuracy for access control decisions",
                  "Audit-ready master records for compliance"
                ].map((b, i) => (
                   <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                     <div className="bg-white rounded-full p-1 h-fit text-movilance-red shadow-sm border border-red-100"><UserCheck className="w-5 h-5" /></div>
                     <span className="text-slate-700 font-medium">{b}</span>
                   </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-2xl font-bold text-movilance-navy mb-10">Ideal For</h2>
           
           <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: Briefcase, label: "Corporate Campuses" },
                { icon: Building2, label: "Residential Complexes" },
                { icon: Users, label: "IT Parks" },
                { icon: GraduationCap, label: "Universities" },
                { icon: Stethoscope, label: "Healthcare" },
              ].map((ind, idx) => (
                 <div key={idx} className="flex items-center gap-3 px-8 py-4 bg-white rounded-2xl border border-slate-200 text-slate-700 font-semibold shadow-sm hover:shadow-md hover:border-movilance-red/30 transition-all duration-300 group">
                    <ind.icon className="w-5 h-5 text-slate-400 group-hover:text-movilance-red transition-colors" />
                    {ind.label}
                 </div>
              ))}
           </div>
        </div>
      </section>

    </div>
  );
};
