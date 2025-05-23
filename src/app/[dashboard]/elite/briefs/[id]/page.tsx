"use client";

import React, { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Search, ChevronRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { talents as mockTalents } from "../../components/mock/talents";
import Link from "next/link";

export interface Talent {
  id: string;
  name: string;
  candidateId: string;
  candidateSource: string;
  country: string;
  role: string;
  applicationDate: string;
  status: string;
  avatar?: string;
  documentStatus?: string;
  sourceContact?: string;
  briefRequest?: string;
  tier?: string;
  projectedTier?: string;
}

const talents: Talent[] = mockTalents;
export interface BulkAssessmentModalProps {
  onClose: () => void;
  selectedTalents: string[];
}

function ActiveBriefsPage() {
  const [selectedTalents, setSelectedTalents] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("All Talents");
  const [showFilters, setShowFilters] = useState(false);
  const router = useRouter();

  const tabs = [
    { name: "All Talents", count: 50 },
    { name: "Interviews", count: 10 },
    { name: "Offers", count: 40 },
    { name: "Rejected", count: 12 },
    ,
  ];

  const initialName = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const filteredTalents = talents.filter(
        (talent) => talent.status === activeTab
      );
      setSelectedTalents(filteredTalents.map((talent) => talent.id));
    } else {
      setSelectedTalents([]);
    }
  };

  const handleSelectTalent = (talentId: string) => {
    setSelectedTalents((prev) =>
      prev.includes(talentId)
        ? prev.filter((id) => id !== talentId)
        : [...prev, talentId]
    );
  };

  const renderStatusBadge = (status: string) => {
    const statusStyles = {
      "Document Uploaded": "text-blue-600 bg-blue-50",
      "Pending review": "text-gray-600 bg-gray-50",
      "Document Signed": "text-green-600 bg-green-50",
      "Document Rejected": "text-red-600 bg-red-50",
      "Pending Assessment": "text-purple-600 bg-purple-50",
      "Additional Questions answered": "text-orange-600 bg-orange-50",
      Approved: "text-green-600 bg-green-50",
      Rejected: "text-red-600 bg-red-50",
    };

    return (
      <span
        className={`px-2 py-1 text-xs font-medium rounded-full ${
          statusStyles[status as keyof typeof statusStyles] || ""
        }`}
      >
        {status}
      </span>
    );
  };

  const filteredTalents = talents.filter((talent) => {
    switch (activeTab) {
      case "All Talents":
        return talent.status === "Applied";
      case "Interviews":
        return talent.status === "Pending";
      case "Offers":
        return talent.status === "Approved";
      case "Rejected":
        return talent.status === "Rejected";
      default:
        return false;
    }
  });

  return (
    <div className="w-full p-6">
      <div className="pt-4 pb-2 bg-white">
        {/* Breadcrumb */}

        <nav
          className="flex items-center text-gray-500 font-medium gap-2 mb-2"
          aria-label="Breadcrumb"
        >
          <Link
            href="/elite/briefs/project-briefs"
            className="hover:underline font-medium text-gray-700"
          >
            Active Briefs
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-500">Product Design</span>
        </nav>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex justify-between items-center mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              title="Search candidates, tags"
              type="text"
              placeholder="Search candidates, tags"
              className="text-gray-500 pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-[300px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium border rounded-sm bg-white text-blue-600 border-blue-600">
              <MessageCircle className="w-4 h-4" />
              Chat with company
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-sm hover:bg-blue-700">
              View Brief
            </button>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Product Design
          </h1>
          <p className="text-sm text-gray-500">
            Manage database of our top-tier talents.
          </p>
        </div>
      </div>

      <TabGroup
        selectedIndex={tabs.findIndex((tab) => tab?.name === activeTab)}
        onChange={(index) => setActiveTab(tabs[index]?.name || "")}
      >
        <TabList className="flex space-x-4 border-b border-gray-200">
          {tabs.map((tab) => (
            <Tab
              key={tab?.name}
              className={({ selected }) =>
                `py-4 px-1 text-sm font-medium border-b-2 focus:outline-none ${
                  selected
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
                }`
              }
            >
              {({ selected }) => (
                <>
                  {tab?.name}{" "}
                  <span
                    className={`ml-2 text-xs p-1 rounded-full ${
                      selected
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-400 bg-gray-100"
                    }`}
                  >
                    {tab?.count}
                  </span>
                </>
              )}
            </Tab>
          ))}
        </TabList>

        <div className="mt-4">
          <TabPanels>
            {tabs.map((tab) => (
              <TabPanel
                key={tab?.name}
                className="bg-white rounded-lg border border-gray-200"
              >
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left">
                        <input
                          title="Select all talents"
                          type="checkbox"
                          onChange={handleSelectAll}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Talent name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Candidate Source
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Country
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Application Date
                      </th>
                      {(activeTab === "Pending" ||
                        activeTab === "Approved" ||
                        activeTab === "Rejected") && (
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {activeTab === "Pending"
                            ? "Document Status"
                            : "Status"}
                        </th>
                      )}
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredTalents.map((talent) => (
                      <tr key={talent.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            title={`Select ${talent.name}`}
                            type="checkbox"
                            checked={selectedTalents.includes(talent.id)}
                            onChange={() => handleSelectTalent(talent.id)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-50"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              {talent.avatar ? (
                                <Image
                                  width={40}
                                  height={40}
                                  className="h-10 w-10 rounded-full"
                                  src={talent.avatar}
                                  alt=""
                                />
                              ) : (
                                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                                  {initialName(talent.name)}
                                </div>
                              )}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {talent.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {talent.candidateId}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {talent.candidateSource}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {talent.country}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {talent.role}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {talent.applicationDate}
                        </td>
                        {(activeTab === "Pending" ||
                          activeTab === "Approved" ||
                          activeTab === "Rejected") && (
                          <td className="px-6 py-4 whitespace-nowrap">
                            {activeTab === "Pending" &&
                              renderStatusBadge(talent.documentStatus || "")}
                            {activeTab === "Approved" &&
                              renderStatusBadge("Approved")}
                            {activeTab === "Rejected" &&
                              renderStatusBadge("Rejected")}
                          </td>
                        )}
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() =>
                              router.push(`/elite/applications/${talent.id}`)
                            }
                            className="text-blue-600 hover:text-blue-900"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TabPanel>
            ))}
          </TabPanels>
        </div>
      </TabGroup>

      {/* Filter Panel */}
      {showFilters && (
        <div className="fixed inset-y-0 right-0 w-80 bg-white shadow-xl p-6 transform transition-transform duration-300 ease-in-out">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium">Filters</h3>
            <button
              onClick={() => setShowFilters(false)}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Close</span>×
            </button>
          </div>
          {/* Add filter options here */}
        </div>
      )}
    </div>
  );
}

export default ActiveBriefsPage;
