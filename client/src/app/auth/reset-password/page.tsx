import type { Metadata } from 'next';
import ResetPasswordForm from '@/components/auth/ResetPasswordForm';

export const metadata: Metadata = {
    title: 'Reset Password — EventEase',
    description: 'Set a new password for your EventEase vendor account.',
};

export default function ResetPasswordPage() {
    return <ResetPasswordForm />;
}
