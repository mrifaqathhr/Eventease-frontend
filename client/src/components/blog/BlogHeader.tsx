'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BlogCategory {
    label: string;
    icon: string;
    value: string;
}

export interface BlogHeaderProps {
    activeCategory: string;
    onCategoryChange: (value: string) => void;
    onSortChange: (value: string) => void;
    categories: BlogCategory[];
}

// ─── Motion Variants ──────────────────────────────────────────────────────────

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
};

const pillVariant = {
    hidden: { opacity: 0, scale: 0.88 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: EASE },
    },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function BlogHeader({
    activeCategory,
    onCategoryChange,
    onSortChange,
    categories,
}: BlogHeaderProps) {
    const [searchValue, setSearchValue] = useState('');

    return (
        <section className="border-b border-slate-100 bg-white sticky top-[64px] z-40 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between gap-4 overflow-x-auto scrollbar-none">
                    {/* Filter Pills */}
                    <motion.div
                        className="flex items-center gap-2 min-w-0"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* All Posts */}
                        <motion.button
                            variants={pillVariant}
                            onClick={() => onCategoryChange('all')}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200
                ${activeCategory === 'all'
                                    ? 'bg-text-main text-white shadow-md'
                                    : 'bg-white border border-slate-200 text-slate-600 hover:border-primary hover:text-primary'
                                }`}
                        >
                            All Posts
                        </motion.button>

                        {categories.map((cat) => (
                            <motion.button
                                key={cat.value}
                                variants={pillVariant}
                                onClick={() => onCategoryChange(cat.value)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap
                            flex items-center gap-2 group transition-all duration-200
                  ${activeCategory === cat.value
                                        ? 'bg-text-main text-white shadow-md'
                                        : 'bg-white border border-slate-200 text-slate-600 hover:border-primary hover:text-primary'
                                    }`}
                            >
                                <span
                                    className={`material-symbols-outlined text-[18px] transition-colors
                    ${activeCategory === cat.value
                                            ? 'text-white'
                                            : 'text-slate-400 group-hover:text-primary'
                                        }`}
                                >
                                    {cat.icon}
                                </span>
                                {cat.label}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Sort Dropdown */}
                    <div className="hidden md:flex items-center gap-2 pl-4 border-l border-slate-200 flex-shrink-0">
                        <span className="text-xs font-medium text-slate-400 uppercase tracking-wide whitespace-nowrap">
                            Sort By:
                        </span>
                        <select
                            onChange={(e) => onSortChange(e.target.value)}
                            className="bg-transparent border-none text-sm font-bold text-text-main
                         focus:ring-0 cursor-pointer pr-2 py-0 appearance-none"
                        >
                            <option value="newest">Newest First</option>
                            <option value="popular">Most Popular</option>
                            <option value="trending">Trending</option>
                        </select>
                    </div>

                    {/* Search — hidden on mobile, shown on md+ */}
                    <label className="hidden lg:flex items-stretch h-9 w-52 flex-shrink-0">
                        <div className="flex w-full items-center overflow-hidden rounded-xl bg-slate-50 ring-1 ring-slate-200 focus-within:ring-primary transition-all">
                            <div className="flex items-center justify-center pl-3 text-slate-400">
                                <span className="material-symbols-outlined text-[18px]">search</span>
                            </div>
                            <input
                                type="text"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                placeholder="Search articles…"
                                className="w-full bg-transparent border-none text-text-main focus:ring-0
                           placeholder:text-slate-400 px-2 text-sm focus:outline-none"
                            />
                        </div>
                    </label>
                </div>
            </div>
        </section>
    );
}
