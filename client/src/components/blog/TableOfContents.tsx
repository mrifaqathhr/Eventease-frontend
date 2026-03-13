'use client';

import Link from 'next/link';

// ─── Types ────────────────────────────────────────────────────────────────────

interface BlogCategory {
    label: string;
    href: string;
    icon: string;
    count: number;
    isActive?: boolean;
}

interface TableOfContentsProps {
    activeCategory?: string;
    categories?: BlogCategory[];
}

const DEFAULT_CATEGORIES: BlogCategory[] = [
    { label: 'Real Weddings', href: '/blog?category=real-weddings', icon: 'favorite', count: 124 },
    { label: 'Planning Tips', href: '/blog?category=planning-tips', icon: 'edit_calendar', count: 85, isActive: true },
    { label: 'Style & Trends', href: '/blog?category=style-trends', icon: 'styler', count: 42 },
    { label: 'Honeymoons', href: '/blog?category=honeymoons', icon: 'flight_takeoff', count: 18 },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function TableOfContents({
    categories = DEFAULT_CATEGORIES,
}: TableOfContentsProps) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h3 className="font-serif font-bold text-xl mb-5 text-text-main">Categories</h3>
            <nav className="flex flex-col gap-1" aria-label="Blog categories">
                {categories.map((cat) => (
                    <Link
                        key={cat.label}
                        href={cat.href}
                        className={`
              group flex items-center justify-between p-2.5 rounded-xl transition-colors duration-150
              ${cat.isActive
                                ? 'bg-primary-light'
                                : 'hover:bg-primary-light/50'
                            }
            `}
                    >
                        <div className="flex items-center gap-3">
                            <span
                                className={`material-symbols-outlined text-[20px] transition-colors ${cat.isActive ? 'text-primary' : 'text-text-muted group-hover:text-primary'
                                    }`}
                            >
                                {cat.icon}
                            </span>
                            <span
                                className={`text-sm font-medium transition-colors ${cat.isActive ? 'text-primary' : 'text-text-main group-hover:text-primary'
                                    }`}
                            >
                                {cat.label}
                            </span>
                        </div>
                        <span
                            className={`text-xs px-2 py-0.5 rounded-full transition-colors ${cat.isActive
                                    ? 'bg-white text-primary font-bold'
                                    : 'bg-slate-100 text-text-muted'
                                }`}
                        >
                            {cat.count}
                        </span>
                    </Link>
                ))}
            </nav>
        </div>
    );
}
