import { motion } from "framer-motion";
import { Section } from "../common";
import { SOCIAL_PROOF } from "../../utils/constants";
import { ArrowRight, Shield, Zap, Clock, CheckCircle, Star, User } from "lucide-react";

export default function FinalCTASection() {
  return (
    <Section
      id="download"
      className="bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden py-20 sm:py-24 md:py-32"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-blue-600/10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Main CTA Card */}
        <div className="bg-gradient-to-br from-gray-900/90 to-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 text-center">
          {/* Social proof badge */}
          <motion.div
            className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-gray-900 flex items-center justify-center"
                >
                  <User className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/80" />
                </div>
              ))}
            </div>
            <span className="text-xs sm:text-sm text-gray-300">
              <span className="font-semibold text-white">{SOCIAL_PROOF.users}</span> already using SuperMac
            </span>
          </motion.div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Ready to Boost Your Productivity?
          </h2>

          {/* Value reminder */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Join thousands of Mac users who save 2+ hours every week with SuperMac
          </p>

          {/* CTA Button - Large and prominent */}
          <motion.div
            className="mb-6 sm:mb-8"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-base sm:text-lg md:text-xl font-bold text-white
                         bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500
                         rounded-xl sm:rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/30
                         transition-all duration-300"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </motion.div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400" />
              <span>Native macOS App</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400" />
              <span>Lightweight & Fast</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
              <span>2-Minute Setup</span>
            </div>
          </div>

          {/* Rating - Hidden on mobile */}
          <div className="hidden sm:flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-gray-400 text-sm">{SOCIAL_PROOF.rating} from {SOCIAL_PROOF.users}</span>
          </div>
        </div>

        {/* Bottom features - What you get */}
        <motion.div
          className="mt-6 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { icon: CheckCircle, text: "Unlimited Clipboard History" },
            { icon: CheckCircle, text: "Unlimited Text Snippets" },
            { icon: CheckCircle, text: "Regular Updates Included" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-2 text-gray-400 text-xs sm:text-sm">
              <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400" />
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* System requirements */}
        <p className="text-center text-gray-600 text-xs sm:text-sm mt-6 sm:mt-8">
          Requires macOS 14.0 or later
        </p>
      </motion.div>
    </Section>
  );
}
