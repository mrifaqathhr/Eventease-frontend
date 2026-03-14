'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Data Interfaces
interface UserAssigned {
    id: string;
    avatarUrl?: string;
}

interface Role {
    id: string;
    name: string;
    description: string;
    isProtected: boolean;
    permissions: string[];
    users: UserAssigned[];
}

const mockRoles: Role[] = [
    {
        id: 'role-1',
        name: 'Super Admin',
        description: 'Full access to all system modules.',
        isProtected: true,
        permissions: ['All Permissions'],
        users: [
            { id: 'u1', avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFVJDu5Vvpd2oLOI2Id_zNroQH7aMK-6f9BDJ5QHcxw42w73lMq4RWmieUkmGcBxMFNt4qTkQHMqCVOmx_8BqYoxKrwTWPE_AY7B155Ce70pu5IZZzi-h_oREuHWOFWnDMsnWgjP9hZfHFPqbEqusv3RZ3I0NdlbD3uO_1aZfjMlaOII3sivjzLW1KiK4LCxZ1_Pgz3dLeIUoyZcnbK2rJob2ySNwdCMqtGrzasa016WF-HaLVXVyPyf_8j51iwhytQswGeEno6J1Y' },
            { id: 'u2', avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWb5dytnbdkUjCKprCfgPOBaWyu_gZLrqng-NO8Rps6g5-T2eQSxvV53sJfDC3Yibc08FABa4ZxiprM6zDdTBQP5xGjeQJw2bXW0xOrupPHRcqYXxYa6dqxdSu2qhJCGwXYbtF0_7bghnz0952NJLA-IQGBP3cBIWAkc4l1OqhgMtdGK5X3F7jNJ2DTQ7xRbjXzMRdjpKQCNscRxj_deDCxWONloDre3FWTBppM82LX4LE6iU8Kq1L5XrFM8VMHLPu_EhFrN0m9AdS' },
            { id: 'u3' } // Represents +1
        ]
    },
    {
        id: 'role-2',
        name: 'Vendor Manager',
        description: 'Manage vendor onboarding and disputes.',
        isProtected: false,
        permissions: ['Vendor Edit', 'Verify'],
        users: [
            { id: 'u4', avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsvURKw0goEQLtL6E5deW3km-6wjH4uSDCqJSyJgxs5vsQHtXmWpo_ApEW4f0VgGioiHY6DYftrCxlUOyqaqLvGNll99JSeRcLtKyX48qj0WHRVp4HKJNB1Ok6VBL7U1YcPMBzDXmj2WwoMJKKdoqVFSiJnsBzrmIbGnYzW1BE8CLqMFB5C2CYZeMe_i74Pv3bQcYS4mCa6d5jtkZQltyD6_B2ITA4xHe4jLM1wgcNQVlzmSeUQ2Ahw1VSSJdUIN6Wha5PxLE2yUyv' },
            { id: 'u5' }, { id: 'u6' }, { id: 'u7' }, { id: 'u8' }, { id: 'u9' }, { id: 'u10' }, { id: 'u11' } // Represents +7
        ]
    },
    {
        id: 'role-3',
        name: 'Content Editor',
        description: 'Edit blog posts and SEO settings.',
        isProtected: false,
        permissions: ['Blog', 'SEO'],
        users: [
            { id: 'u12', avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHScULTpvuWkQQg28IT4roCgx2XqiYR41gfNuCIMklfUBHI50G38OXKve-ZIuITdSHCE5gaoPzIKLlJ-gmOWCg0SEbckz4DU_JtyA76YrSLgjBB91vfvahUduZ_QtAlUqvt5rZ2iU12xGbNObp_3saKnLMRa_qULIkRA0EoTZotTAMAYyb3JPiONKO5JkJS-HCe-mFRBlKvtdeOYXdnAMeVH1SP_Xd1QSeuC0QDxiunS20vx1cCYN7aIyYzD9iYjqzQonIW0juOVuk' },
            { id: 'u13' }, { id: 'u14' }, { id: 'u15' }, { id: 'u16' } // Represents +4
        ]
    },
    {
        id: 'role-4',
        name: 'Support Agent',
        description: 'View tickets and respond to users.',
        isProtected: false,
        permissions: ['View Tickets', 'Chat'],
        users: Array.from({ length: 12 }, (_, i) => ({ id: `s${i}` })) // Represents +12
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const rowVariants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { ease: 'easeOut' as const, duration: 0.3 } }
};

interface RoleManagementTableProps {
    searchQuery: string;
    onEditRole: (role: Role) => void;
    activeRoleId: string | null;
}

export function RoleManagementTable({ searchQuery, onEditRole, activeRoleId }: RoleManagementTableProps) {
    const filteredRoles = mockRoles.filter(role => 
        role.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex-1 flex flex-col gap-6">
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
            >
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-1/4">Role Name</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-1/4">Description</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-1/6">Users</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-1/4">Permissions</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <motion.tbody 
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            className="divide-y divide-slate-100 dark:divide-slate-800"
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredRoles.map((role) => {
                                    const displayedUsers = role.users.filter(u => u.avatarUrl).slice(0, 3);
                                    const remainingUsersCount = role.users.length - displayedUsers.length;
                                    const isActive = activeRoleId === role.id;

                                    return (
                                        <motion.tr 
                                            variants={rowVariants}
                                            key={role.id}
                                            layout
                                            className={`group transition-colors ${
                                                isActive 
                                                ? 'bg-primary/5 border-l-4 border-l-primary' 
                                                : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                                            }`}
                                        >
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-bold text-slate-900 dark:text-white text-sm">{role.name}</span>
                                                    {role.isProtected && (
                                                        <span className="material-symbols-outlined text-amber-500 text-[16px]" title="Protected Role">lock</span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <p className="text-sm text-slate-500 dark:text-slate-400">{role.description}</p>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex -space-x-2">
                                                    {displayedUsers.map((user, idx) => (
                                                        <img 
                                                            key={user.id} 
                                                            src={user.avatarUrl} 
                                                            alt={`User ${idx + 1}`} 
                                                            className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 object-cover" 
                                                        />
                                                    ))}
                                                    {remainingUsersCount > 0 && (
                                                        <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-medium text-slate-500">
                                                            +{remainingUsersCount}
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex flex-wrap gap-1">
                                                    {role.isProtected ? (
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">All Permissions</span>
                                                    ) : (
                                                        role.permissions.map((perm, idx) => (
                                                            <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                                                                {perm}
                                                            </span>
                                                        ))
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button 
                                                    onClick={() => !role.isProtected && onEditRole(role)}
                                                    disabled={role.isProtected}
                                                    title={role.isProtected ? "Cannot edit Super Admin" : "Edit Role"}
                                                    className={`p-2 rounded-full transition-colors ${
                                                        role.isProtected 
                                                        ? 'text-slate-400 cursor-not-allowed hidden' // Or keep it visible but disabled
                                                        : 'text-slate-400 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 shadow-sm'
                                                    }`}
                                                >
                                                    {role.isProtected ? (
                                                        <span className="material-symbols-outlined text-[20px]">lock</span>
                                                    ) : (
                                                        <span className="material-symbols-outlined text-[20px]">edit</span>
                                                    )}
                                                </button>
                                            </td>
                                        </motion.tr>
                                    );
                                })}
                            </AnimatePresence>
                        </motion.tbody>
                    </table>
                </div>
                
                {/* Pagination */}
                <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center justify-between">
                    <span className="text-xs text-slate-500 dark:text-slate-400">Showing 1-{filteredRoles.length} of {filteredRoles.length} roles</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 text-xs font-medium text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 disabled:opacity-50 transition-colors" disabled>Previous</button>
                        <button className="px-3 py-1 text-xs font-medium text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 disabled:opacity-50 transition-colors" disabled>Next</button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

// Ensure the Role type is exported if needed by the page
export type { Role };
