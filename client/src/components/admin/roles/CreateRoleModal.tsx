'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Permission {
    id: string;
    title: string;
    description: string;
}

interface CreateRoleModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const permissionsList: Permission[] = [
    {
        id: 'perm-vendor',
        title: 'Vendor Management',
        description: 'Can approve, reject, and manage vendor profiles.'
    },
    {
        id: 'perm-seo',
        title: 'SEO Manager',
        description: 'Access to SEO settings and meta tag configuration.'
    },
    {
        id: 'perm-finance',
        title: 'Financial Reports',
        description: 'View revenue dashboards and export financial data.'
    },
    {
        id: 'perm-users',
        title: 'User Administration',
        description: 'Manage internal user accounts and role assignments.'
    },
    {
        id: 'perm-content',
        title: 'Content Editor',
        description: 'Create and edit blog posts and static pages.'
    },
    {
        id: 'perm-support',
        title: 'Support Ticket Access',
        description: 'View and respond to customer support inquiries.'
    },
    {
        id: 'perm-audit',
        title: 'Audit Logs',
        description: 'View system activity logs for security monitoring.'
    },
    {
        id: 'perm-api',
        title: 'API Management',
        description: 'Manage API keys and webhook configurations.'
    }
];

export function CreateRoleModal({ isOpen, onClose }: CreateRoleModalProps) {
    const [roleName, setRoleName] = useState('');
    const [roleDescription, setRoleDescription] = useState('');
    const [selectedPermissions, setSelectedPermissions] = useState<Record<string, boolean>>({
        'perm-seo': true,
        'perm-content': true
    });

    const togglePermission = (id: string) => {
        setSelectedPermissions(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Background overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40"
                        aria-hidden="true"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="bg-white dark:bg-slate-800 w-full max-w-[800px] max-h-[90vh] rounded-xl shadow-2xl flex flex-col overflow-hidden pointer-events-auto"
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 shrink-0 z-10">
                                <div>
                                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">Create New Role</h2>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Define access levels for internal team members.</p>
                                </div>
                                <button 
                                    onClick={onClose}
                                    className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors rounded-full p-1"
                                >
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            </div>

                            {/* Modal Body (Scrollable) */}
                            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                                <div className="space-y-6">
                                    {/* Basic Info */}
                                    <div className="grid grid-cols-1 gap-6">
                                        <label className="block">
                                            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2 block">Role Name</span>
                                            <input 
                                                type="text" 
                                                className="w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary dark:focus:ring-primary dark:text-white placeholder:text-slate-400 transition-shadow outline-none" 
                                                placeholder="e.g., Senior Vendor Manager"
                                                value={roleName}
                                                onChange={(e) => setRoleName(e.target.value)}
                                            />
                                        </label>
                                        
                                        <label className="block">
                                            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2 block">Role Description</span>
                                            <textarea 
                                                className="w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary dark:focus:ring-primary dark:text-white placeholder:text-slate-400 min-h-[100px] resize-none transition-shadow outline-none" 
                                                placeholder="Describe the responsibilities and access level for this role..."
                                                value={roleDescription}
                                                onChange={(e) => setRoleDescription(e.target.value)}
                                            ></textarea>
                                        </label>
                                    </div>

                                    {/* Permissions Section */}
                                    <div className="pt-4">
                                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary text-xl">lock_person</span>
                                            Permissions
                                        </h3>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {permissionsList.map((perm) => (
                                                <div 
                                                    key={perm.id} 
                                                    className={`flex items-start justify-between p-4 rounded-lg border transition-colors group cursor-pointer ${
                                                        selectedPermissions[perm.id] 
                                                        ? 'border-primary/50 bg-primary/5 dark:bg-primary/10' 
                                                        : 'border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-700/30 hover:border-primary/20'
                                                    }`}
                                                    onClick={() => togglePermission(perm.id)}
                                                >
                                                    <div className="flex flex-col pr-4">
                                                        <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors">
                                                            {perm.title}
                                                        </span>
                                                        <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                                                            {perm.description}
                                                        </span>
                                                    </div>
                                                    
                                                    {/* Custom Toggle Switch */}
                                                    <div className="flex items-center relative shrink-0">
                                                        <div className={`w-11 h-6 rounded-full transition-colors relative flex items-center ${
                                                            selectedPermissions[perm.id] ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-600'
                                                        }`}>
                                                            <div className={`w-5 h-5 bg-white rounded-full bg-white shadow-sm transition-transform transform absolute left-0.5 ${
                                                                selectedPermissions[perm.id] ? 'translate-x-5' : 'translate-x-0'
                                                            }`}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="px-8 py-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-700 flex justify-end gap-3 shrink-0">
                                <button 
                                    onClick={onClose}
                                    className="px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 hover:text-primary transition-all shadow-sm"
                                >
                                    Cancel
                                </button>
                                <button 
                                    onClick={onClose}
                                    className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center gap-2"
                                >
                                    <span className="material-symbols-outlined text-[18px]">check</span>
                                    Create Role
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
