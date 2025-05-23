export default function SkillAssessment() {
  const assessments = [
    {
      id: 1,
      title: "Product Design Assessment",
      level: "Beginner",
      completedDate: "Dec 12, 2019",
      icon: "product-design-icon",
    },
    {
      id: 2,
      title: "UI Engineer Test",
      level: "Intermediate",
      completedDate: "Dec 12, 2019",
      icon: "ui-engineer-icon",
    },
    {
      id: 3,
      title: "UX Designer Test",
      level: "Intermediate",
      completedDate: "Dec 12, 2019",
      icon: "ux-designer-icon",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-6">Completed Assessments</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {assessments.map((assessment) => (
            <div
              key={assessment.id}
              className="border border-gray-200 rounded-lg p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gray-100" />
                <div>
                  <h3 className="font-medium">{assessment.title}</h3>
                  <p className="text-gray-500 text-sm">{assessment.level}</p>
                  <p className="text-gray-500 text-sm">
                    Completed on {assessment.completedDate}
                  </p>
                </div>
              </div>
              <button className="mt-4 text-blue-600 text-sm hover:text-blue-800">
                View Full Report
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
