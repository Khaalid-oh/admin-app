// components/JobsTable.tsx
import React, { useState } from "react";
import { Job, JobPreviewDetails } from "../../components/types/metrics";
import JobsPreviewModal from "./JobsPreviewModal";
import { mockJobPreviewDetails } from "../../components/mock/mock";

interface JobsTableProps {
  jobs: Job[];
  itemsPerPage?: number;
}

const StatusBadge: React.FC<{ status: Job["status"] }> = ({ status }) => {
  let bgColor = "";
  let textColor = "";
  let dotColor = "";

  switch (status) {
    case "Live":
      bgColor = "bg-green-100";
      textColor = "text-green-700";
      dotColor = "bg-green-500";
      break;
    case "Closed":
      bgColor = "bg-red-100";
      textColor = "text-red-700";
      dotColor = "bg-red-500";
      break;
    case "Disabled":
      bgColor = "bg-gray-100";
      textColor = "text-gray-700";
      dotColor = "bg-gray-500";
      break;
    default:
      bgColor = "bg-gray-100";
      textColor = "text-gray-700";
      dotColor = "bg-gray-500";
  }

  return (
    <span
      className={`px-2 py-0.5 text-xs font-medium rounded-full inline-flex items-center ${bgColor} ${textColor}`}
    >
      <span className={`w-1.5 h-1.5 mr-1.5 rounded-full ${dotColor}`}></span>
      {status}
    </span>
  );
};

const JobsTable: React.FC<JobsTableProps> = ({ jobs, itemsPerPage = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [previewOpen, setPreviewOpen] = React.useState(false);
  const [selectedJob, setSelectedJob] =
    React.useState<JobPreviewDetails | null>(null);

  const totalPages = Math.ceil(jobs.length / itemsPerPage);
  const paginatedJobs = jobs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePreview = () => {
    // For now, always use the mock preview details
    setSelectedJob(mockJobPreviewDetails);
    setPreviewOpen(true);
  };

  if (!jobs.length) {
    return (
      <p className="text-center text-gray-500 py-8 text-sm">
        No jobs found for this category.
      </p>
    );
  }

  return (
    <>
      <div className="bg-white shadow-sm rounded-lg overflow-hidden text-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {[
                  "Job Title",
                  "Company",
                  "Date Posted",
                  "Posted by",
                  "Applicants",
                  "Shortlists",
                  "Job Expires in",
                  "Status",
                  "", // For Preview
                ].map((header) => (
                  <th
                    key={header}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedJobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {job.title}
                    </div>
                    <div className="text-xs text-gray-500">{job.code}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.company}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.datePosted}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.postedBy}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    {job.applicants}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    {job.shortlists}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.jobExpiresIn}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={job.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      className="text-blue-500 hover:text-blue-600"
                      onClick={handlePreview}
                    >
                      Preview
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Page <span className="font-medium">{currentPage}</span> of{" "}
                <span className="font-medium">{totalPages}</span>
              </p>
            </div>
            <div>
              <nav className="flex gap-4 text-gray-500" aria-label="Pagination">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(1, prev - 1))
                  }
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center px-3 py-2 rounded border border-gray-300 bg-white text-sm font-medium hover:bg-gray-50"
                >
                  <span className="">Previous</span>
                </button>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="relative inline-flex items-center px-3 py-2 rounded-sm border border-gray-300 bg-white text-sm font-medium hover:bg-gray-50"
                >
                  <span className="">Next</span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Job Preview Modal */}
      <JobsPreviewModal
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        job={selectedJob}
        onDisableJob={() => {}} // implement as needed
      />
    </>
  );
};

export default JobsTable;
