"use client";

import React, { useEffect, useState } from "react";
import { User, Briefcase, ArrowRight } from "lucide-react";
import { PieChart } from "./charts/PieChart";
import BriefsSkeleton from "./charts/BriefsSkeleton";
import EmptyState from "./charts/EmptyState";
import { useRouter } from "next/navigation";

interface Brief {
  id: string;
  role: string;
  suggestions?: number;
}

interface BriefsStats {
  totalBriefs: number;
  activeBriefs: number;
  sentBriefs: number;
  allBriefs: number;
}

function Briefs() {
  const [loading, setLoading] = useState(true);
  const [projectBriefs, setProjectBriefs] = useState<Brief[]>([]);
  const [activeBriefs, setActiveBriefs] = useState<Brief[]>([]);
  const [stats, setStats] = useState<BriefsStats>({
    totalBriefs: 0,
    activeBriefs: 0,
    sentBriefs: 0,
    allBriefs: 0,
  });
  const router = useRouter();

  // Simulate API fetch
  useEffect(() => {
    const fetchBriefs = async () => {
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Simulate API response
        const response = {
          stats: {
            totalBriefs: 240,
            activeBriefs: 28,
            sentBriefs: 50,
            allBriefs: 100,
          },
          projectBriefs: [
            { id: "1", role: "Product Designer", suggestions: 12 },
            { id: "2", role: "Sales Consultant", suggestions: 12 },
          ],
          activeBriefs: [
            { id: "3", role: "Product Designer" },
            { id: "4", role: "Sales Consultant" },
          ],
        };

        setStats(response.stats);
        setProjectBriefs(response.projectBriefs);
        setActiveBriefs(response.activeBriefs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching briefs:", error);
        setLoading(false);
      }
    };

    fetchBriefs();
  }, []);

  const handleViewAll = () => {
    router.push("/dashboard/elite/briefs/project-briefs");
  };

  return (
    <div className="w-full p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Briefs</h1>
        <p className="text-sm text-gray-500">
          Manage briefs assigned to talents within the elite network.
        </p>
      </div>

      {loading ? (
        <BriefsSkeleton />
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Project Briefs Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Project Briefs ({projectBriefs.length})
                  </h2>
                  <p className="text-sm text-gray-500">
                    View and manage your recent briefs
                  </p>
                </div>
                <button
                  onClick={handleViewAll}
                  className="text-blue-600 text-sm font-medium hover:text-blue-700"
                >
                  View All
                </button>
              </div>

              {projectBriefs.length === 0 ? (
                <EmptyState
                  title="No project briefs"
                  description="Create your first project brief to get started"
                  icon={<Briefcase className="w-12 h-12 text-gray-400" />}
                />
              ) : (
                <div className="space-y-4">
                  {projectBriefs.map((brief) => (
                    <div
                      key={brief.id}
                      className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          <User className="w-5 h-5 text-gray-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          {brief.role}
                        </span>
                      </div>
                      <span className="text-xs bg-green-50 text-emerald-600 font-medium px-2 py-1 rounded-lg">
                        {brief.suggestions} Suggestions
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Active Briefs Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Active Briefs ({activeBriefs.length})
                  </h2>
                  <p className="text-sm text-gray-500">
                    View and manage your active projects
                  </p>
                </div>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                  View All
                </button>
              </div>

              {activeBriefs.length === 0 ? (
                <EmptyState
                  title="No active briefs"
                  description="Active briefs will appear here"
                  icon={<Briefcase className="w-12 h-12 text-gray-400" />}
                />
              ) : (
                <div className="space-y-4">
                  {activeBriefs.map((brief) => (
                    <div
                      key={brief.id}
                      className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          <User className="w-5 h-5 text-gray-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          {brief.role}
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Stats Chart Section */}
          <div className="flex justify-center items-center bg-white rounded-lg h-fit border border-gray-200 p-6">
            <PieChart stats={stats} />
          </div>
        </>
      )}
    </div>
  );
}

export default Briefs;
