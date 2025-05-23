// src/app/[dashboard]/companies/components/CompaniesTable.tsx
import React, { useState } from "react";
import { Company } from "../../components/types/metrics";
import Image from "next/image";
import { Talent } from "../../components/types/metrics";
import Link from "next/link";

interface TalentsTableProps {
  talents: Talent[];
  columns: {
    id: string;
    header: string;
    render: (talent: Talent) => React.ReactNode;
    className?: string;
  }[];
  itemsPerPage?: number;
}

export const approvedColumns = [
  {
    id: "select",
    header: "",
    render: () => <input type="checkbox" title="Select" placeholder="Select" />,
  },
  {
    id: "companyName",
    header: "Company Name",
    render: (company: Company) => (
      <div className="flex items-center gap-2">
        <Image
          width={24}
          height={24}
          src={company?.avatarUrl || ""}
          alt={company.name}
          className="w-6 h-6 rounded-full"
        />
        <div>
          <div className="font-medium">{company.name}</div>
          <div className="text-xs text-gray-400">{company.code}</div>
        </div>
      </div>
    ),
  },
  {
    id: "location",
    header: "Location",
    render: (company: Company) => company.location,
  },
  {
    id: "industry",
    header: "Industry",
    render: (company: Company) => (
      <span
        className={`px-2 py-0.5 rounded-full text-xs font-medium ${company.industryColor}`}
      >
        {company.industry}
      </span>
    ),
  },
  {
    id: "jobsPosted",
    header: "No of Jobs Posted",
    render: (company: Company) => company.jobsPosted,
  },
  {
    id: "hiredTalents",
    header: "Hired Talents",
    render: (company: Company) => company.hiredTalents,
  },
  {
    id: "actions",
    header: "",
    render: () => (
      <button>
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4a2 2 0 012 2v2H7V5a2 2 0 012-2z"
          />
        </svg>
      </button>
    ),
  },
];

export const pendingColumns = [
  {
    id: "select",
    header: "",
    render: () => <input type="checkbox" title="Select" placeholder="Select" />,
  },
  {
    id: "companyName",
    header: "Company Name",
    render: (company: Company) => (
      <span className="font-medium">{company.name}</span>
    ),
  },
  {
    id: "createdBy",
    header: "Created By",
    render: (company: Company) => company.createdBy,
  },
  {
    id: "email",
    header: "Email Address",
    render: (company: Company) => company.email,
  },
  {
    id: "reminder",
    header: "",
    render: () => (
      <button className="text-blue-500 hover:underline">Send Reminder</button>
    ),
  },
];

export const talentsColumns = [
  {
    id: "select",
    header: "",
    render: () => <input type="checkbox" title="Select" />,
  },
  {
    id: "name",
    header: "Name",
    render: (talent: Talent) => (
      <div className="flex items-center gap-2">
        {talent.avatarUrl ? (
          <Image
            width={36}
            height={36}
            src={talent.avatarUrl}
            alt={talent.name}
            className="w-9 h-9 rounded-full"
          />
        ) : (
          <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">
            {talent.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        )}
        <div>
          <div className="font-medium">{talent.name}</div>
          <div className="text-xs text-gray-400">{talent.code}</div>
        </div>
      </div>
    ),
  },
  {
    id: "location",
    header: "Location",
    render: (talent: Talent) => talent.location,
  },
  {
    id: "experienceLevel",
    header: "Experience Level",
    render: (talent: Talent) => talent.experienceLevel,
  },
  {
    id: "status",
    header: "Status",
    render: (talent: Talent) => (
      <span
        className={`px-2 py-0.5 rounded-full text-xs font-medium ${
          talent.status === "Verified"
            ? "bg-green-100 text-green-700"
            : "bg-gray-100 text-gray-500"
        }`}
      >
        {talent.status}
      </span>
    ),
  },
  {
    id: "jobsApplication",
    header: "Jobs Application",
    render: (talent: Talent) => talent.jobsApplication,
  },
  {
    id: "actions",
    header: "",
    render: (talent: Talent) => (
      <Link href={`/dashboard/talents/${talent.id}`}>
        <button className="text-blue-500 hover:underline">View</button>
      </Link>
    ),
  },
];

const TalentsTable: React.FC<TalentsTableProps> = ({
  talents,
  columns,
  itemsPerPage = 5,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTalents, setSelectedTalents] = useState<Set<string>>(
    new Set()
  );

  const totalPages = Math.ceil(talents.length / itemsPerPage);
  const paginatedTalents = talents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const newSelected = new Set(paginatedTalents.map((talent) => talent.id));
      setSelectedTalents(newSelected);
    } else {
      setSelectedTalents(new Set());
    }
  };

  const handleSelectTalent = (talentId: string, checked: boolean) => {
    const newSelected = new Set(selectedTalents);
    if (checked) {
      newSelected.add(talentId);
    } else {
      newSelected.delete(talentId);
    }
    setSelectedTalents(newSelected);
  };

  const isAllSelected =
    paginatedTalents.length > 0 &&
    paginatedTalents.every((talent) => selectedTalents.has(talent.id));

  if (!talents.length) {
    return (
      <p className="text-center text-gray-500 py-8 text-sm">
        No talents found for this category.
      </p>
    );
  }

  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden text-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((col, index) => (
                <th
                  key={col.id}
                  className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                    col.className || ""
                  }`}
                >
                  {index === 0 ? (
                    <input
                      type="checkbox"
                      checked={isAllSelected}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                      title="Select All"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  ) : (
                    col.header
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedTalents.map((talent) => (
              <tr key={talent.id} className="hover:bg-gray-50">
                {columns.map((col, index) => (
                  <td
                    key={col.id}
                    className={`px-6 py-4 whitespace-nowrap ${
                      col.className || ""
                    }`}
                  >
                    {index === 0 ? (
                      <input
                        type="checkbox"
                        checked={selectedTalents.has(talent.id)}
                        onChange={(e) =>
                          handleSelectTalent(talent.id, e.target.checked)
                        }
                        title="Select"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                    ) : (
                      col.render(talent)
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div>
          <p className="text-sm text-gray-700">
            Page <span className="font-medium">{currentPage}</span> of{" "}
            <span className="font-medium">{totalPages}</span>
          </p>
        </div>
        <div>
          <nav className="flex gap-4 text-gray-500" aria-label="Pagination">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-3 py-2 rounded border border-gray-300 bg-white text-sm font-medium hover:bg-gray-50"
            >
              Previous
            </button>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              className="relative inline-flex items-center px-3 py-2 rounded-sm border border-gray-300 bg-white text-sm font-medium hover:bg-gray-50"
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TalentsTable;
