'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export interface CategoryHeaderProps {
    /** Category display name, e.g. "Photography" */
    categoryName: string;
    /** Short description for the category */
    description: string;
    /** How many vendors found */
    vendorCount?: number;
    /** Controlled search query value */
    searchQuery: string;
    /** Controlled sort value */
    sortValue: string;
    onSearchChange: (value: string) => void;
    onSortChange: (value: string) => void;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const headerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: EASE },
    },
};

const breadcrumbVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: EASE },
    },
};

export default function CategoryHeader({
    categoryName,
    description,
    vendorCount,
    searchQuery,
    sortValue,
    onSearchChange,
    onSortChange,
}: CategoryHeaderProps) {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
            {/* Breadcrumbs */}
            <motion.div
                variants={breadcrumbVariants}
                className="flex flex-wrap gap-2 items-center mb-6 text-sm"
            >
                <Link
                    href="/"
                    className="text-text-muted hover:text-primary transition-colors font-medium"
                >
                    Home
                </Link>
                <span
                    className="material-symbols-outlined text-text-muted font-medium"
                    style={{ fontSize: '16px' }}
                >
                    chevron_right
                </span>
                <Link
                    href="/categories"
                    className="text-text-muted hover:text-primary transition-colors font-medium"
                >
                    Vendors
                </Link>
                <span
                    className="material-symbols-outlined text-text-muted font-medium"
                    style={{ fontSize: '16px' }}
                >
                    chevron_right
                </span>
                <span className="text-text-main font-semibold">{categoryName}</span>
            </motion.div>

            {/* Title + Search/Sort bar */}
            <motion.div
                variants={headerVariants}
                className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 pb-8 border-b border-[#f3e7ea]"
            >
                {/* Title block */}
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-black text-text-main tracking-tight mb-3 leading-tight">
                        {categoryName} Vendors
                    </h1>
                    {vendorCount !== undefined && (
                        <p className="text-sm text-text-muted mb-3">
                            <span className="font-semibold text-primary">{vendorCount}</span> vendors found
                        </p>
                    )}
                    <p className="text-lg text-text-muted leading-relaxed">{description}</p>
                </div>

                {/* Search + Sort controls */}
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    {/* Search input */}
                    <div className="relative group">
                        <span
                            className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
                            style={{ fontSize: '20px' }}
                        >
                            search
                        </span>
                        <input
                            type="text"
                            placeholder="Search by name…"
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="pl-10 pr-4 py-3 bg-white border border-[#f3e7ea] rounded-lg w-full sm:w-64 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-text-main placeholder:text-text-muted"
                        />
                    </div>

                    {/* Sort select */}
                    <div className="relative">
                        <span
                            className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
                            style={{ fontSize: '20px' }}
                        >
                            expand_more
                        </span>
                        <select
                            value={sortValue}
                            onChange={(e) => onSortChange(e.target.value)}
                            className="appearance-none pl-4 pr-10 py-3 bg-white border border-[#f3e7ea] rounded-lg w-full sm:w-48 focus:ring-2 focus:ring-primary focus:border-transparent outline-none cursor-pointer text-text-main"
                        >
                            <option value="recommended">Recommended</option>
                            <option value="price_asc">Price: Low to High</option>
                            <option value="price_desc">Price: High to Low</option>
                            <option value="rating">Highest Rated</option>
                        </select>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
