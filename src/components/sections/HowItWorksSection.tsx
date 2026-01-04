import { motion } from 'framer-motion';
import { Section } from '../common';
import { HOW_IT_WORKS_STEPS } from '../../utils/constants';

export default function HowItWorksSection() {
  return (
    <Section className="bg-gradient-to-b from-gray-50/50 via-blue-50/30 to-white relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl"></div>

      <div className="text-center mb-12 md:mb-16 px-4 relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
          How It Works
        </h2>
        <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Get started with SuperMac in just three simple steps
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto px-4 relative z-10">
        {HOW_IT_WORKS_STEPS.map((step, index) => (
          <motion.div
            key={index}
            className="text-center relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Step Number */}
            <div className="relative inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-white">
                  {step.step}
                </span>
              </div>
            </div>

            {/* Icon */}
            <div className="text-5xl mb-4">{step.icon}</div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {step.description}
            </p>

            {/* Connector Arrow (except last item) */}
            {index < HOW_IT_WORKS_STEPS.length - 1 && (
              <div className="hidden md:block absolute top-10 left-full w-12 -ml-6">
                <svg
                  className="w-12 h-6 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
