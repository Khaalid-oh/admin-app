"use client";
import React, { useState, useMemo } from "react";
import { mockCompanies } from "../components/mock/mock";
import CompaniesTable, {
  approvedColumns,
  pendingColumns,
} from "./components/CompaniesTableComponent";



function CompaniesPage() {
  const [activeTab, setActiveTab] = useState<"Approved" | "Pending">(
    "Approved"
  );
  const [searchTerm, setSearchTerm] = useState("");

  const approvedCompanies = useMemo(
    () =>
      mockCompanies.filter(
        (company) =>
          company.status === "Approved" &&
          (company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            company.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
            company.industry.toLowerCase().includes(searchTerm.toLowerCase()))
      ),
    [searchTerm]
  );

  const pendingCompanies = useMemo(
    () =>
      mockCompanies.filter(
        (company) =>
          company.status === "Pending" &&
          (company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (company.createdBy &&
              company.createdBy
                .toLowerCase()
                .includes(searchTerm.toLowerCase())) ||
            (company.email &&
              company.email.toLowerCase().includes(searchTerm.toLowerCase())))
      ),
    [searchTerm]
  );

  const approvedCompaniesCount = approvedCompanies.length;
  const pendingCompaniesCount = pendingCompanies.length;

  const TABS = [
    {
      name: "Approved",
      count: approvedCompaniesCount,
      type: "Approved" as const,
    },
    { name: "Pending", count: pendingCompaniesCount, type: "Pending" as const },
  ];

  return (
    <div className="w-full flex flex-col">
      <div className="p-8 flex flex-col gap-1">
        <h1 className="text-2xl font-bold">Companies</h1>
        <p className="text-gray-500">
          View all companies and manage all companies here.
        </p>
        {/* Tabs and Controls */}
        <div className="mb-6">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-6" aria-label="Tabs">
              {TABS.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.type)}
                  className={`
                    ${
                      activeTab === tab.type
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }
                    whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm group inline-flex items-center
                  `}
                >
                  {tab.name}
                  <span
                    className={`
                    ${
                      activeTab === tab.type
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-100 text-gray-900"
                    }
                     ml-2 py-0.5 px-2 rounded-full text-xs font-medium hidden md:inline-block
                  `}
                  >
                    {tab.count}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* Search and Filters */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="relative flex-grow sm:max-w-xs">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* Heroicon: search */}
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                name="search"
                id="search"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {/* Heroicon: filter */}
              <svg
                className="h-5 w-5 mr-2 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              Filters
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="mb-4">
          <h2 className="text-lg font-medium text-gray-900">All companies</h2>
        </div>
        <CompaniesTable
          columns={activeTab === "Approved" ? approvedColumns : pendingColumns}
          companies={
            activeTab === "Approved" ? approvedCompanies : pendingCompanies
          }
          itemsPerPage={5}
        />
      </div>
    </div>
  );
}

export default CompaniesPage;
