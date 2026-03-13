import type { Metadata } from 'next';
import EmailVerificationSuccess from '@/components/auth/EmailVerificationSuccess';

export const metadata: Metadata = {
    title: 'Email Verified — EventEase',
    description: 'Your email address has been successfully verified on EventEase.',
};

export default function VerifySuccessPage() {
    return <EmailVerificationSuccess />;
}
