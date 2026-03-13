'use client';

import { useState, useCallback } from 'react';
import VendorApprovalTable, { type VendorRequest } from '@/components/admin/VendorApprovalTable';

const CATEGORIES = ['All', 'Catering', 'Venues', 'Entertainment', 'Logistics'];

const MOCK_VENDORS: VendorRequest[] = [
    {
        id: 'v1',
        vendorId: 'VD-2049',
        name: 'Gourmet Delights Catering',
        category: 'Catering',
        location: 'San Francisco, CA',
        dateSubmitted: 'Oct 24, 2023',
        description:
            'Premier catering service specializing in organic, locally-sourced ingredients for corporate events and weddings. Fully licensed and insured with a capacity for up to 500 guests.',
        email: 'contact@gourmetdelights.com',
        phone: '(415) 555-0192',
        website: 'www.gourmetdelights.com',
        image:
            'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop',
        status: 'pending',
    },
    {
        id: 'v2',
        vendorId: 'VD-2055',
        name: 'The Crystal Hall',
        category: 'Venues',
        location: 'Austin, TX',
        dateSubmitted: 'Oct 23, 2023',
        description:
            'A historic downtown venue offering 5,000 sq ft of elegant event space. Features include vaulted ceilings, crystal chandeliers, and a full-service bar area.',
        email: 'events@crystalhall.com',
        phone: '(512) 555-0884',
        website: 'www.crystalhall.com',
        image:
            'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop',
        status: 'pending',
    },
    {
        id: 'v3',
        vendorId: 'VD-2061',
        name: 'SoundWave Productions',
        category: 'Entertainment',
        location: 'Nashville, TN',
        dateSubmitted: 'Oct 22, 2023',
        description:
            'Full-service audio and lighting production company. We provide DJ services, live bands, and state-of-the-art sound systems for festivals and private parties.',
        email: 'booking@soundwave.net',
        phone: '(615) 555-0922',
        website: 'www.soundwave.net',
        image:
            'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop',
        status: 'pending',
    },
    {
        id: 'v4',
        vendorId: 'VD-2041',
        name: 'SwiftMove Logistics (Reviewing...)',
        category: 'Logistics',
        location: 'Chicago, IL',
        dateSubmitted: 'Oct 21, 2023',
        description:
            'Event furniture and equipment transport specialists. We handle careful transportation of staging, chairs, and delicate decor items across the tri-state area.',
        email: 'ops@swiftmove.co',
        phone: '(312) 555-0101',
        image:
            'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
        status: 'processing',
    },
];

export default function VendorApprovalsPage() {
    const [vendors, setVendors] = useState<VendorRequest[]>(MOCK_VENDORS);
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All');

    const handleApprove = useCallback((id: string) => {
        // TODO: Appwrite Document Update → set approval_status to 'approved'
        console.log('[Admin] Approve vendor:', id);
        setVendors((prev) =>
            prev.map((v) => (v.id === id ? { ...v, status: 'approved' as const } : v))
        );
    }, []);

    const handleReject = useCallback((id: string) => {
        // TODO: Appwrite Document Update → set approval_status to 'rejected'
        console.log('[Admin] Reject vendor:', id);
        setVendors((prev) =>
            prev.map((v) => (v.id === id ? { ...v, status: 'rejected' as const } : v))
        );
    }, []);

    const pendingCount = vendors.filter((v) => v.status === 'pending').length;

    return (
        <div className="flex flex-col min-h-full">
            {/* Page sub-header */}
            <div className="sticky top-0 z-20 bg-[#f8f6f6]/90 backdrop-blur-md border-b border-slate-200 px-6 lg:px-8 py-5 flex flex-col gap-5">
                {/* Title row */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Vendor Approvals</h2>
                        <p className="text-slate-500 text-sm">
                            Review and manage pending vendor registration requests.
                            {pendingCount > 0 && (
                                <span className="ms-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">
                                    {pendingCount} pending
                                </span>
                            )}
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 text-sm font-medium shadow-sm hover:bg-slate-50 transition-colors"
                        >
                            <span className="material-symbols-outlined text-[18px]">filter_list</span>
                            <span>Filters</span>
                        </button>
                        <button
                            type="button"
                            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 text-sm font-medium shadow-sm hover:bg-slate-50 transition-colors"
                        >
                            <span className="material-symbols-outlined text-[18px]">download</span>
                            <span>Export</span>
                        </button>
                    </div>
                </div>

                {/* Search + category tabs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                    {/* Search */}
                    <div className="relative w-full max-w-md">
                        <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-slate-400 text-[20px]">search</span>
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search business, email, or ID..."
                            className="block w-full ps-10 pe-3 py-2.5 border border-slate-200 rounded-lg bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm shadow-sm transition-all"
                        />
                    </div>

                    {/* Category filter pills */}
                    <div className="flex w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 gap-2">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setCategoryFilter(cat)}
                                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${categoryFilter === cat
                                        ? 'bg-primary text-white shadow-sm shadow-primary/20'
                                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Vendor card list */}
            <div className="flex-1 p-6 md:p-8 space-y-4">
                <VendorApprovalTable
                    vendors={vendors}
                    searchQuery={searchQuery}
                    categoryFilter={categoryFilter}
                    onApprove={handleApprove}
                    onReject={handleReject}
                />
            </div>

            {/* Sticky pagination bar */}
            <div className="p-6 border-t border-slate-200 bg-white sticky bottom-0">
                <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-500">
                        Showing{' '}
                        <span className="font-medium text-slate-900">{vendors.filter(v => v.status === 'pending').length}</span>{' '}
                        of{' '}
                        <span className="font-medium text-slate-900">{MOCK_VENDORS.length}</span>{' '}
                        requests
                    </p>
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            disabled
                            className="p-2 rounded-lg border border-slate-200 text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50"
                            aria-label="Previous page"
                        >
                            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                        </button>
                        <button
                            type="button"
                            className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
                            aria-label="Next page"
                        >
                            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
