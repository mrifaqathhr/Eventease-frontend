import type { Metadata } from 'next';
import AdminResetSuccessMessage from '@/components/admin/auth/AdminResetSuccessMessage';

export const metadata: Metadata = {
    title: 'Admin Password Updated — EventEase',
    description: 'Your EventEase administrative password was successfully updated.',
};

export default function AdminResetSuccessPage() {
    return <AdminResetSuccessMessage />;
}
