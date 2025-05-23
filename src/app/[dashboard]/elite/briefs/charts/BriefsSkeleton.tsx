const BriefsSkeleton = () => {
  return (
    <div className="space-y-6">
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
              {[0, 1].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between p-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="h-9 w-9 bg-gray-200 rounded-lg animate-pulse" />
                    <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                  </div>
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="h-[400px] bg-gray-100 rounded-lg animate-pulse" />
      </div>
    </div>
  );
};

export default BriefsSkeleton;
