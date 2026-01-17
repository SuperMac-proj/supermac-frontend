import { motion } from "framer-motion";
import { Section } from "../common";
import { FINAL_CTA, LINKS } from "../../utils/constants";

export default function FinalCTASection() {
  return (
    <Section
      id="download"
      className="bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>

      <motion.div
        className="text-center max-w-5xl mx-auto px-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-snug py-2">
          {FINAL_CTA.title}
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-10 sm:mb-12 leading-relaxed">
          {FINAL_CTA.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center mb-8 sm:mb-10">
          <button
            onClick={() => window.location.href = LINKS.download}
            className="group px-7 py-3.5 sm:px-8 sm:py-4 text-xl sm:text-2xl font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-2xl border-2 border-blue-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>{FINAL_CTA.buttonText}</span>
          </button>
        </div>

        <p className="text-gray-500 text-base">{FINAL_CTA.systemRequirements}</p>
      </motion.div>
    </Section>
  );
}
