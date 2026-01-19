import { motion } from "framer-motion";
import { Section } from "../common";
import { CreditCard, Download, Zap } from "lucide-react";

const steps = [
  {
    icon: CreditCard,
    title: "Sign Up & Subscribe",
    description: "Create an account and choose your plan.",
    time: "1 min"
  },
  {
    icon: Download,
    title: "Download & Install",
    description: "Get the app and install in seconds.",
    time: "30 sec"
  },
  {
    icon: Zap,
    title: "Start Using",
    description: "Save, organize, and paste anything instantly.",
    time: "0.1 sec"
  }
];

export default function HowItWorksSection() {
  return (
    <Section className="bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden py-20 sm:py-24 md:py-32">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      {/* Header */}
      <div className="text-center mb-12 md:mb-16 px-4 relative z-10">
        <motion.div
          className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm text-green-400 font-medium">Setup in under 2 minutes</span>
        </motion.div>
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Dead Simple to Start
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          No learning curve. No configuration. Just productivity.
        </motion.p>
      </div>

      {/* Steps - Horizontal timeline style */}
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-0">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex-1 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-blue-500/10" />
              )}

              <div className="relative flex flex-col items-center text-center px-4">
                {/* Step number + Icon */}
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-900 border-2 border-blue-500 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {step.description}
                </p>
                {/* Time indicator */}
                <div className="inline-block px-3 py-1 rounded-full bg-gray-800 text-xs text-gray-400">
                  {step.time}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
