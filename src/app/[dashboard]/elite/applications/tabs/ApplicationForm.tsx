import { formatLabel } from "../../utils/formatters";

export default function ApplicationForm() {
  const applicationData = {
    currentEmploymentStatus: "Employed",
    yearsOfExperience: "0-2 Years",
    primaryProfessionalDomain: "Software Engineering",
    relevantSkills: ["Python", "Javascript", "Html"],
    additionalCredentials: [
      {
        title: "Foundations of Programming Data Science",
        subtitle: "Data Science",
      },
      {
        title: "Software Engineering Fundamentals",
        subtitle: "Backend Engineering",
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-6">Elite Application Form</h2>

        <div className="space-y-6">
          {Object.entries(applicationData).map(([key, value]) => (
            <div key={key} className="border-b border-gray-200 pb-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-gray-600">{formatLabel(key)}</div>
                <div>
                  {Array.isArray(value) ? (
                    key === "additionalCredentials" ? (
                      <div className="space-y-2">
                        {value.map((credential: any, index) => (
                          <div key={index} className="space-y-1">
                            <div className="font-medium">
                              {credential.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              {credential.subtitle}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {value.map((item: any) => (
                          <span
                            key={item}
                            className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    )
                  ) : (
                    <span className="text-gray-900">{value}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
