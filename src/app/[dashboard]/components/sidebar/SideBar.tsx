"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import DashboardIcon from "../icons/dashboard_icon";
import JobIcon from "../icons/job_icon";
import CompanyIcon from "../icons/company_icon";
import TalentIcon from "../icons/talent_icon";
import EliteIcon from "../icons/elite_icon";
import OnboardingIcon from "../icons/onboarding_icon";
import SkillTestIcon from "../icons/skill_test_icon";
import CourseIcon from "../icons/course_icon";
import PlanManagementIcon from "../icons/plan_management_icon";
import FormManagementIcon from "../icons/form_management_icon";
import SettingsIcon from "../icons/settings_icons";
import avatar from "../../../../../public/_avatar.jpg";
import { MoreHorizontal } from "lucide-react";

function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-screen border-r border-gray-200 bg-white w-64">
      {/* Logo */}
      <div className="p-6">
        <Image
          src="/logo.png"
          alt="Tech1M Logo"
          width={80}
          height={27}
          className="h-auto"
        />
      </div>

      <div className="flex-1 px-3">
        {/* Main Navigation Section */}
        <div className="space-y-1">
          <Link
            href="/dashboard"
            className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg group ${
              pathname === "/dashboard"
                ? "text-blue-600 bg-blue-50"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <DashboardIcon
              className={`w-6 h-6 ${
                pathname === "/dashboard"
                  ? "text-blue-600"
                  : "text-gray-500 group-hover:text-gray-500"
              }`}
            />
            <span>Dashboard</span>
          </Link>

          <div className="py-2">
            <p className="px-3 text-sm text-gray-500 font-medium mb-2">
              Manage ATS
            </p>
          </div>

          <Link
            href="/dashboard/jobs"
            className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg group ${
              pathname.includes("/jobs")
                ? "text-blue-600 bg-blue-50"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <JobIcon
              className={`w-6 h-6 ${
                pathname.includes("/jobs")
                  ? "text-blue-600"
                  : "text-gray-500 group-hover:text-gray-500"
              }`}
            />
            <span>Jobs</span>
          </Link>

          <Link
            href="/dashboard/companies"
            className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg group ${
              pathname.includes("/companies")
                ? "text-blue-600 bg-blue-50"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <CompanyIcon
              className={`w-6 h-6 ${
                pathname.includes("/companies")
                  ? "text-blue-600"
                  : "text-gray-500 group-hover:text-gray-500"
              }`}
            />
            <span>Companies</span>
          </Link>

          <Link
            href="/dashboard/talents"
            className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg group ${
              pathname === "/dashboard/talents"
                ? "text-blue-600 bg-blue-50"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <TalentIcon
              className={`w-6 h-6 ${
                pathname === "/dashboard/talents"
                  ? "text-blue-600"
                  : "text-gray-500 group-hover:text-gray-500"
              }`}
            />
            <span>Talents</span>
          </Link>

          <Link
            href="/elite"
            className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg group ${
              pathname.includes("/elite")
                ? "text-blue-600 bg-blue-50"
                : "text-gray-700 hover:bg-gray-50 "
            }`}
          >
            <div className="flex items-center gap-3">
              <EliteIcon
                className={`w-6 h-6 ${
                  pathname.includes("/elite")
                    ? "text-blue-600 "
                    : "text-gray-500 group-hover:text-gray-500"
                }`}
              />
              <span>Elite</span>
            </div>
          </Link>

          {/* Elite Subsections with node tree */}
          <div className="relative ml-8 space-y-1 pt-1">
            {/* Vertical line */}
            <div className="absolute left-[-12px] top-0 bottom-0 w-px bg-gray-300" />

            {/* Applications */}
            <Link
              href="/elite"
              className="relative flex items-center px-3 py-2 text-sm rounded-lg group"
            >
              {/* Horizontal line */}
              <div className="absolute left-[-12px] top-1/2 w-4 h-px bg-gray-300" />
              <span
                className={`${
                  pathname === "/elite" || pathname.includes("/applications")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Applications
              </span>
            </Link>

            {/* Talents */}
            <Link
              href="/elite/talents"
              className="relative flex items-center px-3 py-2 text-sm rounded-lg group"
            >
              {/* Horizontal line */}
              <div className="absolute left-[-12px] top-1/2 w-4 h-px bg-gray-300" />
              <span
                className={`${
                  pathname === "/dashboard/elite/talents"
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Talents
              </span>
            </Link>

            {/* Briefs */}
            <Link
              href="/elite/briefs"
              className="relative flex items-center px-3 py-2 text-sm rounded-lg group"
            >
              {/* Horizontal line */}
              <div className="absolute left-[-12px] top-1/2 w-4 h-px bg-gray-300" />
              <span
                className={`${
                  pathname.includes("/briefs")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Briefs
              </span>
            </Link>

            {/* Projects */}
            <Link
              href="/elite/projects"
              className="relative flex items-center px-3 py-2 text-sm rounded-lg group"
            >
              {/* Horizontal line */}
              <div className="absolute left-[-12px] top-1/2 w-4 h-px bg-gray-300" />
              <span
                className={`${
                  pathname.includes("/projects")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Projects
              </span>
            </Link>

            {/* Settings */}
            <Link
              href="/elite/settings"
              className="relative flex items-center px-3 py-2 text-sm rounded-lg group"
            >
              {/* Horizontal line */}
              <div className="absolute left-[-12px] top-1/2 w-4 h-px bg-gray-300" />
              <span
                className={`${
                  pathname === "/elite/settings"
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Settings
              </span>
            </Link>
          </div>

          {/* Manage Workspace Section */}
          <div className="py-2 mt-4">
            <p className="px-3 text-sm text-gray-500 font-medium mb-2">
              Manage Workspace
            </p>
          </div>

          <Link
            href="/onboarding"
            className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg group ${
              pathname === "/onboarding"
                ? "text-blue-600 bg-blue-50"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <OnboardingIcon
              className={`w-6 h-6 ${
                pathname === "/skill-test"
                  ? "text-blue-600"
                  : "text-gray-500 group-hover:text-gray-500"
              }`}
            />
            <span>Onboarding</span>
          </Link>

          <Link
            href="/skill-test"
            className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg group ${
              pathname === "/skill-test"
                ? "text-blue-600 bg-blue-50"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <SkillTestIcon
              className={`w-6 h-6 ${
                pathname === "/skill-test"
                  ? "text-blue-600"
                  : "text-gray-500 group-hover:text-gray-500"
              }`}
            />
            <span>Skill Test</span>
          </Link>

          <Link
            href="/courses"
            className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg group ${
              pathname === "/courses"
                ? "text-blue-600 bg-blue-50"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <CourseIcon
              className={`w-6 h-6 ${
                pathname === "/courses"
                  ? "text-blue-600"
                  : "text-gray-500 group-hover:text-gray-500"
              }`}
            />
            <span>Courses</span>
          </Link>

          <Link
            href="/plan-management"
            className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg group    ${
              pathname === "/plan-management"
                ? "text-blue-600 bg-blue-50"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <PlanManagementIcon
              className={`w-6 h-6 ${
                pathname === "/plan-management"
                  ? "text-blue-600"
                  : "text-gray-500 group-hover:text-gray-500"
              }`}
            />
            <span>Plan Management</span>
          </Link>

          <Link
            href="/form-management"
            className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg group ${
              pathname === "/form-management"
                ? "text-blue-600 bg-blue-50"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <FormManagementIcon
              className={`w-6 h-6 ${
                pathname === "/form-management"
                  ? "text-blue-600"
                  : "text-gray-500 group-hover:text-gray-500"
              }`}
            />
            <span>Form Management</span>
          </Link>
        </div>
      </div>

      {/* Settings and User Profile */}
      <div className="mt-auto">
        <Link
          href="/settings"
          className={`flex items-center gap-3 px-6 py-3 text-sm group ${
            pathname === "/settings"
              ? "text-blue-600 bg-blue-50"
              : "text-gray-700 hover:bg-gray-50"
          }`}
        >
          <SettingsIcon
            className={`w-6 h-6 ${
              pathname === "/settings"
                ? "text-blue-600 bg-blue-50"
                : "text-gray-500 group-hover:text-gray-500"
            }`}
          />
          <span>Settings</span>
        </Link>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
              <Image
                src={avatar}
                alt="User"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                Ayomide Salami
              </p>
              <p className="text-xs text-gray-500 truncate">
                ayisalami@yahoo.com
              </p>
            </div>
            <button title="More" className="p-1 rounded-full hover:bg-gray-100">
              <MoreHorizontal className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
