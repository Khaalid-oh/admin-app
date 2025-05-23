"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

// Dummy data for demonstration
const PROJECTS = {
  Onboarding: [
    {
      title: "Product Design",
      id: "90011",
      date: "22/02/2022",
      talents: 4,
      sender: "My Digital Booth",
    },
    {
      title: "Business Analysis",
      id: "81178",
      date: "22/02/2022",
      talents: 5,
      sender: "Tedbree",
    },
    {
      title: "Product Design",
      id: "66911",
      date: "22/02/2022",
      talents: 15,
      sender: "Deji Smooth",
    },
    {
      title: "Product Management",
      id: "66911",
      date: "22/02/2022",
      talents: 15,
      sender: "Femi Ojo",
    },
    {
      title: "Solutions Architect",
      id: "66911",
      date: "22/02/2022",
      talents: 15,
      sender: "Samuel Osemeke",
    },
  ],
  Active: [
    {
      title: "Product Design",
      id: "90011",
      date: "22/02/2022",
      talents: 4,
      sender: "My Digital Booth",
    },
    {
      title: "Business Analysis",
      id: "81178",
      date: "22/02/2022",
      talents: 5,
      sender: "Tedbree",
    },
    {
      title: "Product Design",
      id: "66911",
      date: "22/02/2022",
      talents: 15,
      sender: "Deji Smooth",
    },
    {
      title: "Product Management",
      id: "66911",
      date: "22/02/2022",
      talents: 15,
      sender: "Femi Ojo",
    },
    {
      title: "Solutions Architect",
      id: "66911",
      date: "22/02/2022",
      talents: 15,
      sender: "Samuel Osemeke",
    },
  ],
  Closed: [
    {
      title: "Product Design",
      id: "90011",
      date: "22/02/2022",
      talents: 4,
      sender: "My Digital Booth",
      closed: "22/02/2022",
    },
    {
      title: "Business Analysis",
      id: "81178",
      date: "22/02/2022",
      talents: 5,
      sender: "Tedbree",
      closed: "22/02/2022",
    },
    {
      title: "Product Design",
      id: "66911",
      date: "22/02/2022",
      talents: 15,
      sender: "Deji Smooth",
      closed: "22/02/2022",
    },
    {
      title: "Product Management",
      id: "66911",
      date: "22/02/2022",
      talents: 15,
      sender: "Femi Ojo",
      closed: "22/02/2022",
    },
    {
      title: "Solutions Architect",
      id: "66911",
      date: "22/02/2022",
      talents: 15,
      sender: "Samuel Osemeke",
      closed: "22/02/2022",
    },
  ],
};

type Project = {
  title: string;
  id: string;
  date: string;
  talents: number;
  sender: string;
  closed?: string;
};

const TABS = [
  { label: "Onboarding", count: 50 },
  { label: "Active", count: 100 },
  { label: "Closed", count: 100 },
];

function ProjectsTable({ type, data }: { type: string; data: Project[] }) {
  return (
    <div className="bg-white rounded-lg shadow py-4 mt-4 w-full">
      <div className="font-semibold text-lg mb-2 px-6">
        {type} {type === "Closed" ? "Projects" : ""}
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr className="">
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Brief Title
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Date Created
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Hired Talents
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Sent by
            </th>
            {type === "Closed" && (
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date Closed
              </th>
            )}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((proj: Project, idx: number) => (
            <tr key={idx} className="border-b last:border-0 border-gray-200">
              <td className="py-4 px-6">
                <div className="font-medium">{proj.title}</div>
                <div className="text-xs text-gray-500">{proj.id}</div>
              </td>
              <td className="py-4 px-6">{proj.date}</td>
              <td className="py-4 px-6">{proj.talents}</td>
              <td className="py-4 px-6">{proj.sender}</td>
              {type === "Closed" && (
                <td className="py-4 px-6">{proj.closed}</td>
              )}
              <td className="py-4 px-6">
                <a
                  href={`/elite/projects/projects_/active/`}
                  className="text-blue-600 font-medium"
                >
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className="flex justify-between items-center mt-4 text-sm text-gray-500 px-6">
        <span>Page 1 of 10</span>
        <div>
          <button className="border rounded px-3 py-1 mr-2">Previous</button>
          <button className="border rounded px-3 py-1">Next</button>
        </div>
      </div> */}
    </div>
  );
}

export default function ProjectsPage() {
  const [tab, setTab] = useState("Onboarding");
  const [search, setSearch] = useState("");

  // Filtered data (add real search logic as needed)
  const filteredData = PROJECTS[tab as keyof typeof PROJECTS].filter(
    (pro: Project) =>
      pro.title.toLowerCase().includes(search.toLowerCase()) ||
      pro.id.includes(search)
  );

  return (
    <div className="w-full text-gray-800 text-sm p-6">
      <div className="pt-4 pb-2 bg-white">
        {/* Breadcrumb */}
        <nav
          className="flex items-center text-gray-500 font-medium gap-2 mb-2"
          aria-label="Breadcrumb"
        >
          <Link
            href="/elite/talents"
            className="hover:underline font-medium text-gray-700"
          >
            Talents
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-500">Project Dashboard</span>
        </nav>
      </div>
      {/* Title */}
      <h1 className="text-2xl font-bold mb-1">Projects</h1>
      <div className="text-gray-500 mb-4">Manage and track your projects.</div>
      {/* Search and Filters */}
      <div className="flex items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search Briefs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-72"
        />
        <button className="border border-gray-300 flex items-center gap-1 px-4 py-2 rounded">
          <span>Filters</span>
        </button>
      </div>
      {/* Tabs */}
      <div className="flex gap-2 mb-2">
        {TABS.map((t) => (
          <button
            key={t.label}
            className={`px-4 py-2 border-b-2 ${
              tab === t.label
                ? "border-blue-500 bg-blue-50 text-blue-600"
                : "border-transparent bg-gray-50 text-gray-600"
            }`}
            onClick={() => setTab(t.label)}
          >
            {t.label}{" "}
            <span className="ml-1 text-xs bg-gray-100 px-2 py-0.5 rounded">
              {t.count}
            </span>
          </button>
        ))}
      </div>
      {/* Table */}
      <ProjectsTable type={tab} data={filteredData} />
    </div>
  );
}
