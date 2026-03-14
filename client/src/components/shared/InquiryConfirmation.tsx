'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function InquiryConfirmation() {
    return (
        <div className="bg-[#f8f6f6] dark:bg-background-dark min-h-screen flex flex-col text-[#181113] dark:text-gray-100 transition-colors duration-200 antialiased font-sans">
            {/* Navigation */}
            <header className="w-full bg-white dark:bg-[#2d1a1f] border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
                <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="size-8 text-primary">
                                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
                                    <path clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
                                </svg>
                            </div>
                            <span className="text-xl font-bold font-serif tracking-tight dark:text-white">EventEase</span>
                        </Link>
                        
                        {/* Nav Links */}
                        <nav className="hidden md:flex items-center gap-8">
                            <Link href="/search?category=venues" className="text-sm font-medium hover:text-primary transition-colors dark:text-gray-300">Venues</Link>
                            <Link href="/search" className="text-sm font-medium hover:text-primary transition-colors dark:text-gray-300">Vendors</Link>
                            <Link href="/planning-tools" className="text-sm font-medium hover:text-primary transition-colors dark:text-gray-300">Planning Tools</Link>
                            <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors dark:text-gray-300">Real Weddings</Link>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        {/* Search */}
                        <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800 rounded-full h-10 px-4 w-64 focus-within:ring-2 focus-within:ring-primary/50 transition-shadow">
                            <span className="material-symbols-outlined text-gray-400 text-[20px]">search</span>
                            <input className="bg-transparent border-none text-sm w-full focus:ring-0 placeholder:text-gray-400 dark:text-white ml-2 outline-none" placeholder="Search venues..." type="text"/>
                        </div>
                        {/* CTA */}
                        <Link href="/dashboard" className="bg-primary hover:bg-[#b02447] text-white text-sm font-bold px-5 h-10 rounded-full transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">account_circle</span>
                            <span>Dashboard</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center justify-start pt-12 pb-20 px-4">
                {/* Confirmation Card */}
                <motion.div 
                    className="bg-white dark:bg-[#2d1a1f] w-full max-w-[640px] rounded-2xl shadow-xl dark:shadow-black/20 p-8 md:p-12 mb-16 relative overflow-hidden"
                    initial={{ opacity: 0, y: 15 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    {/* Decorative accent at top */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40"></div>
                    
                    <div className="flex flex-col items-center text-center">
                        {/* Success Icon */}
                        <div className="size-20 bg-[#fcebef] dark:bg-primary/20 rounded-full flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-primary text-4xl">check_circle</span>
                        </div>
                        
                        {/* Headline */}
                        <h1 className="text-3xl md:text-4xl font-bold font-serif text-[#181113] dark:text-white mb-4 tracking-tight">
                            Inquiry Sent Successfully
                        </h1>
                        
                        {/* Subtext */}
                        <p className="text-[#88636c] dark:text-gray-300 max-w-md text-base leading-relaxed mb-10">
                            Thank you for reaching out! The vendor has received your inquiry and will get back to you shortly. A confirmation email has been sent to your inbox.
                        </p>
                        
                        {/* What Happens Next Section */}
                        <div className="w-full bg-[#f8f6f6] dark:bg-background-dark/50 rounded-xl p-6 mb-8 text-left border border-gray-100 dark:border-gray-800">
                            <h3 className="font-serif font-semibold text-xl mb-4 text-[#181113] dark:text-white flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">schedule</span>
                                What Happens Next?
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="mt-0.5 min-w-[20px] h-[20px] rounded-full bg-white dark:bg-[#2d1a1f] border-2 border-primary/30 flex items-center justify-center text-primary text-xs font-bold">1</div>
                                    <div>
                                        <span className="block font-medium text-sm dark:text-gray-200">Vendor Review</span>
                                        <span className="text-xs text-[#88636c] dark:text-gray-400">The vendor reviews your wedding details and availability.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-0.5 min-w-[20px] h-[20px] rounded-full bg-white dark:bg-[#2d1a1f] border-2 border-primary/30 flex items-center justify-center text-primary text-xs font-bold">2</div>
                                    <div>
                                        <span className="block font-medium text-sm dark:text-gray-200">Response</span>
                                        <span className="text-xs text-[#88636c] dark:text-gray-400">You&apos;ll receive a personalized response or quote within 24-48 hours.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-0.5 min-w-[20px] h-[20px] rounded-full bg-white dark:bg-[#2d1a1f] border-2 border-primary/30 flex items-center justify-center text-primary text-xs font-bold">3</div>
                                    <div>
                                        <span className="block font-medium text-sm dark:text-gray-200">Consultation</span>
                                        <span className="text-xs text-[#88636c] dark:text-gray-400">Book a tour or consultation to finalize details.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                        {/* Primary Action */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                            <Link href="/vendors" className="bg-primary hover:bg-[#b02447] flex items-center justify-center text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-primary/20 w-full sm:w-auto">
                                Explore More Vendors
                            </Link>
                            <Link href="/dashboard" className="bg-white dark:bg-transparent border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center text-[#181113] dark:text-white font-semibold py-3 px-8 rounded-xl transition-all w-full sm:w-auto">
                                View My Dashboard
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Discovery Section */}
                <div className="w-full max-w-[1000px] flex flex-col items-center">
                    <div className="text-center mb-8">
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#181113] dark:text-white mb-2">While you wait</h2>
                        <p className="text-[#88636c] dark:text-gray-400">Discover similar vendors couples love</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        {/* Vendor Card 1 */}
                        <Link href="/vendors/lumina" className="group bg-white dark:bg-[#2d1a1f] rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all cursor-pointer">
                            <div className="h-48 bg-gray-200 relative overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAqnF_MyxhBbiNuhseL7ActkQ-_mfIT1L61iW0djFjpkayYTy3CKF-Fjm4p1LRNiV157rlIeQ55n5njCbi24Faxd6JR4TJ_VTGdr5vJsM8z10c5hJEtk7giQcSnB0ieAmQxXbOZVbbGctHlPf7sxEJYSyDA-ieWXdq13hgpqaERQkL4MBgrDqSzxjJsR5PQyPIXiw3T0ZW1W5I4RleNL7Kd3_lK_44fWgJY5GgL3aQXVJj6nRuqCBQIUKg4uCXgimfkX86P4f2N6hyi')" }}></div>
                                <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] text-amber-500 fill-1">star</span> 4.9
                                </div>
                            </div>
                            <div className="p-5">
                                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Photography</p>
                                <h3 className="font-serif text-lg font-bold text-[#181113] dark:text-white mb-1 group-hover:text-primary transition-colors">Lumina Studios</h3>
                                <p className="text-sm text-[#88636c] dark:text-gray-400 flex items-center gap-1 mb-3">
                                    <span className="material-symbols-outlined text-[16px]">location_on</span> San Francisco, CA
                                </p>
                                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                                    <span className="text-sm font-medium dark:text-gray-300">$$ - $$$</span>
                                    <span className="text-primary text-sm font-bold group-hover:translate-x-1 transition-transform inline-flex items-center">
                                        View
                                        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                        
                        {/* Vendor Card 2 */}
                        <Link href="/vendors/petal-stem" className="group bg-white dark:bg-[#2d1a1f] rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all cursor-pointer">
                            <div className="h-48 bg-gray-200 relative overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMTi9l176pH8ysPn0CHfpt85OlVoQ_A2XVcM4TS7iY-X3NG996pTQ_sWKV5co9TNy8q08hUmVmTbRlBYjmMtYIBgDJQlFO3SyFqPe_JDttULVpYYr9m0rbSJcP8HnNHuZVylzLxzdsTazy4mQfFQ4YQu_P0pndrX68iiXUVhAODLVurwaF9OUFoB1-_9B1Q_gXhnYH20_1EFiO7brunciScrTk2VdzLST78TgLMdjUcbM88nIs5tdDUHRjuH5iPbnUfCN7MZO3PfHZ')" }}></div>
                                <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] text-amber-500 fill-1">star</span> 5.0
                                </div>
                            </div>
                            <div className="p-5">
                                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Floral Design</p>
                                <h3 className="font-serif text-lg font-bold text-[#181113] dark:text-white mb-1 group-hover:text-primary transition-colors">Petal &amp; Stem</h3>
                                <p className="text-sm text-[#88636c] dark:text-gray-400 flex items-center gap-1 mb-3">
                                    <span className="material-symbols-outlined text-[16px]">location_on</span> Napa Valley, CA
                                </p>
                                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                                    <span className="text-sm font-medium dark:text-gray-300">$$$</span>
                                    <span className="text-primary text-sm font-bold group-hover:translate-x-1 transition-transform inline-flex items-center">
                                        View
                                        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                        
                        {/* Vendor Card 3 */}
                        <Link href="/vendors/epicurean" className="group bg-white dark:bg-[#2d1a1f] rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all cursor-pointer">
                            <div className="h-48 bg-gray-200 relative overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAaVBdYqNM4vqTdw7j01cLT1dyy5-00IiD6eGReWPzXpcVOJSj9Kh35bHvONJQdiRf9jeZ5Nwo7AOFjjwsHetGwr2Cz932dbVdY7g_GFUYo-IyAI_HJKOw1uiqQwgPA_9bE4Wvvg4YhElXdNcZH8gP8Y0lFMzE4ksGC9gLM3iEyYNEULW22Vf9OtVcMTYgjCRNWuRQLi5qkOVrB5ikAD8s9dhHVnpwIeQZuSr37MF7EjFYWId6hVK9h8dffCKaCQMCFyeWL4ecqW59Y')" }}></div>
                                <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] text-amber-500 fill-1">star</span> 4.8
                                </div>
                            </div>
                            <div className="p-5">
                                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Catering</p>
                                <h3 className="font-serif text-lg font-bold text-[#181113] dark:text-white mb-1 group-hover:text-primary transition-colors">Epicurean Events</h3>
                                <p className="text-sm text-[#88636c] dark:text-gray-400 flex items-center gap-1 mb-3">
                                    <span className="material-symbols-outlined text-[16px]">location_on</span> Oakland, CA
                                </p>
                                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                                    <span className="text-sm font-medium dark:text-gray-300">$$ - $$$</span>
                                    <span className="text-primary text-sm font-bold group-hover:translate-x-1 transition-transform inline-flex items-center">
                                        View
                                        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </main>

            {/* Simple Footer */}
            <footer className="bg-white dark:bg-[#2d1a1f] border-t border-gray-100 dark:border-gray-800 py-8">
                <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-[#88636c] dark:text-gray-400">© {new Date().getFullYear()} EventEase. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-sm text-[#88636c] hover:text-primary dark:text-gray-400 dark:hover:text-white">Privacy</Link>
                        <Link href="/terms" className="text-sm text-[#88636c] hover:text-primary dark:text-gray-400 dark:hover:text-white">Terms</Link>
                        <Link href="/support" className="text-sm text-[#88636c] hover:text-primary dark:text-gray-400 dark:hover:text-white">Support</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
