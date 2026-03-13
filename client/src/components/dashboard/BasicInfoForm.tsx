'use client';

import { motion, type Transition } from 'framer-motion';

interface BasicInfoFormProps {
    businessName: string;
    category: string;
    location: string;
    onChange: (field: 'businessName' | 'category' | 'location', value: string) => void;
}

const categories = [
    'Photography',
    'Venues',
    'Florist',
    'Catering',
    'Music & Band',
    'Decor & Styling',
    'Videography',
    'Bridal Hair & Makeup',
];

const transition: Transition = { duration: 0.45, ease: 'easeOut' };

export default function BasicInfoForm({ businessName, category, location, onChange }: BasicInfoFormProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-border-color dark:border-white/5 p-6 md:p-8"
        >
            {/* Section header */}
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-xl text-primary">
                    <span className="material-symbols-outlined" aria-hidden="true">storefront</span>
                </div>
                <h2 className="text-2xl font-bold text-text-main dark:text-white font-serif">
                    Basic Information
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Business Name — spans full width */}
                <div className="col-span-1 md:col-span-2">
                    <label
                        htmlFor="businessName"
                        className="block text-sm font-semibold text-text-main dark:text-slate-200 mb-2"
                    >
                        Business Name
                    </label>
                    <input
                        id="businessName"
                        type="text"
                        value={businessName}
                        onChange={(e) => onChange('businessName', e.target.value)}
                        placeholder="e.g. Enchanted Floral Designs"
                        className="w-full rounded-xl border border-border-color dark:border-white/10 bg-background-light dark:bg-white/5 focus:ring-2 focus:ring-primary/40 focus:border-primary px-4 py-3 text-text-main dark:text-white placeholder:text-text-muted transition-shadow outline-none"
                    />
                </div>

                {/* Category */}
                <div className="col-span-1">
                    <label
                        htmlFor="category"
                        className="block text-sm font-semibold text-text-main dark:text-slate-200 mb-2"
                    >
                        Category
                    </label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => onChange('category', e.target.value)}
                        className="w-full rounded-xl border border-border-color dark:border-white/10 bg-background-light dark:bg-white/5 focus:ring-2 focus:ring-primary/40 focus:border-primary px-4 py-3 text-text-main dark:text-white cursor-pointer transition-shadow outline-none"
                    >
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Location */}
                <div className="col-span-1">
                    <label
                        htmlFor="location"
                        className="block text-sm font-semibold text-text-main dark:text-slate-200 mb-2"
                    >
                        Location
                    </label>
                    <div className="relative">
                        <span
                            className="material-symbols-outlined absolute start-3 top-3.5 text-text-muted pointer-events-none select-none"
                            aria-hidden="true"
                        >
                            location_on
                        </span>
                        <input
                            id="location"
                            type="text"
                            value={location}
                            onChange={(e) => onChange('location', e.target.value)}
                            placeholder="City, Country"
                            className="w-full rounded-xl border border-border-color dark:border-white/10 bg-background-light dark:bg-white/5 focus:ring-2 focus:ring-primary/40 focus:border-primary ps-10 pe-4 py-3 text-text-main dark:text-white placeholder:text-text-muted transition-shadow outline-none"
                        />
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
