import React, { useEffect } from 'react';
import { Hero } from './Hero';
import { About } from './About';
import { Modules } from './Modules';
import { HowItWorks } from './HowItWorks';
import { Solutions } from './Solutions';
import { Audience } from './Audience';
import { Trust } from './Trust';
import { useLocation } from 'react-router-dom';
import { SEO } from './SEO';
import { FAQSection } from './FAQSection';

interface LandingPageProps {
  onOpenDemo: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onOpenDemo }) => {
  const location = useLocation();

  // Handle hash scrolling when landing from another page or direct link
  useEffect(() => {
    if (location.hash) {
      // Small timeout to ensure DOM is fully mounted/rendered
      const timer = setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 300); // Increased timeout slightly to ensure all components are rendered
      return () => clearTimeout(timer);
    } else {
        window.scrollTo(0, 0);
    }
  }, [location]);

  const landingFAQs = [
    {
      question: "Is Movilance suitable for small offices?",
      answer: "Yes, Movilance is scalable. We have specific modules like Visitor Management and Courier Handling that are perfect for small to medium corporate offices, while our full suite caters to large manufacturing plants and townships."
    },
    {
      question: "Can Movilance integrate with SAP or Oracle?",
      answer: "Absolutely. Our ERP Integration module offers bi-directional sync with major ERP systems like SAP, Oracle, Microsoft Dynamics, and Tally to ensure your gate entries match your financial records."
    },
    {
      question: "Is data stored securely in India?",
      answer: "Yes, for Indian clients, we host data on AWS/Azure servers located within India (Mumbai/Hyderabad regions) to comply with the DPDP Act and data residency requirements."
    },
    {
      question: "Do you provide hardware like tablets or scanners?",
      answer: "Movilance is hardware-agnostic. It works on any standard Android tablet or smartphone. We can recommend trusted hardware vendors for boom barriers, ANPR cameras, and kiosks, but we focus on the software."
    },
    {
      question: "What happens if the internet goes down?",
      answer: "The app has an offline mode for critical entry/exit logging. Data syncs automatically once connectivity is restored, ensuring no movement goes unrecorded."
    }
  ];

  return (
    <>
      <SEO 
        title="Movilance | Enterprise Facility Movement & Vigilance Platform"
        description="The most advanced facility vigilance platform. Automate visitor management, vehicle tracking, asset movement, and compliance audits in one unified system."
        keywords="facility management software, visitor management system, gate pass system, vehicle tracking system, asset tracking software, security vigilance platform, movilance"
      />
      <Hero onOpenDemo={onOpenDemo} />
      <About />
      <Modules />
      <HowItWorks />
      <Solutions />
      <Audience />
      <Trust />
      <FAQSection items={landingFAQs} />
    </>
  );
};