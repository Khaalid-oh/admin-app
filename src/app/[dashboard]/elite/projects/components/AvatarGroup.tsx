import RemoteAvatar from "./RemoteAvatar";

type Payee = {
  name: string;
  src: string;
};

export default function AvatarGroup({
  payees,
  max = 5,
}: {
  payees: Payee[];
  max?: number;
}) {
  return (
    <div className="flex -space-x-2">
      {payees.slice(0, max).map((payee: Payee, idx: number) => (
        <RemoteAvatar
          key={payee.name + idx}
          src={payee.src}
          alt={payee.name}
          size={28}
        />
      ))}
      {payees.length > max && (
        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-200 text-xs font-semibold border border-gray-200">
          +{payees.length - max}
        </div>
      )}
    </div>
  );
}
