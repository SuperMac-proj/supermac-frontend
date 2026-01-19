import { motion } from "framer-motion";
import { Section } from "../common";
import { DETAILED_FEATURES_ENHANCED } from "../../utils/constants";
import demoImage from "../../assets/images/demo.png";
import snippetVideo from "../../assets/snippet.mp4";
import clipboardVideo from "../../assets/clipboard_white.mp4";
import { Check, ArrowRight } from "lucide-react";

export default function DetailedFeaturesSection() {
  return (
    <Section
      id="detailed-features"
      className="bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden py-16 sm:py-20 md:py-24"
    >
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      {/* Section header */}
      <div className="text-center mb-12 md:mb-20 px-4 relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          See It In Action
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Watch how SuperMac transforms your daily workflow
        </motion.p>
      </div>

      {DETAILED_FEATURES_ENHANCED.map((feature, index) => (
        <motion.div
          key={index}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10 ${
            index !== DETAILED_FEATURES_ENHANCED.length - 1
              ? "mb-20 md:mb-28 lg:mb-36"
              : ""
          }`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Image/Video */}
          <div
            className={`${
              feature.imagePosition === "right" ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div className="relative px-4 sm:px-0">
              {/* Glow effect behind video */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-50"></div>

              {index === 0 ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="relative w-full h-auto rounded-xl sm:rounded-2xl border border-gray-700 shadow-2xl"
                >
                  <source src={clipboardVideo} type="video/mp4" />
                </video>
              ) : index === 1 ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="relative w-full h-auto rounded-xl sm:rounded-2xl border border-gray-700 shadow-2xl"
                >
                  <source src={snippetVideo} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={demoImage}
                  alt={feature.title}
                  className="relative w-full h-auto rounded-xl sm:rounded-2xl border border-gray-700 shadow-2xl"
                />
              )}
            </div>
          </div>

          {/* Content */}
          <div
            className={`px-4 sm:px-0 ${
              feature.imagePosition === "right" ? "lg:order-1 lg:pr-8" : "lg:order-2 lg:pl-8"
            }`}
          >
            {/* Badge with stats */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <div className="inline-block bg-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-sm font-semibold border border-blue-500/30">
                {feature.badge}
              </div>
              {feature.stat && (
                <div className="inline-block bg-green-500/10 text-green-400 px-3 py-1.5 rounded-full text-sm font-medium border border-green-500/20">
                  {feature.stat}
                </div>
              )}
            </div>

            {/* Title */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {feature.title}
            </h3>

            {/* Subtitle */}
            <p className="text-lg text-gray-400 mb-6">
              {feature.subtitle}
            </p>

            {/* Features list */}
            <ul className="space-y-3 mb-6">
              {feature.features.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-blue-400" />
                  </div>
                  <span className="text-base sm:text-lg text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            {/* Before/After or highlight */}
            {feature.highlight && (
              <div className="flex items-center gap-2 text-blue-400 font-medium">
                <ArrowRight className="w-5 h-5" />
                <span>{feature.highlight}</span>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </Section>
  );
}
