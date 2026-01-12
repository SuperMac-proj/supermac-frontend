import { motion } from "framer-motion";
import { Section } from "../common";
import { DETAILED_FEATURES } from "../../utils/constants";
import demoImage from "../../assets/images/demo.png";
import snippetVideo from "../../assets/snippet.mp4";
import clipboardVideo from "../../assets/clipboard_white.mp4";

export default function DetailedFeaturesSection() {
  return (
    <Section
      id="detailed-features"
      className="bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden"
    >
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      {DETAILED_FEATURES.map((feature, index) => (
        <motion.div
          key={index}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start relative z-10 ${
            index !== DETAILED_FEATURES.length - 1
              ? "mb-16 md:mb-24 lg:mb-32"
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
              {index === 0 ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-lg sm:rounded-xl border border-gray-800 shadow-2xl"
                >
                  <source src={clipboardVideo} type="video/mp4" />
                </video>
              ) : index === 1 ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-lg sm:rounded-xl border border-gray-800 shadow-2xl"
                >
                  <source src={snippetVideo} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={demoImage}
                  alt={feature.title}
                  className="w-full h-auto rounded-lg sm:rounded-xl border border-gray-800 shadow-2xl"
                />
              )}
            </div>
          </div>

          {/* Content */}
          <div
            className={`px-4 sm:px-0 ${
              feature.imagePosition === "right" ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-blue-500/30">
              {feature.badge}
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-snug py-2">
              {feature.title}
            </h3>
            <ul className="space-y-4">
              {feature.features.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-lg text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </Section>
  );
}
