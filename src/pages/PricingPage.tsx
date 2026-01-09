import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Section } from '../components/common';
import { PRICING_PLANS, FAQ_ITEMS } from '../utils/pricing';
import type { PricingPlan } from '../types';
import { openPaddleCheckout, PADDLE_PRICE_IDS } from '../lib/paddle';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50/50 to-white pt-24">
      <Section containerClassName="max-w-[1440px]">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 px-4">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6 leading-snug py-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Choose the plan that works best for you
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24 max-w-7xl mx-auto px-4">
          {PRICING_PLANS.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>

        {/* FAQ Section */}
        <FAQSection />
      </Section>
    </div>
  );
}

function PricingCard({ plan, index }: { plan: PricingPlan; index: number }) {
  const handleButtonClick = async () => {
    // Check if this is a Paddle checkout link
    if (plan.buttonLink.startsWith('paddle:')) {
      const planType = plan.buttonLink.replace('paddle:', '');
      const priceIdMap: Record<string, string> = {
        trial: PADDLE_PRICE_IDS.TRIAL,
        monthly: PADDLE_PRICE_IDS.MONTHLY,
        yearly: PADDLE_PRICE_IDS.YEARLY,
      };

      const priceId = priceIdMap[planType];
      if (priceId) {
        try {
          await openPaddleCheckout({
            items: [{ priceId, quantity: 1 }],
          });
        } catch (error) {
          console.error('Error opening checkout:', error);
          alert('Failed to open checkout. Please try again or contact support.');
        }
      } else {
        console.error('Invalid Paddle price ID configuration');
        alert('Checkout is not configured yet. Please contact support.');
      }
    } else {
      // External link - open in new tab
      window.open(plan.buttonLink, '_blank');
    }
  };

  return (
    <motion.div
      className={`relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 ${
        plan.highlighted
          ? 'border-2 border-primary-400 shadow-2xl scale-105 ring-2 ring-primary-100'
          : 'border border-gray-200/50 shadow-xl'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Highlighted Badge */}
      {plan.highlighted && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2">
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-5 py-2 rounded-2xl text-sm font-bold shadow-lg flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>Most Popular</span>
          </div>
        </div>
      )}

      {/* Plan Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
        <div className="flex items-baseline mb-2">
          <span className="text-4xl md:text-5xl font-bold text-gray-900">
            {plan.price}
          </span>
          {plan.period && (
            <span className="ml-2 text-gray-500">/{plan.period}</span>
          )}
        </div>
        <p className="text-gray-600 text-sm">{plan.description}</p>
      </div>

      {/* Features List */}
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <svg
              className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-gray-600 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Button
        variant={plan.highlighted ? 'primary' : 'secondary'}
        className="w-full"
        onClick={handleButtonClick}
      >
        {plan.buttonText}
      </Button>
    </motion.div>
  );
}

function FAQSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.h2
        className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent text-center mb-12 leading-snug py-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="space-y-4">
        {FAQ_ITEMS.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} index={index} />
        ))}
      </div>
    </div>
  );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl overflow-hidden shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <button
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-900 pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <motion.div
          className="px-6 pb-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
}
