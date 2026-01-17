import { motion } from "framer-motion";
import { Card, Section } from "../common";
import { HOW_IT_WORKS_STEPS } from "../../utils/constants";

const StepIcons = [
  // Step 1: Download
  <svg
    className="w-16 h-16"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>,
  // Step 2: Clipboard
  <svg
    className="w-16 h-16"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
    />
  </svg>,
  // Step 3: Command / Shortcut
  <svg
    className="w-16 h-16"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>,
];

export default function HowItWorksSection() {
  return (
    <Section className="bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      {/* Header */}
      <div className="text-center mb-12 md:mb-16 px-4 relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          How It Works
        </h2>
        <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Get started with SuperMac in just three simple steps
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 relative z-10">
        {HOW_IT_WORKS_STEPS.map((step, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <Card
              className="
                text-center relative h-full
                bg-gray-900 border border-gray-700
                hover:bg-gray-800 hover:border-gray-600
                transition-all duration-300
              "
            >
              {/* Step Number */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <span className="text-2xl font-bold text-white">
                    {step.step}
                  </span>
                </div>
              </div>

              {/* Icon */}
              <div className="flex justify-center mt-8 mb-5 text-blue-400">
                {StepIcons[index]}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {step.description}
              </p>
            </Card>

            {/* Connector Arrow */}
            {index < HOW_IT_WORKS_STEPS.length - 1 && (
              <div className="hidden md:flex absolute top-1/2 -right-4 lg:-right-6 -translate-y-1/2 z-20">
                <svg
                  className="w-8 h-8 text-blue-400/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
