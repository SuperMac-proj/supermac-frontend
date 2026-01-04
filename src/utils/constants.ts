import type { Feature, UseCase, HowItWorksStep } from '../types';

// Hero section content
export const HERO_CONTENT = {
  title: 'Supercharge Your Mac Experience',
  subtitle: 'A productivity toolkit designed to make working on macOS faster, easier, and more efficient',
  primaryCTA: 'Download for Free',
  secondaryCTA: 'View on GitHub',
};

// Features
export const FEATURES: Feature[] = [
  {
    icon: '📋',
    title: 'Clipboard History',
    description: 'Never lose what you copied. Access your entire clipboard history with a simple keyboard shortcut',
  },
  {
    icon: '⚡',
    title: 'Text Snippets',
    description: 'Save time with text expansion. Type shortcuts that automatically expand into full phrases',
  },
  {
    icon: '⌨️',
    title: 'Quick Access Anywhere',
    description: 'All features available instantly with global keyboard shortcuts, right when you need them',
  },
];

// Use cases
export const USE_CASES: UseCase[] = [
  {
    icon: '👨‍💻',
    title: 'Developers',
    description: 'Quickly reuse code snippets, commands, and API keys',
  },
  {
    icon: '✍️',
    title: 'Writers',
    description: 'Automatically input frequently used phrases and templates',
  },
  {
    icon: '🎧',
    title: 'Support Teams',
    description: 'Boost efficiency with canned responses and common answers',
  },
  {
    icon: '🎨',
    title: 'Designers',
    description: 'Manage your clipboard history and reuse design specs',
  },
];

// How it works steps
export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    icon: '⬇️',
    title: 'Download & Install',
    description: 'An icon will appear in your menu bar',
  },
  {
    step: 2,
    icon: '📄',
    title: 'Use as Usual',
    description: 'SuperMac works quietly in the background',
  },
  {
    step: 3,
    icon: '⌨️',
    title: 'Quick Access',
    description: 'Use keyboard shortcuts to access features instantly',
  },
];

// Detailed features
export const DETAILED_FEATURES = [
  {
    badge: 'Clipboard History',
    title: 'Never Lose What You Copy',
    features: [
      'Automatic history of everything you copy',
      'Support for both text and images',
      'Powerful search to find anything instantly',
      'Automatic duplicate removal',
    ],
    imagePosition: 'left' as const,
  },
  {
    badge: 'Text Snippets',
    title: 'Type Less, Do More',
    features: [
      'Create unlimited text shortcuts',
      'Expand snippets with Tab or Space',
      'Track usage statistics',
      'Organize with folders and categories',
    ],
    imagePosition: 'right' as const,
  },
  {
    badge: 'Native Integration',
    title: 'Built for macOS',
    features: [
      'Menu bar integration for quick access',
      'System-wide keyboard shortcuts',
      'Native macOS design and dark mode',
      'Lightweight and blazingly fast',
    ],
    imagePosition: 'left' as const,
  },
];

// Final CTA
export const FINAL_CTA = {
  title: 'Ready to Supercharge Your Mac?',
  subtitle: 'Join thousands of users boosting their productivity with SuperMac',
  buttonText: 'Download for Free',
  systemRequirements: 'Requires macOS 13.0 or later',
};

// Links
export const LINKS = {
  github: 'https://github.com/yourusername/supermac',
  download: 'https://github.com/yourusername/supermac/releases',
};
