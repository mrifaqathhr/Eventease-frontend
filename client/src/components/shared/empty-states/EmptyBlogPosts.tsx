'use client';

import { motion } from 'framer-motion';

export interface EmptyBlogPostsProps {
    onCreatePost?: () => void;
    title?: string;
    description?: string;
}

export default function EmptyBlogPosts({
    onCreatePost,
    title = 'No Blog Posts Yet',
    description = 'Start writing your first article to engage with your audience.',
}: EmptyBlogPostsProps) {
    return (
        <motion.div
            className="flex flex-1 flex-col items-center justify-center p-8 text-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        >
            <div className="relative mb-6">
                <div className="absolute -inset-4 rounded-full bg-blue-50/50 dark:bg-blue-900/20 blur-xl" />
                <span className="material-symbols-outlined relative text-[64px] text-slate-300 dark:text-slate-600 font-light">
                    edit_note
                </span>
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                {title}
            </h3>
            <p className="mt-2 max-w-[280px] text-sm text-slate-500 font-sans">
                {description}
            </p>
            {onCreatePost && (
                <button
                    onClick={onCreatePost}
                    className="mt-6 flex h-10 items-center gap-2 rounded-lg bg-slate-900 dark:bg-white px-5 text-sm font-bold text-white dark:text-slate-900 shadow-md transition-all hover:bg-slate-800 dark:hover:bg-slate-100 hover:shadow-lg"
                >
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    <span>Create New Post</span>
                </button>
            )}
        </motion.div>
    );
}
