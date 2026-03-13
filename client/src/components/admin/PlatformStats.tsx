'use client';

import { motion } from 'framer-motion';

interface StatCard {
    label: string;
    value: string;
    icon: string;
    iconBg: string;
    iconColor: string;
    trendIcon: string;
    trendValue: string;
    trendBg: string;
    trendColor: string;
}

const stats: StatCard[] = [
    {
        label: 'Total Vendors',
        value: '1,240',
        icon: 'storefront',
        iconBg: 'bg-blue-50',
        iconColor: 'text-blue-600',
        trendIcon: 'trending_up',
        trendValue: '5.2%',
        trendBg: 'bg-emerald-50',
        trendColor: 'text-emerald-600',
    },
    {
        label: 'Pending Approvals',
        value: '35',
        icon: 'pending_actions',
        iconBg: 'bg-amber-50',
        iconColor: 'text-amber-600',
        trendIcon: 'trending_up',
        trendValue: '12%',
        trendBg: 'bg-emerald-50',
        trendColor: 'text-emerald-600',
    },
    {
        label: 'Active Promos',
        value: '12',
        icon: 'campaign',
        iconBg: 'bg-purple-50',
        iconColor: 'text-purple-600',
        trendIcon: 'trending_down',
        trendValue: '2.1%',
        trendBg: 'bg-rose-50',
        trendColor: 'text-rose-500',
    },
    {
        label: 'Revenue (Mo)',
        value: '$45k',
        icon: 'payments',
        iconBg: 'bg-emerald-50',
        iconColor: 'text-emerald-600',
        trendIcon: 'trending_up',
        trendValue: '8.5%',
        trendBg: 'bg-emerald-50',
        trendColor: 'text-emerald-600',
    },
    {
        label: 'New Users',
        value: '820',
        icon: 'group_add',
        iconBg: 'bg-indigo-50',
        iconColor: 'text-indigo-600',
        trendIcon: 'trending_up',
        trendValue: '15%',
        trendBg: 'bg-emerald-50',
        trendColor: 'text-emerald-600',
    },
    {
        label: 'Support Tickets',
        value: '14',
        icon: 'support_agent',
        iconBg: 'bg-rose-50',
        iconColor: 'text-rose-600',
        trendIcon: 'remove',
        trendValue: '0%',
        trendBg: 'bg-gray-100',
        trendColor: 'text-gray-500',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
    }),
};

export default function PlatformStats() {
    return (
        <section
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4"
            aria-label="Platform KPI Statistics"
        >
            {stats.map((stat, i) => (
                <motion.div
                    key={stat.label}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                >
                    <div className="flex justify-between items-start mb-4">
                        <div className={`p-2 ${stat.iconBg} ${stat.iconColor} rounded-lg group-hover:opacity-80 transition-opacity`}>
                            <span className="material-symbols-outlined text-[24px]">{stat.icon}</span>
                        </div>
                        <span className={`${stat.trendColor} text-[11px] font-bold ${stat.trendBg} px-2 py-1 rounded-full flex items-center gap-0.5`}>
                            <span className="material-symbols-outlined text-[12px]">{stat.trendIcon}</span>
                            {stat.trendValue}
                        </span>
                    </div>
                    <p className="text-text-muted text-sm font-medium">{stat.label}</p>
                    <h4 className="text-2xl font-bold text-text-main mt-1">{stat.value}</h4>
                </motion.div>
            ))}
        </section>
    );
}
