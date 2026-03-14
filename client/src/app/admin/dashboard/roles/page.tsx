'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RoleManagementTable, Role } from '@/components/admin/roles/RoleManagementTable';
import { CreateRoleModal } from '@/components/admin/roles/CreateRoleModal';

export default function AdminRoleManagementPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [activeRole, setActiveRole] = useState<Role | null>(null);

    return (
        <div className="flex-1 flex flex-col h-full overflow-hidden relative">
            {/* Top Header */}
            <header className="h-20 px-8 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex-shrink-0 z-10">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col"
                >
                    <h2 className="text-2xl font-bold font-serif text-slate-900 dark:text-white">Role Management</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage access levels and permissions for internal staff.</p>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-4"
                >
                    <div className="relative hidden md:block">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
                        <input 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm text-slate-700 dark:text-slate-300 focus:ring-2 focus:ring-primary/50 w-64 placeholder:text-slate-400 transition-shadow" 
                            placeholder="Search roles..." 
                            type="text"
                        />
                    </div>
                    <button 
                        onClick={() => setIsCreateModalOpen(true)}
                        className="flex items-center gap-2 bg-primary hover:bg-rose-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm shadow-primary/30 active:scale-95"
                    >
                        <span className="material-symbols-outlined text-[20px]">add</span>
                        <span className="hidden sm:inline">Create New Role</span>
                    </button>
                </motion.div>
            </header>

            {/* Main Content Area */}
            <div className="flex-1 overflow-auto p-4 md:p-8 custom-scrollbar">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 h-full relative">
                    
                    {/* Roles Table */}
                    <RoleManagementTable 
                        searchQuery={searchQuery} 
                        onEditRole={setActiveRole} 
                        activeRoleId={activeRole?.id || null}
                    />

                    {/* Right Panel: Edit Role (Contextual) */}
                    <AnimatePresence>
                        {activeRole && (
                            <motion.div 
                                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 50, scale: 0.95 }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="w-full lg:w-96 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg flex flex-col h-fit lg:sticky lg:top-0 shrink-0"
                            >
                                <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-primary/5 rounded-t-xl">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-bold font-serif text-slate-900 dark:text-white">
                                            Edit Role: {activeRole.name}
                                        </h3>
                                        <button 
                                            onClick={() => setActiveRole(null)}
                                            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1 rounded-full"
                                        >
                                            <span className="material-symbols-outlined text-[20px]">close</span>
                                        </button>
                                    </div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                                        Adjust permissions for this role. Changes will apply to all {activeRole.users.length} assigned users immediately.
                                    </p>
                                </div>

                                <div className="p-6 flex flex-col gap-6 overflow-y-auto max-h-[calc(100vh-250px)] custom-scrollbar">
                                    {/* Mock Sections purely for visual parity with HTML */}
                                    <div className="space-y-3">
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Vendor Management</h4>
                                        {['View Vendors', 'Edit Vendor Details', 'Delete Vendors'].map((action, i) => (
                                            <label key={i} className="flex items-center justify-between group cursor-pointer">
                                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">{action}</span>
                                                <div className="relative inline-flex items-center cursor-pointer">
                                                    <div className={`w-9 h-5 rounded-full transition-colors relative flex items-center ${i !== 2 ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-700'}`}>
                                                        <div className={`w-4 h-4 bg-white rounded-full transition-transform transform absolute left-0.5 ${i !== 2 ? 'translate-x-4' : 'translate-x-0'}`}></div>
                                                    </div>
                                                </div>
                                            </label>
                                        ))}
                                    </div>

                                    <hr className="border-slate-100 dark:border-slate-800" />

                                    <div className="space-y-3">
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Financials</h4>
                                        {['View Revenue Reports', 'Approve Refunds'].map((action, i) => (
                                            <label key={i} className="flex items-center justify-between group cursor-pointer">
                                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">{action}</span>
                                                <div className="relative inline-flex items-center cursor-pointer">
                                                    <div className={`w-9 h-5 rounded-full transition-colors relative flex items-center ${i === 0 ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-700'}`}>
                                                        <div className={`w-4 h-4 bg-white rounded-full transition-transform transform absolute left-0.5 ${i === 0 ? 'translate-x-4' : 'translate-x-0'}`}></div>
                                                    </div>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                    
                                    <hr className="border-slate-100 dark:border-slate-800" />

                                    <div className="space-y-3">
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">System</h4>
                                        <label className="flex items-center justify-between group cursor-not-allowed opacity-60">
                                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Manage Other Roles</span>
                                            <div className="relative inline-flex items-center">
                                                <div className="w-9 h-5 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center relative">
                                                     <div className="w-4 h-4 bg-white rounded-full absolute left-0.5"></div>
                                                </div>
                                            </div>
                                        </label>
                                        <p className="text-[10px] text-amber-600 dark:text-amber-500 mt-0 bg-amber-50 dark:bg-amber-900/20 p-2 rounded flex items-start">
                                            <span className="material-symbols-outlined text-[12px] align-middle mr-1.5 pt-0.5">warning</span>
                                            <span>Only Super Admin can manage roles.</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 rounded-b-xl">
                                    <button 
                                        onClick={() => setActiveRole(null)}
                                        className="w-full bg-primary hover:bg-rose-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <CreateRoleModal 
                isOpen={isCreateModalOpen} 
                onClose={() => setIsCreateModalOpen(false)} 
            />
        </div>
    );
}
