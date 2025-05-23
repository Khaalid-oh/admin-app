// src/app/[dashboard]/elite/talents/components/TalentsSkeleton.tsx
const TalentsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {[0, 1].map((section) => (
        <div
          key={section}
          className="bg-white rounded-lg border border-gray-200 p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <div className="space-y-2">
              <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-48 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="space-y-4">
            {[0, 1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-gray-200 rounded-full animate-pulse" />
                  <div className="space-y-2">
                    <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                    <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
                <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TalentsSkeleton;
