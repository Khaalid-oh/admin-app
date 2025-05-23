"use client";

import React, { useEffect, useState } from "react";
import { User, Send } from "lucide-react";
import TalentCard from "./cards/TalentsCard";
import TalentsSkeleton from "./cards/TalentSkeleton";
import EmptyState from "./cards/EmptyState";
import StatsCard from "./cards/StatsCard";
import { useRouter } from "next/navigation";

interface Talent {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

function TalentsPage() {
  const [loading, setLoading] = useState(true);
  const [invitedTalents, setInvitedTalents] = useState<Talent[]>([]);
  const [eliteTalents, setEliteTalents] = useState<Talent[]>([]);
  const [stats, setStats] = useState({
    totalInvited: 0,
    totalNetwork: 0,
    pendingApplications: 0,
  });
  const router = useRouter();
  // Simulate API fetch
  useEffect(() => {
    const fetchTalents = async () => {
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Simulate API response
        const response = {
          stats: {
            totalInvited: 50,
            totalNetwork: 1200,
            pendingApplications: 30,
          },
          invitedTalents: [
            {
              id: "1",
              name: "Kamilat Adeniji",
              role: "Product Design",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              id: "2",
              name: "Wade Cooper",
              role: "Software Engineer",
              avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              id: "3",
              name: "Shalewa Benson",
              role: "Business Analyst",
              avatar: "https://randomuser.me/api/portraits/women/40.jpg",
            },
            {
              id: "4",
              name: "Tanya Fox",
              role: "Business Analyst",
              avatar: "https://randomuser.me/api/portraits/women/5.jpg",
            },
          ],
          eliteTalents: [
            {
              id: "5",
              name: "Caroline Williams",
              role: "Product Design",
              avatar: "https://randomuser.me/api/portraits/women/1.jpg",
            },
            {
              id: "6",
              name: "Esther Howard",
              role: "Software Engineer",
              avatar: "https://randomuser.me/api/portraits/women/3.jpg",
            },
            {
              id: "7",
              name: "Cody Fisher",
              role: "Business Analyst",
              avatar: "https://randomuser.me/api/portraits/women/12.jpg",
            },
            {
              id: "8",
              name: "Theresa Webb",
              role: "Business Analyst",
              avatar: "https://randomuser.me/api/portraits/women/4.jpg",
            },
          ],
        };

        setStats(response.stats);
        setInvitedTalents(response.invitedTalents);
        setEliteTalents(response.eliteTalents);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching talents:", error);
        setLoading(false);
      }
    };

    fetchTalents();
  }, []);

  return (
    <div className="w-full p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Talents</h1>
        <p className="text-sm text-gray-500">
          Manage database of our top-tier talents.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard
          icon={<User className="w-6 h-6 text-emerald-600" />}
          title="Total Number of Invited Talents"
          value={stats.totalInvited}
          bgColor="bg-emerald-50"
        />
        <StatsCard
          icon={<User className="w-6 h-6 text-blue-600" />}
          title="Total Talents in Network"
          value={stats.totalNetwork}
          bgColor="bg-blue-50"
        />
        <StatsCard
          icon={<Send className="w-6 h-6 text-orange-600" />}
          title="Pending Talent Application"
          value={stats.pendingApplications}
          bgColor="bg-orange-50"
        />
      </div>

      {loading ? (
        <TalentsSkeleton />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Elite Network Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Elite Network
                </h2>
                <p className="text-sm text-gray-500">
                  View and manage your invited talents
                </p>
              </div>
              <button
                onClick={() => router.push("/dashboard/elite/talents/manage")}
                className="text-blue-600 text-sm font-medium hover:text-blue-700"
              >
                View All
              </button>
            </div>

            {eliteTalents.length === 0 ? (
              <EmptyState
                title="No elite talents yet"
                description="Elite talents will appear here once they join your network"
                icon={<User className="w-12 h-12 text-gray-400" />}
              />
            ) : (
              <div className="space-y-4">
                {eliteTalents.map((talentData) => (
                  <TalentCard
                    talent={talentData}
                    type="invited"
                    key={talentData.id}
                  />
                ))}
              </div>
            )}
          </div>
          {/* Invited Talents Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Invited Talents
                </h2>
                <p className="text-sm text-gray-500">
                  View and manage your invited talents
                </p>
              </div>
              <button
                onClick={() => router.push("/dashboard/elite/talents/manage")}
                className="text-blue-600 text-sm font-medium hover:text-blue-700"
              >
                View All
              </button>
            </div>

            {invitedTalents.length === 0 ? (
              <EmptyState
                title="No invited talents yet"
                description="Start by inviting talents to join your network"
                icon={<User className="w-12 h-12 text-gray-400" />}
              />
            ) : (
              <div className="space-y-4">
                {invitedTalents.map((talentData) => (
                  <TalentCard
                    talent={talentData}
                    type="elite"
                    key={talentData.id}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default TalentsPage;
