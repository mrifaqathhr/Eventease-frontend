'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const values = [120, 185, 140, 220, 160, 254, 190];
const maxValue = Math.max(...values);

export default function ProfileViewsChart() {
    const [period, setPeriod] = useState<'week' | 'month'>('week');
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl shadow-sm border border-background-dim p-6 flex-1 min-h-[240px]"
        >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-serif text-lg font-bold text-text-main">Profile Views</h3>
                <select
                    className="bg-background-light border-none rounded-lg text-xs font-medium text-text-main py-1 px-3 cursor-pointer focus:ring-0 focus:outline-none"
                    value={period}
                    onChange={(e) => setPeriod(e.target.value as 'week' | 'month')}
                    aria-label="Select time period"
                >
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                </select>
            </div>

            {/* Bar chart */}
            <div className="relative h-40 w-full flex items-end justify-between gap-2 px-1">
                {values.map((val, i) => {
                    const heightPercent = (val / maxValue) * 100;
                    const isHovered = hoveredIndex === i;
                    const isMax = val === maxValue;

                    return (
                        <div
                            key={days[i]}
                            className="relative flex flex-col items-center flex-1 h-full justify-end group"
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Tooltip */}
                            <div
                                className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-text-main text-white text-xs py-1 px-2 rounded transition-opacity pointer-events-none ${isHovered || isMax ? 'opacity-100' : 'opacity-0'
                                    }`}
                            >
                                {val}
                            </div>
                            {/* Bar */}
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: `${heightPercent}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                                className={`w-full rounded-t-lg transition-colors duration-200 ${isMax
                                        ? 'bg-primary shadow-lg shadow-primary/30'
                                        : isHovered
                                            ? 'bg-primary/60'
                                            : 'bg-primary/20 hover:bg-primary/40'
                                    }`}
                            />
                        </div>
                    );
                })}
            </div>

            {/* Day labels */}
            <div className="flex justify-between mt-3 text-xs text-text-muted font-medium px-1">
                {days.map((d) => (
                    <span key={d} className="flex-1 text-center">{d}</span>
                ))}
            </div>
        </motion.div>
    );
}
