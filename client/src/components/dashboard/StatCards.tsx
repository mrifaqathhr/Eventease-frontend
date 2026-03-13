'use client';

import { motion } from 'framer-motion';

export interface Stat {
    id: string;
    label: string;
    value: string;
    icon: string;
    iconBg: string;
    iconColor: string;
    badge?: string;
    badgeColor?: string;
    badgeBg?: string;
}

const stats: Stat[] = [
    {
        id: 'total-leads',
        label: 'Total Leads',
        value: '24',
        icon: 'diversity_3',
        iconBg: 'bg-primary/10',
        iconColor: 'text-primary',
        badge: '+12%',
        badgeBg: 'bg-emerald-50',
        badgeColor: 'text-emerald-700',
    },
    {
        id: 'active-listings',
        label: 'Active Listings',
        value: '3',
        icon: 'storefront',
        iconBg: 'bg-blue-50',
        iconColor: 'text-blue-600',
        badge: '+1 new',
        badgeBg: 'bg-emerald-50',
        badgeColor: 'text-emerald-700',
    },
    {
        id: 'profile-views',
        label: 'Profile Views',
        value: '1,204',
        icon: 'visibility',
        iconBg: 'bg-purple-50',
        iconColor: 'text-purple-600',
        badge: '+8%',
        badgeBg: 'bg-emerald-50',
        badgeColor: 'text-emerald-700',
    },
    {
        id: 'promo-status',
        label: 'Promo Status',
        value: 'Gold',
        icon: 'stars',
        iconBg: 'bg-amber-50',
        iconColor: 'text-amber-600',
        badge: 'Active',
        badgeBg: 'bg-background-dim',
        badgeColor: 'text-text-muted',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function StatCards() {
    return (
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            {stats.map((stat) => (
                <motion.div
                    key={stat.id}
                    variants={cardVariants}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-background-dim hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
                >
                    <div className="flex justify-between items-start">
                        <div className={`p-3 ${stat.iconBg} rounded-xl ${stat.iconColor}`}>
                            <span className="material-symbols-outlined text-[24px]">{stat.icon}</span>
                        </div>
                        {stat.badge && (
                            <span className={`inline-flex items-center gap-0.5 text-xs font-medium px-2 py-1 rounded-lg ${stat.badgeBg} ${stat.badgeColor}`}>
                                {stat.badge}
                            </span>
                        )}
                    </div>
                    <div>
                        <p className="text-text-muted text-sm font-medium">{stat.label}</p>
                        <h3 className="font-serif text-3xl font-bold text-text-main mt-1">{stat.value}</h3>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}
