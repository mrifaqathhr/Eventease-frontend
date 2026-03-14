"use client";

import { useState, useMemo } from "react";
import BlogManagerHeader from "@/components/admin/blog/BlogManagerHeader";
import BlogPostsTable, {
  type BlogPostRow,
} from "@/components/admin/blog/BlogPostsTable";

const MOCK_POSTS: BlogPostRow[] = [
  {
    id: "1",
    title: "Top 10 Floral Arrangements for Spring Weddings",
    author: "Sarah Jenkins",
    publishedAt: "2 hours ago",
    category: "Decor",
    status: "published",
    views: "1,240",
  },
  {
    id: "2",
    title: "Vendor Spotlight: Elegant Eats Catering",
    author: "Mike Ross",
    publishedAt: "Yesterday",
    category: "Vendors",
    status: "draft",
    views: "-",
  },
  {
    id: "3",
    title: "Choosing the Perfect Venue for 2024",
    author: "Sarah Jenkins",
    publishedAt: "Oct 24, 2023",
    category: "Planning",
    status: "scheduled",
    views: "-",
  },
  {
    id: "4",
    title: "Budgeting Tips for Modern Couples",
    author: "Alex Chen",
    publishedAt: "Oct 20, 2023",
    category: "Planning",
    status: "published",
    views: "3,892",
  },
  {
    id: "5",
    title: "5 Color Palettes for Winter",
    author: "Sarah Jenkins",
    publishedAt: "Oct 15, 2023",
    category: "Decor",
    status: "published",
    views: "856",
  },
];

export default function BlogManagerPage() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredPosts = useMemo(() => {
    const term = search.trim().toLowerCase();
    return MOCK_POSTS.filter((row) => {
      const matchCategory =
        categoryFilter === "all" || row.category === categoryFilter;
      const matchStatus =
        statusFilter === "all" || row.status === statusFilter;
      if (!matchCategory || !matchStatus) return false;
      if (!term) return true;
      return (
        row.title.toLowerCase().includes(term) ||
        row.author.toLowerCase().includes(term)
      );
    });
  }, [search, categoryFilter, statusFilter]);

  return (
    <div className="space-y-8">
      <BlogManagerHeader onExport={() => {}} />
      <div className="rounded-xl border border-gray-200 bg-surface-light p-4 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-md">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted material-symbols-outlined text-[20px]">
              search
            </span>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title..."
              className="h-10 w-full rounded-lg border border-gray-200 bg-background-light pl-10 pr-4 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="flex w-full gap-3 md:w-auto">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="h-10 flex-1 rounded-lg border border-gray-200 bg-background-light px-3 pr-8 text-sm text-text-main outline-none focus:ring-2 focus:ring-primary/20 md:flex-none"
            >
              <option value="all">All Categories</option>
              <option value="Decor">Decor</option>
              <option value="Vendors">Vendor Spotlight</option>
              <option value="Planning">Planning</option>
            </select>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="h-10 flex-1 rounded-lg border border-gray-200 bg-background-light px-3 pr-8 text-sm text-text-main outline-none focus:ring-2 focus:ring-primary/20 md:flex-none"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="scheduled">Scheduled</option>
            </select>
          </div>
        </div>
      </div>
      <BlogPostsTable
        posts={filteredPosts}
        onRowAction={(id, action) => console.log(id, action)}
      />
    </div>
  );
}
