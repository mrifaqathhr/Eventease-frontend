'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

/**
 * RootMain — pathname-aware shell component.
 *
 * Auth routes (/auth/*) get a bare full-screen container —
 * no Navbar, no Footer, no max-width or padding constraints.
 *
 * All other routes get the standard Navbar + padded <main> + Footer layout.
 */
export default function RootMain({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAuthRoute = pathname.startsWith('/auth');
    const isDashboardRoute = pathname.startsWith('/vendor/dashboard');
    const isAdminRoute = pathname.startsWith('/admin');

    if (isAuthRoute || isDashboardRoute || isAdminRoute) {
        // Full-screen, edge-to-edge — these layouts handle their own structure
        return <>{children}</>;
    }

    return (
        <>
            <Navbar />
            <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>
            <Footer />
        </>
    );
}
