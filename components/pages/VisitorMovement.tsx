import React, { useEffect } from 'react';
import { 
  Users, QrCode, ClipboardCheck, LayoutDashboard, History, 
  ShieldAlert, CheckCircle2, ArrowRight, Building2, 
  Factory, Stethoscope, GraduationCap, ArrowDown
} from 'lucide-react';
import { Button } from '../Button';
import { SolutionNavigation } from '../SolutionNavigation';
import { SEO } from '../SEO';
import { FAQSection } from '../FAQSection';

interface VisitorMovementProps {
  onOpenDemo: () => void;
  onContact: () => void;
}

export const VisitorMovement: React.FC<VisitorMovementProps> = ({ onOpenDemo, onContact }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const visitorFAQs = [
    {
      question: "How does the pre-approval process work?",
      answer: "Hosts can send a digital invite link (SMS/WhatsApp) to visitors. The visitor fills in their details and photo remotely. They receive a QR code, which they simply scan at the gate for express entry."
    },
    {
      question: "Can we blacklist unwanted visitors?",
      answer: "Yes, the system allows security heads to maintain a watchlist. If a blacklisted individual attempts to check in, an instant alert is triggered for the security team."
    },
    {
      question: "Does it support facial recognition?",
      answer: "Movilance supports integration with facial recognition cameras and biometric devices for high-security zones, allowing touchless access control."
    },
    {
      question: "Is visitor data deleted automatically?",
      answer: "You can configure data retention policies to automatically anonymize or delete visitor data after a specific period (e.g., 90 or 180 days) to comply with privacy regulations."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Visitor Management System | Digital Gate Pass Software"
        description="Secure your premises with Movilance Visitor Management. Features include digital badges, pre-approvals, QR check-ins, and real-time host notifications."
        keywords="visitor management system, vms software, digital gate pass, visitor tracking app, qr code entry, touchless visitor entry"
      />
      
      {/* Hero Section - Matching Homepage Hero.tsx */}
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
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-widest">Visitor Movement Management</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-8 max-w-4xl mx-auto">
              Every Visitor. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-movilance-red via-red-500 to-orange-400">
                Fully Verified. Fully Tracked.
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Seamless visitor check-ins, pre-approvals, and badge printing—designed to secure your premises without slowing down entry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={onOpenDemo}>Book a Demo</Button>
              <Button size="lg" variant="secondary" onClick={onContact}>Talk to Our Team</Button>
            </div>
        </div>
      </section>

      {/* The Challenge & Solution - Matching About.tsx Style */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
            
            {/* The Challenge */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#64748b_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <div className="bg-red-50 p-2 rounded-lg text-red-500 border border-red-100"><ShieldAlert className="w-6 h-6" /></div>
                  The Challenge
                </h2>
                <p className="text-slate-600 mb-6">
                  Visitor movement is often managed through manual registers, calls to hosts, and ad-hoc approvals—leading to:
                </p>
                <ul className="space-y-4">
                  {[
                    "Long queues at entry gates causing congestion",
                    "No real-time visibility of who is actually inside",
                    "Security risks due to unauthorized or unverified access",
                    "Poor audit readiness during compliance checks"
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
                    <div className="bg-movilance-red p-2 rounded-lg text-white shadow-lg"><CheckCircle2 className="w-6 h-6" /></div>
                    The Movilance Solution
                 </h2>
                 <p className="text-lg text-slate-600 leading-relaxed mb-6">
                   Digitize the entire visitor lifecycle—from pre-invitation to exit—ensuring speed, security, and complete accountability.
                 </p>
                 <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                   <p className="text-slate-700 font-medium italic border-l-4 border-movilance-red pl-4">
                     "We replace fragmented systems with a security-operated, compliance-ready layer that logs every action in real-time."
                   </p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Key Capabilities - Matching Modules.tsx Card Style */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-movilance-red font-bold tracking-widest uppercase text-xs bg-red-50 px-3 py-1 rounded-full border border-red-100">Features</span>
            <h2 className="text-3xl font-bold text-movilance-navy mt-4 mb-4">Key Capabilities</h2>
            <p className="text-slate-600 text-lg">A complete suite of tools to manage guests, contractors, and interview candidates.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Seamless Visitor Entry",
                features: ["Pre-approved invitations", "Walk-in registration at gate", "QR code or OTP-based check-in"]
              },
              {
                icon: ClipboardCheck,
                title: "Digital Badge Printing",
                features: ["Auto-generated badges", "Visitor photo capture", "Validity linked to visit duration"]
              },
              {
                icon: CheckCircle2,
                title: "Host & Approval Workflow",
                features: ["Instant host notifications", "Single or multi-level approvals", "Purpose & area tagging"]
              },
              {
                icon: LayoutDashboard,
                title: "Real-Time Dashboard",
                features: ["Live list of visitors inside", "Overstay alerts for expired visits", "Zone-wise visibility"]
              },
              {
                icon: History,
                title: "Visitor History & Logs",
                features: ["Searchable visitor records", "Visit frequency tracking", "Audit-ready logs"]
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

      {/* How It Works - Matching HowItWorks.tsx (Light Theme) */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
             <h2 className="text-3xl md:text-4xl font-bold text-movilance-navy tracking-tight">How It Works</h2>
             <p className="text-slate-600 mt-4 text-lg">From invitation to exit, a seamless process.</p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 relative">
             {/* Connector Line (Desktop) - simplified for 5 items */}
             <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-slate-200 via-movilance-red/30 to-slate-200 z-0"></div>

             {[
               { step: "01", title: "Invite / Walk-In", desc: "Host pre-registers or gate registration." },
               { step: "02", title: "Approve", desc: "Host verifies and approves entry." },
               { step: "03", title: "Check-In", desc: "Digital badge issued after ID check." },
               { step: "04", title: "Monitor", desc: "Live tracking on security dashboard." },
               { step: "05", title: "Check-Out", desc: "Exit logged, visit closed." }
             ].map((item, idx) => (
               <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center mb-6 shadow-lg relative transition-transform duration-500 group-hover:scale-105 group-hover:border-movilance-red/20">
                     <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-movilance-red to-orange-500">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-movilance-red transition-colors">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed px-2">{item.desc}</p>
                  
                  {idx !== 4 && (
                    <div className="md:hidden my-6">
                      <ArrowDown className="w-5 h-5 text-slate-300" />
                    </div>
                  )}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Benefits - Matching Audience.tsx Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-movilance-navy mb-8 border-l-4 border-movilance-red pl-4">Operational Benefits</h3>
              <div className="space-y-6">
                {[
                  "Faster visitor entry and significantly reduced queues",
                  "Minimal dependency on manual paper registers",
                  "Improved front desk efficiency and professionalism"
                ].map((b, i) => (
                   <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                     <div className="bg-white rounded-full p-1 h-fit text-emerald-600 shadow-sm border border-emerald-100"><CheckCircle2 className="w-5 h-5" /></div>
                     <span className="text-slate-700 font-medium">{b}</span>
                   </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-movilance-navy mb-8 border-l-4 border-movilance-red pl-4">Security & Compliance</h3>
              <div className="space-y-6">
                {[
                  "Zero unauthorized access loopholes",
                  "Complete visitor traceability with timestamps",
                  "Ready-to-use audit logs for inspections"
                ].map((b, i) => (
                   <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                     <div className="bg-white rounded-full p-1 h-fit text-movilance-red shadow-sm border border-red-100"><ShieldAlert className="w-5 h-5" /></div>
                     <span className="text-slate-700 font-medium">{b}</span>
                   </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Pill Design */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-2xl font-bold text-movilance-navy mb-10">Who is this for?</h2>
           
           <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: Factory, label: "Manufacturing Plants" },
                { icon: Building2, label: "Corporate Offices" },
                { icon: Stethoscope, label: "Hospitals & Healthcare" },
                { icon: GraduationCap, label: "Education Campuses" },
              ].map((ind, idx) => (
                 <div key={idx} className="flex items-center gap-3 px-8 py-4 bg-white rounded-2xl border border-slate-200 text-slate-700 font-semibold shadow-sm hover:shadow-md hover:border-movilance-red/30 transition-all duration-300 group">
                    <ind.icon className="w-5 h-5 text-slate-400 group-hover:text-movilance-red transition-colors" />
                    {ind.label}
                 </div>
              ))}
           </div>
        </div>
      </section>

      <SolutionNavigation />
      
      <FAQSection title="Visitor Module FAQs" items={visitorFAQs} />

    </div>
  );
};