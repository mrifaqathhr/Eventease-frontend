'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function ProfilePreview() {
    return (
        <div className="flex-1 flex flex-col h-full overflow-hidden bg-background-light dark:bg-background-dark relative">
            {/* Header / Banner */}
            <header className="bg-white dark:bg-[#1a0f12] border-b border-slate-200 dark:border-slate-800 px-8 py-5 flex items-center justify-between sticky top-0 z-10 shadow-sm transition-colors duration-200">
                <div className="flex flex-col gap-1">
                    <h2 className="text-slate-900 dark:text-white text-xl font-bold font-serif leading-tight">Public Profile Preview</h2>
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-24 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 w-[85%] rounded-full"></div>
                        </div>
                        <span className="text-slate-500 dark:text-slate-400 text-xs font-medium">Profile Strength: 85%</span>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1a0f12] text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium">
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                        Edit Profile
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors shadow-sm text-sm font-medium">
                        <span className="material-symbols-outlined text-[18px]">link</span>
                        Copy Public Link
                    </button>
                </div>
            </header>

            {/* Preview Container */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8 relative">
                {/* Watermark indicating preview mode */}
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none z-0 overflow-hidden">
                    <h1 className="text-[10rem] md:text-[15rem] font-serif font-bold text-slate-900 dark:text-white -rotate-12 whitespace-nowrap">PREVIEW</h1>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 15 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 relative z-10"
                >
                    {/* Left Column: Main Profile Content */}
                    <div className="flex-1 flex flex-col gap-6">
                        {/* Hero Section */}
                        <div className="bg-white dark:bg-[#1a0f12] rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden transition-colors">
                            <div className="h-64 md:h-80 w-full bg-cover bg-center relative" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2670&auto=format&fit=crop")' }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-6 text-white">
                                    <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 inline-block border border-white/30">Top Rated Venue</span>
                                </div>
                            </div>

                            <div className="px-6 pb-6 relative">
                                <div className="flex flex-col md:flex-row gap-6 items-end -mt-12 md:-mt-16">
                                    <div className="relative group">
                                        <div className="h-32 w-32 rounded-full border-4 border-white dark:border-[#1a0f12] shadow-md bg-cover bg-center bg-white" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2669&auto=format&fit=crop")' }}></div>
                                        <div className="absolute bottom-1 right-1 bg-green-500 h-4 w-4 rounded-full border-2 border-white dark:border-[#1a0f12]" title="Available for booking"></div>
                                    </div>
                                    <div className="flex-1 mb-2 mt-4 md:mt-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h1 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">Rosewood Gardens</h1>
                                            <span className="material-symbols-outlined text-blue-500 text-[20px]" title="Verified Vendor">verified</span>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
                                            <div className="flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[16px]">location_on</span>
                                                San Francisco, CA
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[16px] text-[#f59e0b]">star</span>
                                                <span className="text-slate-900 dark:text-white font-semibold flex items-center">4.9</span> (128 Reviews)
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[16px]">attach_money</span>
                                                Starting at $5,000
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 mb-2 w-full md:w-auto">
                                        <button disabled className="p-2 rounded-full border border-slate-200 dark:border-slate-700 text-slate-400 opacity-50 cursor-not-allowed">
                                            <span className="material-symbols-outlined text-[20px]">favorite</span>
                                        </button>
                                        <button disabled className="p-2 rounded-full border border-slate-200 dark:border-slate-700 text-slate-400 opacity-50 cursor-not-allowed">
                                            <span className="material-symbols-outlined text-[20px]">share</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Quick Stats / Tags */}
                                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium border border-slate-100 dark:border-slate-700 flex items-center gap-1.5">
                                            <span className="material-symbols-outlined text-[14px]">groups</span>
                                            Up to 300 Guests
                                        </span>
                                        <span className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium border border-slate-100 dark:border-slate-700 flex items-center gap-1.5">
                                            <span className="material-symbols-outlined text-[14px]">park</span>
                                            Outdoor/Indoor Options
                                        </span>
                                        <span className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium border border-slate-100 dark:border-slate-700 flex items-center gap-1.5">
                                            <span className="material-symbols-outlined text-[14px]">restaurant</span>
                                            In-house Catering available
                                        </span>
                                        <span className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium border border-slate-100 dark:border-slate-700 flex items-center gap-1.5">
                                            <span className="material-symbols-outlined text-[14px]">local_parking</span>
                                            Valet Parking
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* About Section */}
                        <div className="bg-white dark:bg-[#1a0f12] rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 md:p-8">
                            <h2 className="text-xl font-bold font-serif text-slate-900 dark:text-white mb-4">About the Venue</h2>
                            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                <p className="mb-4">
                                    Nestled in the heart of the rolling hills just outside the city, Rosewood Gardens offers an enchanting and deeply romantic setting for your special day. Our historic estate, originally built in the 1920s, has been meticulously restored to combine timeless elegance with modern luxury.
                                </p>
                                <p className="mb-4">
                                    Wander through 50 acres of curated botanical gardens, featuring our signature rose labyrinth, serene koi ponds, and the majestic Glass Conservatory—a breathtaking indoor option that brings the beauty of the outdoors inside, regardless of the season.
                                </p>
                                <p>
                                    Our dedicated, award-winning event staff is committed to transforming your vision into reality, ensuring every detail is executed flawlessly. Experience the magic of Rosewood Gardens.
                                </p>
                            </div>
                        </div>

                        {/* Gallery Section */}
                        <div className="bg-white dark:bg-[#1a0f12] rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 md:p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold font-serif text-slate-900 dark:text-white">Gallery</h2>
                                <button className="text-primary text-sm font-medium hover:underline">View All (42)</button>
                            </div>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                                <div className="aspect-square rounded-xl bg-cover bg-center cursor-not-allowed opacity-90 transition-transform hover:scale-[1.02]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2670&auto=format&fit=crop")' }}></div>
                                <div className="aspect-square rounded-xl bg-cover bg-center cursor-not-allowed opacity-90 transition-transform hover:scale-[1.02]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1520854221256-17451cb33152?q=80&w=2669&auto=format&fit=crop")' }}></div>
                                <div className="aspect-square rounded-xl bg-cover bg-center cursor-not-allowed opacity-90 transition-transform hover:scale-[1.02]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2670&auto=format&fit=crop")' }}></div>
                                <div className="aspect-square rounded-xl bg-cover bg-center cursor-not-allowed opacity-90 transition-transform hover:scale-[1.02] hidden md:block" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2670&auto=format&fit=crop")' }}></div>
                                <div className="aspect-square rounded-xl bg-cover bg-center cursor-not-allowed opacity-90 transition-transform hover:scale-[1.02] hidden md:block" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2670&auto=format&fit=crop")' }}></div>
                                <div className="aspect-square rounded-xl flex items-center justify-center bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-not-allowed relative group hidden lg:flex">
                                    <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542042161784-26ab9e041e89?q=80&w=2670&auto=format&fit=crop")' }}></div>
                                    <div className="relative z-10 flex flex-col items-center gap-1 text-slate-600 dark:text-slate-300">
                                        <span className="material-symbols-outlined text-[24px]">collections</span>
                                        <span className="text-sm font-medium">+36 photos</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Inquiry / Booking Panel (Disabled for Preview) */}
                    <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
                        <div className="sticky top-28 bg-white dark:bg-[#1a0f12] rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 opacity-75 select-none relative overflow-hidden">
                            {/* Overlay to enforce disabled state and show it's a preview */}
                            <div className="absolute inset-0 bg-slate-50/50 dark:bg-[#1a0f12]/50 backdrop-blur-[1px] z-10 flex flex-col items-center justify-center px-6 text-center">
                                <span className="material-symbols-outlined text-4xl text-slate-400 dark:text-slate-500 mb-2">visibility</span>
                                <p className="font-medium text-slate-700 dark:text-slate-300 text-sm">Preview Mode. The inquiry form is disabled.</p>
                            </div>

                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider mb-4">Interested in this vendor?</p>
                            
                            <div className="space-y-4 filter blur-[1px]">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Your Name</label>
                                    <input disabled type="text" className="w-full bg-slate-50 border-slate-200 rounded-lg h-10 px-3 text-sm" placeholder="E.g. Sarah & Mike" />
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Email</label>
                                        <input disabled type="email" className="w-full bg-slate-50 border-slate-200 rounded-lg h-10 px-3 text-sm" placeholder="sarah@example.com" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Phone</label>
                                        <input disabled type="tel" className="w-full bg-slate-50 border-slate-200 rounded-lg h-10 px-3 text-sm" placeholder="(555) 123-4567" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Event Date</label>
                                    <input disabled type="date" className="w-full bg-slate-50 border-slate-200 rounded-lg h-10 px-3 text-sm text-slate-400" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Guest Count</label>
                                    <select disabled className="w-full bg-slate-50 border-slate-200 rounded-lg h-10 px-3 text-sm text-slate-400">
                                        <option>Select an estimate</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Message</label>
                                    <textarea disabled className="w-full bg-slate-50 border-slate-200 rounded-lg p-3 text-sm resize-none" rows={4} placeholder="Tell the vendor a bit about your wedding vision..."></textarea>
                                </div>
                                <button disabled className="w-full bg-primary text-white font-bold h-12 rounded-xl mt-2 transition-colors">
                                    Send Inquiry
                                </button>
                                <p className="text-center text-xs text-slate-500 mt-3">Typically replies within 24 hours</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
