// src/components/dashboard/NextPayrollCard.tsx
import React from "react";
import CreditCardComponent from "./CreditCardComponent";
import AvatarGroup from "./AvatarGroup";

const mockPayees = [
  {
    name: "Joe Gardner",
    src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=facearea&w=256&h=256&q=80", // https://unsplash.com/photos/N5GCRjEMboQ
  },
  {
    name: "Christian Buehner",
    src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&h=256&q=80", // https://unsplash.com/photos/DItYlc26zVI
  },
  {
    name: "Pexels Model 1",
    src: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&w=256&h=256&fit=crop",
  },
  {
    name: "Pexels Model 2",
    src: "https://images.pexels.com/photos/5745181/pexels-photo-5745181.jpeg?auto=compress&w=256&h=256&fit=crop",
  },
  {
    name: "Pexels Model 3",
    src: "https://images.pexels.com/photos/5862269/pexels-photo-5862269.jpeg?auto=compress&w=256&h=256&fit=crop",
  },
  {
    name: "Pexels Model 4",
    src: "https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&w=256&h=256&fit=crop",
  },
  {
    name: "Pexels Model 5",
    src: "https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&w=256&h=256&fit=crop",
  },
];

export default function NextPayrollCard() {
  const progress = 0.6; // 60%

  return (
    <div className="bg-white flex flex-col items-center rounded shadow p-4">
      <div className="font-semibold mb-2 self-start">Next Payroll Date</div>
      <CreditCardComponent
        brand="mastercard"
        name="OLIVIA RHYE"
        number="1234 1234 1234 1234"
        expiry="06/24"
      />
      <div className="flex justify-between text-xs mb-1 mt-4 w-full">
        <div className="flex flex-col">
          <span className="">Total Payees</span>
          <span className="text-lg font-semibold">200</span>
        </div>
        <AvatarGroup payees={mockPayees} max={4} />
      </div>
      <div className="mb-2 text-xs w-full">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700 font-medium text-xs">
            Amount Due This month
          </span>
          <span className="text-gray-700 font-medium text-xs">£2,840.40</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-orange-400 rounded-full"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>

      {/* Add avatars or progress bar as needed */}
    </div>
  );
}
