import { motion } from 'framer-motion';
import { Section } from '../common';
import { HERO_CONTENT, LINKS } from '../../utils/constants';
import demoImage from '../../assets/images/demo.png';

export default function HeroSection() {
  return (
    <Section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-200/30 to-accent-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent-200/30 to-primary-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start px-4 relative z-10">
        {/* Left: Text Content */}
        <div className="lg:col-span-6">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6 py-2"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '1.2' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {HERO_CONTENT.title}
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10"
            style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif', fontWeight: 400, letterSpacing: '0em', lineHeight: '1.65' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {HERO_CONTENT.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              onClick={() => window.open(LINKS.download, '_blank')}
              className="group relative px-7 py-3.5 sm:px-8 sm:py-4 text-lg sm:text-xl font-bold text-white bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 hover:from-primary-600 hover:via-accent-600 hover:to-accent-700 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>{HERO_CONTENT.primaryCTA}</span>
            </button>
          </motion.div>
        </div>

        {/* Right: Demo Image */}
        <motion.div
          className="lg:col-span-6"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
              <img
                src={demoImage}
                alt="SuperMac App Screenshot"
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
