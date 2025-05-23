// src/app/[dashboard]/elite/talents/components/TalentCard.tsx
import Image from "next/image";
import { useRouter } from "next/navigation";

interface TalentCardProps {
  talent: {
    name: string;
    role: string;
    avatar: string;
    id: string;
  };
  type: "elite" | "invited";
}

const initialName = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
};

const TalentCard: React.FC<TalentCardProps> = ({ talent }) => {
  const router = useRouter();

  const handleView = () => {
    router.push(`/elite/talents/manage`);
  };

  return (
    <div className="flex items-center justify-between p-4 border border-gray-100 hover:bg-gray-50 rounded-lg">
      <div className="flex items-center space-x-4">
        <div className="relative h-12 w-12">
          {talent.avatar ? (
            <Image
              src={talent.avatar}
              alt={talent.name}
              fill
              className="rounded-full object-cover"
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
              {initialName(talent.name)}
            </div>
          )}
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-900">{talent.name}</h3>
          <p className="text-sm text-gray-500">{talent.role}</p>
        </div>
      </div>
      <button
        onClick={handleView}
        className="text-gray-500 text-sm hover:text-blue-600"
      >
        View
      </button>
    </div>
  );
};

export default TalentCard;
