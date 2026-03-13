'use client';

import { motion } from 'framer-motion';

const leadsStats = [
    { label: 'Total Leads', value: '124', badge: '+12%', badgeColor: 'text-emerald-600' },
    { label: 'Pending Response', value: '8', badge: 'Needs attention', badgeColor: 'text-primary' },
    { label: 'Booked this Month', value: '14', badge: '+4%', badgeColor: 'text-emerald-600' },
    { label: 'Conversion Rate', value: '28%', badge: 'Avg. 25%', badgeColor: 'text-text-muted' },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};

export default function LeadsStatsBar() {
    return (
        <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            {leadsStats.map((stat) => (
                <motion.div
                    key={stat.label}
                    variants={cardVariants}
                    className="flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-background-dim"
                >
                    <span className="text-sm font-medium text-text-muted">{stat.label}</span>
                    <div className="mt-2 flex items-baseline gap-2">
                        <span className="font-serif text-3xl font-bold text-text-main">{stat.value}</span>
                        <span className={`text-xs font-medium ${stat.badgeColor}`}>{stat.badge}</span>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}
