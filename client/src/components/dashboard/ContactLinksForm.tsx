'use client';

import { motion, type Transition } from 'framer-motion';

interface ContactLinksFormProps {
    website: string;
    instagram: string;
    facebook: string;
    onChange: (field: 'website' | 'instagram' | 'facebook', value: string) => void;
}

const transition: Transition = { duration: 0.45, ease: 'easeOut', delay: 0.25 };

export default function ContactLinksForm({
    website,
    instagram,
    facebook,
    onChange,
}: ContactLinksFormProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-border-color dark:border-white/5 p-6"
        >
            <h3 className="text-xl font-bold text-text-main dark:text-white font-serif mb-4 pb-4 border-b border-border-color dark:border-white/5">
                Contact Links
            </h3>

            <div className="flex flex-col gap-4">
                {/* Website */}
                <div>
                    <label
                        htmlFor="website"
                        className="block text-xs uppercase tracking-wide font-bold text-text-muted mb-1.5"
                    >
                        Website
                    </label>
                    <div className="flex items-center rounded-xl bg-background-light dark:bg-white/5 border border-border-color dark:border-white/10 px-3 py-2.5 focus-within:ring-2 focus-within:ring-primary/40 focus-within:border-primary transition-all">
                        <span
                            className="material-symbols-outlined text-text-muted text-[18px] me-2 flex-shrink-0"
                            aria-hidden="true"
                        >
                            language
                        </span>
                        <input
                            id="website"
                            type="url"
                            value={website}
                            onChange={(e) => onChange('website', e.target.value)}
                            placeholder="https://"
                            className="bg-transparent border-none p-0 w-full text-sm text-text-main dark:text-white focus:ring-0 outline-none placeholder:text-text-muted"
                        />
                    </div>
                </div>

                {/* Instagram */}
                <div>
                    <label
                        htmlFor="instagram"
                        className="block text-xs uppercase tracking-wide font-bold text-text-muted mb-1.5"
                    >
                        Instagram
                    </label>
                    <div className="flex items-center rounded-xl bg-background-light dark:bg-white/5 border border-border-color dark:border-white/10 px-3 py-2.5 focus-within:ring-2 focus-within:ring-primary/40 focus-within:border-primary transition-all">
                        <span className="text-text-muted font-bold text-sm me-2 select-none flex-shrink-0">@</span>
                        <input
                            id="instagram"
                            type="text"
                            value={instagram}
                            onChange={(e) => onChange('instagram', e.target.value)}
                            placeholder="username"
                            className="bg-transparent border-none p-0 w-full text-sm text-text-main dark:text-white focus:ring-0 outline-none placeholder:text-text-muted"
                        />
                    </div>
                </div>

                {/* Facebook */}
                <div>
                    <label
                        htmlFor="facebook"
                        className="block text-xs uppercase tracking-wide font-bold text-text-muted mb-1.5"
                    >
                        Facebook
                    </label>
                    <div className="flex items-center rounded-xl bg-background-light dark:bg-white/5 border border-border-color dark:border-white/10 px-3 py-2.5 focus-within:ring-2 focus-within:ring-primary/40 focus-within:border-primary transition-all">
                        <span className="text-text-muted text-xs me-2 select-none flex-shrink-0 whitespace-nowrap">
                            facebook.com/
                        </span>
                        <input
                            id="facebook"
                            type="text"
                            value={facebook}
                            onChange={(e) => onChange('facebook', e.target.value)}
                            placeholder="page-name"
                            className="bg-transparent border-none p-0 w-full text-sm text-text-main dark:text-white focus:ring-0 outline-none placeholder:text-text-muted"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
