import React from 'react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-movilance-navy mb-8">Terms of Service</h1>
        <p className="text-slate-500 mb-12">Last updated: January 2026</p>

        <div className="space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using the Movilance platform, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">2. Use License</h2>
            <p>
              Movilance grants you a limited, non-exclusive, non-transferable, and revocable license to use our services for your internal business purposes, subject to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">3. Service Availability</h2>
            <p>
              We strive to maintain 99.9% uptime for our services. However, we do not guarantee that the service will be uninterrupted or error-free. We reserve the right to modify or discontinue the service at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">4. User Responsibilities</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">5. Limitation of Liability</h2>
            <p>
              In no event shall Movilance be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">6. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};