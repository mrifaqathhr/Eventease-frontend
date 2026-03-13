'use client';

import { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardTopbar from '@/components/dashboard/DashboardTopbar';
import { usePathname } from 'next/navigation';

const pageTitles: Record<string, string> = {
    '/vendor/dashboard': 'Overview',
    '/vendor/dashboard/leads': 'Leads & Inquiries',
    '/vendor/dashboard/calendar': 'Calendar',
    '/vendor/dashboard/promotions': 'Promotions',
    '/vendor/dashboard/promotions/success': 'Promotion Request',
    '/vendor/dashboard/profile': 'My Profile',
    '/vendor/dashboard/listings': 'My Listings',
    '/vendor/dashboard/settings': 'Settings',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();
    const title = pageTitles[pathname] ?? 'Dashboard';

    return (
        <div className="flex h-screen w-full overflow-hidden bg-background-light">
            {/* Sidebar */}
            <DashboardSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            {/* Main content area */}
            <div className="flex flex-1 flex-col overflow-hidden min-w-0">
                {/* Topbar */}
                <DashboardTopbar title={title} onMenuClick={() => setSidebarOpen(true)} />

                {/* Scrollable page content */}
                <main className="flex-1 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
