'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import ApprovalActions from './ApprovalActions';

export interface VendorRequest {
    id: string;
    vendorId: string;
    name: string;
    category: string;
    location: string;
    dateSubmitted: string;
    description: string;
    email: string;
    phone: string;
    website?: string;
    image: string;
    status: 'pending' | 'approved' | 'rejected' | 'processing';
}

interface VendorApprovalTableProps {
    vendors: VendorRequest[];
    searchQuery: string;
    categoryFilter: string;
    onApprove: (id: string) => void;
    onReject: (id: string) => void;
}

const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
    }),
};

export default function VendorApprovalTable({
    vendors,
    searchQuery,
    categoryFilter,
    onApprove,
    onReject,
}: VendorApprovalTableProps) {
    const filtered = useMemo(() => {
        const q = searchQuery.toLowerCase().trim();
        return vendors.filter((v) => {
            const matchesSearch =
                !q ||
                v.name.toLowerCase().includes(q) ||
                v.email.toLowerCase().includes(q) ||
                v.vendorId.toLowerCase().includes(q);
            const matchesCategory =
                categoryFilter === 'All' || v.category === categoryFilter;
            return matchesSearch && matchesCategory;
        });
    }, [vendors, searchQuery, categoryFilter]);

    if (filtered.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-24 text-center">
                <span className="material-symbols-outlined text-[48px] text-text-muted/40 mb-3">
                    search_off
                </span>
                <p className="text-text-muted font-medium">No vendors match your filters.</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {filtered.map((vendor, i) => (
                <motion.div
                    key={vendor.id}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-20px' }}
                    className={`bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 p-5 flex flex-col md:flex-row gap-6 ${vendor.status === 'processing' ? 'opacity-60' : ''
                        }`}
                >
                    {/* Vendor Image */}
                    <div
                        className="w-full md:w-48 h-36 md:h-auto shrink-0 rounded-lg bg-cover bg-center relative overflow-hidden"
                        style={{ backgroundImage: `url('${vendor.image}')` }}
                        aria-hidden="true"
                    >
                        <div className="absolute top-2 start-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-primary">
                            {vendor.category}
                        </div>
                        {vendor.status === 'processing' && (
                            <div className="absolute inset-0 bg-slate-900/10" />
                        )}
                    </div>

                    {/* Vendor Details */}
                    <div className="flex-1 flex flex-col justify-between gap-3 min-w-0">
                        <div>
                            <div className="flex justify-between items-start mb-1 gap-3">
                                <h3 className="text-lg font-bold text-slate-900 leading-snug">{vendor.name}</h3>
                                <span className="text-xs text-slate-500 font-medium bg-slate-100 px-2 py-1 rounded flex-shrink-0">
                                    ID: #{vendor.vendorId}
                                </span>
                            </div>
                            <p className="text-sm text-slate-500 mb-3 flex items-center gap-1">
                                <span className="material-symbols-outlined text-[16px]">location_on</span>
                                {vendor.location} • Submitted {vendor.dateSubmitted}
                            </p>
                            <p className="text-slate-600 text-sm line-clamp-2">{vendor.description}</p>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
                            <div className="flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-[16px] text-slate-400">mail</span>
                                {vendor.email}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-[16px] text-slate-400">call</span>
                                {vendor.phone}
                            </div>
                            {vendor.website && (
                                <div className="flex items-center gap-1.5">
                                    <span className="material-symbols-outlined text-[16px] text-slate-400">language</span>
                                    {vendor.website}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Actions */}
                    <ApprovalActions
                        vendorId={vendor.id}
                        status={vendor.status}
                        onApprove={onApprove}
                        onReject={onReject}
                    />
                </motion.div>
            ))}
        </div>
    );
}
