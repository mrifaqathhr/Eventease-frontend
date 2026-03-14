'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface TransactionModalProps {
    isOpen: boolean;
    onClose: () => void;
    transaction: {
        id: string;
        invoiceNumber: string;
        status: 'Paid' | 'Pending' | 'Failed';
        plan: string;
        billingPeriod: string;
        gateway: string;
        paymentMethod: string;
        amount: number;
        tax: number;
        total: number;
    } | null;
}

export default function TransactionModal({ isOpen, onClose, transaction }: TransactionModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    // Prevent scrolling on body when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Close on escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!transaction) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Modal Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
                        aria-hidden="true"
                    />

                    {/* Modal Container */}
                    <motion.div
                        ref={modalRef}
                        initial={{ opacity: 0, scale: 0.95, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 15 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                        className="relative w-full max-w-[800px] bg-white dark:bg-slate-900 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                        role="dialog"
                        aria-modal="true"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 dark:border-slate-800">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                                Transaction Details
                            </h2>
                            <button
                                onClick={onClose}
                                className="text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors"
                            >
                                <span className="material-symbols-outlined text-2xl">close</span>
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="overflow-y-auto p-6 space-y-8">
                            {/* Top Summary Box */}
                            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-5">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-primary text-2xl">
                                                receipt_long
                                            </span>
                                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                                Invoice #{transaction.invoiceNumber}
                                            </h3>
                                        </div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 pl-[36px]">
                                            Transaction ID:{' '}
                                            <span className="font-mono text-slate-700 dark:text-slate-300">
                                                {transaction.id}
                                            </span>
                                        </p>
                                    </div>
                                    <span
                                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                                            transaction.status === 'Paid'
                                                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800'
                                                : transaction.status === 'Failed'
                                                ? 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 border-rose-200 dark:border-rose-800'
                                                : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800'
                                        }`}
                                    >
                                        <span className="material-symbols-outlined text-[16px]">
                                            {transaction.status === 'Paid' ? 'check_circle' : transaction.status === 'Failed' ? 'error' : 'pending'}
                                        </span>
                                        {transaction.status}
                                    </span>
                                </div>
                            </div>

                            {/* Details Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                                <div className="group">
                                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                                        Promotion Plan
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-slate-400 text-lg">
                                            workspace_premium
                                        </span>
                                        <p className="text-sm font-medium text-slate-900 dark:text-slate-200">
                                            {transaction.plan}
                                        </p>
                                    </div>
                                </div>
                                <div className="group">
                                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                                        Billing Period
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-slate-400 text-lg">
                                            calendar_month
                                        </span>
                                        <p className="text-sm font-medium text-slate-900 dark:text-slate-200">
                                            {transaction.billingPeriod}
                                        </p>
                                    </div>
                                </div>
                                <div className="group">
                                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                                        Payment Gateway
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-slate-400 text-lg">
                                            account_balance
                                        </span>
                                        <p className="text-sm font-medium text-slate-900 dark:text-slate-200">
                                            {transaction.gateway}
                                        </p>
                                    </div>
                                </div>
                                <div className="group">
                                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                                        Payment Method
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-slate-400 text-lg">
                                            credit_card
                                        </span>
                                        <p className="text-sm font-medium text-slate-900 dark:text-slate-200">
                                            {transaction.paymentMethod}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Amount Breakdown Table */}
                            <div>
                                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                                    Amount Breakdown
                                </h4>
                                <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                                    <table className="w-full text-sm text-left">
                                        <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-medium">
                                            <tr>
                                                <th className="px-4 py-3 w-2/3">Description</th>
                                                <th className="px-4 py-3 w-1/3 text-right">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-900">
                                            <tr>
                                                <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
                                                    {transaction.plan}
                                                </td>
                                                <td className="px-4 py-3 text-right font-medium text-slate-900 dark:text-slate-200">
                                                    ${transaction.amount.toFixed(2)}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
                                                    Sales Tax
                                                </td>
                                                <td className="px-4 py-3 text-right font-medium text-slate-900 dark:text-slate-200">
                                                    ${transaction.tax.toFixed(2)}
                                                </td>
                                            </tr>
                                            <tr className="bg-slate-50/50 dark:bg-slate-800/30">
                                                <td className="px-4 py-3 font-bold text-slate-900 dark:text-white">
                                                    Total Amount
                                                </td>
                                                <td className="px-4 py-3 text-right font-bold text-primary">
                                                    ${transaction.total.toFixed(2)}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 px-6 py-4 flex flex-col sm:flex-row justify-end gap-3">
                            <button
                                onClick={() => window.print()}
                                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-700 transition-all shadow-sm"
                            >
                                <span className="material-symbols-outlined text-[20px]">print</span>
                                Print
                            </button>
                            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white text-sm font-medium shadow-md shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-all">
                                <span className="material-symbols-outlined text-[20px]">download</span>
                                Download Invoice
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
