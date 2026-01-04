import { motion } from "framer-motion";
import { Section } from "../components/common";
import { RELEASE_NOTES, CHANGE_TYPE_CONFIG } from "../utils/releaseNotes";
import type { ReleaseChange, ReleaseNote } from "../types";

export default function ReleaseNotesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50/50 to-white pt-24 pb-16">
      <Section containerClassName="max-w-[1200px]">
        {/* Timeline */}
        <div className="relative px-4">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-[200px] top-0 bottom-0 w-px bg-gradient-to-b from-primary-200 via-accent-200 to-transparent"></div>

          <div className="space-y-12">
            {RELEASE_NOTES.map((release, index) => (
              <ReleaseItem
                key={release.version}
                release={release}
                index={index}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

function ReleaseItem({
  release,
  index,
}: {
  release: ReleaseNote;
  index: number;
}) {
  // Group changes by type
  const groupedChanges = release.changes.reduce((acc, change) => {
    if (!acc[change.type]) {
      acc[change.type] = [];
    }
    acc[change.type].push(change);
    return acc;
  }, {} as Record<string, ReleaseChange[]>);

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 md:gap-12 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Date - Sticky on desktop */}
      <div className="md:sticky md:top-24 md:self-start">
        <time className="block text-sm font-semibold text-gray-500 mb-1">
          {formatDate(release.date)}
        </time>
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold text-gray-900">
            v{release.version}
          </h2>
          {index === 0 && (
            <span className="inline-flex items-center bg-gradient-to-r from-primary-500 to-accent-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
              Latest
            </span>
          )}
        </div>
      </div>

      {/* Timeline dot - Desktop only */}
      <div className="hidden md:block absolute left-[194px] top-1 w-3 h-3 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full border-2 border-white shadow-lg"></div>

      {/* Content */}
      <div className="space-y-6">
        {/* Grouped changes */}
        {Object.entries(groupedChanges).map(([type, changes]) => {
          const config =
            CHANGE_TYPE_CONFIG[type as keyof typeof CHANGE_TYPE_CONFIG];

          return (
            <div
              key={type}
              className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-md"
            >
              <h3
                className={`text-lg font-bold ${config.color} mb-4 flex items-center gap-2`}
              >
                {/* <span className="text-xl">{config.icon}</span> */}
                {config.label}
                <span className="text-sm font-normal text-gray-400">
                  ({changes.length})
                </span>
              </h3>
              <ul className="space-y-3">
                {changes.map((change, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-700 leading-relaxed"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                    <span>{change.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
