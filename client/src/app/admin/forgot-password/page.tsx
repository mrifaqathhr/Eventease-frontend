import type { Metadata } from 'next';
import AdminForgotForm from '@/components/admin/auth/AdminForgotForm';

export const metadata: Metadata = {
    title: 'Admin Password Recovery — EventEase',
    description: 'Recover your EventEase administrative account.',
};

export default function AdminForgotPasswordPage() {
    return <AdminForgotForm />;
}
