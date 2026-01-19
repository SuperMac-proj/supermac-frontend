import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Section } from '../common';
import { TESTIMONIALS } from '../../utils/constants';

export default function UseCasesSection() {
  return (
    <Section className="bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden py-20 sm:py-24 md:py-32">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

      {/* Section header */}
      <div className="text-center mb-12 md:mb-16 px-4 relative z-10">
        <motion.div
          className="inline-flex items-center gap-1.5 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          ))}
          <span className="ml-2 text-gray-400 text-sm">4.9 average rating</span>
        </motion.div>
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Loved by 10,000+ Mac Users
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          See why developers, writers, and teams choose SuperMac
        </motion.p>
      </div>

      {/* Testimonials grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 px-4 relative z-10">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
          >
            <div
              className="
                h-full
                bg-gradient-to-br from-gray-900 to-gray-900/50
                border border-gray-800 hover:border-gray-700
                rounded-2xl p-6 sm:p-7
                transition-all duration-300
                flex flex-col
              "
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-blue-500/30 mb-4" />

              {/* Testimonial text */}
              <p className="text-gray-300 leading-relaxed mb-6 flex-grow text-base sm:text-lg">
                "{testimonial.quote}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                  <div className="text-gray-500 text-xs">{testimonial.role}</div>
                </div>
                {/* Stars */}
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
