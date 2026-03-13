'use client';

import { motion, type Transition } from 'framer-motion';

interface PricingSettingsProps {
    startingPrice: string;
    acceptingBookings: boolean;
    onChange: (field: 'startingPrice' | 'acceptingBookings', value: string | boolean) => void;
}

const transition: Transition = { duration: 0.45, ease: 'easeOut', delay: 0.1 };

export default function PricingSettings({
    startingPrice,
    acceptingBookings,
    onChange,
}: PricingSettingsProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-border-color dark:border-white/5 p-6 lg:sticky lg:top-6"
        >
            <h3 className="text-xl font-bold text-text-main dark:text-white font-serif mb-4 pb-4 border-b border-border-color dark:border-white/5">
                Service Details
            </h3>

            <div className="flex flex-col gap-5">
                {/* Starting price */}
                <div>
                    <label
                        htmlFor="startingPrice"
                        className="block text-sm font-semibold text-text-main dark:text-slate-200 mb-2"
                    >
                        Starting Price ($)
                    </label>
                    <div className="relative">
                        <span
                            className="material-symbols-outlined absolute start-3 top-3.5 text-text-muted text-[20px] pointer-events-none"
                            aria-hidden="true"
                        >
                            attach_money
                        </span>
                        <input
                            id="startingPrice"
                            type="number"
                            min="0"
                            step="50"
                            value={startingPrice}
                            onChange={(e) => onChange('startingPrice', e.target.value)}
                            placeholder="0.00"
                            className="w-full rounded-xl border border-border-color dark:border-white/10 bg-background-light dark:bg-white/5 focus:ring-2 focus:ring-primary/40 focus:border-primary ps-10 pe-4 py-3 text-text-main dark:text-white font-medium outline-none transition-shadow"
                        />
                    </div>
                </div>

                {/* Accepting bookings toggle */}
                <div className="flex items-center justify-between py-2">
                    <div>
                        <span className="block text-sm font-semibold text-text-main dark:text-slate-200">
                            Accepting Bookings
                        </span>
                        <span className="text-xs text-text-muted">Currently available for new clients</span>
                    </div>

                    <label
                        htmlFor="acceptingBookings"
                        className="relative inline-flex items-center cursor-pointer flex-shrink-0"
                        aria-label="Toggle accepting bookings"
                    >
                        <input
                            id="acceptingBookings"
                            type="checkbox"
                            className="sr-only peer"
                            checked={acceptingBookings}
                            onChange={(e) => onChange('acceptingBookings', e.target.checked)}
                        />
                        {/* Track */}
                        <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full peer peer-focus:ring-2 peer-focus:ring-primary/30 peer-checked:bg-primary transition-colors duration-200" />
                        {/* Thumb */}
                        <div className="absolute start-[2px] top-[2px] bg-white border border-gray-300 rounded-full h-5 w-5 transition-all duration-200 peer-checked:translate-x-full rtl:peer-checked:-translate-x-full peer-checked:border-white" />
                    </label>
                </div>
            </div>
        </motion.div>
    );
}
