'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import LeadStatusBadge, { LeadStatus } from './LeadStatusBadge';

export interface Lead {
    id: string;
    initials: string;
    initialsColor: string;
    name: string;
    email: string;
    eventDate: string;
    category: string;
    status: LeadStatus;
    inquiryDate: string;
}

const MOCK_LEADS: Lead[] = [
    {
        id: '1',
        initials: 'SJ',
        initialsColor: 'bg-primary/10 text-primary',
        name: 'Sarah Jenkins',
        email: 'sarah.j@example.com',
        eventDate: 'Oct 12, 2024',
        category: 'Wedding',
        status: 'new',
        inquiryDate: '2 hours ago',
    },
    {
        id: '2',
        initials: 'MR',
        initialsColor: 'bg-blue-100 text-blue-600',
        name: 'Michael Ross',
        email: 'mross@techcorp.com',
        eventDate: 'Nov 05, 2024',
        category: 'Corporate',
        status: 'contacted',
        inquiryDate: 'Yesterday',
    },
    {
        id: '3',
        initials: 'EC',
        initialsColor: 'bg-purple-100 text-purple-600',
        name: 'Emily Chen',
        email: 'emily.chen@gmail.com',
        eventDate: 'Dec 18, 2024',
        category: 'Birthday',
        status: 'booked',
        inquiryDate: 'Oct 10, 2024',
    },
    {
        id: '4',
        initials: 'DW',
        initialsColor: 'bg-amber-100 text-amber-600',
        name: 'David Wright',
        email: 'dwright88@outlook.com',
        eventDate: 'Jan 20, 2025',
        category: 'Anniversary',
        status: 'new',
        inquiryDate: 'Oct 09, 2024',
    },
    {
        id: '5',
        initials: 'JA',
        initialsColor: 'bg-teal-100 text-teal-600',
        name: 'Jessica Alba',
        email: 'j.alba.events@company.net',
        eventDate: 'Feb 14, 2025',
        category: 'Engagement',
        status: 'lost',
        inquiryDate: 'Oct 08, 2024',
    },
    {
        id: '6',
        initials: 'RK',
        initialsColor: 'bg-rose-100 text-rose-600',
        name: 'Rohan Kapoor',
        email: 'rkapoor@mail.com',
        eventDate: 'Mar 01, 2025',
        category: 'Wedding',
        status: 'pending',
        inquiryDate: 'Oct 05, 2024',
    },
];

const STATUS_FILTERS: { label: string; value: LeadStatus | 'all' }[] = [
    { label: 'All', value: 'all' },
    { label: 'New', value: 'new' },
    { label: 'Contacted', value: 'contacted' },
    { label: 'Pending', value: 'pending' },
    { label: 'Booked', value: 'booked' },
    { label: 'Lost', value: 'lost' },
];

const rowVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.07, duration: 0.4, ease: 'easeOut' as const },
    }),
};

const PAGE_SIZE = 5;

