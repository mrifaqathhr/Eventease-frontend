"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export type BlogPostStatus = "published" | "draft" | "scheduled";

export interface BlogPostRow {
  id: string;
  imageUrl?: string;
  title: string;
  author: string;
  publishedAt: string;
  category: string;
  status: BlogPostStatus;
  views: string | number;
}

export interface BlogPostsTableProps {
  posts: BlogPostRow[];
  onRowAction?: (id: string, action: string) => void;
}

const statusConfig: Record<
  BlogPostStatus,
  { label: string; className: string }
> = {
  published: { label: "Published", className: "bg-emerald-50 text-emerald-700 border border-emerald-100" },
  draft: { label: "Draft", className: "bg-amber-50 text-amber-700 border border-amber-100" },
  scheduled: { label: "Scheduled", className: "bg-gray-100 text-gray-700 border border-gray-200" },
};

export default function BlogPostsTable({
  posts,
  onRowAction,
}: BlogPostsTableProps) {
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-surface-light shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-gray-200 bg-background-light text-xs uppercase tracking-wider text-text-muted">
              <th className="w-16 px-6 py-4 font-semibold">Image</th>
              <th className="px-6 py-4 font-semibold">Title</th>
              <th className="px-6 py-4 font-semibold">Category</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold">Views</th>
              <th className="px-6 py-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {posts.map((row, index) => (
              <motion.tr
                key={row.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="group transition-colors hover:bg-background-light/50"
              >
                <td className="px-6 py-4">
                  <div
                    className="h-12 w-16 rounded-md bg-gray-200 bg-cover bg-center"
                    style={
                      row.imageUrl
                        ? { backgroundImage: `url(${row.imageUrl})` }
                        : undefined
                    }
                  />
                </td>
                <td className="px-6 py-4">
                  <p className="font-medium text-text-main">{row.title}</p>
                  <p className="mt-0.5 text-xs text-text-muted">
                    By {row.author} • {row.publishedAt}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center rounded-full border border-gray-200 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {row.category}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusConfig[row.status].className}`}
                  >
                    <span
                      className={`size-1.5 rounded-full ${
                        row.status === "published"
                          ? "bg-emerald-600"
                          : row.status === "draft"
                            ? "bg-amber-600"
                            : "bg-gray-500"
                      }`}
                    />
                    {statusConfig[row.status].label}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-text-muted">
                  {row.views}
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() =>
                        setMenuOpenId(menuOpenId === row.id ? null : row.id)
                      }
                      className="rounded p-1 text-text-muted transition-colors hover:bg-gray-100 hover:text-text-main"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        more_vert
                      </span>
                    </button>
                    {menuOpenId === row.id && (
                      <>
                        <div
                          className="fixed inset-0 z-10"
                          aria-hidden
                          onClick={() => setMenuOpenId(null)}
                        />
                        <div className="absolute right-0 top-full z-20 mt-1 w-36 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                          <button
                            type="button"
                            className="block w-full px-3 py-2 text-left text-sm text-text-main hover:bg-gray-50"
                            onClick={() => {
                              onRowAction?.(row.id, "edit");
                              setMenuOpenId(null);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="block w-full px-3 py-2 text-left text-sm text-text-main hover:bg-gray-50"
                            onClick={() => {
                              onRowAction?.(row.id, "view");
                              setMenuOpenId(null);
                            }}
                          >
                            View
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 bg-surface-light px-6 py-4">
        <span className="text-sm text-text-muted">
          Showing 1-{posts.length} of 142 items
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            disabled
            className="rounded border border-gray-200 px-3 py-1.5 text-sm text-text-muted transition-colors hover:bg-background-light hover:text-text-main disabled:opacity-50"
          >
            Previous
          </button>
          <button
            type="button"
            className="rounded border border-gray-200 px-3 py-1.5 text-sm text-text-muted transition-colors hover:bg-background-light hover:text-text-main"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
