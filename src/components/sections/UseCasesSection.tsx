import { motion } from 'framer-motion';
import { Code2, Feather, Headphones, Palette } from 'lucide-react';
import { Card, Section } from '../common';
import { USE_CASES } from '../../utils/constants';

const UseCaseIcons = [
  <Code2 className="w-14 h-14" strokeWidth={1.5} />,
  <Feather className="w-14 h-14" strokeWidth={1.5} />,
  <Headphones className="w-14 h-14" strokeWidth={1.5} />,
  <Palette className="w-14 h-14" strokeWidth={1.5} />,
];

export default function UseCasesSection() {
  return (
    <Section className="bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 relative overflow-hidden">
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
