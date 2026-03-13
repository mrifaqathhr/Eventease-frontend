'use client';

import { motion } from 'framer-motion';

export default function BoostCTA() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="bg-primary/5 rounded-2xl p-6 border border-primary/20 relative overflow-hidden group"
        >
            {/* Decorative blur orb */}
            <div
                className="absolute -end-6 -top-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500 pointer-events-none"
                aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col gap-4">
                {/* Badge */}
                <div>
                    <span className="bg-white text-text-main text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-sm">
                        Recommended
                    </span>
                </div>

                {/* Heading */}
                <div>
                    <h3 className="font-serif text-2xl font-bold text-text-main leading-tight mb-2">
                        Boost Your<br />Visibility
                    </h3>
                    <p className="text-sm text-text-muted mb-4">
                        Get featured on the homepage and appear in top search results.
                    </p>
                    <div className="flex items-baseline gap-1 text-primary">
                        <span className="text-3xl font-bold">$49</span>
                        <span className="text-sm font-medium text-text-muted">/month</span>
                    </div>
                </div>

                {/* Feature list */}
                <ul className="space-y-2">
                    {['Homepage Feature', 'Priority Search', 'Analytics Dashboard'].map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-text-main">
                            <span className="material-symbols-outlined text-emerald-500 text-[18px]">check_circle</span>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* CTA button */}
                <button
                    type="button"
                    className="w-full py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-xl shadow-lg shadow-primary/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                    Upgrade Now
                    <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                </button>
            </div>
        </motion.div>
    );
}
