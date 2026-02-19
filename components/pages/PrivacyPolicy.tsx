import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-movilance-navy mb-8">Privacy Policy</h1>
        <p className="text-slate-500 mb-12">Last updated: January 2026</p>

        <div className="space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">1. Introduction</h2>
            <p>
              Movilance ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our facility vigilance platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">2. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Register for a demo or account.</li>
              <li>Use our platform for visitor or vehicle management.</li>
              <li>Contact our support team.</li>
            </ul>
            <p className="mt-2">
              This includes Personal Data such as names, email addresses, vehicle numbers, and visitor logs required for facility security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">3. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Provide, maintain, and improve our services.</li>
              <li>Process transactions and send related information.</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
              <li>Detect, investigate, and prevent security incidents and other malicious activities.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal data. Our platform is SOC 2 compliant and designed to meet enterprise security standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@movilance.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};