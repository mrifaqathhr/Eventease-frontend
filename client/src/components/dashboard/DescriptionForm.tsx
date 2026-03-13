'use client';

import { motion, type Transition } from 'framer-motion';

interface DescriptionFormProps {
    description: string;
    onChange: (value: string) => void;
}

const transition: Transition = { duration: 0.45, ease: 'easeOut', delay: 0.08 };

export default function DescriptionForm({ description, onChange }: DescriptionFormProps) {
    const charLimit = 1200;
    const remaining = charLimit - description.length;

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
                    <span className="material-symbols-outlined" aria-hidden="true">description</span>
                </div>
                <h2 className="text-2xl font-bold text-text-main dark:text-white font-serif">
                    About Your Business
                </h2>
            </div>

            <div>
                <label
                    htmlFor="description"
                    className="block text-sm font-semibold text-text-main dark:text-slate-200 mb-2"
                >
                    Description
                </label>
                <p className="text-xs text-text-muted mb-3">
                    Tell clients what makes your services unique. Focus on your style and experience.
                </p>
                <textarea
                    id="description"
                    rows={7}
                    maxLength={charLimit}
                    value={description}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Write a compelling description of your services, style, and experience..."
                    className="w-full rounded-xl border border-border-color dark:border-white/10 bg-background-light dark:bg-white/5 focus:ring-2 focus:ring-primary/40 focus:border-primary px-4 py-3 text-text-main dark:text-white placeholder:text-text-muted resize-none transition-shadow outline-none leading-relaxed"
                />
                <p
                    className={`text-xs mt-1.5 text-end ${remaining < 50 ? 'text-red-500' : 'text-text-muted'
                        }`}
                >
                    {remaining} characters remaining
                </p>
            </div>
        </motion.section>
    );
}
