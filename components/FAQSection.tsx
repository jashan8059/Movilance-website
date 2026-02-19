import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  items: FAQItem[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ title = "Frequently Asked Questions", items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate FAQPage Schema for AEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 text-movilance-navy mb-4">
               <HelpCircle className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-movilance-navy">{title}</h2>
          </div>

          <div className="space-y-4">
            {items.map((item, index) => (
              <div 
                key={index} 
                className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                  openIndex === index 
                    ? 'border-movilance-red/30 bg-red-50/10 shadow-sm' 
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full p-5 text-left"
                >
                  <span className={`font-semibold text-lg ${openIndex === index ? 'text-movilance-red' : 'text-slate-800'}`}>
                    {item.question}
                  </span>
                  <div className={`p-1 rounded-full transition-colors ${openIndex === index ? 'text-movilance-red bg-red-50' : 'text-slate-400'}`}>
                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                
                <div 
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-transparent">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};