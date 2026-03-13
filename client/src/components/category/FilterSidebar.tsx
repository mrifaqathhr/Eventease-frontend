'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface StyleOption {
    label: string;
    count: number;
}

export interface FilterSidebarProps {
    styles: StyleOption[];
    selectedStyles: string[];
    onStyleToggle: (label: string) => void;
    minPrice: number;
    maxPrice: number;
    selectedRating: string;
    onRatingChange: (value: string) => void;
    availableOnly: boolean;
    onAvailableToggle: () => void;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const drawerVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
        height: 'auto',
        opacity: 1,
        transition: { duration: 0.3, ease: EASE },
    },
};

const ratingOptions = [
    { label: '5.0 Only', value: '5', stars: 5 },
    { label: '4.0 & Up', value: '4', stars: 4 },
    { label: '3.0 & Up', value: '3', stars: 3 },
];

function StarRow({ count, filled }: { count: number; filled: boolean }) {
    return (
        <div className="flex text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
                <span
                    key={i}
                    className="material-symbols-outlined"
                    style={{
                        fontSize: '18px',
                        fontVariationSettings: i < count && filled ? "'FILL' 1" : "'FILL' 0",
                        color: i < count ? undefined : '#d1d5db',
                    }}
                >
                    star
                </span>
            ))}
        </div>
    );
}

interface FilterCardProps {
    title: string;
    icon: string;
    children: React.ReactNode;
}

function FilterCard({ title, icon, children }: FilterCardProps) {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#f3e7ea]">
            <h3 className="font-bold text-lg mb-4 flex items-center justify-between text-text-main">
                {title}
                <span className="material-symbols-outlined text-text-muted" style={{ fontSize: '22px' }}>
                    {icon}
                </span>
            </h3>
            {children}
        </div>
    );
}

export default function FilterSidebar({
    styles,
    selectedStyles,
    onStyleToggle,
    minPrice,
    maxPrice,
    selectedRating,
    onRatingChange,
    availableOnly,
    onAvailableToggle,
}: FilterSidebarProps) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const sidebarContent = (
        <div className="space-y-5">
            {/* Styles / Category filter */}
            <FilterCard title="Styles" icon="category">
                <div className="space-y-3">
                    {styles.map((style) => {
                        const checked = selectedStyles.includes(style.label);
                        return (
                            <label
                                key={style.label}
                                className="flex items-center gap-3 cursor-pointer group"
                            >
                                <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={() => onStyleToggle(style.label)}
                                    className="w-5 h-5 rounded border-gray-300 accent-primary cursor-pointer"
                                />
                                <span className="text-text-main group-hover:text-primary transition-colors flex-1">
                                    {style.label}
                                </span>
                                <span className="text-xs text-text-muted bg-[#fcf8f9] px-2 py-1 rounded-full">
                                    {style.count}
                                </span>
                            </label>
                        );
                    })}
                </div>
            </FilterCard>

            {/* Price Range */}
            <FilterCard title="Price Range" icon="attach_money">
                <div className="mb-4 pt-4 px-2">
                    {/* Visual track — purely decorative; interactive range filter to be wired in v2 */}
                    <div className="relative h-1.5 bg-gray-200 rounded-full">
                        <div
                            className="absolute top-0 bottom-0 bg-primary rounded-full"
                            style={{ left: '15%', right: '25%' }}
                        />
                        <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow cursor-pointer hover:scale-110 transition-transform" />
                        <div className="absolute right-[25%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow cursor-pointer hover:scale-110 transition-transform" />
                    </div>
                </div>
                <div className="flex items-center justify-between text-sm font-medium text-text-main">
                    <span className="bg-[#fcf8f9] px-3 py-1 rounded-md">
                        ${minPrice.toLocaleString()}
                    </span>
                    <span className="text-text-muted">–</span>
                    <span className="bg-[#fcf8f9] px-3 py-1 rounded-md">
                        ${maxPrice.toLocaleString()}+
                    </span>
                </div>
            </FilterCard>

            {/* Rating */}
            <FilterCard title="Rating" icon="star">
                <div className="space-y-2">
                    {ratingOptions.map((opt) => (
                        <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="radio"
                                name="rating"
                                value={opt.value}
                                checked={selectedRating === opt.value}
                                onChange={() => onRatingChange(opt.value)}
                                className="w-5 h-5 border-gray-300 accent-primary cursor-pointer"
                            />
                            <StarRow count={opt.stars} filled />
                            <span className="text-sm text-text-muted group-hover:text-text-main ml-auto transition-colors">
                                {opt.label}
                            </span>
                        </label>
                    ))}
                </div>
            </FilterCard>

            {/* Availability Toggle */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#f3e7ea] flex items-center justify-between">
                <div>
                    <p className="font-bold text-text-main">Available Now</p>
                    <p className="text-xs text-text-muted mt-0.5">Show only available vendors</p>
                </div>
                <button
                    type="button"
                    role="switch"
                    aria-checked={availableOnly}
                    onClick={onAvailableToggle}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none cursor-pointer ${availableOnly ? 'bg-primary' : 'bg-gray-200'
                        }`}
                >
                    <span
                        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform duration-300 ${availableOnly ? 'translate-x-5' : 'translate-x-0.5'
                            }`}
                    />
                </button>
            </div>
        </div>
    );

    return (
        <>
            {/* === Mobile filter toggle === */}
            <div className="lg:hidden mb-4">
                <button
                    type="button"
                    onClick={() => setMobileOpen((o) => !o)}
                    className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#f3e7ea] rounded-lg text-text-main font-semibold text-sm shadow-sm hover:border-primary transition-colors cursor-pointer"
                >
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                        tune
                    </span>
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
                            key="mobile-filters"
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

            {/* === Desktop sidebar (always visible) === */}
            <aside className="hidden lg:block w-72 shrink-0">{sidebarContent}</aside>
        </>
    );
}
