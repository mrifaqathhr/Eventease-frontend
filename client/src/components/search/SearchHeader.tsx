'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export interface SearchHeaderProps {
    query: string;
    location?: string;
    totalCount: number;
    sortBy: string;
    onSortChange: (sort: string) => void;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const sortOptions = [
    { value: 'featured', label: 'Featured First' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'price_asc', label: 'Price: Low to High' },
    { value: 'price_desc', label: 'Price: High to Low' },
];

export default function SearchHeader({
    query,
    location,
    totalCount,
    sortBy,
    onSortChange,
}: SearchHeaderProps) {
    const router = useRouter();
    const [searchInput, setSearchInput] = useState(query);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (searchInput.trim()) params.set('q', searchInput.trim());
        if (location) params.set('location', location);
        router.push(`/search?${params.toString()}`);
    };

    return (
        <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
        >
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-1.5 text-sm text-text-muted mb-5" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-primary transition-colors">
                    Home
                </Link>
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>chevron_right</span>
                <Link href="/categories" className="hover:text-primary transition-colors">
                    Vendors
                </Link>
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>chevron_right</span>
                <span className="text-text-main font-medium truncate max-w-[200px]">
                    {query || 'All Vendors'}
                </span>
            </nav>

            {/* Heading */}
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-text-main mb-6 leading-tight">
                Search Results{' '}
                {query && (
                    <span className="text-primary italic">for &ldquo;{query}&rdquo;</span>
                )}
                {location && (
                    <span className="text-text-muted font-sans text-xl md:text-2xl font-medium">
                        {' '}
                        in {location}
                    </span>
                )}
            </h1>

            {/* Search bar + sort row */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                {/* Search Input */}
                <form
                    onSubmit={handleSearch}
                    className="relative w-full sm:w-auto sm:flex-1 max-w-xl"
                >
                    <span
                        className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
                        style={{ fontSize: '22px' }}
                    >
                        search
                    </span>
                    <input
                        id="search-query-input"
                        type="text"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder="Search for wedding photographers, venues…"
                        className="w-full h-13 pl-12 pr-4 py-3.5 rounded-xl bg-white border border-[#f3e7ea] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-base shadow-sm placeholder:text-text-muted/60 transition-all"
                    />
                </form>

                {/* Count + Sort */}
                <div className="flex items-center gap-4 shrink-0 w-full sm:w-auto justify-between sm:justify-end">
                    <p className="text-text-main font-medium whitespace-nowrap text-sm">
                        Showing{' '}
                        <span className="font-bold text-primary">{totalCount} results</span>
                    </p>

                    <div className="relative min-w-[180px]">
                        <select
                            id="search-sort-select"
                            value={sortBy}
                            onChange={(e) => onSortChange(e.target.value)}
                            className="w-full h-11 pl-4 pr-10 appearance-none bg-white border border-[#f3e7ea] rounded-xl text-text-main focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer text-sm font-medium transition-all"
                        >
                            {sortOptions.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                        <span
                            className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
                            style={{ fontSize: '20px' }}
                        >
                            expand_more
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
