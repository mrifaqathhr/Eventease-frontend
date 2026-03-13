'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-background-dim bg-background-light/95 backdrop-blur px-6 py-4 lg:px-10">
            {/* Left: Logo + Search */}
            <div className="flex items-center gap-8">
                <Link
                    href="/"
                    className="flex items-center gap-3 text-text-main hover:opacity-80 transition-opacity"
                >
                    <div className="size-8 text-primary">
                        <span className="material-symbols-outlined text-3xl text-primary">diversity_1</span>
                    </div>
                    <h2 className="text-text-main text-2xl font-serif font-bold leading-tight tracking-tight">
                        EventEase
                    </h2>
                </Link>

                {/* Desktop Search */}
                <div className="hidden md:flex">
                    <label className="relative flex items-center min-w-[320px]">
                        <span className="absolute left-3 text-primary">
                            <span className="material-symbols-outlined">search</span>
                        </span>
                        <input
                            id="navbar-search"
                            type="text"
                            placeholder="Search vendors, venues, inspiration..."
                            className="w-full rounded-full bg-background-dim border-none py-2.5 pl-10 pr-4 text-sm text-text-main placeholder:text-text-muted focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
                        />
                    </label>
                </div>
            </div>

            {/* Right: Nav + Buttons */}
            <div className="flex items-center gap-4 lg:gap-8">
                <nav className="hidden lg:flex items-center gap-6">
                    <Link href="/venues" className="text-text-main text-sm font-medium hover:text-primary transition-colors">
                        Venues
                    </Link>
                    <Link href="/vendors" className="text-text-main text-sm font-medium hover:text-primary transition-colors">
                        Vendors
                    </Link>
                    <Link href="/planning-tools" className="text-text-main text-sm font-medium hover:text-primary transition-colors">
                        Planning Tools
                    </Link>
                    <Link href="/login" className="text-text-main text-sm font-medium hover:text-primary transition-colors">
                        Log In
                    </Link>
                </nav>

                <div className="flex gap-3">
                    <button
                        type="button"
                        className="hidden sm:flex h-10 items-center justify-center rounded-lg bg-primary-light px-4 text-primary text-sm font-bold hover:bg-primary/20 transition-colors cursor-pointer"
                    >
                        Are you a vendor?
                    </button>
                    <button
                        type="button"
                        className="flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-primary-content text-sm font-bold shadow-md hover:bg-primary-dark transition-colors cursor-pointer"
                    >
                        Sign Up
                    </button>
                </div>

                {/* Mobile menu toggle */}
                <button
                    type="button"
                    className="lg:hidden flex items-center text-text-main"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    <span className="material-symbols-outlined">
                        {mobileMenuOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-background-light border-b border-background-dim shadow-lg z-50 flex flex-col gap-0 lg:hidden">
                    <Link href="/venues" className="px-6 py-4 text-sm font-medium text-text-main hover:text-primary hover:bg-background-dim transition-colors">
                        Venues
                    </Link>
                    <Link href="/vendors" className="px-6 py-4 text-sm font-medium text-text-main hover:text-primary hover:bg-background-dim transition-colors">
                        Vendors
                    </Link>
                    <Link href="/planning-tools" className="px-6 py-4 text-sm font-medium text-text-main hover:text-primary hover:bg-background-dim transition-colors">
                        Planning Tools
                    </Link>
                    <Link href="/login" className="px-6 py-4 text-sm font-medium text-text-main hover:text-primary hover:bg-background-dim transition-colors">
                        Log In
                    </Link>
                    <div className="px-6 py-4 border-t border-background-dim">
                        <input
                            type="text"
                            placeholder="Search vendors, venues, inspiration..."
                            className="w-full rounded-full bg-background-dim border-none py-2.5 pl-4 pr-4 text-sm text-text-main placeholder:text-text-muted focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
                        />
                    </div>
                </div>
            )}
        </header>
    );
}
