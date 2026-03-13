import type { Metadata } from 'next';
import AuthSidebar from '@/components/auth/AuthSidebar';
import LoginForm from '@/components/auth/LoginForm';

export const metadata: Metadata = {
    title: 'Vendor Login — EventEase',
    description:
        'Log in to your EventEase vendor dashboard to manage events, bookings, and grow your business.',
};

export default function LoginPage() {
    return (
        <>
            {/* Left: Branding sidebar (hidden on mobile) */}
            <AuthSidebar variant="login" />

            {/* Right: Login form panel */}
            <LoginForm />
        </>
    );
}
