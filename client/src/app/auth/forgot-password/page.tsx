import type { Metadata } from 'next';
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';

export const metadata: Metadata = {
    title: 'Forgot Password — EventEase',
    description: 'Recover your EventEase vendor account.',
};

export default function ForgotPasswordPage() {
    return <ForgotPasswordForm />;
}
