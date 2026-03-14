'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function NotificationsDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            type: 'lead',
            title: 'New Lead: Sarah & Mike',
            message: 'You have a new inquiry for a June wedding package at The Grand Hall.',
            time: '2h ago',
            read: false,
            icon: 'mail',
            colors: 'bg-[#fceef2] dark:bg-[#3d1822] text-primary'
        },
        {
            id: 2,
            type: 'approval',
            title: 'Profile Approved',
            message: 'Your vendor profile is now live and visible to couples in the directory.',
            time: '5h ago',
            read: false,
            icon: 'check_circle',
            colors: 'bg-[#e8f7f0] dark:bg-[#0e2e21] text-[#078859]'
        },
        {
            id: 3,
            type: 'promotion',
            title: 'Promotion Active',
            message: 'Your \'Spring Booking Special\' is now active and highlighted.',
            time: '1d ago',
            read: false,
            icon: 'star',
            colors: 'bg-[#fff8e1] dark:bg-[#3d3110] text-[#f59e0b]'
        },
        {
            id: 4,
            type: 'review',
            title: 'New Review Received',
            message: 'Jessica left a 5-star review: "Absolutely amazing service!"',
            time: '2d ago',
            read: true,
            icon: 'rate_review',
            colors: 'bg-[#f0f4ff] dark:bg-[#1a233b] text-[#3b82f6]'
        }
    ]);

    const dropdownRef = useRef<HTMLDivElement>(null);

    // Initial check for unread notifications
    const unreadCount = notifications.filter(n => !n.read).length;

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const markAllAsRead = () => {
        setNotifications(notifications.map(n => ({ ...n, read: true })));
    };

    const markAsRead = (id: number) => {
        setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
    };

    return (
        <div className="relative group" ref={dropdownRef}>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center overflow-hidden rounded-xl h-10 w-10 bg-primary/10 text-primary hover:bg-primary/20 transition-colors relative"
            >
                <span className="material-symbols-outlined text-2xl">notifications</span>
                {unreadCount > 0 && (
                    <span className="absolute top-2 right-2 size-2 rounded-full bg-primary border-2 border-white dark:border-[#181113]"></span>
                )}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="absolute right-0 top-full mt-3 w-[320px] md:w-[400px] bg-white dark:bg-[#181113] rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] border border-[#f4f0f1] dark:border-[#3a2e32] overflow-hidden z-50 origin-top-right"
                    >
                        {/* Dropdown Header */}
                        <div className="flex items-center justify-between p-4 border-b border-[#f4f0f1] dark:border-[#3a2e32]">
                            <h3 className="font-bold text-lg text-[#181113] dark:text-white font-sans">Notifications</h3>
                            {unreadCount > 0 && (
                                <button 
                                    onClick={markAllAsRead}
                                    className="text-sm text-primary font-medium hover:text-primary/80 transition-colors"
                                >
                                    Mark all as read
                                </button>
                            )}
                        </div>

                        {/* Notification List */}
                        <div className="max-h-[400px] md:max-h-[480px] overflow-y-auto font-sans">
                            {notifications.length === 0 ? (
                                <div className="p-8 text-center text-slate-500">
                                    No notifications yet.
                                </div>
                            ) : (
                                notifications.map((notification) => (
                                    <div 
                                        key={notification.id}
                                        onClick={() => markAsRead(notification.id)}
                                        className={`flex gap-4 p-4 border-b border-[#f4f0f1] dark:border-[#3a2e32] hover:bg-[#fcfafa] dark:hover:bg-[#2a1e21] transition-colors cursor-pointer relative ${notification.read ? 'opacity-70' : ''}`}
                                    >
                                        <div className="shrink-0">
                                            <div className={`flex items-center justify-center rounded-full size-10 ${notification.colors}`}>
                                                <span className="material-symbols-outlined text-xl">{notification.icon}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-1 flex-col gap-1">
                                            <div className="flex justify-between items-start">
                                                <p className="text-[#181113] dark:text-white text-base font-semibold leading-tight">{notification.title}</p>
                                                {!notification.read && (
                                                    <span className="size-2 rounded-full bg-primary mt-1.5 shrink-0"></span>
                                                )}
                                            </div>
                                            <p className="text-[#88636c] dark:text-[#bdaeb2] text-sm leading-normal line-clamp-2">{notification.message}</p>
                                            <p className="text-[#88636c] text-xs font-medium mt-1">{notification.time}</p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Dropdown Footer */}
                        <div className="p-3 bg-[#f8f6f6] dark:bg-[#211115] border-t border-[#f4f0f1] dark:border-[#3a2e32] text-center font-sans">
                            <a className="text-sm font-bold text-primary hover:text-[#d42a55] transition-colors block w-full py-1" href="#all-notifications">
                                View All Notifications
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
