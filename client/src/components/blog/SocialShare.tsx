'use client';

import { useState } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface SocialShareProps {
    title: string;
    url?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function SocialShare({ title, url }: SocialShareProps) {
    const [copied, setCopied] = useState(false);

    const shareUrl = url ?? (typeof window !== 'undefined' ? window.location.href : '');
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(title);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2200);
        } catch {
            // Fallback for browsers without clipboard API
            const textarea = document.createElement('textarea');
            textarea.value = shareUrl;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2200);
        }
    };

    return (
        <div className="flex flex-wrap items-center gap-3 py-6 border-t border-slate-100">
            <span className="text-sm font-semibold text-text-muted mr-1">Share:</span>

            {/* Twitter / X */}
            <a
                href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Twitter / X"
                className="
          inline-flex items-center gap-2 rounded-full px-5 py-2
          bg-slate-100 hover:bg-slate-200
          text-text-main text-sm font-medium
          transition-all duration-200 hover:-translate-y-0.5
        "
            >
                {/* X / Twitter icon */}
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Share
            </a>

            {/* Facebook */}
            <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                className="
          inline-flex items-center gap-2 rounded-full px-5 py-2
          bg-slate-100 hover:bg-slate-200
          text-text-main text-sm font-medium
          transition-all duration-200 hover:-translate-y-0.5
        "
            >
                {/* Facebook icon */}
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.964-.004c-.242 0-.48.01-.698.033-.309.031-.586.103-.796.207-.498.24-.784.62-.868.944-.098.378-.145.776-.145 1.197v1.591h3.406l-.317 3.668h-3.09V23.69h-4.38z" />
                </svg>
                Share
            </a>

            {/* Copy Link */}
            <button
                onClick={handleCopy}
                aria-label="Copy link to clipboard"
                className="
          inline-flex items-center gap-2 rounded-full px-5 py-2
          bg-slate-100 hover:bg-primary-light
          text-text-main hover:text-primary text-sm font-medium
          transition-all duration-200 hover:-translate-y-0.5
        "
            >
                <span className="material-symbols-outlined text-[16px]">
                    {copied ? 'check_circle' : 'link'}
                </span>
                {copied ? 'Copied!' : 'Copy Link'}
            </button>
        </div>
    );
}
