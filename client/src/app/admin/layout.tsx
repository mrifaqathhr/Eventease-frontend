import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Admin — EventEase',
    description: 'EventEase administrative control panel.',
};

import ProtectedRoute from '@/components/auth/ProtectedRoute';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <ProtectedRoute requireAdmin={true}>
            <div className="min-h-screen w-full flex flex-col bg-background-light dark:bg-background-dark font-sans text-slate-900 dark:text-slate-100">
                {children}
            </div>
        </ProtectedRoute>
    );
}
