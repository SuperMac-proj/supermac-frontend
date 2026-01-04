import { motion } from 'framer-motion';
import { Card, Section } from '../common';
import { USE_CASES } from '../../utils/constants';

const UseCaseIcons = [
  // Developers (Code icon)
  <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>,
  // Writers (Pen/Edit icon)
  <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>,
  // Support Teams (Headset icon)
  <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>,
  // Designers (Color Palette icon)
  <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>,
];

export default function UseCasesSection() {
  return (
    <Section className="bg-gradient-to-b from-white to-purple-50/30 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-100/30 to-transparent rounded-full blur-3xl"></div>

      <div className="text-center mb-12 md:mb-16 px-4 relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
          Built For Productive People
        </h2>
        <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Whether you're coding, writing, or supporting customers, SuperMac has you covered
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 relative z-10">
        {USE_CASES.map((useCase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="text-center h-full">
              <div className="flex justify-center mb-4 text-primary-500">
                {UseCaseIcons[index]}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {useCase.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {useCase.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
