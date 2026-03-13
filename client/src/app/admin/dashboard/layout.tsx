'use client';

import { useState } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminTopbar from '@/components/admin/AdminTopbar';
import { usePathname } from 'next/navigation';

const pageTitles: Record<string, string> = {
    '/admin/dashboard': 'Dashboard Overview',
    '/admin/dashboard/vendors': 'Vendor Approvals',
    '/admin/dashboard/promotions': 'Promotion Requests',
    '/admin/dashboard/seo': 'SEO Manager',
    '/admin/dashboard/seo/alerts': 'SEO Content & Alerts',
    '/admin/dashboard/users': 'User Management',
    '/admin/dashboard/reports': 'Reports & Analytics',
    '/admin/dashboard/settings': 'Settings',
    '/admin/dashboard/help': 'Help Center',
};

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();
    const title = pageTitles[pathname] ?? 'Admin Dashboard';

    return (
        <div className="flex h-screen w-full overflow-hidden bg-[#f8f6f6]">
            {/* Admin Sidebar */}
            <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            {/* Main content area */}
            <div className="flex flex-1 flex-col overflow-hidden min-w-0">
                {/* Topbar */}
                <AdminTopbar title={title} onMenuClick={() => setSidebarOpen(true)} />

                {/* Scrollable page content */}
                <main className="flex-1 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
