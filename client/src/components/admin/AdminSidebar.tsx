"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";

type AdminSidebarProps = {
  isOpen: boolean;
  onClose?: () => void;
};

type NavItem = {
  href: string;
  label: string;
  badge?: string;
};

const primaryNav: NavItem[] = [
  {
    href: "/admin/dashboard",
    label: "Overview",
  },
  {
    href: "/admin/dashboard/vendors",
    label: "Vendors",
    badge: "12",
  },
  {
    href: "/admin/dashboard/promotions",
    label: "Promotions",
  },
  {
    href: "/admin/dashboard/homepage",
    label: "Homepage",
  },
  {
    href: "/admin/dashboard/blog",
    label: "Blog",
  },
  {
    href: "/admin/dashboard/analytics",
    label: "Analytics",
  },
];

const secondaryNav: NavItem[] = [
  {
    href: "/admin/dashboard/settings",
    label: "Settings",
  },
];

const sidebarBaseClasses =
  "flex flex-col h-full bg-surface-light text-text-main border-r border-gray-100";

function SidebarContent({
  pathname,
  onLinkClick,
}: {
  pathname: string;
  onLinkClick?: () => void;
}) {
  const isActive = (href: string) => {
    if (href === "/admin/dashboard") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const currentSectionLabel = useMemo(() => {
    if (pathname.startsWith("/admin/dashboard/vendors")) return "Vendor Approvals";
    if (pathname.startsWith("/admin/dashboard/analytics")) return "Analytics";
    if (pathname.startsWith("/admin/dashboard/settings")) return "Settings";
    return "Overview";
  }, [pathname]);

  return (
    <div className={sidebarBaseClasses}>
      <Link href="/" className="flex items-center gap-3 px-6 py-5 border-b border-gray-100 hover:opacity-80 transition-opacity">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-rose-400 flex items-center justify-center text-white shadow-md shadow-primary/20">
          <span className="text-sm font-semibold tracking-tight">EE</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold tracking-wide uppercase text-text-muted">
            Admin
          </span>
          <span className="text-lg font-bold leading-tight">EventEase</span>
        </div>
      </Link>

      <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        <div className="space-y-1">
          <p className="px-2 text-[11px] font-semibold tracking-[0.18em] text-text-muted uppercase">
            Dashboard
          </p>
          {primaryNav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onLinkClick}
                className={[
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors",
                  active
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-text-muted hover:bg-gray-50 hover:text-text-main",
                ].join(" ")}
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-gray-50 text-[11px] font-semibold text-text-muted">
                  {item.label.charAt(0)}
                </span>
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-auto inline-flex items-center rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-white">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        <div className="pt-3 border-t border-gray-100 space-y-1">
          <p className="px-2 text-[11px] font-semibold tracking-[0.18em] text-text-muted uppercase">
            System
          </p>
          {secondaryNav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onLinkClick}
                className={[
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors",
                  active
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-text-muted hover:bg-gray-50 hover:text-text-main",
                ].join(" ")}
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-gray-50 text-[11px] font-semibold text-text-muted">
                  {item.label.charAt(0)}
                </span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="border-t border-gray-100 px-4 py-4">
        <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-3 py-2.5">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-gray-200 to-gray-100" />
          <div className="flex flex-col overflow-hidden">
            <span className="truncate text-sm font-semibold text-text-main">
              Admin User
            </span>
            <span className="truncate text-xs text-text-muted">
              Super Admin
            </span>
          </div>
        </div>
        <p className="mt-3 text-xs text-text-muted">
          Currently viewing: <span className="font-medium">{currentSectionLabel}</span>
        </p>
      </div>
    </div>
  );
}

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-72 flex-shrink-0 lg:flex">
        <SidebarContent pathname={pathname} />
      </aside>

      {/* Mobile overlay + sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onClose}
            />
            <motion.aside
              className="fixed inset-y-0 left-0 z-50 h-full w-72 flex-shrink-0 lg:hidden"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
            >
              <SidebarContent pathname={pathname} onLinkClick={onClose} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

