"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export interface BlogSettingsSidebarProps {
  status: string;
  onStatusChange: (value: string) => void;
  publishDate: string;
  onPublishDateChange: (value: string) => void;
  authorName: string;
  featuredImageUrl?: string;
  onFeaturedImageChange?: (file: File | null) => void;
  metaTitle: string;
  onMetaTitleChange: (value: string) => void;
  metaDescription: string;
  onMetaDescriptionChange: (value: string) => void;
}

export default function BlogSettingsSidebar({
  status,
  onStatusChange,
  publishDate,
  onPublishDateChange,
  authorName,
  featuredImageUrl,
  onFeaturedImageChange,
  metaTitle,
  onMetaTitleChange,
  metaDescription,
  onMetaDescriptionChange,
}: BlogSettingsSidebarProps) {
  const [tags, setTags] = useState<string[]>(["eventtech", "management"]);
  const [tagInput, setTagInput] = useState("");

  const addTag = () => {
    const t = tagInput.trim();
    if (t && !tags.includes(t)) {
      setTags([...tags, t]);
      setTagInput("");
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((x) => x !== tag));
  };

  return (
    <motion.aside
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="flex w-full flex-col gap-4 overflow-y-auto border-l border-gray-200 bg-background-light p-4 shadow-[inset_10px_0_20px_-20px_rgba(0,0,0,0.1)] lg:w-[360px]"
    >
      <div className="rounded-xl border border-gray-200/50 bg-surface-light p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-2 border-b border-gray-200 pb-2 font-semibold text-text-main">
          <span className="material-symbols-outlined text-primary">
            rocket_launch
          </span>
          <h3>Publish Settings</h3>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-muted">Status</span>
            <select
              value={status}
              onChange={(e) => onStatusChange(e.target.value)}
              className="cursor-pointer rounded-md border-0 bg-background-light py-1 pl-2 pr-8 text-sm font-medium text-text-main focus:ring-1 focus:ring-primary"
            >
              <option value="draft">Draft</option>
              <option value="pending">Pending Review</option>
              <option value="scheduled">Scheduled</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm text-text-muted">Publish Date</span>
            <input
              type="date"
              value={publishDate}
              onChange={(e) => onPublishDateChange(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-background-light py-2 pl-3 pr-2 text-sm text-text-main focus:border-primary focus:ring-primary"
            />
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-sm text-text-muted">Author</span>
            <div className="flex items-center gap-2">
              <div className="size-6 rounded-full bg-gray-200" />
              <span className="text-sm font-medium">{authorName}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200/50 bg-surface-light p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-2 border-b border-gray-200 pb-2 font-semibold text-text-main">
          <span className="material-symbols-outlined text-primary">image</span>
          <h3>Featured Image</h3>
        </div>
        <div className="group relative cursor-pointer">
          <div className="flex aspect-video flex-col items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-gray-300 text-text-muted transition-colors hover:border-primary hover:text-primary">
            {featuredImageUrl ? (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${featuredImageUrl})` }}
              />
            ) : (
              <span className="material-symbols-outlined text-4xl">
                add_photo_alternate
              </span>
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-text-main shadow-lg">
                Change Image
              </span>
            </div>
          </div>
          <p className="mt-2 text-center text-xs text-text-muted">
            Recommended: 1200x630px
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200/50 bg-surface-light p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-2 border-b border-gray-200 pb-2 font-semibold text-text-main">
          <span className="material-symbols-outlined text-primary">
            category
          </span>
          <h3>Categories & Tags</h3>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-text-muted">
              Tags
            </label>
            <div className="mb-2 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                >
                  #{tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="hover:text-primary-dark"
                  >
                    <span className="material-symbols-outlined text-[10px]">
                      close
                    </span>
                  </button>
                </span>
              ))}
            </div>
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
              placeholder="Add a tag..."
              className="w-full rounded-lg border border-gray-200 bg-background-light py-1.5 px-3 text-sm focus:border-primary focus:ring-primary"
            />
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200/50 bg-surface-light p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between border-b border-gray-200 pb-2">
          <div className="flex items-center gap-2 font-semibold text-text-main">
            <span className="material-symbols-outlined text-primary">
              travel_explore
            </span>
            <h3>SEO & Meta</h3>
          </div>
          <span className="rounded border border-emerald-100 bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-600">
            Good (85)
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-text-muted">
              Meta Title
            </label>
            <input
              type="text"
              value={metaTitle}
              onChange={(e) => onMetaTitleChange(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-background-light py-1.5 px-3 text-sm text-text-main focus:border-primary focus:ring-primary"
            />
            <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full bg-emerald-500"
                style={{ width: `${Math.min(100, (metaTitle.length / 60) * 100)}%` }}
              />
            </div>
            <p className="mt-1 text-right text-[10px] text-text-muted">
              {metaTitle.length}/60 chars
            </p>
          </div>
          <div>
            <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-text-muted">
              Meta Description
            </label>
            <textarea
              value={metaDescription}
              onChange={(e) => onMetaDescriptionChange(e.target.value)}
              rows={3}
              className="w-full resize-none rounded-lg border border-gray-200 bg-background-light py-1.5 px-3 text-sm text-text-main focus:border-primary focus:ring-primary"
            />
            <p className="mt-1 text-right text-[10px] text-text-muted">
              {metaDescription.length}/160 chars
            </p>
          </div>
          <div className="mt-2 rounded-lg border border-gray-200 bg-background-light p-3">
            <p className="mb-1 text-[10px] font-bold uppercase text-text-muted">
              Google Preview
            </p>
            <p className="truncate text-sm text-[#1a0dab] hover:underline cursor-pointer">
              {metaTitle || "Meta title"}
            </p>
            <p className="truncate text-xs text-[#006621]">
              https://blog.eventease.com/...
            </p>
            <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-[#545454]">
              {metaDescription || "Meta description"}
            </p>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
