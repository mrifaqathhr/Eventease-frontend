import type { Metadata } from 'next';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

export const metadata: Metadata = {
    title: 'Vendor Dashboard — EventEase',
    description: 'Manage your wedding vendor profile, bookings, and analytics.',
};

export default function VendorLayout({ children }: { children: React.ReactNode }) {
    return (
        <ProtectedRoute>
            <div className="min-h-screen w-full flex flex-col bg-[#fcf8f9] dark:bg-[#1b0d11] font-sans text-slate-900 dark:text-slate-100">
                {children}
            </div>
        </ProtectedRoute>
    );
}