export default function LeadsTable() {
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState<LeadStatus | 'all'>('all');
    const [sortBy, setSortBy] = useState<'eventDate' | 'inquiryDate' | 'name'>('inquiryDate');
    const [page, setPage] = useState(1);

    const filtered = useMemo(() => {
        let data = MOCK_LEADS;

        if (search.trim()) {
            const q = search.toLowerCase();
            data = data.filter(
                (l) => l.name.toLowerCase().includes(q) || l.email.toLowerCase().includes(q),
            );
        }

        if (statusFilter !== 'all') {
            data = data.filter((l) => l.status === statusFilter);
        }

        return data;
    }, [search, statusFilter]);

    const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
    const totalPages = Math.ceil(filtered.length / PAGE_SIZE);

    return (
        <div className="flex flex-col gap-4">
            {/* Controls */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                {/* Search */}
                <div className="relative min-w-0 sm:min-w-[280px]">
                    <span className="material-symbols-outlined absolute start-3 top-1/2 -translate-y-1/2 text-text-muted text-xl pointer-events-none">
                        search
                    </span>
                    <input
                        className="w-full rounded-xl border border-background-dim bg-white py-3 ps-10 pe-4 text-sm text-text-main placeholder:text-text-muted shadow-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                        placeholder="Search by name or email…"
                        type="search"
                        value={search}
                        onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                        aria-label="Search leads"
                    />
                </div>

                {/* Right controls */}
                <div className="flex items-center gap-2 flex-wrap">
                    {/* Sort */}
                    <select
                        className="rounded-xl border border-background-dim bg-white py-3 px-3 text-sm text-text-main shadow-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                        aria-label="Sort leads"
                    >
                        <option value="inquiryDate">By Inquiry Date</option>
                        <option value="eventDate">By Event Date</option>
                        <option value="name">By Name</option>
                    </select>

                    {/* Export */}
                    <button
                        type="button"
                        className="flex items-center gap-2 rounded-xl border border-background-dim bg-white px-4 py-3 text-sm font-medium text-text-muted shadow-sm hover:bg-background-light transition-colors"
                    >
                        <span className="material-symbols-outlined text-[20px]">download</span>
                        <span className="hidden sm:inline">Export</span>
                    </button>
                </div>
            </div>

            {/* Status filter pills */}
            <div className="flex gap-2 flex-wrap" role="group" aria-label="Filter by status">
                {STATUS_FILTERS.map((f) => (
                    <button
                        key={f.value}
                        type="button"
                        onClick={() => { setStatusFilter(f.value); setPage(1); }}
                        className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${statusFilter === f.value
                            ? 'bg-primary text-white shadow-sm shadow-primary/30'
                            : 'bg-white border border-background-dim text-text-muted hover:border-primary/40 hover:text-primary'
                            }`}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-2xl border border-background-dim bg-white shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[700px] border-collapse text-sm text-start">
                        <thead className="bg-background-light">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-text-main text-start">Client Name</th>
                                <th className="px-6 py-4 font-semibold text-text-main text-start">Event Date</th>
                                <th className="px-6 py-4 font-semibold text-text-main text-start">Category</th>
                                <th className="px-6 py-4 font-semibold text-text-main text-start">Status</th>
                                <th className="px-6 py-4 font-semibold text-text-main text-start">Inquiry Date</th>
                                <th className="px-6 py-4 font-semibold text-text-main text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-background-dim">
                            {paginated.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-text-muted">
                                        No leads found.
                                    </td>
                                </tr>
                            ) : (
                                paginated.map((lead, i) => (
                                    <motion.tr
                                        key={lead.id}
                                        custom={i}
                                        variants={rowVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        className="group hover:bg-background-light/60 transition-colors"
                                    >
                                        {/* Name */}
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`flex size-10 shrink-0 items-center justify-center rounded-full font-bold text-sm ${lead.initialsColor}`}
                                                >
                                                    {lead.initials}
                                                </div>
                                                <div className="flex flex-col min-w-0">
                                                    <span className="font-medium text-text-main truncate">{lead.name}</span>
                                                    <span className="text-xs text-text-muted truncate">{lead.email}</span>
                                                </div>
                                            </div>
                                        </td>
                                        {/* Event date */}
                                        <td className="px-6 py-4 text-text-muted">{lead.eventDate}</td>
                                        {/* Category */}
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center rounded-full bg-background-dim px-2.5 py-0.5 text-xs font-medium text-text-main">
                                                {lead.category}
                                            </span>
                                        </td>
                                        {/* Status */}
                                        <td className="px-6 py-4">
                                            <LeadStatusBadge status={lead.status} />
                                        </td>
                                        {/* Inquiry date */}
                                        <td className="px-6 py-4 text-text-muted">{lead.inquiryDate}</td>
                                        {/* Action */}
                                        <td className="px-6 py-4 text-end">
                                            <button
                                                type="button"
                                                className={`rounded-lg px-4 py-2 text-xs font-semibold shadow-sm transition-colors ${lead.status === 'new'
                                                    ? 'bg-primary text-white hover:bg-primary-dark'
                                                    : 'border border-background-dim bg-white text-text-muted hover:bg-background-light'
                                                    }`}
                                            >
                                                {lead.status === 'new'
                                                    ? 'View Details'
                                                    : lead.status === 'booked'
                                                        ? 'View Quote'
                                                        : lead.status === 'lost'
                                                            ? 'Reopen'
                                                            : 'Manage'}
                                            </button>
                                        </td>
                                    </motion.tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between border-t border-background-dim px-6 py-4">
                    <p className="text-sm text-text-muted">
                        Showing{' '}
                        <span className="font-medium text-text-main">
                            {Math.min((page - 1) * PAGE_SIZE + 1, filtered.length)}
                        </span>{' '}
                        to{' '}
                        <span className="font-medium text-text-main">
                            {Math.min(page * PAGE_SIZE, filtered.length)}
                        </span>{' '}
                        of{' '}
                        <span className="font-medium text-text-main">{filtered.length}</span> results
                    </p>
                    <div className="flex gap-2">
                        <button
                            type="button"
                            disabled={page === 1}
                            onClick={() => setPage((p) => p - 1)}
                            className="inline-flex items-center justify-center rounded-lg border border-background-dim bg-white p-2 text-sm text-text-muted shadow-sm hover:bg-background-light disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                            aria-label="Previous page"
                        >
                            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                        </button>
                        <button
                            type="button"
                            disabled={page >= totalPages}
                            onClick={() => setPage((p) => p + 1)}
                            className="inline-flex items-center justify-center rounded-lg border border-background-dim bg-white p-2 text-sm text-text-muted shadow-sm hover:bg-background-light disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                            aria-label="Next page"
                        >
                            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
