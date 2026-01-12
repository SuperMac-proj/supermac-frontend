import { motion } from 'framer-motion';
import { ClipboardList, Type, Command } from 'lucide-react';
import { Card, Section } from '../common';
import { FEATURES } from '../../utils/constants';

const FeatureIcons = [
  <ClipboardList className="w-14 h-14" strokeWidth={1.5} />,
  <Type className="w-14 h-14" strokeWidth={1.5} />,
  <Command className="w-14 h-14" strokeWidth={1.5} />,
];

export default function FeaturesSection() {
  return (
    <Section
      id="features"
      className="bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden pt-32 sm:pt-40 md:pt-48 lg:pt-56"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      {/* Section header */}
      <div className="text-center mb-14 md:mb-20 px-4 relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          What's Inside SuperMac
        </h2>
        <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Powerful productivity features designed to enhance your Mac workflow
        </p>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 relative z-10">
        {FEATURES.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
          >
            <Card
              className="
                h-full text-center
                bg-gray-900/60 backdrop-blur-sm
                border border-gray-800
                rounded-2xl p-8
                transition-all duration-300
                hover:bg-gray-900/80 hover:border-gray-700
              "
            >
              {/* Icon */}
              <div className="flex justify-center mb-6 text-blue-500">
                {FeatureIcons[index]}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-100 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
