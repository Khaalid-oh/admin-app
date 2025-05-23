const SettingsSkeleton = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="animate-pulse">
        <div className="h-12 bg-gray-100" />
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="flex items-center px-6 py-4 border-t border-gray-200"
          >
            <div className="h-4 bg-gray-200 rounded w-1/4" />
            <div className="h-4 bg-gray-200 rounded w-1/4 ml-8" />
            <div className="h-4 bg-gray-200 rounded w-1/4 ml-8" />
            <div className="flex space-x-3 ml-auto">
              <div className="h-5 w-5 bg-gray-200 rounded" />
              <div className="h-5 w-5 bg-gray-200 rounded" />
              <div className="h-5 w-5 bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsSkeleton;
