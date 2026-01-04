import { motion } from 'framer-motion';
import { Card, Section } from '../common';
import { FEATURES } from '../../utils/constants';

const FeatureIcons = [
  // Clipboard History
  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>,
  // Text Snippets (Lightning)
  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  // Quick Access (Keyboard)
  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
  </svg>,
];

export default function FeaturesSection() {
  return (
    <Section id="features" className="bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-primary-100/20 to-transparent rounded-full blur-3xl"></div>

      <div className="text-center mb-12 md:mb-16 px-4 relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
          What's Inside SuperMac
        </h2>
        <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Powerful productivity features designed to enhance your Mac workflow
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 relative z-10">
        {FEATURES.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="text-center h-full">
              <div className="flex justify-center mb-6 text-primary-500">
                {FeatureIcons[index]}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
