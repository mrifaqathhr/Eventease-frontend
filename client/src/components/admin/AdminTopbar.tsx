"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type AdminTopbarProps = {
  onToggleSidebar?: () => void;
};

function getBreadcrumb(pathname: string): string[] {
  const base = ["Admin", "Dashboard"];

  if (pathname.startsWith("/admin/dashboard/vendors")) {
    return [...base, "Vendors"];
  }
  if (pathname.startsWith("/admin/dashboard/promotions")) {
    return [...base, "Promotions"];
  }
  if (pathname.startsWith("/admin/dashboard/homepage")) {
    return [...base, "Homepage"];
  }
  if (pathname.startsWith("/admin/dashboard/blog")) {
    return pathname.includes("/new")
      ? [...base, "Blog", "New Post"]
      : [...base, "Blog"];
  }
  if (pathname.startsWith("/admin/dashboard/analytics")) {
    return [...base, "Analytics"];
  }
  if (pathname.startsWith("/admin/dashboard/settings")) {
    return [...base, "Settings"];
  }

  return [...base, "Overview"];
}

export default function AdminTopbar({ onToggleSidebar }: AdminTopbarProps) {
  const pathname = usePathname();
  const breadcrumb = getBreadcrumb(pathname);
  const current = breadcrumb[breadcrumb.length - 1];

  return (
    <header className="sticky top-0 z-30 border-b border-gray-100 bg-surface-light/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 py-3 lg:px-8 lg:py-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-text-main shadow-sm hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 lg:hidden"
            aria-label="Toggle navigation"
          >
            <span className="h-3 w-3 border-b-2 border-l-2 border-current" />
          </button>
          <div className="hidden flex-col lg:flex">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1 text-xs font-medium text-text-muted">
                {breadcrumb.map((item, index) => {
                  const isLast = index === breadcrumb.length - 1;
                  return (
                    <li key={item} className="flex items-center gap-1">
                      {index > 0 && <span className="text-gray-300">/</span>}
                      <span
                        className={
                          isLast ? "text-text-main font-semibold" : "text-text-muted"
                        }
                      >
                        {item}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </nav>
            <h1 className="mt-1 text-lg font-semibold tracking-tight text-text-main">
              {current}
            </h1>
          </div>
          <div className="flex flex-col lg:hidden">
            <h1 className="text-base font-semibold tracking-tight text-text-main">
              {current}
            </h1>
            <p className="text-xs text-text-muted">EventEase Admin</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-xs font-medium text-text-muted shadow-sm hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            aria-label="Notifications"
          >
            <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-primary shadow-[0_0_0_2px_rgba(255,255,255,1)]" />
            <span className="h-3 w-3 rounded-full border border-current" />
          </button>
          <Link href="/admin/dashboard/settings" className="hidden items-center gap-2 rounded-full border border-gray-200 bg-white px-2 py-1 shadow-sm sm:flex hover:bg-gray-50 transition-colors">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-gray-200 to-gray-100" />
            <div className="flex flex-col">
              <span className="text-xs font-medium text-text-main">Admin</span>
              <span className="text-[11px] text-text-muted">Super Admin</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

