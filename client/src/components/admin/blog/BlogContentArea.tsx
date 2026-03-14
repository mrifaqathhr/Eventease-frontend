"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export interface BlogContentAreaProps {
  title: string;
  onTitleChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  content: string;
  onContentChange: (value: string) => void;
}

const TOOLBAR_BUTTONS = [
  { icon: "format_bold", title: "Bold" },
  { icon: "format_italic", title: "Italic" },
  { icon: "format_underlined", title: "Underline" },
  { icon: "format_h1", title: "H1" },
  { icon: "format_h2", title: "H2" },
  { icon: "format_list_bulleted", title: "Bullet List" },
  { icon: "format_list_numbered", title: "Numbered List" },
  { icon: "format_quote", title: "Blockquote" },
  { icon: "link", title: "Link" },
  { icon: "image", title: "Add Image" },
];

export default function BlogContentArea({
  title,
  onTitleChange,
  category,
  onCategoryChange,
  content,
  onContentChange,
}: BlogContentAreaProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex max-w-3xl flex-col gap-6"
    >
      <div className="group">
        <input
          type="text"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          placeholder="Post Title"
          className="w-full border-none bg-transparent p-0 font-display text-4xl font-bold leading-tight text-text-main outline-none placeholder:text-gray-300 focus:ring-0"
        />
      </div>
      <div className="sticky top-0 z-10 mb-4 flex items-center gap-1 border-b border-gray-200 bg-surface-light/95 py-2 backdrop-blur-sm">
        {TOOLBAR_BUTTONS.map((btn) => (
          <button
            key={btn.icon}
            type="button"
            title={btn.title}
            className="rounded p-2 text-text-main transition-colors hover:bg-background-light"
          >
            <span className="material-symbols-outlined text-xl">
              {btn.icon}
            </span>
          </button>
        ))}
        <div className="mx-2 h-5 w-px bg-gray-200" />
        <button
          type="button"
          className="ml-auto flex items-center gap-1 rounded p-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
        >
          <span className="material-symbols-outlined text-lg">auto_awesome</span>
          AI Assist
        </button>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-text-muted">
          Category
        </label>
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full rounded-lg border border-gray-200 bg-background-light py-2 pl-3 pr-8 text-sm text-text-main focus:border-primary focus:ring-1 focus:ring-primary"
        >
          <option value="industry">Industry News</option>
          <option value="product">Product Updates</option>
          <option value="tips">Wedding Tips</option>
        </select>
      </div>
      <article className="prose prose-lg max-w-none font-serif text-text-main/80 focus:outline-none min-h-[500px]">
        <textarea
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          placeholder="Write your post content here..."
          className="min-h-[480px] w-full resize-y rounded-lg border border-gray-200 bg-white p-4 text-sm leading-relaxed text-text-main outline-none placeholder:text-text-muted focus:border-primary focus:ring-1 focus:ring-primary"
          rows={20}
        />
      </article>
    </motion.div>
  );
}
