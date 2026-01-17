import type { PricingPlan } from '../types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Pro Monthly',
    price: '$7.99',
    period: 'month',
    description: 'Full access with monthly billing',
    features: [
      'Unlimited clipboard history',
      'Unlimited text snippets',
      'Advanced search with filters',
      'Priority support',
      'Regular updates',
    ],
    highlighted: true,
    buttonText: 'Get Monthly',
    buttonLink: 'paddle:monthly', // Special link to trigger Paddle checkout
  },
  {
    name: 'Pro Yearly',
    price: '$5',
    period: 'month',
    description: 'Billed annually at $60 (Save 37%)',
    features: [
      'Save $35.88 per year',
      'Unlimited clipboard history',
      'Unlimited text snippets',
      'Advanced search with filters',
      'Priority support',
      'Regular updates',
    ],
    highlighted: false,
    buttonText: 'Get Yearly',
    buttonLink: 'paddle:yearly', // Special link to trigger Paddle checkout
  },
  {
    name: 'Lifetime',
    price: '$110',
    period: undefined,
    description: 'One-time payment, lifetime access',
    features: [
      'Everything in Monthly',
      'Pay once, use forever',
      'All future updates included',
      'Priority support forever',
      'No recurring fees',
      'Best value for long-term use',
    ],
    highlighted: false,
    buttonText: 'Get Lifetime',
    buttonLink: 'paddle:lifetime', // Special link to trigger Paddle checkout
  },
];

export const FAQ_ITEMS = [
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
