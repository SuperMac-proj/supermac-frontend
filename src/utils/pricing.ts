import type { PricingPlan } from '../types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Free Trial',
    price: '7 Days',
    description: 'Try all features free for 7 days',
    features: [
      'Full access to all features',
      'Unlimited clipboard history',
      'Text and image support',
      'Unlimited text snippets',
      'Advanced search with filters',
      'Global keyboard shortcuts',
    ],
    highlighted: false,
    buttonText: 'Start Free Trial',
    buttonLink: 'paddle:trial', // Special link to trigger Paddle checkout
  },
  {
    name: 'Pro Monthly',
    price: '$7.99',
    period: 'month',
    description: 'Full access with monthly billing',
    features: [
      'Unlimited clipboard history',
      'Unlimited text snippets',
      'Advanced search with filters',
      'Snippet folders and organization',
      'Cloud sync across devices',
      'Priority support',
      'Regular updates',
    ],
    highlighted: true,
    buttonText: 'Get Monthly',
    buttonLink: 'paddle:monthly', // Special link to trigger Paddle checkout
  },
  {
    name: 'Pro Yearly',
    price: '$79.99',
    period: 'year',
    description: 'Save 17% with annual billing',
    features: [
      'Everything in Monthly',
      '2 months free (17% savings)',
      'Priority support',
      'Early access to new features',
      'Lifetime updates included',
      'Cancel anytime',
    ],
    highlighted: false,
    buttonText: 'Get Yearly',
    buttonLink: 'paddle:yearly', // Special link to trigger Paddle checkout
  },
];

export const FAQ_ITEMS = [
  {
    question: 'What happens after the 7-day trial?',
    answer: 'After the trial, you can choose between monthly ($7.99/month) or yearly ($79.99/year) subscription to continue using all features.',
  },
  {
    question: 'Can I switch between monthly and yearly plans?',
    answer: 'Absolutely! You can switch at any time and all your data will be preserved.',
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
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time. You\'ll continue to have access until the end of your billing period.',
  },
];
