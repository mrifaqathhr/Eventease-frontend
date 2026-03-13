'use client';

import { useState } from 'react';

interface DashboardTopbarProps {
    title: string;
    onMenuClick: () => void;
}

export default function DashboardTopbar({ title, onMenuClick }: DashboardTopbarProps) {
    const [searchValue, setSearchValue] = useState('');

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-sm sticky top-0 z-10 border-b border-background-dim shadow-sm">
            {/* Left — menu toggle + page title */}
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-2 rounded-xl text-text-muted hover:bg-background-dim transition-colors -ms-2"
                    aria-label="Toggle sidebar menu"
                    type="button"
                >
                    <span className="material-symbols-outlined">menu</span>
                </button>
                <h2 className="font-serif text-2xl font-bold text-text-main">{title}</h2>
            </div>

            {/* Right — search + actions + avatar */}
            <div className="flex items-center gap-4">
                {/* Search (hidden on small screens) */}
                <div className="hidden md:flex items-center gap-2 bg-background-light rounded-xl px-4 py-2 w-60 border border-background-dim focus-within:border-primary/40 transition-colors">
                    <span className="material-symbols-outlined text-text-muted text-xl flex-shrink-0">search</span>
                    <input
                        className="bg-transparent border-none focus:ring-0 focus:outline-none text-sm w-full text-text-main placeholder:text-text-muted"
                        placeholder="Search leads..."
                        type="search"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        aria-label="Search leads"
                    />
                </div>

                {/* Notification bell */}
                <button
                    className="relative p-2 rounded-xl text-text-muted hover:bg-background-dim transition-colors"
                    aria-label="Notifications"
                    type="button"
                >
                    <span className="material-symbols-outlined">notifications</span>
                    {/* Unread dot */}
                    <span
                        className="absolute top-2 end-2 h-2 w-2 rounded-full bg-primary border-2 border-white"
                        aria-hidden="true"
                    />
                </button>

                {/* Messages */}
                <button
                    className="p-2 rounded-xl text-text-muted hover:bg-background-dim transition-colors"
                    aria-label="Messages"
                    type="button"
                >
                    <span className="material-symbols-outlined">chat</span>
                </button>

                {/* User avatar */}
                <div
                    className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center ring-2 ring-offset-2 ring-primary/20 overflow-hidden flex-shrink-0 cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label="User profile menu"
                >
                    <span className="material-symbols-outlined text-primary text-xl">person</span>
                </div>
            </div>
        </header>
    );
}
