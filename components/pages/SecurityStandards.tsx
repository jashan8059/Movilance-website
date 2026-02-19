import React from 'react';
import { ShieldCheck, Lock, Server, FileCheck, Eye } from 'lucide-react';

export const SecurityStandards: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-4 h-4" /> Trust & Compliance
          </div>
          <h1 className="text-4xl font-bold text-movilance-navy mb-6">Enterprise-Grade Security is Our DNA</h1>
          <p className="text-xl text-slate-600">
            We don't just secure your facilities; we secure your data with the highest global standards.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Cards for standards */}
            <div className="p-8 border border-slate-200 rounded-2xl bg-slate-50">
                <FileCheck className="w-10 h-10 text-movilance-red mb-4" />
                <h3 className="text-xl font-bold text-movilance-navy mb-2">SOC 2 Type II</h3>
                <p className="text-slate-600 text-sm">We undergo rigorous annual audits to ensure our controls for security, availability, and confidentiality meet AICPA standards.</p>
            </div>
            <div className="p-8 border border-slate-200 rounded-2xl bg-slate-50">
                <ShieldCheck className="w-10 h-10 text-movilance-red mb-4" />
                <h3 className="text-xl font-bold text-movilance-navy mb-2">ISO 27001</h3>
                <p className="text-slate-600 text-sm">Certified for information security management systems (ISMS), ensuring we manage sensitive data systematically.</p>
            </div>
            <div className="p-8 border border-slate-200 rounded-2xl bg-slate-50">
                <Lock className="w-10 h-10 text-movilance-red mb-4" />
                <h3 className="text-xl font-bold text-movilance-navy mb-2">GDPR & DPDP</h3>
                <p className="text-slate-600 text-sm">Fully compliant with global data privacy regulations, giving you full control over data retention and deletion.</p>
            </div>
        </div>

        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-2xl font-bold mb-8">Infrastructure Security</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                    <Server className="w-6 h-6 text-movilance-red shrink-0" />
                    <div>
                        <h4 className="font-bold mb-1">Data Residency</h4>
                        <p className="text-slate-400 text-sm">Data stored in regionally compliant AWS/Azure data centers with redundancy.</p>
                    </div>
                </div>
                 <div className="flex gap-4">
                    <Lock className="w-6 h-6 text-movilance-red shrink-0" />
                    <div>
                        <h4 className="font-bold mb-1">Encryption</h4>
                        <p className="text-slate-400 text-sm">AES-256 encryption at rest and TLS 1.3 encryption in transit for all data.</p>
                    </div>
                </div>
                 <div className="flex gap-4">
                    <Eye className="w-6 h-6 text-movilance-red shrink-0" />
                    <div>
                        <h4 className="font-bold mb-1">Penetration Testing</h4>
                        <p className="text-slate-400 text-sm">Regular third-party security assessments and vulnerability scanning.</p>
                    </div>
                </div>
                 <div className="flex gap-4">
                    <ShieldCheck className="w-6 h-6 text-movilance-red shrink-0" />
                    <div>
                        <h4 className="font-bold mb-1">Access Control</h4>
                        <p className="text-slate-400 text-sm">Strict role-based access control (RBAC) and MFA for internal data access.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};