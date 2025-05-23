"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Lock, MessageCircle } from "lucide-react";
import Image from "next/image";

// Mock Data
const payments = [
  { label: "Pending Approval", amount: 2500, timesheets: 2 },
  { label: "Payments Due", amount: 500, invoices: 3 },
];

const tasks = [
  {
    id: 1,
    status: "Pending Invoice",
    desc: "Invoice #128 for 02/03/25–30/03/25",
  },
  {
    id: 2,
    status: "Pending Invoice",
    desc: "Invoice #128 for 02/03/25–30/03/25",
  },
  {
    id: 3,
    status: "Pending Invoice",
    desc: "Invoice #128 for 02/03/25–30/03/25",
  },
];

const documents = [
  {
    id: 1,
    status: "Pending Talent Signature",
    title: "Agreement Contract",
    created: "5th August 2025",
  },
  {
    id: 2,
    status: "Pending Company Signature",
    title: "Company Rate agreement",
    created: "5th August 2025",
  },
];

const team = [
  {
    name: "Ronke Olumuyiwa",
    role: "Project Manager",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ronke Olumuyiwa",
    role: "Sales Consultant",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Olu Randle",
    role: "Project Designer",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    name: "Olu Randle",
    role: "Project Designer",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
  },
];

const timesheets = [
  {
    name: "Femi Ojo",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    submissions: 3,
  },
  {
    name: "Olu Randle",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    submissions: 3,
  },
  {
    name: "Irene Manzy",
    avatar: "",
    submissions: 3,
  },
  {
    name: "Irene Manzy",
    avatar: "",
    submissions: 3,
  },
];

const TABS = [
  "Overview",
  "Project Team",
  "Timesheets",
  "Invoices",
  "Remittance",
  "Documents",
];

export default function ProjectActivePage() {
  const [tab, setTab] = useState("Overview");

  return (
    <div className="w-full p-6 text-gray-800 text-sm">
      {/* Breadcrumb */}
      <nav
        className="flex items-center text-gray-500 font-medium gap-2 mb-2"
        aria-label="Breadcrumb"
      >
        <Link
          href="/elite/projects/projects_"
          className="hover:underline font-medium text-gray-700"
        >
          Active Projects
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="hover:underline font-medium text-gray-700">
          Product Design
        </span>
      </nav>

      {/* Title and Actions */}
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="text-3xl font-bold mb-1">Product Design</h1>
          <div className="text-gray-500">
            Manage and track all information related to this project.
          </div>
        </div>
        <div className="flex gap-2">
          <button className="border flex items-center gap-2 border-gray-300 px-4 py-2 rounded text-gray-700 hover:bg-gray-50">
            <Lock className="w-4 h-4" />
            Close Project
          </button>
          <button className="border flex items-center gap-1 border-gray-300 px-4 py-2 rounded text-gray-700 hover:bg-gray-50">
            <MessageCircle className="w-4 h-4" />
            Chat with Company
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View Project Details
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-300 mb-6 mt-4">
        {TABS.map((t) => (
          <button
            key={t}
            className={`py-2 px-1 border-b-2 border-blue-500 font-medium transition ${
              tab === t
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex gap-6">
        {/* Left/Main */}
        <div className="flex-1 space-y-6">
          {tab === "Overview" && (
            <>
              {/* Payments */}
              <div className="flex gap-6">
                {payments.map((p, i) => (
                  <div
                    key={i}
                    className="flex-1 border border-gray-200 rounded-lg p-6 bg-white"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-yellow-100 text-yellow-600 rounded-full p-1">
                        <svg
                          width={20}
                          height={20}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <path
                            d="M12 8v4l3 2"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="font-medium">{p.label}</span>
                    </div>
                    <div className="text-2xl font-bold mb-1">£{p.amount}</div>
                    <div className="text-gray-500 text-xs">
                      {p.timesheets
                        ? `${p.timesheets} Timesheets`
                        : `${p.invoices} Invoices`}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tasks */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-semibold text-lg">Tasks (12)</div>
                    <button className="text-blue-600 text-xs font-medium">
                      View All
                    </button>
                  </div>
                  <div className="space-y-3">
                    {tasks.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-center justify-between border border-gray-200 rounded-lg p-4 bg-white"
                      >
                        <div className="flex items-center gap-3">
                          <span className="bg-green-100 rounded-full p-2">
                            <svg
                              width={20}
                              height={20}
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                              <path
                                d="M9 12l2 2 4-4"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <div>
                            <div className="font-medium">{task.status}</div>
                            <div className="text-xs text-gray-500">
                              {task.desc}
                            </div>
                          </div>
                        </div>
                        <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded font-medium text-xs">
                          Pay Invoice
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Project Team */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-semibold text-lg">
                      Project Team (12)
                    </div>
                    <button className="text-blue-600 text-xs font-medium">
                      View All
                    </button>
                  </div>
                  <div className="space-y-3">
                    {team.map((member, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 border border-gray-200 rounded-lg p-3 bg-white"
                      >
                        <Image
                          src={member.avatar}
                          alt={member.name}
                          width={32}
                          height={32}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-medium">{member.role}</div>
                          <div className="text-xs text-gray-500">
                            {member.name}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Documents & Timesheets */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Documents */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-semibold text-lg">Documents</div>
                    <button className="text-blue-600 text-xs font-medium">
                      View All
                    </button>
                  </div>
                  <div className="space-y-3">
                    {documents.map((doc) => (
                      <div
                        key={doc.id}
                        className="flex items-center justify-between border border-gray-200 rounded-lg p-4 bg-white"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="bg-yellow-50 text-yellow-700 text-xs px-2 py-1 rounded">
                              {doc.status}
                            </span>
                            <span className="font-medium">{doc.title}</span>
                          </div>
                          <div className="text-xs text-gray-500">
                            Created {doc.created}
                          </div>
                        </div>
                        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded font-medium text-xs">
                          View
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Timesheets */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-semibold text-lg">Timesheets (40)</div>
                    <button className="text-blue-600 text-xs font-medium">
                      View All
                    </button>
                  </div>
                  <div className="space-y-3">
                    {timesheets.map((ts, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 border border-gray-300 rounded-lg p-3 bg-white"
                      >
                        {ts.avatar ? (
                          <Image
                            width={32}
                            height={32}
                            src={ts.avatar}
                            alt={ts.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                            {ts.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                        )}
                        <div>
                          <div className="font-medium">{ts.name}</div>
                          <div className="text-xs text-gray-500">
                            {ts.submissions} Timesheet Submissions
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
          {/* You can add more tab content here for Project Team, Timesheets, etc. */}
        </div>
      </div>
    </div>
  );
}
