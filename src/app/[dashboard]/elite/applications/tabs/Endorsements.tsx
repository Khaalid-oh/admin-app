export default function Endorsements() {
  const endorsements = [
    {
      id: 1,
      email: "Ceo@gmail.com",
      name: "Arala Eben",
      position: "CEO, Cashmi",
      isCurrentEmployer: true,
      requestedDate: "Dec 12,2019",
      status: "Pending",
    },
    // Add more endorsements as needed
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-6">All Reviews</h2>

        <div className="space-y-6">
          {endorsements.map((endorsement) => (
            <div
              key={endorsement.id}
              className="border-b border-gray-200 pb-6 last:border-0"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-semibold">
                    {endorsement.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-blue-600">{endorsement.email}</div>
                    <div className="font-medium">{endorsement.name}</div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                      <span>{endorsement.position}</span>
                      {endorsement.isCurrentEmployer && (
                        <span>Current Employer</span>
                      )}
                      <span>Requested on {endorsement.requestedDate}</span>
                    </div>
                  </div>
                </div>
                <span className="px-2 py-1 bg-yellow-50 text-yellow-700 rounded text-sm">
                  {endorsement.status}
                </span>
              </div>
              <div className="mt-4 text-gray-600">
                Endorsement will be available once Candidate endorser completes
                the required information.
              </div>
              <button className="mt-4 text-blue-600 text-sm hover:text-blue-800">
                Send Candidate Reminder
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
