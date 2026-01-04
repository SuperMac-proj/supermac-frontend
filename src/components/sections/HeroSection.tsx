import { motion } from 'framer-motion';
import { Button, Section } from '../common';
import { HERO_CONTENT, LINKS } from '../../utils/constants';
import demoImage from '../../assets/images/demo.png';

export default function HeroSection() {
  return (
    <Section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-200/30 to-accent-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent-200/30 to-primary-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="text-center px-4 relative z-10">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6 leading-snug py-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {HERO_CONTENT.title}
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-10 max-w-4xl mx-auto px-4 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {HERO_CONTENT.subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center mb-12 sm:mb-16 px-4"
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
          <button
            onClick={() => window.open(LINKS.github, '_blank')}
            className="group px-7 py-3.5 sm:px-8 sm:py-4 text-lg sm:text-xl font-bold text-gray-900 bg-white/90 backdrop-blur-sm hover:bg-white border-2 border-gray-300 hover:border-gray-400 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span>{HERO_CONTENT.secondaryCTA}</span>
          </button>
        </motion.div>

        {/* App Screenshot Placeholder */}
        <motion.div
          className="mt-8 sm:mt-12 relative px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative mx-auto max-w-4xl">
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
