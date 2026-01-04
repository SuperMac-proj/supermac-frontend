import { motion } from 'framer-motion';
import { Section } from '../common';
import { DETAILED_FEATURES } from '../../utils/constants';

export default function DetailedFeaturesSection() {
  return (
    <Section className="bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-accent-100/20 to-transparent rounded-full blur-3xl"></div>

      {DETAILED_FEATURES.map((feature, index) => (
        <motion.div
          key={index}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10 ${
            index !== DETAILED_FEATURES.length - 1 ? 'mb-16 md:mb-24 lg:mb-32' : ''
          }`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Image */}
          <div
            className={`${
              feature.imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            <div className="relative px-4 sm:px-0">
              <div className="aspect-video bg-gray-100 rounded-lg sm:rounded-xl border border-gray-200 flex items-center justify-center">
                <p className="text-gray-400 text-sm sm:text-base md:text-lg">Feature Screenshot</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`px-4 sm:px-0 ${
              feature.imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'
            }`}
          >
            <div className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {feature.badge}
            </div>
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              {feature.title}
            </h3>
            <ul className="space-y-4">
              {feature.features.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5"
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
                  <span className="text-lg text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </Section>
  );
}
