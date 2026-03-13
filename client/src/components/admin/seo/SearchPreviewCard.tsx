'use client';

import { motion } from 'framer-motion';

interface SearchPreviewCardProps {
  metaTitle: string;
  metaDescription: string;
  onMetaTitleChange: (value: string) => void;
  onMetaDescriptionChange: (value: string) => void;
}

export default function SearchPreviewCard({
  metaTitle,
  metaDescription,
  onMetaTitleChange,
  onMetaDescriptionChange,
}: SearchPreviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' as const, delay: 0.18 }}
      className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
    >
      {/* Card header */}
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
            <span className="material-symbols-outlined">preview</span>
          </div>
          <div>
            <h3 className="text-slate-900 text-lg font-bold font-serif">Search Preview</h3>
            <p className="text-slate-500 text-sm">How your homepage appears on Google Search.</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Google SERP Preview */}
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <div className="max-w-[600px]">
            {/* Site identifier row */}
            <div className="flex items-center gap-3 mb-1">
              <div className="w-7 h-7 bg-slate-200 rounded-full flex items-center justify-center text-xs text-slate-500 font-bold flex-shrink-0">
                EE
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-[#202124]">EventEase</span>
                <span className="text-xs text-[#5f6368]">https://www.eventease.com</span>
              </div>
              <span className="material-symbols-outlined text-slate-400 text-[18px] ml-auto">
                more_vert
              </span>
            </div>
            {/* Title */}
            <h3 className="text-xl text-[#1a0dab] hover:underline cursor-pointer mb-1 leading-snug truncate">
              {metaTitle || 'EventEase: The #1 Wedding Vendor Marketplace'}
            </h3>
            {/* Description */}
            <p className="text-sm text-[#4d5156] leading-normal line-clamp-2">
              {metaDescription ||
                'Plan your dream wedding with ease. Discover thousands of top-rated venues, photographers, florists, and more. Compare quotes and book instantly.'}
            </p>
          </div>
        </div>

        {/* Editable fields */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-slate-700 text-sm font-bold">Meta Title</label>
            <input
              type="text"
              value={metaTitle}
              onChange={(e) => onMetaTitleChange(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:border-primary focus:ring-1 focus:ring-primary/30 h-10 px-3 outline-none transition-colors"
            />
            <p className="text-xs text-slate-400">
              {metaTitle.length}/60 characters{' '}
              {metaTitle.length > 60 && (
                <span className="text-amber-500 font-medium">— Too long</span>
              )}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-slate-700 text-sm font-bold">Meta Description</label>
            <input
              type="text"
              value={metaDescription}
              onChange={(e) => onMetaDescriptionChange(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:border-primary focus:ring-1 focus:ring-primary/30 h-10 px-3 outline-none transition-colors"
            />
            <p className="text-xs text-slate-400">
              {metaDescription.length}/160 characters{' '}
              {metaDescription.length > 160 && (
                <span className="text-amber-500 font-medium">— Too long</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
