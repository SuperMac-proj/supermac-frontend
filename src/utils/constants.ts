import type { Feature, UseCase, HowItWorksStep } from "../types";

// Hero section content
export const HERO_CONTENT = {
  title: "Take control of macOS",
  subtitle: "Boost productivity by up to 17%. Go home earlier.",
  primaryCTA: "Get Started",
  secondaryCTA: "View on GitHub",
};

// Social proof data
export const SOCIAL_PROOF = {
  users: "10,000+ users",
  rating: "4.9/5 rating",
  downloads: "50K+ downloads",
};

// Trust badges below CTA
export const TRUST_BADGES = [
  { icon: "shield", text: "Native macOS app" },
  { icon: "zap", text: "Lightweight & fast" },
  { icon: "clock", text: "2-min setup" },
];

// Features (legacy)
export const FEATURES: Feature[] = [
  {
    icon: "📋",
    title: "Clipboard History",
    description:
      "Never lose what you copied. Access your entire clipboard history with a simple keyboard shortcut",
  },
  {
    icon: "⚡",
    title: "Text Snippets",
    description:
      "Save time with text expansion. Type shortcuts that automatically expand into full phrases",
  },
  {
    icon: "⌨️",
    title: "Quick Access Anywhere",
    description:
      "All features available instantly with global keyboard shortcuts, right when you need them",
  },
];

// Enhanced features with time savings
export const FEATURES_ENHANCED = [
  {
    title: "Clipboard History",
    description:
      "Never lose what you copied. Access your entire clipboard history instantly with a keyboard shortcut.",
    timeSaved: "",
    benefit: "No more switching between apps to re-copy content",
  },
  {
    title: "Text Snippets",
    description:
      "Type less, do more. Create shortcuts that expand into full paragraphs, code blocks, or templates.",
    timeSaved: "",
    benefit: "Perfect for emails, code, and repeated text",
  },
  {
    title: "Quick Access",
    description:
      "Press Cmd+Shift+V from anywhere. No mouse needed, no context switching.",
    timeSaved: "",
    benefit: "Works in every app, every time",
  },
];

// Use cases
export const USE_CASES: UseCase[] = [
  {
    icon: "👨‍💻",
    title: "Developers",
    description: "Quickly reuse code snippets, commands, and API keys",
  },
  {
    icon: "✍️",
    title: "Writers",
    description: "Automatically input frequently used phrases and templates",
  },
  {
    icon: "🎧",
    title: "Support Teams",
    description: "Save time with reusable text and clipboard history",
  },
  {
    icon: "🎨",
    title: "Designers",
    description: "Manage your clipboard history and reuse design specs",
  },
];

// How it works steps
export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    icon: "⬇️",
    title: "Download & Install",
    description: "An icon will appear in your menu bar",
  },
  {
    step: 2,
    icon: "📄",
    title: "Use as Usual",
    description: "SuperMac works quietly in the background",
  },
  {
    step: 3,
    icon: "⌨️",
    title: "Quick Access",
    description: "Use keyboard shortcuts to access features instantly",
  },
];

// Detailed features (legacy)
export const DETAILED_FEATURES = [
  {
    badge: "Clipboard History",
    title: "Never Lose What You Copy",
    features: [
      "Automatic history of everything you copy",
      "Support for both text and images",
      "Powerful search to find anything instantly",
      "Automatic duplicate removal",
    ],
    imagePosition: "left" as const,
  },
  {
    badge: "Text Snippets",
    title: "Type Less, Do More",
    features: [
      "Create unlimited text shortcuts",
      "Expand snippets with Tab or Space",
      "Track usage statistics",
    ],
    imagePosition: "right" as const,
  },
  {
    badge: "Native Integration",
    title: "Built for macOS",
    features: [
      "Menu bar integration for quick access",
      "System-wide keyboard shortcuts",
      "Native macOS design and dark mode",
      "Lightweight and blazingly fast",
    ],
    imagePosition: "left" as const,
  },
];

// Enhanced detailed features
export const DETAILED_FEATURES_ENHANCED = [
  {
    badge: "Clipboard History",
    title: "Never Lose What You Copy",
    subtitle: "Everything you copy is saved automatically. Search, filter, and paste from your history in seconds.",
    stat: "Saves 45min/week",
    features: [
      "Unlimited clipboard history",
      "Text and image support",
      "Instant search across all items",
      "Smart duplicate detection",
    ],
    highlight: "Average user accesses history 50+ times per day",
    imagePosition: "left" as const,
  },
  {
    badge: "Text Snippets",
    title: "Type Less, Do More",
    subtitle: "Create text shortcuts that expand into anything. Perfect for emails, code, and repeated content.",
    stat: "Saves 60min/week",
    features: [
      "Unlimited custom snippets",
      "Trigger with Tab or Space",
      "Works in any application",
      "Usage analytics included",
    ],
    highlight: "Replace 50 keystrokes with just 3",
    imagePosition: "right" as const,
  },
  {
    badge: "Native Integration",
    title: "Built for macOS",
    subtitle: "Designed from the ground up for Mac. Feels right at home in your workflow.",
    stat: "Ultra lightweight",
    features: [
      "Lives in your menu bar",
      "Global keyboard shortcuts",
      "Native dark mode support",
      "Uses < 50MB memory",
    ],
    highlight: "Starts in under 1 second",
    imagePosition: "left" as const,
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    quote: "I can't believe I worked without this for years. SuperMac has completely changed how I work. The clipboard history alone saves me hours every week.",
    name: "Sarah Chen",
    role: "Senior Developer at Stripe",
  },
  {
    quote: "The text snippets feature is a game-changer for customer support. Our response time dropped by 40% after we started using SuperMac.",
    name: "Marcus Johnson",
    role: "Support Lead at Notion",
  },
  {
    quote: "Finally, a clipboard manager that just works. No bloat, no complexity. Install it and forget it's there until you need it.",
    name: "Emily Park",
    role: "Product Designer at Figma",
  },
  {
    quote: "As a writer, I copy and paste constantly. SuperMac's search feature helps me find that quote I copied 3 days ago in seconds.",
    name: "David Kim",
    role: "Content Strategist",
  },
  {
    quote: "The keyboard shortcuts are perfect. I never have to take my hands off the keyboard. It's exactly how Mac software should work.",
    name: "Alex Rivera",
    role: "iOS Developer",
  },
  {
    quote: "I've tried every clipboard manager out there. SuperMac is the only one I've stuck with. It's fast, reliable, and worth every penny.",
    name: "Jordan Taylor",
    role: "Freelance Designer",
  },
];

// Final CTA
export const FINAL_CTA = {
  title: "Ready to Supercharge Your Mac?",
  subtitle: "Join thousands of users boosting their productivity with SuperMac",
  buttonText: "Download for macOS",
  systemRequirements: "Requires macOS 14.0 or later",
};

// Links
export const LINKS = {
  github: "https://github.com/yourusername/supermac",
  download: "https://gxfsguhfldneqnxpkcge.supabase.co/functions/v1/download",
};
