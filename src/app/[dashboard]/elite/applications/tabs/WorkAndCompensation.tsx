import { formatLabel } from "../../utils/formatters";

export default function WorkAndCompensation() {
  const compensationData = {
    salaryType: "30000",
    currency: "USD",
    minimumMonthlySalary: "70000-100000 USD",
    desiredRole: "Full Time",
    workAvailability: "2 weeks",
    importantThings: [
      "Challenging work",
      "Recognition and Reward",
      "Career Advancement",
      "Great Tech and Tools",
    ],
    preferredCompanySize: ["1-10 employees", "10000+"],
  };

  return (
    <div className="bg-white rounded-lg shadow text-gray-800">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">
          Availability and Compensation
        </h2>

        <div className="space-y-6">
          {Object.entries(compensationData).map(([key, value]) => (
            <div key={key} className="border-b border-gray-200 pb-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-gray-600">{formatLabel(key)}</div>
                <div>
                  {Array.isArray(value) ? (
                    <div className="flex flex-wrap gap-2">
                      {value.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
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
