'use client';

interface AdminTopbarProps {
    title: string;
    onMenuClick: () => void;
}

export default function AdminTopbar({ title, onMenuClick }: AdminTopbarProps) {
    return (
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-4 lg:px-6 z-10 sticky top-0 flex-shrink-0">
            {/* Mobile: hamburger + brand */}
            <div className="flex items-center gap-3 lg:hidden">
                <button
                    type="button"
                    onClick={onMenuClick}
                    className="p-2 text-text-main hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Open navigation menu"
                >
                    <span className="material-symbols-outlined">menu</span>
                </button>
                <span className="font-bold text-lg text-text-main">EventEase</span>
            </div>

            {/* Desktop: page title */}
            <h2 className="hidden lg:block text-xl font-bold text-text-main">{title}</h2>

            {/* Right side actions */}
            <div className="flex items-center gap-3 ms-auto">
                {/* Search — hidden on small screens */}
                <div className="relative hidden sm:block w-56 group">
                    <span className="absolute start-3 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors material-symbols-outlined text-[20px]">
                        search
                    </span>
                    <input
                        type="text"
                        placeholder="Search vendors, users..."
                        className="w-full ps-10 pe-4 py-2 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none placeholder:text-text-muted/70"
                    />
                </div>

                {/* Notifications */}
                <button
                    type="button"
                    className="relative p-2 text-text-muted hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                    aria-label="View notifications"
                >
                    <span className="material-symbols-outlined text-[24px]">notifications</span>
                    <span className="absolute top-2 end-2 w-2 h-2 bg-primary rounded-full ring-2 ring-white" />
                </button>

                {/* New Vendor CTA */}
                <button
                    type="button"
                    className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                >
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    <span>New Vendor</span>
                </button>
            </div>
        </header>
    );
}
