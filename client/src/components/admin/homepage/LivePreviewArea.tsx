"use client";

import { motion } from "framer-motion";

export interface LivePreviewAreaProps {
  sectionId: string | null;
  sectionTitle?: string;
  sectionDescription?: string;
}

const PREVIEW_CONTENT: Record<string, { title: string; subtitle?: string }> = {
  hero: {
    title: "Unforgettable Moments",
    subtitle: "Explore Events",
  },
  categories: {
    title: "Featured Categories",
    subtitle: "Music, Tech, Food",
  },
  testimonials: {
    title: "What Our Attendees Say",
    subtitle: "User reviews carousel",
  },
  events: {
    title: "Upcoming Events",
    subtitle: "Event listings",
  },
  newsletter: {
    title: "Join our newsletter",
    subtitle: "Email signup",
  },
};

export default function LivePreviewArea({
  sectionId,
  sectionTitle,
  sectionDescription,
}: LivePreviewAreaProps) {
  const preview = sectionId ? PREVIEW_CONTENT[sectionId] : null;
  const title = sectionTitle ?? preview?.title ?? "Select a section";
  const description =
    sectionDescription ??
    (sectionId
      ? "Manage content and settings for this homepage section."
      : "Choose a section from the left to edit.");

  return (
    <motion.div
      key={sectionId ?? "empty"}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex-1 overflow-y-auto bg-surface-light p-6 lg:p-8"
    >
      <div className="mx-auto max-w-3xl space-y-8 pb-32">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold text-text-main">
              {title}
            </h2>
            <p className="mt-1 text-text-muted">{description}</p>
          </div>
          {sectionId && (
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                defaultChecked
                className="peer sr-only"
              />
              <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all peer-checked:bg-primary peer-checked:after:translate-x-full peer-focus:outline-none" />
              <span className="ml-3 text-sm font-medium text-text-main">
                Section Enabled
              </span>
            </label>
          )}
        </div>
        <div className="h-px w-full bg-gray-200" />

        {sectionId === "testimonials" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-main">
                  Section Heading
                </label>
                <input
                  type="text"
                  defaultValue="What Our Attendees Say"
                  className="w-full rounded-lg border border-gray-200 bg-background-light px-4 py-2.5 text-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-main">
                  Background Color
                </label>
                <select className="w-full rounded-lg border border-gray-200 bg-background-light px-4 py-2.5 text-sm focus:border-primary focus:ring-primary">
                  <option>Light Gray (Default)</option>
                  <option>White</option>
                  <option>Soft Rose</option>
                </select>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-text-main">
                  Selected Reviews
                </label>
                <button
                  type="button"
                  className="text-sm font-bold text-primary hover:underline"
                >
                  + Add Review
                </button>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm text-text-muted italic">
                  Review cards will appear here. Connect to your reviews data
                  source.
                </p>
              </div>
            </div>
          </div>
        )}

        {sectionId && sectionId !== "testimonials" && (
          <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-8 text-center">
            <p className="text-sm text-text-muted">
              Edit form and content for &quot;{title}&quot; will appear here.
            </p>
          </div>
        )}

        {!sectionId && (
          <div className="flex min-h-[400px] items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-background-light">
            <div className="text-center">
              <span className="material-symbols-outlined text-5xl text-text-muted">
                touch_app
              </span>
              <p className="mt-2 text-sm font-medium text-text-main">
                Select a section from the left panel
              </p>
              <p className="mt-1 text-xs text-text-muted">
                to view and edit its content
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
