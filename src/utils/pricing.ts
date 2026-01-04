import type { PricingPlan } from '../types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Free',
    price: '$0',
    description: 'Essential productivity features for personal use',
    features: [
      'Unlimited clipboard history',
      'Text and image support',
      'Basic search functionality',
      'Up to 10 text snippets',
      'Global keyboard shortcuts',
      'Menu bar integration',
    ],
    highlighted: false,
    buttonText: 'Download Free',
    buttonLink: 'https://github.com/yourusername/supermac/releases',
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: 'one-time',
    description: 'Unlock all productivity features and future updates',
    features: [
      'Everything in Free',
      'Unlimited text snippets',
      'Advanced search with filters',
      'Snippet folders and organization',
      'Cloud sync across devices',
      'Priority support',
      'Early access to new features',
      'Lifetime updates',
    ],
    highlighted: true,
    buttonText: 'Get Pro',
    buttonLink: 'https://github.com/yourusername/supermac/releases',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For teams and organizations',
    features: [
      'Everything in Pro',
      'Team management dashboard',
      'Shared snippet libraries',
      'Advanced security options',
      'SSO integration',
      'Dedicated support',
      'Custom deployment options',
      'Volume licensing',
    ],
    highlighted: false,
    buttonText: 'Contact Sales',
    buttonLink: 'mailto:sales@supermac.com',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'Is there a free trial for Pro?',
    answer: 'Yes! You can try all Pro features free for 14 days, no credit card required.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and Apple Pay.',
  },
  {
    question: 'Can I upgrade from Free to Pro later?',
    answer: 'Absolutely! You can upgrade at any time and all your data will be preserved.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied, contact us for a full refund.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes! All data is encrypted and stored locally on your device. Pro cloud sync uses end-to-end encryption.',
  },
  {
    question: 'Can I use SuperMac on multiple Macs?',
    answer: 'Free version can be used on one Mac. Pro and Enterprise licenses support multiple devices.',
  },
];
