import React, { useEffect, useState } from 'react';
import { 
  ClipboardCheck, CheckSquare, Shield, UserCheck, 
  Radio, Smartphone, AlertTriangle, FileText, Download,
  CheckCircle2, Printer
} from 'lucide-react';
import { Button } from '../Button';

export const TrainingChecksheet: React.FC = () => {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleCheck = (id: string) => {
    setCompleted(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const sections = [
    {
      title: "Grooming & Uniform",
      icon: UserCheck,
      items: [
        { id: "g1", text: "Uniform is clean, ironed, and properly worn." },
        { id: "g2", text: "ID Card and Badge are clearly visible." },
        { id: "g3", text: "Safety shoes are polished and laced." },
        { id: "g4", text: "Hair is neatly trimmed/tied; no excessive jewelry." }
      ]
    },
    {
      title: "Equipment Readiness",
      icon: Smartphone,
      items: [
        { id: "e1", text: "Walkie-talkie battery is charged and functional." },
        { id: "e2", text: "Handheld Metal Detector (HHMD) is working." },
        { id: "e3", text: "Movilance App tablet/phone is logged in and synced." },
        { id: "e4", text: "Torch and baton are accessible (for night shift)." }
      ]
    },
    {
      title: "Post Handover",
      icon: ClipboardCheck,
      items: [
        { id: "p1", text: "Read previous shift logbook for critical alerts." },
        { id: "p2", text: "Verified key cabinet inventory matches register." },
        { id: "p3", text: "Checked perimeter gates and barriers functionality." },
        { id: "p4", text: "Briefed on VIP movements or expected deliveries." }
      ]
    },
    {
      title: "Emergency Protocols",
      icon: AlertTriangle,
      items: [
        { id: "em1", text: "Aware of nearest fire assembly point." },
        { id: "em2", text: "Knows emergency contact numbers (Fire/Police/Ambulance)." },
        { id: "em3", text: "Reviewed code red/blue procedures." }
      ]
    }
  ];

  const totalItems = sections.reduce((acc, sec) => acc + sec.items.length, 0);
  const checkedItems = Object.values(completed).filter(Boolean).length;
  const progress = Math.round((checkedItems / totalItems) * 100);

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-movilance-red/10 p-2 rounded-lg">
                  <Shield className="w-6 h-6 text-movilance-red" />
                </div>
                <h1 className="text-2xl font-bold text-movilance-navy">Daily Guard Checksheet</h1>
              </div>
              <p className="text-slate-500">Ensure 100% compliance before starting your shift.</p>
            </div>
            
            <div className="flex gap-3">
               <Button variant="outline" onClick={() => window.print()} className="hidden md:flex gap-2">
                 <Printer className="w-4 h-4" /> Print
               </Button>
               <Button className="gap-2">
                 <Download className="w-4 h-4" /> Export Log
               </Button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-8">
            <div className="flex justify-between text-sm font-medium mb-2">
              <span className="text-slate-700">Readiness Score</span>
              <span className="text-movilance-red">{progress}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
              <div 
                className="bg-movilance-red h-2.5 rounded-full transition-all duration-500 ease-out" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="grid gap-6">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center gap-3">
                <section.icon className="w-5 h-5 text-slate-500" />
                <h3 className="font-bold text-slate-800">{section.title}</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div 
                      key={item.id} 
                      onClick={() => toggleCheck(item.id)}
                      className="flex items-start gap-4 cursor-pointer group select-none"
                    >
                      <div className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center transition-all ${
                        completed[item.id] 
                          ? 'bg-emerald-500 border-emerald-500 text-white' 
                          : 'bg-white border-slate-300 group-hover:border-movilance-red'
                      }`}>
                        {completed[item.id] && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <span className={`text-sm ${completed[item.id] ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-slate-400">
          <p>Digital Checksheet Log ID: #TRN-2026-8839 • Movilance Inc.</p>
        </div>

      </div>
    </div>
  );
};