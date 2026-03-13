"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export type SectionVisibility = "visible" | "hidden";

export interface PageSectionItem {
  id: string;
  label: string;
  visibility: SectionVisibility;
}

export interface PageStructureSidebarProps {
  sections: PageSectionItem[];
  selectedId: string | null;
  onSelectSection: (id: string) => void;
  onEditSection?: (id: string) => void;
  onReorder?: (fromIndex: number, toIndex: number) => void;
}

const defaultSections: PageSectionItem[] = [
  { id: "hero", label: "Hero Banner", visibility: "visible" },
  { id: "categories", label: "Featured Categories", visibility: "visible" },
  { id: "testimonials", label: "Testimonials", visibility: "visible" },
  { id: "events", label: "Upcoming Events", visibility: "hidden" },
  { id: "newsletter", label: "Newsletter Signup", visibility: "visible" },
];

export default function PageStructureSidebar({
  sections = defaultSections,
  selectedId,
  onSelectSection,
  onEditSection,
}: PageStructureSidebarProps) {
  return (
    <aside className="flex w-80 shrink-0 flex-col overflow-y-auto border-r border-gray-200 bg-background-light">
      <div className="p-5 pb-2">
        <h3 className="font-display text-base font-bold text-text-main mb-1">
          Page Structure
        </h3>
        <p className="text-sm text-text-muted">
          Drag to reorder sections.
        </p>
      </div>
      <div className="flex flex-col gap-2 px-3 pb-6">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            onClick={() => onSelectSection(section.id)}
            className={`group flex cursor-grab items-center rounded-lg border p-3 shadow-sm transition-all active:cursor-grabbing hover:-translate-y-px ${
              selectedId === section.id
                ? "border-primary bg-primary/5 shadow-sm"
                : "border-gray-200 bg-surface-light hover:border-primary/50"
            }`}
          >
            <span
              className={`material-symbols-outlined mr-3 cursor-move ${
                selectedId === section.id ? "text-primary" : "text-text-muted"
              }`}
            >
              drag_indicator
            </span>
            <div className="flex-1">
              <p
                className={`text-sm font-medium ${
                  selectedId === section.id
                    ? "font-bold text-primary"
                    : "text-text-main"
                }`}
              >
                {section.label}
              </p>
              <span
                className={`text-[10px] font-medium uppercase tracking-wide rounded px-1.5 py-0.5 ${
                  section.visibility === "visible"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-gray-100 text-text-muted"
                }`}
              >
                {section.visibility === "visible" ? "Visible" : "Hidden"}
              </span>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onEditSection?.(section.id);
              }}
              className={`rounded p-1 transition-colors ${
                selectedId === section.id
                  ? "text-primary"
                  : "text-text-muted hover:text-primary"
              }`}
            >
              <span className="material-symbols-outlined text-lg">edit</span>
            </button>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: sections.length * 0.05, duration: 0.3 }}
          className="group mt-4 flex cursor-pointer items-center rounded-lg border border-dashed border-gray-200 p-3 transition-all hover:border-primary/50 hover:bg-surface-light"
        >
          <span className="material-symbols-outlined mr-3 text-text-muted">
            settings
          </span>
          <div className="flex-1">
            <p className="text-sm font-medium text-text-main">
              SEO Controls
            </p>
            <span className="text-[10px] font-medium uppercase tracking-wide text-text-muted">
              Metadata
            </span>
          </div>
          <span className="material-symbols-outlined text-lg text-text-muted">
            chevron_right
          </span>
        </motion.div>
      </div>
    </aside>
  );
}
