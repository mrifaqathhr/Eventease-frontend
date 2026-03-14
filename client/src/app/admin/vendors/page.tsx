"use client";

import React from "react";
import { useMemo, useState } from "react";
import VendorManagementHeader from "@/components/admin/vendors/VendorManagementHeader";
import VendorStats from "@/components/admin/vendors/VendorStats";
import VendorTableFilters from "@/components/admin/vendors/VendorTableFilters";
import VendorManagementTable, {
  type VendorManagementRow,
  type VendorRowStatus, // Added this import
} from "@/components/admin/vendors/VendorManagementTable";

const MOCK_ROWS: VendorManagementRow[] = [
  {
    id: "1",
    name: "Grand Plaza Catering",
    joined: "Oct 2023",
    serviceType: "Catering & Food",
    status: "active",
    events: 42,
    rating: "4.9",
  },
  {
    id: "2",
    name: "Lens & Light Studio",
    joined: "Nov 2023",
    serviceType: "Photography",
    status: "active",
    events: 18,
    rating: "4.8",
  },
  {
    id: "3",
    name: "Sonic Boom AV",
    joined: "Dec 2023",
    serviceType: "Audio Visual",
    status: "pending",
    events: 0,
    rating: null,
  },
  {
    id: "4",
    name: "Blooms & Petals",
    joined: "Jan 2023",
    serviceType: "Florist",
    status: "suspended",
    events: 12,
    rating: "2.4",
  },
  {
    id: "5",
    name: "Elite Models",
    joined: "Feb 2023",
    serviceType: "Talent Agency",
    status: "active",
    events: 8,
    rating: "4.5",
  },
  {
    id: "6",
    name: "Venue Space One",
    joined: "Mar 2023",
    serviceType: "Venue Rental",
    status: "pending",
    events: 0,
    rating: null,
  },
];

export default function VendorManagementPage() {
  const [search, setSearch] = useState("");
  // Fixed the redline by explicitly typing the state
  const [statusFilter, setStatusFilter] = useState<VendorRowStatus | "all">("all");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const filteredRows = useMemo(() => {
    const term = search.trim().toLowerCase();
    return MOCK_ROWS.filter((row) => {
      const matchStatus =
        statusFilter === "all" || row.status === statusFilter;
      if (!matchStatus) return false;
      if (!term) return true;
      return (
        row.name.toLowerCase().includes(term) ||
        row.serviceType.toLowerCase().includes(term)
      );
    });
  }, [search, statusFilter]);

  return (
    <div className="space-y-8">
      <VendorManagementHeader onAddVendor={() => {}} />
      <VendorStats />
      <VendorTableFilters
        searchValue={search}
        onSearchChange={setSearch}
        statusFilter={statusFilter}
        onStatusFilterChange={(value) => setStatusFilter(value as VendorRowStatus | "all")}
        showingLabel={`Showing 1-${filteredRows.length} of ${MOCK_ROWS.length}`}
      />
      <VendorManagementTable
        rows={filteredRows}
        selectedIds={selectedIds}
        onSelectionChange={setSelectedIds}
        onBulkApprove={(ids) => console.log("Bulk approve", ids)}
        onBulkSuspend={(ids) => console.log("Bulk suspend", ids)}
        onBulkEmail={(ids) => console.log("Bulk email", ids)}
        onRowAction={(id, action) => console.log("Row action", id, action)}
      />
    </div>
  );
}