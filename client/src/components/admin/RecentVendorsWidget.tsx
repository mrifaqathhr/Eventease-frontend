'use client';

import { motion } from 'framer-motion';

interface RecentVendor {
    id: string;
    name: string;
    category: string;
    status: 'Active' | 'Pending' | 'Rejected';
    date: string;
    avatar: string;
}

const recentVendors: RecentVendor[] = [
    {
        id: '1',
        name: 'Grand Ballroom Events',
        category: 'Venues',
        status: 'Active',
        date: 'Oct 24, 2023',
        avatar: 'https://i.pravatar.cc/32?img=11',
    },
    {
        id: '2',
        name: 'Dreamy Dresses',
        category: 'Bridal Wear',
        status: 'Pending',
        date: 'Oct 23, 2023',
        avatar: 'https://i.pravatar.cc/32?img=12',
    },
    {
        id: '3',
        name: 'Elite Catering Co.',
        category: 'Catering',
        status: 'Active',
        date: 'Oct 22, 2023',
        avatar: 'https://i.pravatar.cc/32?img=13',
    },
    {
        id: '4',
        name: 'Floral Fantasy Inc.',
        category: 'Florals',
        status: 'Pending',
        date: 'Oct 21, 2023',
        avatar: 'https://i.pravatar.cc/32?img=14',
    },
    {
        id: '5',
        name: 'SoundWave Productions',
        category: 'Entertainment',
        status: 'Active',
        date: 'Oct 20, 2023',
        avatar: 'https://i.pravatar.cc/32?img=15',
    },
];

const statusConfig: Record<RecentVendor['status'], { bg: string; text: string }> = {
    Active: { bg: 'bg-green-100', text: 'text-green-800' },
    Pending: { bg: 'bg-amber-100', text: 'text-amber-800' },
    Rejected: { bg: 'bg-red-100', text: 'text-red-800' },
};

const rowVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.06, duration: 0.3 },
    }),
};

export default function RecentVendorsWidget() {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-bold text-lg text-text-main">Recent Vendor Activity</h3>
                <div className="flex gap-2">
                    <button
                        type="button"
                        className="p-1.5 rounded-lg text-text-muted hover:bg-gray-100 transition-colors"
                        aria-label="Filter"
                    >
                        <span className="material-symbols-outlined text-[20px]">filter_list</span>
                    </button>
                    <button
                        type="button"
                        className="p-1.5 rounded-lg text-text-muted hover:bg-gray-100 transition-colors"
                        aria-label="More options"
                    >
                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-start border-collapse">
                    <thead>
                        <tr className="text-xs text-text-muted border-b border-gray-100 bg-gray-50/50">
                            <th className="px-6 py-3 font-semibold text-start">Vendor Name</th>
                            <th className="px-6 py-3 font-semibold text-start">Category</th>
                            <th className="px-6 py-3 font-semibold text-start">Status</th>
                            <th className="px-6 py-3 font-semibold text-start">Date</th>
                            <th className="px-6 py-3 font-semibold text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {recentVendors.map((vendor, i) => {
                            const cfg = statusConfig[vendor.status];
                            return (
                                <motion.tr
                                    key={vendor.id}
                                    custom={i}
                                    variants={rowVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: '-20px' }}
                                    className="border-b border-gray-50 hover:bg-gray-50/50 group"
                                >
                                    <td className="px-6 py-4 font-medium text-text-main">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-8 h-8 rounded-full bg-cover bg-center flex-shrink-0"
                                                style={{ backgroundImage: `url('${vendor.avatar}')` }}
                                                aria-hidden="true"
                                            />
                                            <span>{vendor.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-text-muted">{vendor.category}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${cfg.bg} ${cfg.text}`}>
                                            {vendor.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-text-muted">{vendor.date}</td>
                                    <td className="px-6 py-4 text-end">
                                        <button
                                            type="button"
                                            className="text-text-muted hover:text-primary font-medium transition-colors"
                                        >
                                            Manage
                                        </button>
                                    </td>
                                </motion.tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
