"use client";

import { useState } from "react";
import { CheckCircle2, ChevronRight, X } from "lucide-react";
import WorkAndCompensation from "../tabs/WorkAndCompensation";
import ApplicationForm from "../tabs/ApplicationForm";
import Endorsements from "../tabs/Endorsements";
import SkillAssessment from "../tabs/SkillAssessment";
import VideoIntroduction from "../tabs/VideoIntroduction";
import Image from "next/image";
import Link from "next/link";

interface CandidateData {
  id: string;
  name: string;
  applicationId: string;
  isVerified: boolean;
  isTested: boolean;
  profileImage: string;
}

const tabs = [
  "Work and Compensation",
  "Application Form",
  "Endorsements",
  "Skill Assessment",
  "Video Introduction",
];

export default function CandidateProfile() {
  const [activeTab, setActiveTab] = useState("Work and Compensation");

  const candidate: CandidateData = {
    id: "A271008",
    name: "Adeniji k",
    applicationId: "A271008",
    isVerified: true,
    isTested: true,
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Work and Compensation":
        return <WorkAndCompensation />;
      case "Application Form":
        return <ApplicationForm />;
      case "Endorsements":
        return <Endorsements />;
      case "Skill Assessment":
        return <SkillAssessment />;
      case "Video Introduction":
        return <VideoIntroduction />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-800">
      {/* Stepper and Breadcrumb */}
      <div className="px-4 pt-4 pb-2 bg-white">
        {/* Breadcrumb */}
        <nav
          className="flex items-center text-gray-500 font-medium gap-2 mb-2"
          aria-label="Breadcrumb"
        >
          <Link
            href="/dashboard/elite"
            className="hover:underline font-medium text-gray-700"
          >
            Elite
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-500">{candidate.name}</span>
        </nav>
      </div>

      {/* Header */}
      <div className="relative">
        {/* Banner Image */}
        <Image
          src="/cover-image.png"
          alt="Banner"
          width={1920}
          height={192}
          className="h-48 w-full object-cover"
          priority
        />

        {/* Profile Section */}
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Profile Image */}
            <div className="relative -mt-20">
              <Image
                width={100}
                height={100}
                src={candidate?.profileImage}
                alt={candidate.name}
                className="w-32 h-32 rounded-full border-4 border-white"
              />
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
            </div>

            {/* Candidate Info */}
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-semibold">{candidate.name}</h1>
                {candidate.isVerified && (
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                )}
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <span>{candidate.applicationId}</span>
                {candidate.isTested && (
                  <span className="flex items-center px-2 py-1 bg-green-50 text-green-700 text-sm rounded">
                    <CheckCircle2 className="w-4 h-4 mr-1" /> Tested
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Approve Candidate
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              Request Information
            </button>
            <button
              className="p-2 hover:bg-gray-100 rounded-md"
              title="Reject Candidate"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-6 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  py-4 px-1 border-b-2 font-medium text-sm
                  ${
                    activeTab === tab
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-6 py-6">{renderTabContent()}</div>
    </div>
  );
}
