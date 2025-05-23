// src/app/[dashboard]/components/RecentActivitiesComponent.tsx
import React from "react";
import { UserPlus, UserCheck, FileText, MessageSquare } from "lucide-react";

// Mock data for recent activities
const activities = [
  {
    id: 1,
    icon: <UserPlus className="w-5 h-5 text-blue-500" />,
    title: "New Talent Onboarded",
    description: "John Doe joined the team as a Software Engineer.",
    timestamp: "2 hours ago",
    type: "onboarding",
  },
  {
    id: 2,
    icon: <UserCheck className="w-5 h-5 text-green-500" />,
    title: "Interview Completed",
    description: "Interview with Jane Smith for Product Manager role.",
    timestamp: "5 hours ago",
    type: "interview",
  },
  {
    id: 3,
    icon: <FileText className="w-5 h-5 text-purple-500" />,
    title: "Document Updated",
    description: "Updated the onboarding guide for new hires.",
    timestamp: "1 day ago",
    type: "document",
  },
  {
    id: 4,
    icon: <MessageSquare className="w-5 h-5 text-orange-500" />,
    title: "New Message",
    description: "Received a message from the recruitment team.",
    timestamp: "2 days ago",
    type: "message",
  },
];

const RecentActivitiesComponent = () => {
  return (
    <div className="bg-white rounded-xl shadow border border-gray-200 p-6 text-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Recent Activities</h2>
        <a href="#" className="text-sm text-blue-500 hover:underline">
          View all
        </a>
      </div>
      <div className="flex flex-col gap-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition"
          >
            <div className="mt-1">{activity.icon}</div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">{activity.title}</span>
                <span className="text-xs text-gray-500">
                  {activity.timestamp}
                </span>
              </div>
              <p className="text-sm text-gray-600">{activity.description}</p>
            </div>
            <div
              className={`w-2 h-2 rounded-full ${
                activity.type === "onboarding"
                  ? "bg-blue-500"
                  : activity.type === "interview"
                  ? "bg-green-500"
                  : activity.type === "document"
                  ? "bg-purple-500"
                  : "bg-orange-500"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivitiesComponent;
