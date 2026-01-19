import { motion } from 'framer-motion';
import { ClipboardList, Type, Command, Clock } from 'lucide-react';
import { Card, Section } from '../common';
import { FEATURES_ENHANCED } from '../../utils/constants';

const FeatureIcons = [
  <ClipboardList className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />,
  <Type className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />,
  <Command className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />,
];

export default function FeaturesSection() {
  return (
    <Section
      id="features"
      className="bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden pt-24 sm:pt-32 md:pt-40 lg:pt-48"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      {/* Section header */}
      <div className="text-center mb-10 md:mb-16 px-4 relative z-10">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Clock className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-blue-400 font-medium">Save 2+ hours every week</span>
        </motion.div>
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          3 Features. Endless Possibilities.
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Everything you need to eliminate repetitive work and focus on what matters
        </motion.p>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 px-4 relative z-10">
        {FEATURES_ENHANCED.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              className="
                h-full text-left
                bg-gradient-to-br from-gray-900 to-gray-900/50
                border border-gray-800 hover:border-blue-500/50
                rounded-2xl p-6 sm:p-8
                transition-all duration-300
                hover:shadow-lg hover:shadow-blue-500/10
                group
              "
            >
              {/* Icon + Time saved */}
              <div className="flex items-start justify-between mb-5">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  {FeatureIcons[index]}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-4 text-sm sm:text-base">
                {feature.description}
              </p>

              {/* Benefit highlight */}
              <div className="pt-4 border-t border-gray-800">
                <p className="text-sm text-blue-400 font-medium">
                  {feature.benefit}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
