import { LucideIcon } from 'lucide-react';

export interface ModuleItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface AudienceItem {
  role: string;
  benefits: string[];
  icon: LucideIcon;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface SolutionItem {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
}