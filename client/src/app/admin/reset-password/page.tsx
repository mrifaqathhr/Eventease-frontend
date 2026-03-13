import type { Metadata } from 'next';
import AdminResetForm from '@/components/admin/auth/AdminResetForm';

export const metadata: Metadata = {
    title: 'Set New Admin Password — EventEase',
    description: 'Set a new password for your EventEase administrative account.',
};

export default function AdminResetPasswordPage() {
    return <AdminResetForm />;
}
