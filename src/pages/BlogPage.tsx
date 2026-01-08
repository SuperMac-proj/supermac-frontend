import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Section } from "../components/common";
import { BLOG_POSTS } from "../utils/blogPosts";

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50/50 to-white pt-24 pb-16">
      <Section containerClassName="max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12">
          {/* Sidebar */}
          <motion.aside
            className="lg:sticky lg:top-24 lg:self-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Title in sidebar */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Blog</h1>
              <p className="text-sm text-gray-600">
                Tips, tutorials, and insights
              </p>
            </div>

            {/* Tags Filter */}
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Topics
              </h2>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {/* All Posts Button */}
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedTag === null
                      ? "text-primary-600 bg-primary-50 font-semibold"
                      : "text-gray-600 hover:text-primary-600 hover:bg-primary-50/50"
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
                        ? "text-primary-600 bg-primary-50 font-semibold"
                        : "text-gray-600 hover:text-primary-600 hover:bg-primary-50/50"
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
            {/* Post count */}
            <div className="mb-6 text-sm text-gray-600">
              {selectedTag ? (
                <span>
                  Showing {filteredPosts.length} post
                  {filteredPosts.length !== 1 ? "s" : ""} in{" "}
                  <span className="font-semibold text-primary-600">
                    {selectedTag}
                  </span>
                </span>
              ) : (
                <span>All posts ({filteredPosts.length})</span>
              )}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogPostCard key={post.slug} post={post} index={index} />
              ))}
            </div>

            {/* No results */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No posts found for this topic.</p>
              </div>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}

interface BlogPostCardProps {
  post: (typeof BLOG_POSTS)[0];
  index: number;
}

function BlogPostCard({ post, index }: BlogPostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/blog/${post.slug}`}
        className="block group h-full bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      >
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary-50 to-accent-50 text-primary-700 border border-primary-200/50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>{post.author}</span>
          <span>•</span>
          <time>{formatDate(post.date)}</time>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        {/* Read More Arrow */}
        <div className="mt-6 flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
          <span>Read more</span>
          <svg
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </Link>
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
