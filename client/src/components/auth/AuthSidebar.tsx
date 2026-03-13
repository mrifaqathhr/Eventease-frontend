'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// ─── EventEase SVG Logo ─────────────────────────────────────────────
function EventEaseLogo({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z"
                fill="currentColor"
            />
            <path
                clipRule="evenodd"
                d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
}

// ─── Feature Check Item ───────────────────────────────────────────────
function FeatureItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary flex-shrink-0">
                <span className="material-symbols-outlined text-sm font-bold" style={{ fontSize: '14px' }}>
                    check
                </span>
            </div>
            <p className="text-slate-800 dark:text-slate-200 font-medium text-sm">{text}</p>
        </div>
    );
}

// ─── Props ────────────────────────────────────────────────────────────
interface AuthSidebarProps {
    variant: 'login' | 'register';
}

// ─── Login Variant ────────────────────────────────────────────────────
function LoginSidebar() {
    return (
        <motion.div
            className="hidden lg:flex flex-col justify-between p-12 relative bg-[#211115] text-white overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                <img
                    alt="Elegant event setting with warm lighting"
                    className="w-full h-full object-cover opacity-80"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuALeTXgm9ctgetkh7BnLObEDmW7qy69MqRBjngJhVghgY6dqENj6Yq63XSUeGLQjdUzW-q2Qzv3-TEHVhLAGM9Q-fxEVbIhpfSDs6GhdS4MCRlXdxj9Dk1L86Qa5MPNH4NQSrf35-iphmje9ol28VXYf9-AsG_rgnP5qi68ZRH0eKUYNEoIFcHzHtTVH37MdOZTv2xY-yJIFqoFHAHY7kqZDkqNsseIZPIMyyWPrTE-usRyMAXoiCyoCP9mpoNwUJb7SFkChVwGq1Pu"
                />
            </div>

            {/* Logo */}
            <div className="relative z-20 flex items-center gap-3">
                <div className="size-8 text-primary">
                    <EventEaseLogo className="w-full h-full" />
                </div>
                <Link
                    href="/"
                    className="text-2xl font-bold font-serif tracking-tight text-white hover:opacity-80 transition-opacity"
                >
                    EventEase
                </Link>
            </div>

            {/* Testimonial / Value Prop */}
            <div className="relative z-20 max-w-lg mb-8">
                <h1 className="font-serif text-4xl xl:text-5xl font-bold leading-tight mb-6">
                    Scale Your Event Business to New Heights
                </h1>
                <p className="text-lg text-white/90 font-light leading-relaxed mb-8">
                    &ldquo;Since joining EventEase, our bookings have increased by 40% and client management
                    has never been smoother. It&apos;s the premium tool for premium vendors.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                    <img
                        alt="Portrait of Sarah Jenkins, Founder of Ethereal Weddings"
                        className="w-12 h-12 rounded-full object-cover border-2 border-white/20 flex-shrink-0"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxLBSqZmkV1vf1UhkSfIHAPjXUI57XypgM1K5J1_Y97NdO2ObR_JsT9U7kp7ev0hJLNAsxgQ5bjYz9ArQx6SMiJXhtkCF9mPCmpMPUBu2j-Mr9lfpY7fZnRBgTwqoQZLu8mc1y-bGJh1ZzJSXDA2hfRqNXpXvZ9wqxw0n5F_Wcc8e3rzdKKUkTnkyePOgiI3OjDKY12q6ZtuW2JHDU75oO0ZonBTnaQk4ttH6Z5apO4FlPOnYUQsoeoxsc8U1O3eVgNo_6oOaI3XMv"
                    />
                    <div>
                        <p className="font-semibold text-white">Sarah Jenkins</p>
                        <p className="text-sm text-white/70">Founder, Ethereal Weddings</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// ─── Register Variant ─────────────────────────────────────────────────
function RegisterSidebar() {
    const features = [
        'Access thousands of potential clients',
        'Secure payment processing',
        'Integrated booking calendar',
        'Marketing tools to boost visibility',
    ];

    return (
        <motion.div
            className="hidden lg:flex flex-col justify-between p-12 xl:p-16 relative bg-[#f4f0f1] dark:bg-[#3a2d31] overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* Subtle background overlay image */}
            <div
                className="absolute inset-0 z-0 opacity-10 dark:opacity-5 bg-cover bg-center pointer-events-none"
                style={{
                    backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9MKu3xvzNDnFvpQ_G3Z9yfuWvTnGhxIx469_mhhwdws9QxPDWJTT8-_EIIsW_rJ-syK7FK2j9wuCpk5_msSPI-2VDZlPdwQGDdVSF8kYs-jvCjH2t_XA8lslblxxErZdUYNQqDWFwNv1rE8VZHH9qvvJCOrGQNHa7f8OXo9uUv4DyfkXPvexU_Exhgmc4QEV9Bd4MGSpD_LoPCsyNJIPVJGBkqBZPZKW7tBA0VMoD6UdK588gbjFytnkcOaoc-_SuHjLRj4Wj39u7')",
                }}
                aria-hidden="true"
            />

            {/* Logo */}
            <div className="relative z-10 flex items-center gap-3 text-slate-900 dark:text-slate-100 mb-12">
                <div className="size-8 text-primary">
                    <EventEaseLogo className="w-full h-full" />
                </div>
                <Link
                    href="/"
                    className="text-2xl font-bold font-serif tracking-tight text-slate-900 dark:text-slate-100 hover:opacity-80 transition-opacity"
                >
                    EventEase
                </Link>
            </div>

            {/* Main content */}
            <div className="relative z-10 flex flex-col gap-6 max-w-lg flex-1 justify-center">
                <h1 className="font-serif text-4xl xl:text-5xl font-black text-slate-900 dark:text-slate-100 leading-tight tracking-tight">
                    Grow Your Business with EventEase
                </h1>
                <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                    Join thousands of vendors connecting with couples every day. Manage your bookings,
                    showcase your portfolio, and get paid securely.
                </p>
                <div className="flex flex-col gap-4 mt-4">
                    {features.map((feature) => (
                        <FeatureItem key={feature} text={feature} />
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 mt-12 flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                <p>© 2025 EventEase Inc.</p>
                <span className="w-1 h-1 rounded-full bg-slate-400" aria-hidden="true" />
                <Link href="/privacy" className="hover:text-primary transition-colors">
                    Privacy
                </Link>
                <span className="w-1 h-1 rounded-full bg-slate-400" aria-hidden="true" />
                <Link href="/terms" className="hover:text-primary transition-colors">
                    Terms
                </Link>
            </div>
        </motion.div>
    );
}

// ─── Main Export ───────────────────────────────────────────────────────
export default function AuthSidebar({ variant }: AuthSidebarProps) {
    return variant === 'login' ? <LoginSidebar /> : <RegisterSidebar />;
}
