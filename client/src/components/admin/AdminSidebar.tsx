'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
    href: string;
    icon: string;
    label: string;
    badge?: string;
}

const mainNavItems: NavItem[] = [
    { href: '/admin/dashboard', icon: 'dashboard', label: 'Dashboard' },
    { href: '/admin/dashboard/vendors', icon: 'storefront', label: 'Vendor Approvals', badge: '12' },
    { href: '/admin/dashboard/promotions', icon: 'campaign', label: 'Promotion Requests' },
    { href: '/admin/dashboard/seo', icon: 'travel_explore', label: 'SEO Manager' },
    { href: '/admin/dashboard/users', icon: 'people', label: 'User Management' },
    { href: '/admin/dashboard/reports', icon: 'bar_chart', label: 'Reports' },
];

const systemNavItems: NavItem[] = [
    { href: '/admin/dashboard/settings', icon: 'settings', label: 'Settings' },
    { href: '/admin/dashboard/help', icon: 'help', label: 'Help Center' },
];

interface AdminSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
    const pathname = usePathname();

    useEffect(() => {
        onClose();
    }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

    const isActive = (href: string) => {
        if (href === '/admin/dashboard') return pathname === href;
        return pathname.startsWith(href);
    };

    const sidebarContent = (
        <div className="flex h-full flex-col justify-between">
            {/* Brand */}
            <div className="p-6 flex items-center gap-3 border-b border-gray-100">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-rose-400 flex items-center justify-center text-white shadow-md shadow-primary/20 flex-shrink-0">
                    <span className="material-symbols-outlined text-[22px]">dataset</span>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-text-main text-lg font-bold leading-tight">EventEase</h1>
                    <p className="text-text-muted text-xs font-medium uppercase tracking-wider">Admin Panel</p>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1" role="navigation" aria-label="Admin Navigation">
                {mainNavItems.map((item) => {
                    const active = isActive(item.href);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors duration-150 ${active
                                    ? 'bg-primary/10 text-primary'
                                    : 'text-text-muted hover:bg-gray-50 hover:text-text-main'
                                }`}
                            aria-current={active ? 'page' : undefined}
                        >
                            <span
                                className="material-symbols-outlined text-[20px] transition-transform duration-150 group-hover:scale-110"
                                style={active ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" } : {}}
                            >
                                {item.icon}
                            </span>
                            <span className="text-sm font-medium flex-1">{item.label}</span>
                            {item.badge && (
                                <span className="ms-auto bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                    {item.badge}
                                </span>
                            )}
                            {active && !item.badge && (
                                <span className="ms-auto h-1.5 w-1.5 rounded-full bg-primary" />
                            )}
                        </Link>
                    );
                })}

                {/* System Section */}
                <div className="pt-4 mt-2 border-t border-gray-100">
                    <p className="px-3 text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2">
                        System
                    </p>
                    {systemNavItems.map((item) => {
                        const active = isActive(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors duration-150 ${active
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-text-muted hover:bg-gray-50 hover:text-text-main'
                                    }`}
                                aria-current={active ? 'page' : undefined}
                            >
                                <span className="material-symbols-outlined text-[20px] transition-transform duration-150 group-hover:scale-110">
                                    {item.icon}
                                </span>
                                <span className="text-sm font-medium">{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Admin User Profile */}
            <div className="p-4 border-t border-gray-100">
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                    <div
                        className="h-9 w-9 rounded-full bg-cover bg-center flex-shrink-0 ring-2 ring-white shadow-sm"
                        style={{ backgroundImage: `url('https://i.pravatar.cc/150?img=47')` }}
                        aria-label="Admin user avatar"
                    />
                    <div className="flex flex-col overflow-hidden flex-1 min-w-0">
                        <span className="text-sm font-bold text-text-main truncate">Sarah Jenkins</span>
                        <span className="text-xs text-text-muted truncate">Super Admin</span>
                    </div>
                    <button
                        type="button"
                        className="text-text-muted hover:text-red-500 transition-colors p-1 rounded-lg hover:bg-red-50"
                        aria-label="Log out"
                        onClick={() => { /* TODO: Appwrite signOut */ }}
                    >
                        <span className="material-symbols-outlined text-[20px]">logout</span>
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop sidebar */}
            <aside className="hidden lg:flex w-64 flex-shrink-0 flex-col border-e border-gray-100 bg-white h-full">
                {sidebarContent}
            </aside>

            {/* Mobile backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="admin-backdrop"
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
                        key="admin-mobile-sidebar"
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                        className="fixed inset-y-0 start-0 z-50 w-64 bg-white shadow-2xl flex flex-col lg:hidden"
                        aria-label="Mobile admin navigation"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 end-4 p-2 rounded-xl text-text-muted hover:bg-gray-100 transition-colors"
                            aria-label="Close sidebar"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>
                        {sidebarContent}
                    </motion.aside>
                )}
            </AnimatePresence>
        </>
    );
}
