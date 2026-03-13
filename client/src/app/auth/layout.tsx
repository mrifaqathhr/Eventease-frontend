import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Vendor Auth — EventEase',
    description: 'Log in or register your vendor account on EventEase.',
};

/**
 * Auth Layout — Full-screen, distraction-free.
 *
 * RootMain (in the root layout) detects /auth/* paths and skips rendering
 * the Navbar, Footer, and padded <main> wrapper entirely.
 * This layout simply provides a full-viewport flex container for the
 * split-screen panel design.
 */
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen w-full flex overflow-hidden">
            {children}
        </div>
    );
}
