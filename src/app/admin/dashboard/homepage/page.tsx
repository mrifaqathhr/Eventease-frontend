"use client";

import { useState } from "react";
import HomepageManagerHeader from "@/components/admin/homepage/HomepageManagerHeader";
import PageStructureSidebar, {
  type PageSectionItem,
} from "@/components/admin/homepage/PageStructureSidebar";
import LivePreviewArea from "@/components/admin/homepage/LivePreviewArea";

const INITIAL_SECTIONS: PageSectionItem[] = [
  { id: "hero", label: "Hero Banner", visibility: "visible" },
  { id: "categories", label: "Featured Categories", visibility: "visible" },
  { id: "testimonials", label: "Testimonials", visibility: "visible" },
  { id: "events", label: "Upcoming Events", visibility: "hidden" },
  { id: "newsletter", label: "Newsletter Signup", visibility: "visible" },
];

export default function HomepageManagerPage() {
  const [sections] = useState<PageSectionItem[]>(INITIAL_SECTIONS);
  const [selectedId, setSelectedId] = useState<string | null>("testimonials");

  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col overflow-hidden rounded-xl border border-gray-200 bg-surface-light shadow-sm">
      <HomepageManagerHeader
        lastSaved="Today at 10:42 AM"
        onPreview={() => {}}
        onSave={() => {}}
      />
      <div className="flex flex-1 overflow-hidden">
        <PageStructureSidebar
          sections={sections}
          selectedId={selectedId}
          onSelectSection={setSelectedId}
          onEditSection={(id) => setSelectedId(id)}
        />
        <LivePreviewArea
          sectionId={selectedId}
          sectionTitle={
            selectedId
              ? sections.find((s) => s.id === selectedId)?.label
              : undefined
          }
        />
      </div>
    </div>
  );
}
