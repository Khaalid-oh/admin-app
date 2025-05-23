import Image from "next/image";

/* eslint-disable @typescript-eslint/no-explicit-any */
function ProjectBriefModal({
  open,
  onClose,
  brief,
}: {
  open: boolean;
  onClose: () => void;
  brief: any;
}) {
  if (!open || !brief) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/30">
      <div className="w-full max-w-xl h-full bg-white shadow-lg overflow-y-auto p-8 relative">
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="mb-6">
          <div className="flex flex-col items-start gap-2 mb-2">
            <Image
              src="/settings-icon.png"
              alt="brief-icon"
              width={28}
              height={28}
            />
            <div>
              <h2 className="text-xl font-semibold">Project Brief</h2>
              <p className="text-gray-500 text-sm">
                Manage, view and edit before sending to talent
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="text-lg font-medium">{brief.title}</div>
              <div className="text-gray-500 text-sm">Sent {brief.dateSent}</div>
            </div>
            <div className="flex gap-2">
              <button className="bg-red-50 text-red-600 px-4 py-2 rounded">
                Reject Brief
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Send Brief
              </button>
            </div>
          </div>
          <div className="border-b border-gray-300 mb-4 flex gap-8">
            <button className="py-2 border-b-2 border-blue-600 font-medium">
              Client Brief Details
            </button>
            <button className="py-2 text-gray-500">Tech1M Brief Version</button>
            <button className="py-2 text-gray-500">
              Organometric analysis
            </button>
          </div>
        </div>
        {/* Brief Details */}
        <div>
          <div className="mb-6">
            <div className="font-semibold mb-2 flex items-center gap-2">
              <span className="bg-blue-100 p-1 rounded-full">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 6v6l4 2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Brief Information
            </div>
            <div className="border border-gray-300 rounded p-4 mb-2">
              <div>Job Title: Senior Business Analyst</div>
              <div>Job Type: Contract &nbsp; | &nbsp; Duration: 12 Months</div>
              <div>Level of Experience: Intermediate</div>
            </div>
            <div className="border border-gray-300 rounded p-4 mb-2">
              <div>Salary Range: £20k–30k per month</div>
              <div>
                Workplace: Remote &nbsp; | &nbsp; Location: Brighton, United
                Kingdom
              </div>
            </div>
          </div>
          <div className="mb-6">
            <div className="font-semibold mb-2 flex items-center gap-2">
              <span className="bg-blue-100 p-1 rounded-full">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 6v6l4 2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              About the role
            </div>
            <div className="border border-gray-300 rounded p-4 mb-2">
              <div className="font-semibold mb-1">Job Details</div>
              <ul className="list-disc pl-5 text-sm">
                <li>
                  Gather and document business requirements from stakeholders to
                  inform system enhancements and new software solutions.
                </li>
                <li>
                  Analyze existing business processes to identify inefficiencies
                  and recommend improvements for increased efficiency and
                  effectiveness.
                </li>
                <li>
                  Utilize data analysis tools (e.g., Excel, SQL, Power BI) to
                  generate insights that guide decision-making and support
                  reporting to executives.
                </li>
                <li>
                  Collaborate with IT and development teams to design and
                  implement solutions that meet business needs.
                </li>
              </ul>
            </div>
            <div className="border border-gray-400 rounded p-4 mb-2">
              <div className="font-semibold mb-1">Role Benefits</div>
              <ul className="list-disc pl-5 text-sm">
                <li>
                  Competitive Salary: Attractive compensation package with
                  performance-based bonuses.
                </li>
                <li>
                  Comprehensive Health Benefits: Medical, dental, and vision
                  insurance options for employees and their families.
                </li>
                <li>
                  Flexible Work Environment: Options for remote work and
                  flexible hours to promote work-life balance.
                </li>
                <li>
                  Professional Development: Opportunities for training,
                  certifications, and tuition reimbursement for further
                  education.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-2 flex items-center gap-2">
              <span className="bg-blue-100 p-1 rounded-full">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 6v6l4 2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Skills and Languages Required
            </div>
            <div className="border border-gray-300 rounded p-4 mb-2">
              <div className="font-semibold mb-1">
                Most Important Skills Ranked in order of importance
              </div>
              <div className="flex gap-8">
                <div>
                  <div>UI Design</div>
                  <div>Figma</div>
                  <div>Html</div>
                  <div>Design thinking</div>
                </div>
                <div>
                  <div>●●●●○</div>
                  <div>●●●○○</div>
                  <div>●●○○○</div>
                  <div>●○○○○</div>
                </div>
              </div>
            </div>
            <div className="border border-gray-300 rounded p-4 mb-2">
              <div className="font-semibold mb-1">Other Relevant Skills</div>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded">
                  Python
                </span>
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded">
                  Javascript
                </span>
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded">
                  Html
                </span>
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded">
                  Css
                </span>
              </div>
            </div>
            <div className="border border-gray-300 rounded p-4 mb-2">
              <div className="font-semibold mb-1">Required Language</div>
              <div className="flex gap-2">
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded">
                  English
                </span>
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded">
                  French
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectBriefModal;
