'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Data Interfaces
interface Invoice {
    id: string;
    planType: string;
    planColor: string;
    amount: string;
    paymentMethod: {
        type: string;
        details: string;
        icon: string;
    };
    status: 'Paid' | 'Pending' | 'Failed';
    date: string;
}

const mockInvoices: Invoice[] = [
    {
        id: '#INV-2023-001',
        planType: 'Premium Plan',
        planColor: 'bg-purple-500',
        amount: '$250.00',
        paymentMethod: { type: 'Visa', details: '•••• 4242', icon: 'credit_card' },
        status: 'Paid',
        date: 'Oct 15, 2023'
    },
    {
        id: '#INV-2023-002',
        planType: 'Featured Spot',
        planColor: 'bg-blue-500',
        amount: '$150.00',
        paymentMethod: { type: 'Visa', details: '•••• 4242', icon: 'credit_card' },
        status: 'Paid',
        date: 'Sep 15, 2023'
    },
    {
        id: '#INV-2023-003',
        planType: 'Premium Plan',
        planColor: 'bg-purple-500',
        amount: '$250.00',
        paymentMethod: { type: 'Visa', details: '•••• 4242', icon: 'credit_card' },
        status: 'Paid',
        date: 'Sep 01, 2023'
    },
    {
        id: '#INV-2023-004',
        planType: 'Standard Plan',
        planColor: 'bg-slate-400',
        amount: '$100.00',
        paymentMethod: { type: 'Mastercard', details: '•••• 8888', icon: 'credit_card' },
        status: 'Pending',
        date: 'Aug 15, 2023'
    },
    {
        id: '#INV-2023-005',
        planType: 'Ad Boost',
        planColor: 'bg-indigo-500',
        amount: '$50.00',
        paymentMethod: { type: 'PayPal', details: 'PayPal', icon: 'account_balance_wallet' },
        status: 'Failed',
        date: 'Aug 01, 2023'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const rowVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { ease: 'easeOut' as const, duration: 0.3 } }
};

const getStatusStyles = (status: Invoice['status']) => {
    switch (status) {
        case 'Paid':
            return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800';
        case 'Pending':
            return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800';
        case 'Failed':
            return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800';
    }
};

const getStatusDotColor = (status: Invoice['status']) => {
    switch (status) {
        case 'Paid': return 'bg-emerald-500';
        case 'Pending': return 'bg-amber-500';
        case 'Failed': return 'bg-red-500';
    }
};

export function BillingHistoryTable() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredInvoices = mockInvoices.filter(inv => 
        inv.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inv.planType.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
            {/* Page Header */}
            <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10"
            >
                <div className="flex flex-col gap-1">
                    <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-serif font-bold leading-tight">Billing History</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-base font-normal">Manage your subscription and view past transactions.</p>
                </div>
                <button className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold transition-all focus:ring-2 focus:ring-primary/20">
                    <span className="material-symbols-outlined text-[20px]">download</span>
                    <span>Download All Invoices</span>
                </button>
            </motion.div>

            {/* Stats Cards */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
            >
                <motion.div variants={rowVariants} className="group bg-white dark:bg-[#1a0f12] rounded-xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary">
                            <span className="material-symbols-outlined">payments</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Spent</p>
                    </div>
                    <p className="text-slate-900 dark:text-white text-3xl font-bold font-serif tracking-tight">$1,250.00</p>
                    <p className="text-slate-400 text-xs mt-2">+12% from last month</p>
                </motion.div>
                <motion.div variants={rowVariants} className="group bg-white dark:bg-[#1a0f12] rounded-xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="p-3 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                            <span className="material-symbols-outlined">campaign</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Active Promotions</p>
                    </div>
                    <p className="text-slate-900 dark:text-white text-3xl font-bold font-serif tracking-tight">2</p>
                    <p className="text-slate-400 text-xs mt-2">Targeting Wedding Venues</p>
                </motion.div>
                <motion.div variants={rowVariants} className="group bg-white dark:bg-[#1a0f12] rounded-xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                            <span className="material-symbols-outlined">event</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Last Payment Date</p>
                    </div>
                    <p className="text-slate-900 dark:text-white text-3xl font-bold font-serif tracking-tight">Oct 15, 2023</p>
                    <p className="text-slate-400 text-xs mt-2">Next invoice: Nov 15, 2023</p>
                </motion.div>
            </motion.div>

            {/* Table Section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white dark:bg-[#1a0f12] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
            >
                <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white font-serif">Recent Transactions</h2>
                    <div className="flex gap-2">
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[18px]">search</span>
                            <input 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-9 pr-4 py-1.5 text-sm bg-slate-50 dark:bg-slate-800/50 border-none rounded-lg text-slate-700 dark:text-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 w-48 md:w-64" 
                                placeholder="Search invoices..." 
                                type="text"
                            />
                        </div>
                        <button className="p-1.5 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            <span className="material-symbols-outlined">filter_list</span>
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 dark:bg-white/5 border-b border-slate-200 dark:border-slate-800">
                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-32">Invoice ID</th>
                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Plan Type</th>
                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Amount</th>
                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Payment Method</th>
                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</th>
                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Date</th>
                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">Action</th>
                            </tr>
                        </thead>
                        <motion.tbody 
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            className="divide-y divide-slate-100 dark:divide-slate-800"
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredInvoices.map((invoice) => (
                                    <motion.tr 
                                        variants={rowVariants}
                                        layout
                                        key={invoice.id}
                                        className="group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                                    >
                                        <td className="px-6 py-4 text-sm font-medium text-slate-700 dark:text-slate-300">{invoice.id}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className={`size-2 rounded-full ${invoice.planColor}`}></div>
                                                <span className="text-sm text-slate-700 dark:text-slate-300">{invoice.planType}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">{invoice.amount}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-slate-400 text-[20px]">{invoice.paymentMethod.icon}</span>
                                                <span className="text-sm text-slate-600 dark:text-slate-400">
                                                    {invoice.paymentMethod.type !== 'PayPal' ? `${invoice.paymentMethod.type} ${invoice.paymentMethod.details}` : invoice.paymentMethod.details}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusStyles(invoice.status)}`}>
                                                <span className={`size-1.5 rounded-full ${getStatusDotColor(invoice.status)}`}></span> 
                                                {invoice.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{invoice.date}</td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-sm font-medium text-primary hover:text-primary/80 dark:hover:text-primary/90 transition-colors">
                                                {invoice.status === 'Failed' ? 'Retry' : 'View'}
                                            </button>
                                        </td>
                                    </motion.tr>
                                ))}
                            </AnimatePresence>
                        </motion.tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-sm text-slate-500 dark:text-slate-400">Showing <span className="font-medium text-slate-900 dark:text-white">1</span> to <span className="font-medium text-slate-900 dark:text-white">{filteredInvoices.length}</span> of <span className="font-medium text-slate-900 dark:text-white">12</span> results</p>
                    <div className="flex items-center gap-2">
                        <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 disabled:opacity-50">
                            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-medium shadow-sm shadow-primary/30">1</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium transition-colors">2</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium transition-colors">3</button>
                        <span className="w-8 h-8 flex items-center justify-center text-slate-400">...</span>
                        <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
