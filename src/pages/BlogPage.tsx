import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "../components/common";
import { BLOG_POSTS } from "../utils/blogPosts";
import { FileText } from "lucide-react";

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = Array.from(
    new Set(BLOG_POSTS.flatMap((post) => post.tags))
  );

  // Filter posts by selected tag
  const filteredPosts = selectedTag
    ? BLOG_POSTS.filter((post) => post.tags.includes(selectedTag))
    : BLOG_POSTS;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black pt-24 pb-16 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      <Section containerClassName="max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12 relative z-10">
          {/* Sidebar */}
          <motion.aside
            className="lg:sticky lg:top-24 lg:self-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Title in sidebar */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-white mb-2">Blog</h1>
              <p className="text-sm text-gray-400">
                Tips, tutorials, and insights
              </p>
            </div>

            {/* Tags Filter */}
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-white uppercase tracking-wider">
                Topics
              </h2>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {/* All Posts Button */}
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedTag === null
                      ? "text-blue-400 bg-blue-600/20 font-semibold border border-blue-500/30"
                      : "text-gray-400 hover:text-blue-400 hover:bg-blue-600/10"
                  }`}
                >
                  All Posts
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedTag === tag
                        ? "text-blue-400 bg-blue-600/20 font-semibold border border-blue-500/30"
                        : "text-gray-400 hover:text-blue-400 hover:bg-blue-600/10"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </motion.aside>

          {/* Main Content */}
          <div>
            {/* Empty State */}
            {filteredPosts.length === 0 && (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/30 mb-6">
                  <FileText className="w-8 h-8 text-blue-400" />
                </div>
                <p className="text-lg text-gray-400">
                  The post has not been created yet.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  I'll be back with a better posts.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
