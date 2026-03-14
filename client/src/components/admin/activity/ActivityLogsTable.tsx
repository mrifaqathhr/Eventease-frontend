'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Data Interfaces
interface ActivityLog {
    id: string;
    timestamp: string;
    admin: {
        name: string;
        initials: string;
        colorClass: string;
    };
    action: {
        type: 'Created' | 'Updated' | 'Deleted' | 'Approved' | 'Flagged' | 'Suspended' | 'Failed Login';
        icon: string;
        colorClass: string;
    };
    targetType: string;
    targetName: string;
    status: {
        label: 'Success' | 'Warning' | 'Critical';
        colorClass: string;
        dotClass: string;
    };
}

const mockLogs: ActivityLog[] = [
    {
        id: 'log-1',
        timestamp: 'Oct 24, 2023 14:30',
        admin: { name: 'Sarah Jenkins', initials: 'SJ', colorClass: 'bg-slate-100 text-slate-500' },
        action: { type: 'Updated', icon: 'edit', colorClass: 'bg-blue-50 text-blue-700 border-blue-100' },
        targetType: 'Vendor Profile',
        targetName: 'Blissful Catering',
        status: { label: 'Success', colorClass: 'bg-emerald-50 text-emerald-700 border-emerald-100', dotClass: 'bg-emerald-500' }
    },
    {
        id: 'log-2',
        timestamp: 'Oct 24, 2023 13:15',
        admin: { name: 'Mike Ross', initials: 'MR', colorClass: 'bg-indigo-50 text-indigo-600' },
        action: { type: 'Deleted', icon: 'delete', colorClass: 'bg-red-50 text-red-700 border-red-100' },
        targetType: 'Review',
        targetName: 'Review #8821',
        status: { label: 'Success', colorClass: 'bg-emerald-50 text-emerald-700 border-emerald-100', dotClass: 'bg-emerald-500' }
    },
    {
        id: 'log-3',
        timestamp: 'Oct 24, 2023 11:45',
        admin: { name: 'System Bot', initials: 'SB', colorClass: 'bg-slate-200 text-slate-600 font-normal material-symbols-outlined text-sm' },
        action: { type: 'Flagged', icon: 'flag', colorClass: 'bg-amber-50 text-amber-700 border-amber-100' },
        targetType: 'User Account',
        targetName: 'john.doe@email.com',
        status: { label: 'Warning', colorClass: 'bg-amber-50 text-amber-700 border-amber-100', dotClass: 'bg-amber-500' }
    },
    {
        id: 'log-4',
        timestamp: 'Oct 24, 2023 09:20',
        admin: { name: 'Sarah Jenkins', initials: 'SJ', colorClass: 'bg-slate-100 text-slate-500' },
        action: { type: 'Approved', icon: 'check_circle', colorClass: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
        targetType: 'Vendor Application',
        targetName: 'Floral Dreams Inc.',
        status: { label: 'Success', colorClass: 'bg-emerald-50 text-emerald-700 border-emerald-100', dotClass: 'bg-emerald-500' }
    },
    {
        id: 'log-5',
        timestamp: 'Oct 23, 2023 16:55',
        admin: { name: 'David Chen', initials: 'DC', colorClass: 'bg-orange-50 text-orange-600' },
        action: { type: 'Created', icon: 'add_circle', colorClass: 'bg-purple-50 text-purple-700 border-purple-100' },
        targetType: 'Coupon Code',
        targetName: 'WINTER2023',
        status: { label: 'Success', colorClass: 'bg-emerald-50 text-emerald-700 border-emerald-100', dotClass: 'bg-emerald-500' }
    },
    {
        id: 'log-6',
        timestamp: 'Oct 23, 2023 14:10',
        admin: { name: 'Mike Ross', initials: 'MR', colorClass: 'bg-indigo-50 text-indigo-600' },
        action: { type: 'Suspended', icon: 'block', colorClass: 'bg-slate-100 text-slate-700 border-slate-200' },
        targetType: 'Vendor Account',
        targetName: 'DJ Beats Master',
        status: { label: 'Success', colorClass: 'bg-emerald-50 text-emerald-700 border-emerald-100', dotClass: 'bg-emerald-500' }
    },
    {
        id: 'log-7',
        timestamp: 'Oct 23, 2023 09:00',
        admin: { name: 'System Bot', initials: 'SB', colorClass: 'bg-slate-200 text-slate-600 font-normal material-symbols-outlined text-sm' },
        action: { type: 'Failed Login', icon: 'warning', colorClass: 'bg-red-50 text-red-700 border-red-100' },
        targetType: 'Admin Access',
        targetName: 'admin_backup',
        status: { label: 'Critical', colorClass: 'bg-red-50 text-red-700 border-red-100', dotClass: 'bg-red-500' }
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.05 }
    }
};

const rowVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { ease: 'easeOut' as const, duration: 0.3 } }
};

export function ActivityLogsTable() {
    const [searchQuery, setSearchQuery] = useState('');
    const [actionFilter, setActionFilter] = useState('All Actions');
    const [targetFilter, setTargetFilter] = useState('All Targets');

    const filteredLogs = mockLogs.filter(log => {
        const matchesSearch = 
            log.admin.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
            log.targetName.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchesAction = actionFilter === 'All Actions' || log.action.type === actionFilter;
        const matchesTarget = targetFilter === 'All Targets' || log.targetType === targetFilter;

        return matchesSearch && matchesAction && matchesTarget;
    });

    const resetFilters = () => {
        setSearchQuery('');
        setActionFilter('All Actions');
        setTargetFilter('All Targets');
    };

    return (
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
            <div className="max-w-[1400px] mx-auto space-y-6">
                
                {/* Page Header & Actions */}
                <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-4"
                >
                    <div className="space-y-1">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight font-serif">Audit Trail</h3>
                        <p className="text-slate-500 dark:text-slate-400">View and track all administrative actions taken on the EventEase platform.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm focus:ring-2 focus:ring-primary/20">
                            <span className="material-symbols-outlined text-lg">download</span>
                            Export CSV
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white font-medium text-sm hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20 focus:ring-2 focus:ring-primary/50">
                            <span className="material-symbols-outlined text-lg">refresh</span>
                            Refresh
                        </button>
                    </div>
                </motion.div>

                {/* Filters Bar */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white dark:bg-[#1a0f12] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-4"
                >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                        {/* Search */}
                        <div className="md:col-span-4 lg:col-span-3">
                            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Search</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                                    <span className="material-symbols-outlined text-xl">search</span>
                                </span>
                                <input 
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-slate-400 transition-shadow" 
                                    placeholder="Search admin, target..." 
                                    type="text"
                                />
                            </div>
                        </div>

                        {/* Date Range */}
                        <div className="md:col-span-3 lg:col-span-3">
                            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Date Range</label>
                            <button className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600 focus:ring-2 focus:ring-primary/20 transition-all text-left">
                                <span className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-slate-400 text-lg">calendar_today</span>
                                    Last 30 Days
                                </span>
                                <span className="material-symbols-outlined text-slate-400 text-lg">expand_more</span>
                            </button>
                        </div>

                        {/* Action Type */}
                        <div className="md:col-span-2 lg:col-span-2">
                            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Action Type</label>
                            <div className="relative">
                                <select 
                                    value={actionFilter}
                                    onChange={(e) => setActionFilter(e.target.value)}
                                    className="w-full pl-3 pr-10 py-2.5 rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none cursor-pointer"
                                >
                                    <option>All Actions</option>
                                    <option>Created</option>
                                    <option>Updated</option>
                                    <option>Deleted</option>
                                    <option>Approved</option>
                                    <option>Flagged</option>
                                    <option>Suspended</option>
                                </select>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                                    <span className="material-symbols-outlined text-lg">expand_more</span>
                                </span>
                            </div>
                        </div>

                        {/* Target Type */}
                        <div className="md:col-span-3 lg:col-span-2">
                            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Target Type</label>
                            <div className="relative">
                                <select 
                                    value={targetFilter}
                                    onChange={(e) => setTargetFilter(e.target.value)}
                                    className="w-full pl-3 pr-10 py-2.5 rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none cursor-pointer"
                                >
                                    <option>All Targets</option>
                                    <option>Vendor Profile</option>
                                    <option>User Account</option>
                                    <option>Vendor Application</option>
                                    <option>Review</option>
                                    <option>Coupon Code</option>
                                    <option>Vendor Account</option>
                                    <option>Admin Access</option>
                                </select>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                                    <span className="material-symbols-outlined text-lg">expand_more</span>
                                </span>
                            </div>
                        </div>

                        {/* Clear Filters */}
                        <div className="md:col-span-12 lg:col-span-2 flex justify-end md:justify-start lg:justify-end">
                            <button 
                                onClick={resetFilters}
                                className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-1 py-2.5"
                            >
                                <span className="material-symbols-outlined text-lg">filter_alt_off</span>
                                Reset
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Data Table */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white dark:bg-[#1a0f12] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full whitespace-nowrap text-sm text-left">
                            <thead className="bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-800">
                                <tr>
                                    <th className="px-6 py-4">Date & Time</th>
                                    <th className="px-6 py-4">Admin Name</th>
                                    <th className="px-6 py-4">Action</th>
                                    <th className="px-6 py-4">Target Type</th>
                                    <th className="px-6 py-4">Target Name/ID</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">Details</th>
                                </tr>
                            </thead>
                            <motion.tbody 
                                variants={containerVariants}
                                initial="hidden"
                                animate="show"
                                className="divide-y divide-slate-100 dark:divide-slate-800"
                            >
                                <AnimatePresence mode="popLayout">
                                    {filteredLogs.map((log) => (
                                        <motion.tr 
                                            variants={rowVariants}
                                            layout
                                            key={log.id}
                                            className="hover:bg-slate-50/80 dark:hover:bg-white/5 transition-colors group"
                                        >
                                            <td className="px-6 py-4 text-slate-500 dark:text-slate-400 font-mono text-xs">{log.timestamp}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold ${log.admin.colorClass.includes('font-normal') ? log.admin.colorClass.replace('font-normal', '') : log.admin.colorClass}`}>
                                                        {log.admin.name === 'System Bot' ? <span className="material-symbols-outlined text-sm">smart_toy</span> : log.admin.initials}
                                                    </div>
                                                    <span className="font-medium text-slate-900 dark:text-white">{log.admin.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border ${log.action.colorClass}`}>
                                                    <span className="material-symbols-outlined text-sm">{log.action.icon}</span>
                                                    {log.action.type}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{log.targetType}</td>
                                            <td className="px-6 py-4 text-slate-900 dark:text-white font-medium">{log.targetName}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${log.status.colorClass}`}>
                                                    <span className={`w-1.5 h-1.5 rounded-full ${log.status.dotClass}`}></span>
                                                    {log.status.label}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-slate-400 dark:text-slate-500 hover:text-primary dark:hover:text-primary font-medium text-sm transition-colors flex items-center justify-end gap-1 ml-auto">
                                                    View
                                                    <span className="material-symbols-outlined text-lg">chevron_right</span>
                                                </button>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </AnimatePresence>
                                {filteredLogs.length === 0 && (
                                    <tr>
                                        <td colSpan={7} className="px-6 py-12 text-center text-slate-500 dark:text-slate-400">
                                            No activity logs found matching your criteria.
                                        </td>
                                    </tr>
                                )}
                            </motion.tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="px-6 py-4 bg-white dark:bg-[#1a0f12] border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Showing <span className="font-medium text-slate-900 dark:text-white">{filteredLogs.length > 0 ? 1 : 0}</span> to <span className="font-medium text-slate-900 dark:text-white">{filteredLogs.length}</span> of <span className="font-medium text-slate-900 dark:text-white">{filteredLogs.length}</span> results
                        </p>
                        <div className="flex items-center gap-2">
                            <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors" disabled>
                                <span className="material-symbols-outlined text-lg">chevron_left</span>
                            </button>
                            <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                <span className="material-symbols-outlined text-lg">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
