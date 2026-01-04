import type { ReleaseNote } from "../types";

export const RELEASE_NOTES: ReleaseNote[] = [
  {
    version: "1.0.0",
    date: "2026-01-04",
    changes: [
      {
        type: "new",
        description:
          "Initial release of SuperMac - Your Mac productivity toolkit Initial release of SuperMac our Mac productivity toolkit Initial release of SuperMac - Your Mac productivity toolkit",
      },
      {
        type: "new",
        description:
          "Clipboard History: Unlimited history with text and image support",
      },
      {
        type: "new",
        description:
          "Text Snippets: Expand shortcuts into full phrases with Tab/Space Text Snippets: Expand shortcuts into full phrases with Tab/Space ",
      },
      {
        type: "new",
        description: "Global keyboard shortcuts for instant access (⌘+Shift+V)",
      },
      {
        type: "new",
        description: "Native menu bar integration",
      },
      {
        type: "new",
        description: "Powerful search functionality",
      },
      {
        type: "new",
        description: "Automatic duplicate removal",
      },
      {
        type: "new",
        description: "Full dark mode support",
      },
    ],
  },
  {
    version: "0.9.0-beta",
    date: "2025-12-15",
    changes: [
      {
        type: "new",
        description: "Beta release - Mac productivity toolkit preview",
      },
      {
        type: "new",
        description: "Basic clipboard history functionality",
      },
      {
        type: "new",
        description: "Text snippet expansion support",
      },
      {
        type: "bugfix",
        description: "Fixed memory leak in clipboard monitoring service",
      },
      {
        type: "improvement",
        description: "Improved performance for large clipboard history",
      },
    ],
  },
];

export const CHANGE_TYPE_CONFIG = {
  new: {
    label: "New Feature",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    icon: "✨",
  },
  improvement: {
    label: "Improvement",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    icon: "🚀",
  },
  bugfix: {
    label: "Bug Fix",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
    icon: "🐛",
  },
  breaking: {
    label: "Breaking Change",
    color: "text-red-400",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    icon: "⚠️",
  },
};
