import { useState } from "react";
import { FiX, FiSearch } from "react-icons/fi";
import type { BulkAssessmentModalProps } from "../page";

const categories = [
  "Technical",
  "Design",
  "Marketing",
  "Finance",
  "Sales",
  "Data Science",
  "Support",
];
const skills = [".Net", "API", "AWS", "Adobe", "Angular", "Java", "Python"];
const difficulties = ["Beginner", "Intermediate", "Expert"];

const assessments = [
  {
    title: "Cognitive Ability",
    desc: "Evaluate candidates proficiency in creating user interfaces with Figma and other ui tools",
    tags: ["Maths", "Quantitative"],
    time: "30mins",
    credits: 10,
    type: "cognitive",
  },
  {
    title: "Cognitive Ability",
    desc: "Evaluate candidates proficiency in creating user interfaces with Figma and other ui tools",
    tags: ["Verbal", "IQ"],
    time: "30mins",
    credits: 10,
    type: "cognitive",
  },
  {
    title: "Dev Ops Engineering",
    desc: "Evaluate candidates proficiency in creating user interfaces with Figma and other ui tools",
    tags: ["Python", "Shell Scripting"],
    time: "30mins",
    credits: 10,
    type: "devops",
  },
  {
    title: "Product Design",
    desc: "Assess proficiency in product design principles, wireframing, and prototyping.",
    tags: ["Figma", "UX", "UI"],
    time: "40mins",
    credits: 12,
    type: "design",
  },
  {
    title: "Adobe Xd Test",
    desc: "Evaluate skills in Adobe Xd for UI/UX design and prototyping.",
    tags: ["Adobe Xd", "Prototyping"],
    time: "30mins",
    credits: 10,
    type: "design",
  },
  {
    title: "Illustration Skill",
    desc: "Test ability to create digital illustrations and vector art.",
    tags: ["Illustrator", "Creativity"],
    time: "35mins",
    credits: 11,
    type: "design",
  },
  {
    title: "JavaScript Fundamentals",
    desc: "Assess knowledge of core JavaScript concepts and ES6+ features.",
    tags: ["JavaScript", "ES6"],
    time: "30mins",
    credits: 10,
    type: "technical",
  },
  {
    title: "Python Programming",
    desc: "Test understanding of Python syntax, data structures, and problem solving.",
    tags: ["Python", "Programming"],
    time: "30mins",
    credits: 10,
    type: "technical",
  },
  {
    title: "Sales Aptitude",
    desc: "Evaluate sales techniques, negotiation, and CRM knowledge.",
    tags: ["Sales", "CRM"],
    time: "25mins",
    credits: 8,
    type: "sales",
  },
  {
    title: "AWS Cloud Basics",
    desc: "Assess foundational knowledge of AWS services and cloud concepts.",
    tags: ["AWS", "Cloud"],
    time: "30mins",
    credits: 10,
    type: "technical",
  },
  {
    title: "Finance & Accounting",
    desc: "Test understanding of financial statements, ratios, and accounting principles.",
    tags: ["Finance", "Accounting"],
    time: "30mins",
    credits: 10,
    type: "finance",
  },
];

