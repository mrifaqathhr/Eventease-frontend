'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
    href: string;
    icon: string;
    label: string;
    iconFilled?: boolean;
}

const navItems: NavItem[] = [
    { href: '/vendor/dashboard', icon: 'dashboard', label: 'Dashboard', iconFilled: true },
    { href: '/vendor/dashboard/leads', icon: 'group', label: 'Leads' },
    { href: '/vendor/dashboard/calendar', icon: 'calendar_month', label: 'Calendar' },
    { href: '/vendor/dashboard/promotions', icon: 'campaign', label: 'Promotions' },
    { href: '/vendor/dashboard/profile', icon: 'account_circle', label: 'My Profile' },
    { href: '/vendor/dashboard/listings', icon: 'list_alt', label: 'My Listings' },
];

const bottomItems: NavItem[] = [
    { href: '/vendor/dashboard/settings', icon: 'settings', label: 'Settings' },
];

interface DashboardSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function DashboardSidebar({ isOpen, onClose }: DashboardSidebarProps) {
    const pathname = usePathname();

    // Close sidebar on route change (mobile)
    useEffect(() => {
        onClose();
    }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

    const isActive = (href: string) => {
        if (href === '/vendor/dashboard') return pathname === href;
        return pathname.startsWith(href);
    };

    const SidebarContent = () => (
        <div className="flex h-full flex-col justify-between p-6">
            <div className="flex flex-col gap-8">
                {/* Brand */}
                <div className="flex items-center gap-3">
                    <div className="relative size-12 overflow-hidden rounded-full bg-primary/10 shadow-sm flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-2xl">diamond</span>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-serif text-xl font-semibold leading-tight tracking-tight text-text-main">
                            EventEase
                        </h1>
                        <p className="text-sm font-medium text-text-muted">Vendor Portal</p>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-1" role="navigation" aria-label="Dashboard Navigation">
                    {navItems.map((item) => {
                        const active = isActive(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`group flex items-center gap-3 rounded-xl px-4 py-3 transition-colors duration-150 ${active
                                    ? 'bg-primary/10 text-primary'
                                    : 'text-text-muted hover:bg-background-dim hover:text-text-main'
                                    }`}
                                aria-current={active ? 'page' : undefined}
                            >
                                <span
                                    className={`material-symbols-outlined text-2xl transition-transform duration-150 group-hover:scale-110 ${active ? 'filled' : ''
                                        }`}
                                    style={active ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" } : {}}
                                >
                                    {item.icon}
                                </span>
                                <span className="font-medium">{item.label}</span>
                                {active && (
                                    <span className="ms-auto h-1.5 w-1.5 rounded-full bg-primary" />
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Bottom actions */}
            <div className="flex flex-col gap-1 border-t border-background-dim pt-5">
                {bottomItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="group flex items-center gap-3 rounded-xl px-4 py-3 text-text-muted transition-colors duration-150 hover:bg-background-dim hover:text-text-main"
                    >
                        <span className="material-symbols-outlined text-2xl transition-transform duration-150 group-hover:scale-110">
                            {item.icon}
                        </span>
                        <span className="font-medium">{item.label}</span>
                    </Link>
                ))}
                <button
                    className="group flex items-center gap-3 rounded-xl px-4 py-3 text-text-muted transition-colors duration-150 hover:bg-red-50 hover:text-red-600 w-full text-start"
                    type="button"
                    onClick={() => {/* TODO: Appwrite signOut */ }}
                    aria-label="Log out"
                >
                    <span className="material-symbols-outlined text-2xl transition-transform duration-150 group-hover:scale-110">
                        logout
                    </span>
                    <span className="font-medium">Log Out</span>
                </button>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop sidebar — always visible */}
            <aside className="hidden lg:flex w-72 flex-shrink-0 flex-col border-e border-background-dim bg-white h-full">
                <SidebarContent />
            </aside>

            {/* Mobile overlay backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
                        onClick={onClose}
                        aria-hidden="true"
                    />
                )}
            </AnimatePresence>

            {/* Mobile sidebar drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.aside
                        key="mobile-sidebar"
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                        className="fixed inset-y-0 start-0 z-50 w-72 bg-white shadow-2xl flex flex-col lg:hidden"
                        aria-label="Mobile navigation"
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 end-4 p-2 rounded-xl text-text-muted hover:bg-background-dim transition-colors"
                            aria-label="Close sidebar"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>
                        <SidebarContent />
                    </motion.aside>
                )}
            </AnimatePresence>
        </>
    );
}
