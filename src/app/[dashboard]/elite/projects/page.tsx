"use client";
import React, { useState } from "react";
import DateRangeSelector from "./components/DateRangeSelector";
import ViewProjectsButton from "./components/ViewProjectButton";
import TotalProjectsCard from "./components/TotalProjectCard";
import ReceivablesVsBillablesCard from "./components/ReceivablesVsBillables";
import NextPayrollCard from "./components/NextPayrollCard";
import InvoiceOverviewCard from "./components/InvoiceOverview";
import TimesheetsCard from "./components/Timesheets";
import TotalTalentsCard from "./components/TotalTalents";

export default function Projects() {
  const [dateRange, setDateRange] = useState("12 months");

  return (
    <div className="w-full text-gray-800 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Project Dashboard</h1>
          <p className="text-sm text-gray-500">
            Manage and track your projects and timesheets
          </p>
        </div>
        <ViewProjectsButton />
      </div>
      <DateRangeSelector value={dateRange} onChange={setDateRange} />

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 mt-6">
        {/* First Row */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <TotalProjectsCard />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-6">
          {" "}
          {/* Takes up more space */}
          <ReceivablesVsBillablesCard />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <NextPayrollCard />
        </div>

        {/* Second Row */}
        <div className="col-span-1 md:col-span-3 lg:col-span-4">
          {" "}
          {/* Takes up more space */}
          <InvoiceOverviewCard />
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-4">
          <TimesheetsCard />
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-4">
          <TotalTalentsCard />
        </div>
      </div>
    </div>
  );
}