export default function BulkAssessmentModal({
  onClose,
  selectedTalents,
}: BulkAssessmentModalProps) {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
    null
  );
  const [selectedAssessments, setSelectedAssessments] = useState<number[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedTests, setSelectedTests] = useState<typeof assessments>([]);
  const [detailsModal, setDetailsModal] = useState<
    null | (typeof assessments)[0]
  >(null);

  const filteredAssessments = assessments.filter(
    (a) => search === "" || a.title.toLowerCase().includes(search.toLowerCase())
  );

  console.log(selectedTalents);

  // Helper to toggle assessment selection
  const toggleAssessment = (idx: number) => {
    setSelectedAssessments((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-xl shadow-xl w-[90vw] max-w-7xl max-h-[90vh] overflow-y-auto relative p-8">
        {/* Close button */}
        <button
          title="Close"
          className="absolute top-4 right-4 text-gray-600"
          onClick={onClose}
        >
          <FiX size={22} />
        </button>
        <h2 className="text-2xl text-gray-800 font-semibold mb-1">
          Send Assessment
        </h2>
        <p className="text-gray-500 mb-6 text-sm">
          Choose an assessment to send to the applicant(s) to evaluate their
          skills. Please select at least one assessment before proceeding.
        </p>
        {/* Selected Skill Tests Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-gray-800 text-lg">
              Selected Skill Tests
            </span>
            <span className="text-gray-400 text-sm">
              Tests Selected {selectedTests.length}/10
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedTests.map((test, idx) => (
              <span
                key={test.title}
                className="flex items-center bg-red-50 text-gray-700 px-3 py-1 rounded-full border border-red-200 text-sm"
              >
                {test.title}
                <button
                  className="ml-2 text-red-400 hover:text-red-600"
                  title="Remove test"
                  onClick={() =>
                    setSelectedTests(selectedTests.filter((_, i) => i !== idx))
                  }
                >
                  <FiX size={16} />
                </button>
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-8">
          <div className="w-64 flex-shrink-0">
            <div className="mb-4">
              <div className="relative">
                <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for tests"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-500"
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="font-medium text-gray-700 mb-2">
                Filter By Category
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`px-3 py-1 rounded border text-sm ${
                      selectedCategories.includes(cat)
                        ? "bg-blue-50 border-blue-500 text-blue-700"
                        : "bg-white border-gray-200 text-gray-500"
                    }`}
                    onClick={() =>
                      setSelectedCategories(
                        selectedCategories.includes(cat)
                          ? selectedCategories.filter((c) => c !== cat)
                          : [...selectedCategories, cat]
                      )
                    }
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <div className="font-medium text-gray-700 mb-2">
                Filter By Skills
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <button
                    key={skill}
                    className={`px-3 py-1 rounded border text-sm ${
                      selectedSkills.includes(skill)
                        ? "bg-blue-50 border-blue-500 text-blue-700"
                        : "bg-white border-gray-200 text-gray-500"
                    }`}
                    onClick={() =>
                      setSelectedSkills(
                        selectedSkills.includes(skill)
                          ? selectedSkills.filter((s) => s !== skill)
                          : [...selectedSkills, skill]
                      )
                    }
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="font-medium text-gray-700 mb-2">
                Filter By Difficulty
              </div>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((diff) => (
                  <button
                    key={diff}
                    className={`px-3 py-1 rounded border text-sm ${
                      selectedDifficulty === diff
                        ? "bg-blue-50 border-blue-500 text-blue-700"
                        : "bg-white border-gray-200 text-gray-500"
                    }`}
                    onClick={() =>
                      setSelectedDifficulty(
                        selectedDifficulty === diff ? null : diff
                      )
                    }
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Right: Assessment Cards */}
          <div className="flex-1">
            <div className="h-[500px] overflow-y-auto pr-4 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAssessments.map((a, idx) => (
                  <div
                    key={idx}
                    className={`bg-white rounded-xl p-5 shadow border flex flex-col gap-2 h-fit transition-colors ${
                      selectedAssessments.includes(idx)
                        ? "border-2 border-blue-600"
                        : "border border-gray-200"
                    }`}
                  >
                    <div className="font-semibold text-gray-900">{a.title}</div>
                    <div className="text-gray-500 text-sm">{a.desc}</div>
                    <div className="flex gap-2 mt-2">
                      {a.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-50 text-blue-600 text-xs px-2 py-0.5 rounded font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 text-gray-400 text-xs mt-2 justify-between">
                      <span>⏱ {a.time}</span>
                      <span>$ {a.credits} Credits</span>
                    </div>
                    <div className="flex gap-4 mt-2 border-t pt-2 justify-between">
                      <button
                        className="text-blue-600 text-sm font-medium hover:underline"
                        onClick={() => setDetailsModal(a)}
                      >
                        View Details
                      </button>
                      <button
                        className="px-3 py-1 rounded text-sm font-medium border bg-green-50 text-green-700 border-green-100 hover:bg-green-100"
                        onClick={() => toggleAssessment(idx)}
                      >
                        {selectedAssessments.includes(idx) ? "Selected" : "Add"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 border-t pt-4">
          <button
            className="px-6 py-2 rounded border border-gray-200 bg-white text-gray-700 font-medium hover:bg-gray-50"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className={`px-6 py-2 rounded ${
              selectedAssessments.length === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
            disabled={selectedAssessments.length === 0}
            onClick={() => setShowSuccess(true)}
          >
            Proceed
          </button>
        </div>
      </div>
      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #2563eb; /* Tailwind blue-600 */
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
          margin-left: 4px;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #2563eb #f3f4f6;
          scrollbar-gutter: stable;
          scroll-margin-left: 4px;
        }
      `}</style>
      {/* Details Modal */}
      {detailsModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/30">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl p-8 relative">
            <button
              className="absolute top-4 right-4 text-gray-600"
              title="Close"
              onClick={() => setDetailsModal(null)}
            >
              <FiX size={22} />
            </button>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {detailsModal.title}
            </h3>
            <p className="text-gray-600 mb-4">{detailsModal.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {detailsModal.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-50 text-blue-600 text-xs px-2 py-0.5 rounded font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-6 text-gray-500 text-sm mb-4">
              <span>⏱ {detailsModal.time}</span>
              <span>Expert Level</span>
              <span>3 Skills</span>
              <span>70 Questions</span>
              <span>$ {detailsModal.credits} Credits</span>
            </div>
            <hr className="mb-4" />
            <div>
              <div className="font-semibold mb-2 text-gray-800">
                About this assessment
              </div>
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                <li>
                  use Javascript, HTML & CSS skills to create engaging and
                  user-friendly interfaces
                </li>
                <li>study design briefs and requirements</li>
                <li>prepare and execute design ideas</li>
                <li>work with graphic design tools and instruments</li>
                <li>
                  work in Figma and understand its main tools and instruments
                </li>
                <li>translate product requirements into visual elements</li>
                <li>communicate effectively within the team</li>
                <li>contribute to a positive working environment</li>
              </ul>
            </div>
            <div className="flex justify-end mt-6">
              <button
                className="bg-green-50 text-green-700 px-5 py-2 rounded text-sm font-medium border border-green-100 hover:bg-green-100"
                onClick={() => {
                  if (
                    selectedTests.length < 10 &&
                    !selectedTests.some((t) => t.title === detailsModal.title)
                  ) {
                    setSelectedTests([...selectedTests, detailsModal]);
                  }
                  setDetailsModal(null);
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 text-gray-800">
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-50 mb-4">
              <svg
                className="w-10 h-10 text-green-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">Assessment sent</h2>
            <p className="mb-4 text-gray-600">
              The assessment has been successfully sent.
            </p>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => {
                setShowSuccess(false);
                onClose();
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
