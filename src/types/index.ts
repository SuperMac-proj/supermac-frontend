// Feature card type
export interface Feature {
  icon: string;
  title: string;
  description: string;
}

// Use case card type
export interface UseCase {
  icon: string;
  title: string;
  description: string;
}

// Screenshot type
export interface Screenshot {
  src: string;
  alt: string;
  caption: string;
}

// How it works step type
export interface HowItWorksStep {
  step: number;
  icon: string;
  title: string;
  description: string;
}

// Release note change type
export interface ReleaseChange {
  type: 'new' | 'improvement' | 'bugfix' | 'breaking';
  description: string;
}

// Release note type
export interface ReleaseNote {
  version: string;
  date: string;
  changes: ReleaseChange[];
}

// Pricing plan type
export interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
  buttonLink: string;
}
