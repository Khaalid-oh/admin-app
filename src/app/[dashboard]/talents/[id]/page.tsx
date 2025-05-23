"use client";

import Image from "next/image";
import React, { useState } from "react";
import { mockTalentProfile } from "../../components/mock/mock";

function TalentsProfilePage() {
  const [activeTab, setActiveTab] = useState<
    "Profile" | "Jobs Applied" | "Portfolio"
  >("Profile");

  // ...mockTalentProfile as above...

  return (
    <div className="w-full scroll-smooth">
      {/* Banner and Avatar */}
      <div className="relative">
        <div
          className="h-40 bg-gray-200 w-full"
          style={{
            backgroundImage: "url('/profile_cover.png')",
            backgroundSize: "cover",
          }}
        />
        <div className="absolute left-8 -bottom-20 flex items-center">
          <Image
            width={96}
            height={96}
            src={mockTalentProfile.avatarUrl}
            alt={mockTalentProfile.name}
            className="w-24 h-24 rounded-full -translate-y-2 border-4 border-white object-cover"
          />
          <div className="ml-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold">
                {mockTalentProfile.name}
              </span>
              {mockTalentProfile.verified && (
                <span title="Verified" className="text-blue-500">
                  <svg
                    className="w-5 h-5 inline"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
                  </svg>
                </span>
              )}
              {mockTalentProfile.tested && (
                <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded ml-2">
                  Tested
                </span>
              )}
            </div>
            <div className="text-gray-500">{mockTalentProfile.id}</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-16 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8 px-8" aria-label="Tabs">
          {["Profile", "Jobs Applied", "Portfolio"].map((tab) => (
            <button
              key={tab}
              onClick={() =>
                setActiveTab(tab as "Profile" | "Jobs Applied" | "Portfolio")
              }
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-8">
        {activeTab === "Profile" && (
          <div className="space-y-6">
            {/* Personal Information */}
            <section className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="font-semibold mb-2">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <div className="text-xs text-gray-400">Full name</div>
                  <div>{mockTalentProfile.personal.fullName}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Date of Birth</div>
                  <div>{mockTalentProfile.personal.dateOfBirth}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Country of Origin</div>
                  <div>
                    <span className="mr-1">
                      {mockTalentProfile.personal.countryFlag}
                    </span>
                    {mockTalentProfile.personal.country}
                  </div>
                </div>
              </div>
            </section>
            {/* Home Address */}
            <section className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="font-semibold mb-2">Home Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <div className="text-xs text-gray-400">Address</div>
                  <div>{mockTalentProfile.address.address}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">City</div>
                  <div>{mockTalentProfile.address.city}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Country</div>
                  <div>
                    <span className="mr-1">
                      {mockTalentProfile.address.countryFlag}
                    </span>
                    {mockTalentProfile.address.country}
                  </div>
                </div>
              </div>
            </section>
            {/* Work Experience */}
            <section className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="font-semibold mb-2">Work Experience</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-gray-400">Full name</div>
                  <div>{mockTalentProfile.work.fullName}</div>
                  <div className="text-xs text-gray-400 mt-2">Relationship</div>
                  <div>{mockTalentProfile.work.relationship}</div>
                  <div className="text-xs text-gray-400 mt-2">Email</div>
                  <div>{mockTalentProfile.work.email}</div>
                  <div className="text-xs text-gray-400 mt-2">Phone number</div>
                  <div>{mockTalentProfile.work.phone}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Responsibility</div>
                  <ul className="list-disc ml-5">
                    {mockTalentProfile.work.responsibility.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="text-xs text-gray-400 mt-2">
                    Project Description
                  </div>
                  <div>{mockTalentProfile.work.projectDescription}</div>
                </div>
              </div>
            </section>
            {/* Education */}
            <section className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="font-semibold mb-2">Education</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <div className="text-xs text-gray-400">School Name</div>
                  <div>{mockTalentProfile.education.school}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Course</div>
                  <div>{mockTalentProfile.education.course}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Start Date</div>
                  <div>{mockTalentProfile.education.startDate}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">End Date</div>
                  <div>{mockTalentProfile.education.endDate}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Degree</div>
                  <div>{mockTalentProfile.education.degree}</div>
                </div>
              </div>
            </section>
            {/* Referees */}
            <section className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="font-semibold mb-2">Referees</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <div className="text-xs text-gray-400">Title</div>
                  <div>{mockTalentProfile.referee.title}</div>
                  <div className="text-xs text-gray-400 mt-2">First Name</div>
                  <div>{mockTalentProfile.referee.firstName}</div>
                  <div className="text-xs text-gray-400 mt-2">Last Name</div>
                  <div>{mockTalentProfile.referee.lastName}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Email</div>
                  <div>{mockTalentProfile.referee.email}</div>
                  <div className="text-xs text-gray-400 mt-2">Phone</div>
                  <div>{mockTalentProfile.referee.phone}</div>
                  <div className="text-xs text-gray-400 mt-2">Company</div>
                  <div>{mockTalentProfile.referee.company}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Known for</div>
                  <div>{mockTalentProfile.referee.knownFor}</div>
                </div>
              </div>
            </section>
          </div>
        )}
        {activeTab === "Jobs Applied" && (
          <div>
            {/* Replace with jobs applied table or content */}
            <p>Jobs Applied content goes here.</p>
          </div>
        )}
        {activeTab === "Portfolio" && (
          <div>
            {/* Replace with portfolio content */}
            <p>Portfolio content goes here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TalentsProfilePage;
