'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import LeadStatusBadge from './LeadStatusBadge';

interface RecentLead {
    id: string;
    initials: string;
    initialsColor: string;
    name: string;
    eventType: string;
    eventDate: string;
    status: 'new' | 'pending' | 'replied' | 'booked' | 'contacted' | 'lost';
}

const recentLeads: RecentLead[] = [
    {
        id: '1',
        initials: 'SJ',
        initialsColor: 'bg-primary/10 text-primary',
        name: 'Sarah & John',
        eventType: 'Wedding Ceremony',
        eventDate: 'Oct 12, 2024',
        status: 'new',
    },
    {
        id: '2',
        initials: 'MK',
        initialsColor: 'bg-rose-100 text-primary',
        name: 'Mike & Kate',
        eventType: 'Reception Only',
        eventDate: 'Sep 05, 2024',
        status: 'pending',
    },
    {
        id: '3',
        initials: 'EL',
        initialsColor: 'bg-background-dim text-text-muted',
        name: 'Emily & Liam',
        eventType: 'Full Planning',
        eventDate: 'Dec 20, 2024',
        status: 'replied',
    },
];

const rowVariants = {
    hidden: { opacity: 0, x: -12 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.08, duration: 0.4, ease: 'easeOut' as const },
    }),
};

export default function RecentActivityFeed() {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-background-dim flex flex-col overflow-hidden">
            {/* Header */}
            <div className="px-6 py-5 border-b border-background-dim flex justify-between items-center">
                <h3 className="font-serif text-lg font-bold text-text-main">Recent Leads</h3>
                <Link
                    href="/vendor/dashboard/leads"
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                    View All →
                </Link>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-start">
                    <thead className="bg-background-light text-text-muted text-xs uppercase tracking-wider font-semibold">
                        <tr>
                            <th className="px-6 py-4 text-start rounded-ss-lg">Couple Name</th>
                            <th className="px-6 py-4 text-start">Event Date</th>
                            <th className="px-6 py-4 text-start">Status</th>
                            <th className="px-6 py-4 text-end rounded-se-lg">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-background-dim">
                        {recentLeads.map((lead, i) => (
                            <motion.tr
                                key={lead.id}
                                custom={i}
                                variants={rowVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="hover:bg-background-light/50 transition-colors"
                            >
                                {/* Client */}
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${lead.initialsColor}`}>
                                            {lead.initials}
                                        </div>
                                        <div>
                                            <p className="font-medium text-text-main text-sm">{lead.name}</p>
                                            <p className="text-xs text-text-muted">{lead.eventType}</p>
                                        </div>
                                    </div>
                                </td>
                                {/* Event date */}
                                <td className="px-6 py-4 text-sm text-text-muted">{lead.eventDate}</td>
                                {/* Status */}
                                <td className="px-6 py-4">
                                    <LeadStatusBadge status={lead.status} />
                                </td>
                                {/* Action */}
                                <td className="px-6 py-4 text-end">
                                    <Link
                                        href={`/vendor/dashboard/leads/${lead.id}`}
                                        className="text-text-muted hover:text-primary transition-colors"
                                        aria-label={`View details for ${lead.name}`}
                                    >
                                        <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                                    </Link>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
