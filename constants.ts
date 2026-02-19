import { 
  Users, Car, Package, ShieldCheck, AlertTriangle, 
  Key, BookOpen, FileCheck, ClipboardList, ScanLine, 
  BarChart3, Lock, Building2, Briefcase, Factory, GraduationCap,
  Truck, Mail, Banknote, Laptop, Network, Scale
} from 'lucide-react';
import { ModuleItem, AudienceItem, StepItem, BenefitItem, SolutionItem } from './types';

export const HERO_CONTENT = {
  tagline: "Every Movement. Under Vigilance.",
  subheadline: "The complete facility movement and vigilance platform designed to monitor, control, and audit every entry, exit, and asset in real-time.",
  ctaPrimary: "Book a Demo",
  ctaSecondary: "See How It Works"
};

export const WHAT_IS_MOVILANCE = {
  heading: "What is Movilance?",
  description: "Movilance is a single, unified platform to manage, monitor, and audit all facility movements. We replace fragmented systems with a security-operated, compliance-ready layer that logs every action in real-time."
};

export const MODULES: ModuleItem[] = [
  { title: "Visitor Movement", description: "Seamless check-ins, badge printing, and pre-approvals.", icon: Users },
  { title: "Vehicle Entry & Exit", description: "ANPR integration and parking slot management.", icon: Car },
  { title: "Material Movement", description: "Track inward and outward returnable and non-returnable goods.", icon: Truck },
  { title: "Courier Management", description: "Manage desk deliveries, parcels, and mailroom operations.", icon: Mail },
  { title: "Asset Tracking", description: "Secure movement logs for high-value IT and facility assets.", icon: Laptop },
  { title: "Cash Purchase", description: "Track petty cash vouchers and spot purchase approvals.", icon: Banknote },
  { title: "Incident Reporting", description: "Digital logging of security breaches or maintenance issues.", icon: AlertTriangle },
  { title: "Lockers & Keys", description: "Digital key management and token exchange tracking.", icon: Key },
  { title: "Central Directories", description: "Unified database of residents, employees, and staff.", icon: BookOpen },
  { title: "Compliance & Audit", description: "Automated logs ready for security audits.", icon: FileCheck },
  { title: "ERP Integration", description: "Seamless bi-directional sync with SAP, Oracle, and other ERPs.", icon: Network },
  { title: "Variance Control", description: "Detect quantity or weight discrepancies in material movement.", icon: Scale },
];

export const HOW_IT_WORKS: StepItem[] = [
  { number: "01", title: "Capture", description: "Record movement at the gate or access point instantly." },
  { number: "02", title: "Validate", description: "Verify permissions, authorize entry, and log timestamp." },
  { number: "03", title: "Report", description: "Generate real-time audits, alerts, and compliance logs." },
];

export const SOLUTIONS: SolutionItem[] = [
  {
    title: "Warehouses & Logistics",
    description: "Optimized for high-volume vehicle and material movement.",
    features: ["Vehicle turnaround time (TAT)", "Weighbridge integration", "Material gate pass audit"],
    icon: Factory
  },
  {
    title: "Corporate Offices",
    description: "Professionalize your front-desk and secure sensitive zones.",
    features: ["Digital visitor badges", "Meeting room utilization logs", "Asset movement passes"],
    icon: Briefcase
  },
  {
    title: "Institutions & Campuses",
    description: "Secure large perimeters for hospitals and educational institutes.",
    features: ["Emergency vehicle priority", "Restricted zone access control", "Crowd movement analytics"],
    icon: GraduationCap
  },
  {
    title: "Residential Societies",
    description: "Enhance community safety without compromising convenience for residents.",
    features: ["Domestic help & staff tracking", "Child exit permission alerts", "Pre-approved guest entry"],
    icon: Building2
  }
];

export const AUDIENCE: AudienceItem[] = [
  { 
    role: "Security Teams", 
    benefits: ["Simple digital logs vs paper registers", "Faster gate processing"], 
    icon: ShieldCheck 
  },
  { 
    role: "Facility Admins", 
    benefits: ["Centralized dashboard for all sites", "Automated vendor tracking"], 
    icon: ClipboardList 
  },
  { 
    role: "Compliance Teams", 
    benefits: ["100% audit-ready digital trails", "Zero data leakage risks"], 
    icon: FileCheck 
  },
  { 
    role: "Leadership", 
    benefits: ["Data-driven security insights", "Reduced operational liability"], 
    icon: BarChart3 
  },
];

export const BENEFITS: BenefitItem[] = [
  { title: "One System", description: "Unified control for visitors, vehicles, and assets." },
  { title: "Real-time Visibility", description: "Know who and what is on premise, instantly." },
  { title: "Strong Audit Trail", description: "Every action is time-stamped and user-tagged." },
  { title: "Reduced Risk", description: "Eliminate loopholes found in manual registers." },
];