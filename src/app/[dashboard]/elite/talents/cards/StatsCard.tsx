interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  bgColor: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  icon,
  title,
  value,
  bgColor,
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-full ${bgColor}`}>{icon}</div>
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
