import React from "react";
import { FiCalendar, FiFilter } from "react-icons/fi";

export default function DateRangeSelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const options = ["12 months", "30 days", "7 days", "24 hours"];
  return (
    <div className="inline-flex border border-gray-200 rounded-lg overflow-hidden">
      {options.map((opt, idx) => (
        <button
          key={opt}
          className={`px-4 py-2 text-sm font-medium transition-colors
            ${
              value === opt
                ? "bg-gray-100 text-gray-900"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }
            ${idx !== 0 ? "border-l border-gray-200" : ""}
            focus:outline-none`}
          onClick={() => onChange(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export function SelectDatesButton() {
  return (
    <button
      className="inline-flex items-center gap-2 px-5 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 font-medium text-base hover:bg-gray-50 transition"
      type="button"
    >
      <FiCalendar className="text-xl" />
      Select dates
    </button>
  );
}

export function FiltersButton() {
  return (
    <button
      className="inline-flex items-center gap-2 px-5 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 font-medium text-base hover:bg-gray-50 transition"
      type="button"
    >
      <FiFilter className="text-xl" />
      Filters
    </button>
  );
}
