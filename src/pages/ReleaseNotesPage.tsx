import { motion } from 'framer-motion';
import { Section } from '../components/common';
import { RELEASE_NOTES, CHANGE_TYPE_CONFIG } from '../utils/releaseNotes';
import type { ReleaseChange } from '../types';

export default function ReleaseNotesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50/50 to-white pt-24">
      <Section containerClassName="max-w-[1440px]">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 px-4">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Release Notes
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            See what's new in SuperMac
          </motion.p>
        </div>

        {/* Release Notes List */}
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12 px-4">
          {RELEASE_NOTES.map((release, index) => (
            <motion.div
              key={release.version}
              className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Version Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 pb-6 border-b border-gray-200">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Version {release.version}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-500">{formatDate(release.date)}</p>
                </div>
                {index === 0 && (
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold">
                      Latest
                    </span>
                  </div>
                )}
              </div>

              {/* Changes */}
              <div className="space-y-4">
                {release.changes.map((change, changeIndex) => (
                  <ChangeItem key={changeIndex} change={change} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}

function ChangeItem({ change }: { change: ReleaseChange }) {
  const config = CHANGE_TYPE_CONFIG[change.type];

  return (
    <div className="flex items-start gap-4">
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-lg ${config.bgColor} border ${config.borderColor} flex items-center justify-center text-sm`}
      >
        {config.icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className={`text-xs font-semibold ${config.color}`}>
            {config.label}
          </span>
        </div>
        <p className="text-gray-600 leading-relaxed">{change.description}</p>
      </div>
    </div>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
