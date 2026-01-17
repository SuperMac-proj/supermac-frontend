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
    <Section className="bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden py-32">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

      {/* Section header */}
      <div className="text-center mb-14 md:mb-20 px-4 relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Built For Productive People
        </h2>
        <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Whether you're coding, writing, or supporting customers, SuperMac has you covered
        </p>
      </div>

      {/* Use case cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 relative z-10">
        {USE_CASES.map((useCase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <Card
              className="
                h-full text-center
                bg-gray-900/60 backdrop-blur-sm
                border border-gray-800
                rounded-2xl p-6
                transition-all duration-300
                hover:bg-gray-900/80 hover:border-gray-700
              "
            >
              {/* Icon */}
              <div className="flex justify-center mb-5 text-blue-500">
                {UseCaseIcons[index]}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {useCase.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {useCase.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
