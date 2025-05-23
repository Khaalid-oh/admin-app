/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { ChartBar, ChevronRight, File, Filter, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  newBriefs,
  liveBriefs,
  activeBriefs,
} from "../../components/mock/talents";
import ProjectBriefModal from "./ProjectBriefModal";

// Utility to slugify the title for URL
function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

export default function BriefsPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState("Project Briefs");
  const [projectTab, setProjectTab] = useState<"New Briefs" | "Live Briefs">(
    "New Briefs"
  );
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBrief, setSelectedBrief] = useState<any>(null);
  const router = useRouter();

  const tabs = [{ name: "Project Briefs" }, { name: "Active Briefs" }];

  const filteredNewBriefs = newBriefs.filter((brief) =>
    brief.title.toLowerCase().includes(search.toLowerCase())
  );
  const filteredLiveBriefs = liveBriefs.filter((brief) =>
    brief.title.toLowerCase().includes(search.toLowerCase())
  );
  const filteredActiveBriefs = activeBriefs.filter((brief) =>
    brief.title.toLowerCase().includes(search.toLowerCase())
  );

  function handleViewBrief(brief: any, section: string) {
    if (section === "Project Briefs") {
      setSelectedBrief(brief);
      setModalOpen(true);
    } else if (section === "Active Briefs") {
      router.push(`/elite/briefs/${slugify(brief.title)}`);
    }
  }

  return (
    <div className="w-full p-6 text-gray-800 text-sm">
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
            Briefs
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-500">{activeTab}</span>
        </nav>
      </div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            {activeTab === "Project Briefs" ? "Project Brief" : "Elite Network"}
          </h1>
          <p className="text-sm text-gray-500">
            {activeTab === "Project Briefs"
              ? "Manage projects assigned to talents within the elite network."
              : "Manage database of our top-tier talents."}
          </p>
        </div>
      </div>
      <TabGroup
        selectedIndex={tabs.findIndex((tab) => tab.name === activeTab)}
        onChange={(index) => setActiveTab(tabs[index].name)}
      >
        <TabList className="flex space-x-4 border-b border-gray-200">
          {tabs.map((tab) => (
            <Tab
              key={tab.name}
              className={({ selected }) =>
                `flex items-center py-4 px-1 text-sm font-medium border-b-2 focus:outline-none ${
                  selected
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
                }`
              }
            >
              {tab.name === "Project Briefs" && (
                <File className="w-4 h-4 mr-2" />
              )}
              {tab.name === "Active Briefs" && (
                <ChartBar className="w-4 h-4 mr-2" />
              )}
              {tab.name}
            </Tab>
          ))}
        </TabList>
        <div className="mt-4">
          <div className="flex justify-between items-center mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                title="Search briefs"
                type="text"
                placeholder="Search briefs"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="text-gray-500 pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-[300px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </button>
          </div>
          {/* Project Brief Sub-tabs */}
          {activeTab === "Project Briefs" && (
            <div className="mb-6">
              <div className="flex space-x-4 mb-6">
                <button
                  onClick={() => setProjectTab("New Briefs")}
                  className={`px-4 py-2 text-sm font-medium ${
                    projectTab === "New Briefs"
                      ? "bg-blue-50 text-blue-600 border-b border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  New Briefs
                  <span
                    className={`ml-2 bg-gray-100 px-2 py-1 rounded-full ${
                      projectTab === "New Briefs"
                        ? "bg-blue-50 text-blue-600"
                        : ""
                    }`}
                  >
                    50
                  </span>
                </button>
                <button
                  onClick={() => setProjectTab("Live Briefs")}
                  className={`px-4 py-2 text-sm font-medium ${
                    projectTab === "Live Briefs"
                      ? "bg-blue-50 text-blue-600 border-b border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Live Briefs
                  <span
                    className={`ml-2 bg-gray-100 px-2 py-1 rounded-full ${
                      projectTab === "Live Briefs"
                        ? "bg-blue-50 text-blue-600"
                        : ""
                    }`}
                  >
                    100
                  </span>
                </button>
              </div>
            </div>
          )}
          <TabPanels>
            {/* Project Briefs Tab */}
            <TabPanel className="bg-white rounded-lg border border-gray-200">
              {activeTab === "Project Briefs" && (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                        Brief Title
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                        Date Sent
                      </th>
                      {projectTab === "Live Briefs" && (
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                          Talents Briefed
                        </th>
                      )}
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                        Sent By
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {(projectTab === "New Briefs"
                      ? filteredNewBriefs
                      : filteredLiveBriefs
                    ).map((brief) => (
                      <tr key={brief.id}>
                        <td className="px-6 py-4 whitespace-nowrap flex flex-col items-start">
                          {brief.title}
                          <div className="text-gray-500 text-xs">
                            {brief.id}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {brief.dateSent}
                        </td>
                        {projectTab === "Live Briefs" &&
                          typeof (brief as any).talentsBriefed !==
                            "undefined" && (
                            <td className="px-6 py-4 whitespace-nowrap">
                              {(brief as any).talentsBriefed}
                            </td>
                          )}
                        <td className="px-6 py-4 whitespace-nowrap">
                          {brief.sentBy}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() =>
                              handleViewBrief(brief, "Project Briefs")
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
              )}
            </TabPanel>
            {/* Active Briefs Tab */}
            <TabPanel className="bg-white rounded-lg border border-gray-200">
              {activeTab === "Active Briefs" && (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                        Brief Title
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                        Date Sent
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                        Accepted Talents
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                        Hired Talents
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                        Sent By
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredActiveBriefs.map((brief) => (
                      <tr key={brief.id}>
                        <td className="px-6 py-4 whitespace-nowrap flex flex-col items-start">
                          {brief.title}
                          <div className="text-gray-500 text-xs">
                            {brief.id}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {brief.dateSent}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {brief.acceptedTalents}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {brief.hiredTalents}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {brief.sentBy}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() =>
                              handleViewBrief(brief, "Active Briefs")
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
              )}
            </TabPanel>
          </TabPanels>
        </div>
      </TabGroup>
      <ProjectBriefModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        brief={selectedBrief}
      />
    </div>
  );
}
