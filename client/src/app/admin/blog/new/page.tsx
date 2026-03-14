"use client";

import { useState } from "react";
import BlogEditorHeader from "@/components/admin/blog/BlogEditorHeader";
import BlogContentArea from "@/components/admin/blog/BlogContentArea";
import BlogSettingsSidebar from "@/components/admin/blog/BlogSettingsSidebar";

export default function BlogEditorNewPage() {
  const [title, setTitle] = useState("Unlocking the Future of Event Management");
  const [category, setCategory] = useState("industry");
  const [content, setContent] = useState(
    "In the rapidly evolving landscape of event planning, staying ahead of the curve is not just an advantage; it's a necessity.\n\nAt EventEase, we believe that technology should be an enabler, not a barrier."
  );
  const [status, setStatus] = useState("draft");
  const [publishDate, setPublishDate] = useState("");
  const [metaTitle, setMetaTitle] = useState(
    "Unlocking the Future of Event Management - EventEase"
  );
  const [metaDescription, setMetaDescription] = useState(
    "Discover how modern technology is reshaping event planning. Learn about the new tools EventEase offers for seamless management."
  );

  return (
    <div className="flex min-h-screen flex-col bg-background-light">
      <BlogEditorHeader
        status="draft"
        onPreview={() => {}}
        onPublish={() => {}}
      />
      <main className="flex flex-1 overflow-hidden">
        <div className="flex flex-1 justify-center overflow-y-auto bg-surface-light p-6 md:p-8 lg:p-12">
          <BlogContentArea
            title={title}
            onTitleChange={setTitle}
            category={category}
            onCategoryChange={setCategory}
            content={content}
            onContentChange={setContent}
          />
        </div>
        <BlogSettingsSidebar
          status={status}
          onStatusChange={setStatus}
          publishDate={publishDate}
          onPublishDateChange={setPublishDate}
          authorName="Sarah J."
          metaTitle={metaTitle}
          onMetaTitleChange={setMetaTitle}
          metaDescription={metaDescription}
          onMetaDescriptionChange={setMetaDescription}
        />
      </main>
    </div>
  );
}
