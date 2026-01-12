import { motion } from "framer-motion";
import { Section } from "../components/common";
import { RELEASE_NOTES, CHANGE_TYPE_CONFIG } from "../utils/releaseNotes";
import type { ReleaseChange, ReleaseNote } from "../types";

export default function ReleaseNotesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black pt-24 pb-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <Section containerClassName="max-w-[1200px] relative z-10">
        {/* Timeline */}
        <div className="relative px-4">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-[200px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-purple-500/40 to-transparent" />

          <div className="space-y-14">
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
  const groupedChanges = release.changes.reduce((acc, change) => {
    if (!acc[change.type]) acc[change.type] = [];
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
      {/* Date / Version */}
      <div className="md:sticky md:top-24 md:self-start">
        <time className="block text-sm font-semibold text-gray-400 mb-1">
          {formatDate(release.date)}
        </time>
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold text-white">
            v{release.version}
          </h2>
          {index === 0 && (
            <span className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-lg text-xs font-bold shadow-md">
              Latest
            </span>
          )}
        </div>
      </div>

      {/* Timeline dot */}
      <div className="hidden md:block absolute left-[194px] top-2 w-3 h-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border border-gray-900 shadow-lg" />

      {/* Content */}
      <div className="space-y-6">
        {Object.entries(groupedChanges).map(([type, changes]) => {
          const config =
            CHANGE_TYPE_CONFIG[type as keyof typeof CHANGE_TYPE_CONFIG];

          return (
            <div
              key={type}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-md"
            >
              <h3
                className={`text-lg font-bold mb-4 flex items-center gap-2 ${config.color}`}
              >
                {config.label}
                <span className="text-sm font-normal text-gray-500">
                  ({changes.length})
                </span>
              </h3>

              <ul className="space-y-3">
                {changes.map((change, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-300 leading-relaxed"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-gray-500 rounded-full mt-2" />
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
