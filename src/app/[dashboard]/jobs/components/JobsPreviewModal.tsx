import {
  Building2,
  Calendar,
  DotSquare,
  MapPin,
  NfcIcon,
  Users2,
  X,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { JobPreviewDetails } from "../../components/types/metrics";
import { BiMoney } from "react-icons/bi";

interface JobsPreviewModalProps {
  open: boolean;
  onClose: () => void;
  job: JobPreviewDetails | null;
  onDisableJob: (id: string) => void;
}

const JobsPreviewModal: React.FC<JobsPreviewModalProps> = ({
  open,
  onClose,
  job,
  onDisableJob,
}) => {
  const [tab, setTab] = React.useState<"details" | "questions">("details");

  const datePosted = new Date(job?.datePosted || "");
  const today = new Date();
  const daysAgo = Math.floor(
    (today.getTime() - datePosted.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (!open || !job) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 text-sm">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 py-10 relative">
        {/* Close Button */}
        <button
          className="absolute top-6 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="flex items-end gap-4 mb-4 mt-4">
          <div className="w-20 h-20 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center">
            <Image
              width={48}
              height={48}
              src={job.companyLogo}
              alt={job.companyName}
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="flex flex-col gap-1 text-gray-800">
            <h2 className="text-2xl font-semibold">{job.title}</h2>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{job.applicants} Applicants</span>
              <div
                className={`flex items-center gap-1.5 ml-2 px-2 py-0.5 rounded-full text-xs ${
                  job.status === "Live"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                {job.status}
              </div>
            </div>
            <div className="text-sm text-gray-500 flex items-center gap-1">
              Location:
              <div className="font-semibold flex items-center gap-1">
                {job.location} <MapPin className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-500">
            Date Posted: <b>{job.datePosted}</b>
            <Calendar className="w-4 h-4" />
          </div>
          <button
            className="ml-auto px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm"
            onClick={() => onDisableJob(job.id)}
          >
            Disable Job
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-4">
          <button
            className={`px-4 py-2 ${
              tab === "details"
                ? "border-b-2 border-blue-500 font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setTab("details")}
          >
            Job Details
          </button>
          <button
            className={`px-4 py-2 ${
              tab === "questions"
                ? "border-b-2 border-blue-500 font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setTab("questions")}
          >
            Questions
          </button>
        </div>

        {/* Meta Info */}
        <div className="flex flex-col flex-wrap gap-4 border border-gray-200 rounded-lg p-4 text-sm text-gray-600 mb-4">
          <div className="flex gap-4">
            <span className="flex items-center gap-2">
              <Building2 className="w-4 h-4" /> {job?.company_category || ""}
            </span>
            <span className="flex items-center gap-2">
              <Users2 className="w-4 h-4" /> {job?.employees || ""} Employees
            </span>
            <span className="flex items-center gap-2">
              <BiMoney className="w-4 h-4" /> £{job.salary}/Month
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <NfcIcon className="w-4 h-4" /> {daysAgo} days ago
            </span>
            <span className="flex items-center gap-2">
              <DotSquare className="w-4 h-4" /> {job.positions} Positions
              available
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>Start: {job.startDate}</span>
            <span className="flex items-center gap-2">
              <DotSquare className="w-4 h-4" /> Expires: {job.expiryDate}
            </span>
            <span className="flex items-center gap-2">
              <DotSquare className="w-4 h-4" /> Work Type: {job.workType}
            </span>
          </div>
        </div>

        {/* Tab Content */}
        {tab === "details" ? (
          <div className="space-y-4 max-h-[50vh] overflow-y-auto">
            <section>
              <h3 className="font-semibold">Project Overview</h3>
              <p className="text-gray-700">{job.projectOverview}</p>
            </section>
            <section>
              <h3 className="font-semibold">Responsibilities</h3>
              <ul className="list-disc ml-5 text-gray-700">
                {job.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
            <section>
              <h3 className="font-semibold">Skills and Qualifications</h3>
              <ul className="list-disc ml-5 text-gray-700">
                {job.skills.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
            <section>
              <h3 className="font-semibold">Technologies Used</h3>
              <div className="text-gray-700">{job.technologies.join(", ")}</div>
            </section>
            <section>
              <h3 className="font-semibold">Languages</h3>
              <div className="text-gray-700">{job.languages.join(", ")}</div>
            </section>
            <section>
              <h3 className="font-semibold">Experience Level</h3>
              <span className="inline-block bg-blue-50 text-blue-500 px-2 py-0.5 rounded text-xs mt-1">
                {job.experienceLevel}
              </span>
            </section>
            <section>
              <h3 className="font-semibold">Company Mission</h3>
              <p className="text-gray-700">{job.companyMission}</p>
            </section>
            <section>
              <h3 className="font-semibold">Company Benefits</h3>
              <ul className="list-disc ml-5 text-gray-700">
                {job.companyBenefits.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        ) : (
          <div className="space-y-4 h-[50vh] overflow-y-auto">
            {/* Render job.questions or similar here */}
            <p>No questions available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsPreviewModal;
