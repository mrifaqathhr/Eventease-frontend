'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Data Interfaces
interface Notification {
    id: string;
    type: 'lead' | 'message' | 'system' | 'promotion';
    title: string;
    message: string;
    time: string;
    read: boolean;
    icon: string;
    colors: {
        bg: string;
        text: string;
        border?: string;
    };
    actionLabel?: string;
    actionHref?: string;
}

const mockNotifications: Notification[] = [
    {
        id: '1',
        type: 'lead',
        title: "New Lead: Sarah & Mike's Wedding",
        message: 'A couple is interested in your "Golden Hour" photography package for June 15th, 2024. They have a budget of $3,500.',
        time: '3h ago',
        read: false,
        icon: 'favorite',
        colors: {
            bg: 'bg-primary/10',
            text: 'text-primary'
        },
        actionLabel: 'View Details',
        actionHref: '#'
    },
    {
        id: '2',
        type: 'message',
        title: 'Message from The Venue at Hilltop',
        message: '"Hi there! Just wanted to confirm if you\'re available for a site walkthrough next Tuesday regarding the Johnson wedding..."',
        time: '5h ago',
        read: false,
        icon: 'chat_bubble',
        colors: {
            bg: 'bg-blue-50 dark:bg-blue-900/20',
            text: 'text-blue-600 dark:text-blue-400'
        },
        actionLabel: 'Reply Now',
        actionHref: '#'
    },
    {
        id: '3',
        type: 'system',
        title: 'System Maintenance Scheduled',
        message: 'EventEase will be undergoing scheduled maintenance on Saturday from 2:00 AM to 4:00 AM EST. Services may be briefly unavailable.',
        time: '1d ago',
        read: true,
        icon: 'settings',
        colors: {
            bg: 'bg-slate-100 dark:bg-slate-800',
            text: 'text-slate-600 dark:text-slate-400'
        }
    },
    {
        id: '4',
        type: 'promotion',
        title: 'Boost Your Visibility!',
        message: 'Get 20% off Featured Listings this week only. Stand out to couples planning their big day.',
        time: '2d ago',
        read: true,
        icon: 'stars',
        colors: {
            bg: 'bg-emerald-50 dark:bg-emerald-900/20',
            text: 'text-emerald-600 dark:text-emerald-400'
        },
        actionLabel: 'Learn More',
        actionHref: '#'
    },
    {
        id: '5',
        type: 'lead',
        title: "New Lead: Emily & Davids's Wedding",
        message: 'A couple is interested in your full-day videography package. Event date: August 12, 2024.',
        time: '3d ago',
        read: true,
        icon: 'favorite_border',
        colors: {
            bg: 'bg-slate-100 dark:bg-slate-800',
            text: 'text-slate-500'
        },
        actionLabel: 'View Details',
        actionHref: '#'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { ease: 'easeOut' as const, duration: 0.4 } }
};

export function NotificationsHistoryList() {
    const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
    const [activeFilter, setActiveFilter] = useState<string>('All');

    const filters = ['All', 'Unread', 'Leads', 'Account Updates', 'Promotions'];

    const getFilteredNotifications = () => {
        switch (activeFilter) {
            case 'Unread':
                return notifications.filter(n => !n.read);
            case 'Leads':
                return notifications.filter(n => n.type === 'lead');
            case 'Account Updates':
                return notifications.filter(n => n.type === 'system');
            case 'Promotions':
                return notifications.filter(n => n.type === 'promotion');
            default:
                return notifications;
        }
    };

    const markAllAsRead = () => {
        setNotifications(notifications.map(n => ({ ...n, read: true })));
    };

    const filteredNotifications = getFilteredNotifications();
    const unreadCount = notifications.filter(n => !n.read).length;

    return (
        <div className="flex-1 overflow-y-auto">
            <div className="max-w-5xl mx-auto px-6 py-8 md:px-12 md:py-10">
                {/* Header Area */}
                <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8"
                >
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white font-serif tracking-tight">Notifications</h1>
                        <p className="text-slate-500 dark:text-slate-400 mt-1">Stay updated with your latest leads and account activity.</p>
                    </div>
                    {unreadCount > 0 && (
                        <button 
                            onClick={markAllAsRead}
                            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm hover:bg-slate-50 dark:hover:bg-white/10 transition-all group"
                        >
                            <span className="material-symbols-outlined text-primary text-[20px]">done_all</span>
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Mark all as read</span>
                        </button>
                    )}
                </motion.div>

                {/* Filters */}
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.1 }}
                    className="flex gap-2 overflow-x-auto pb-4 mb-2 no-scrollbar"
                >
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                activeFilter === filter 
                                ? 'bg-primary text-white shadow-sm shadow-primary/30 active:scale-95' 
                                : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50'
                            }`}
                        >
                            {filter}
                            {filter === 'Unread' && unreadCount > 0 && (
                                <span className={`ml-1 px-1.5 py-0.5 rounded-full text-xs font-bold ${activeFilter === 'Unread' ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'}`}>
                                    {unreadCount}
                                </span>
                            )}
                        </button>
                    ))}
                </motion.div>

                {/* Notifications List */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col gap-4"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredNotifications.length > 0 ? (
                            filteredNotifications.map((notification) => (
                                <motion.div
                                    key={notification.id}
                                    variants={itemVariants}
                                    layout
                                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                                    className={`group flex flex-col sm:flex-row gap-4 bg-white dark:bg-[#1a0f12] p-5 rounded-xl border shadow-sm relative overflow-hidden transition-all hover:shadow-md ${
                                        !notification.read 
                                        ? 'border-primary/20 hover:border-primary/40' 
                                        : 'border-slate-100 dark:border-slate-800 opacity-80 hover:opacity-100'
                                    }`}
                                >
                                    {!notification.read && (
                                        <div className="absolute top-5 right-5 h-2 w-2 rounded-full bg-primary"></div>
                                    )}
                                    <div className="flex-shrink-0">
                                        <div className={`h-12 w-12 rounded-full flex items-center justify-center ${notification.colors.bg} ${notification.colors.text}`}>
                                            <span className="material-symbols-outlined">{notification.icon}</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-1">
                                            <h3 className={`text-base font-bold font-serif ${!notification.read ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-200'}`}>
                                                {notification.title}
                                            </h3>
                                            <span className="text-xs text-slate-400 whitespace-nowrap">{notification.time}</span>
                                        </div>
                                        <p className={`text-sm mb-3 leading-relaxed ${!notification.read ? 'text-slate-600 dark:text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>
                                            {notification.message}
                                        </p>
                                        {notification.actionLabel && (
                                            <a className={`inline-flex items-center text-sm font-semibold transition-colors ${!notification.read ? 'text-primary hover:text-primary/80' : 'text-slate-500 hover:text-primary'}`} href={notification.actionHref}>
                                                {notification.actionLabel}
                                                <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div 
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                className="py-12 text-center"
                            >
                                <div className="h-16 w-16 mx-auto bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400 mb-4">
                                    <span className="material-symbols-outlined text-3xl">notifications_off</span>
                                </div>
                                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-1">No notifications found</h3>
                                <p className="text-slate-500 dark:text-slate-400">You&apos;re all caught up for this filter category.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Pagination / Load More */}
                {filteredNotifications.length > 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 flex justify-center"
                    >
                        <button className="px-6 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-white/10 transition-colors">
                            Load older notifications
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
