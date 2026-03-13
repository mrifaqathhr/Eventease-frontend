"use client";

import { useState, useMemo } from "react";
import PromotionHeader from "@/components/admin/promotions/PromotionHeader";
import PromotionStats from "@/components/admin/promotions/PromotionStats";
import PromotionList, {
  type PromotionListItem,
} from "@/components/admin/promotions/PromotionList";
import PromotionDetailsPanel from "@/components/admin/promotions/PromotionDetailsPanel";

const MOCK_PROMOTIONS: PromotionListItem[] = [
  {
    id: "1",
    vendorId: "VND-8832",
    vendorName: "Blissful Blooms",
    planType: "Premium Spotlight",
    planSubtext: "Homepage Banner",
    dateRange: "Oct 12 - Nov 12",
    price: "$450.00",
    status: "active",
    payment: "paid",
  },
  {
    id: "2",
    vendorId: "VND-9921",
    vendorName: "Capture Moments",
    planType: "Featured Listing",
    planSubtext: "Category Top",
    dateRange: "Nov 01 - Nov 30",
    price: "$200.00",
    status: "pending",
    payment: "authorized",
  },
  {
    id: "3",
    vendorId: "VND-4412",
    vendorName: "Elegant Tastes",
    planType: "Newsletter Feature",
    planSubtext: "Email Blast",
    dateRange: "Oct 20 - Oct 25",
    price: "$850.00",
    status: "active",
    payment: "paid",
  },
  {
    id: "4",
    vendorId: "VND-1120",
    vendorName: "Urban Venues",
    planType: "Premium Spotlight",
    planSubtext: "Homepage Banner",
    dateRange: "Sep 01 - Oct 01",
    price: "$450.00",
    status: "expired",
    payment: "paid",
  },
];

export default function PromotionManagementPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedId, setSelectedId] = useState<string | null>("2");
  const [panelOpen, setPanelOpen] = useState(true);

  const filteredItems = useMemo(() => {
    const term = search.trim().toLowerCase();
    return MOCK_PROMOTIONS.filter((row) => {
      const matchStatus =
        statusFilter === "all" || row.status === statusFilter;
      if (!matchStatus) return false;
      if (!term) return true;
      return (
        row.vendorName.toLowerCase().includes(term) ||
        row.vendorId.toLowerCase().includes(term)
      );
    });
  }, [search, statusFilter]);

  const selectedRow = MOCK_PROMOTIONS.find((r) => r.id === selectedId);

  return (
    <div className="space-y-8">
      <PromotionHeader onExportReport={() => {}} />
      <PromotionStats />

      <div className="rounded-t-xl border border-gray-200 bg-surface-light p-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 items-center gap-2">
            <div className="relative w-full max-w-md">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined">
                search
              </span>
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by vendor or plan ID..."
                className="block w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-3 text-sm leading-5 outline-none placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <button
              type="button"
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 text-text-muted transition-colors hover:bg-gray-50"
            >
              <span className="material-symbols-outlined">filter_list</span>
            </button>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {["all", "active", "pending", "expired"].map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStatusFilter(s)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  statusFilter === s
                    ? "border-primary/20 bg-primary/10 text-primary"
                    : "border-gray-200 bg-white text-text-muted hover:border-gray-300"
                }`}
              >
                {s === "all" ? "All Statuses" : s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <PromotionList
          items={filteredItems}
          selectedId={selectedId}
          onSelectRow={(id) => {
            setSelectedId(id);
            setPanelOpen(true);
          }}
        />
        <PromotionDetailsPanel
          open={panelOpen && !!selectedId}
          onClose={() => setPanelOpen(false)}
          vendorName={selectedRow?.vendorName}
          planName={selectedRow?.planType}
          planDuration="30 Days Duration"
          planPrice={selectedRow?.price}
          onApprove={() => {}}
          onReject={() => {}}
          onMarkPaid={() => {}}
        />
      </div>
    </div>
  );
}
