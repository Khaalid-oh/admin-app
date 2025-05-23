import React from "react";
import { MdComputer } from "react-icons/md";
import {
  FaUniversity,
  FaRegEnvelope,
  FaWallet,
  FaRegMoneyBillAlt,
} from "react-icons/fa";

const invoices = [
  {
    label: "Overdue",
    value: 2500,
    color: "red-600",
    bg: "bg-red-50",
    bar: "bg-red-400",
    icon: <MdComputer className="text-red-500" size={20} />,
    progress: 0.6,
  },
  {
    label: "Pending",
    value: 120000,
    color: "blue-600",
    bg: "bg-blue-50",
    bar: "bg-blue-500",
    icon: <FaUniversity className="text-blue-500" size={20} />,
    progress: 0.85,
  },
  {
    label: "Cancelled",
    value: 200,
    color: "gray-700",
    bg: "bg-gray-100",
    bar: "bg-gray-500",
    icon: <FaRegEnvelope className="text-gray-500" size={20} />,
    progress: 0.3,
  },
  {
    label: "Refunded",
    value: 200,
    color: "indigo-700",
    bg: "bg-indigo-50",
    bar: "bg-indigo-500",
    icon: <FaWallet className="text-indigo-500" size={20} />,
    progress: 0.4,
  },
  {
    label: "Fully Paid",
    value: 50000,
    color: "green-700",
    bg: "bg-green-50",
    bar: "bg-green-600",
    icon: <FaRegMoneyBillAlt className="text-green-600" size={20} />,
    progress: 0.95,
  },
];

export default function InvoiceOverviewCard() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-semibold text-gray-900">
          Invoice Overview
        </span>
        <button className="text-gray-400 hover:text-gray-600" title="Filter">
          <svg width="20" height="20" fill="none">
            <circle cx="10" cy="4" r="1.5" fill="currentColor" />
            <circle cx="10" cy="10" r="1.5" fill="currentColor" />
            <circle cx="10" cy="16" r="1.5" fill="currentColor" />
          </svg>
        </button>
      </div>
      <div className="space-y-6">
        {invoices.map((inv) => (
          <div key={inv.label}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span
                  className={`rounded-full ${inv.bg} flex items-center justify-center w-9 h-9`}
                >
                  {inv.icon}
                </span>
                <span className={`font-medium text-base text-${inv.color}`}>
                  {inv.label}
                </span>
              </div>
              <span className={`font-semibold text-base text-${inv.color}`}>
                £{inv.value.toLocaleString()}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full mt-2">
              <div
                className={`${inv.bar} h-2 rounded-full`}
                style={{ width: `${inv.progress * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
