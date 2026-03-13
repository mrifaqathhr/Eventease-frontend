'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Types ─────────────────────────────────────────────────── */
export type PriceTier = '$' | '$$' | '$$$' | '$$$$';
export type StyleOption = { label: string; count?: number };

export interface GlobalFilterSidebarProps {
    /** Filter state */
    location: string;
    onLocationChange: (v: string) => void;

    selectedPriceTiers: PriceTier[];
    onPriceTierToggle: (tier: PriceTier) => void;

    styleOptions: StyleOption[];
    selectedStyles: string[];
    onStyleToggle: (style: string) => void;

    selectedRating: string;
    onRatingChange: (v: string) => void;

    onApply: () => void;
    onReset: () => void;
}

/* ─── Variants ──────────────────────────────────────────────── */
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const drawerVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
        height: 'auto',
        opacity: 1,
        transition: { duration: 0.32, ease: EASE },
    },
};

/* ─── Helpers ───────────────────────────────────────────────── */
const priceTiers: { tier: PriceTier; label: string }[] = [
    { tier: '$', label: 'Inexpensive ($)' },
    { tier: '$$', label: 'Affordable ($$)' },
    { tier: '$$$', label: 'Moderate ($$$)' },
    { tier: '$$$$', label: 'Luxury ($$$$)' },
];

const ratingOptions = [
    { label: '5.0 Only', value: '5', stars: 5 },
    { label: '4.0 & Up', value: '4', stars: 4 },
    { label: '3.0 & Up', value: '3', stars: 3 },
];

function StarRow({ count }: { count: number }) {
    return (
        <div className="flex text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
                <span
                    key={i}
                    className="material-symbols-outlined"
                    style={{
                        fontSize: '16px',
                        fontVariationSettings: i < count ? "'FILL' 1" : "'FILL' 0",
                        color: i < count ? undefined : '#d1d5db',
                    }}
                >
                    star
                </span>
            ))}
        </div>
    );
}

function SectionHeader({ title }: { title: string }) {
    return (
        <h4 className="text-xs font-bold text-text-main uppercase tracking-widest mb-3">{title}</h4>
    );
}

/* ─── Component ─────────────────────────────────────────────── */
export default function GlobalFilterSidebar({
    location,
    onLocationChange,
    selectedPriceTiers,
    onPriceTierToggle,
    styleOptions,
    selectedStyles,
    onStyleToggle,
    selectedRating,
    onRatingChange,
    onApply,
    onReset,
}: GlobalFilterSidebarProps) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const sidebarContent = (
        <div className="bg-white rounded-2xl border border-[#f3e7ea] p-6 shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-text-main flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '22px' }}>tune</span>
                    Filters
                </h3>
                <button
                    type="button"
                    onClick={onReset}
                    className="text-sm text-primary font-medium hover:underline cursor-pointer transition-colors"
                >
                    Reset all
                </button>
            </div>

            {/* Location */}
            <div className="mb-7">
                <SectionHeader title="Location" />
                <div className="relative">
                    <span
                        className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
                        style={{ fontSize: '18px' }}
                    >
                        location_on
                    </span>
                    <input
                        id="filter-location-input"
                        type="text"
                        value={location}
                        onChange={(e) => onLocationChange(e.target.value)}
                        placeholder="City or Zip Code"
                        className="w-full h-10 pl-10 pr-3 rounded-lg border border-[#f3e7ea] bg-background-light text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                </div>
                <div className="mt-3 flex items-center gap-3 text-sm">
                    <span className="text-text-muted shrink-0">Distance:</span>
                    <input
                        type="range"
                        min={5}
                        max={100}
                        defaultValue={25}
                        className="flex-1 accent-primary h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-text-main font-medium shrink-0 w-10 text-right">25 mi</span>
                </div>
            </div>

            {/* Price Range */}
            <div className="mb-7 border-t border-[#f3e7ea] pt-6">
                <SectionHeader title="Price Range" />
                <div className="space-y-2.5">
                    {priceTiers.map(({ tier, label }) => (
                        <label key={tier} className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                id={`filter-price-${tier}`}
                                checked={selectedPriceTiers.includes(tier)}
                                onChange={() => onPriceTierToggle(tier)}
                                className="w-5 h-5 rounded border-gray-300 accent-primary cursor-pointer"
                            />
                            <span className="text-text-main group-hover:text-primary transition-colors text-sm">
                                {label}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Styles */}
            {styleOptions.length > 0 && (
                <div className="mb-7 border-t border-[#f3e7ea] pt-6">
                    <SectionHeader title="Style" />
                    <div className="space-y-2.5">
                        {styleOptions.map(({ label, count }) => (
                            <label key={label} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    id={`filter-style-${label}`}
                                    checked={selectedStyles.includes(label)}
                                    onChange={() => onStyleToggle(label)}
                                    className="w-5 h-5 rounded border-gray-300 accent-primary cursor-pointer"
                                />
                                <span className="text-text-main group-hover:text-primary transition-colors text-sm flex-1">
                                    {label}
                                </span>
                                {count !== undefined && (
                                    <span className="text-xs text-text-muted bg-background-light px-2 py-0.5 rounded-full">
                                        {count}
                                    </span>
                                )}
                            </label>
                        ))}
                    </div>
                </div>
            )}

            {/* Rating */}
            <div className="mb-7 border-t border-[#f3e7ea] pt-6">
                <SectionHeader title="Rating" />
                <div className="space-y-2.5">
                    {ratingOptions.map((opt) => (
                        <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="radio"
                                name="global-filter-rating"
                                id={`filter-rating-${opt.value}`}
                                value={opt.value}
                                checked={selectedRating === opt.value}
                                onChange={() => onRatingChange(opt.value)}
                                className="w-5 h-5 border-gray-300 accent-primary cursor-pointer"
                            />
                            <StarRow count={opt.stars} />
                            <span className="text-sm text-text-muted group-hover:text-text-main ml-auto transition-colors">
                                {opt.label}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Apply CTA */}
            <button
                type="button"
                id="filter-apply-btn"
                onClick={onApply}
                className="w-full py-3 bg-text-main hover:bg-black text-white rounded-xl font-bold transition-colors cursor-pointer"
            >
                Apply Filters
            </button>
        </div>
    );

    return (
        <>
            {/* ── Mobile toggle ── */}
            <div className="lg:hidden mb-5">
                <button
                    type="button"
                    id="mobile-filter-toggle"
                    onClick={() => setMobileOpen((o) => !o)}
                    className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#f3e7ea] rounded-xl text-text-main font-semibold text-sm shadow-sm hover:border-primary transition-colors cursor-pointer w-full sm:w-auto"
                >
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>tune</span>
                    {mobileOpen ? 'Hide Filters' : 'Show Filters'}
                    <span
                        className="material-symbols-outlined ml-auto transition-transform duration-300"
                        style={{
                            fontSize: '20px',
                            transform: mobileOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                    >
                        expand_more
                    </span>
                </button>

                <AnimatePresence initial={false}>
                    {mobileOpen && (
                        <motion.div
                            key="mobile-global-filters"
                            variants={drawerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="overflow-hidden mt-3"
                        >
                            {sidebarContent}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* ── Desktop sticky sidebar ── */}
            <aside className="hidden lg:block w-72 shrink-0 sticky top-24 self-start">
                {sidebarContent}
            </aside>
        </>
    );
}
