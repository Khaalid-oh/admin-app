// components/CustomMultiSelect.tsx
import React from "react";
import { ChevronDown } from "lucide-react";

const regionOptions = [
  { value: "africa", label: "Africa" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "north-america", label: "North America" },
  { value: "south-america", label: "South America" },
  { value: "oceania", label: "Oceania" },
  { value: "antarctica", label: "Antarctica" },
];

export default function CustomMultiSelect({
  label,
  options,
  selected,
  onChange,
  placeholder,
}: {
  label: string;
  options: { value: string; label: string }[];
  selected: string[];
  onChange: (v: string[]) => void;
  placeholder?: string;
}) {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const values = Array.from(e.target.selectedOptions, (o) => o.value);
    onChange(values);
  };

  const handleRemove = (val: string) => {
    onChange(selected.filter((v) => v !== val));
  };

  return (
    <div>
      <label className="block font-medium mb-1">{label}</label>
      <div className="relative">
        <select
          title={label}
          multiple
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-8"
          value={selected}
          onChange={handleSelect}
        >
          <option disabled value="" className="s">
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-whiter">
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {selected.map((val) => {
          const opt = options.find((o) => o.value === val);
          return (
            <span
              key={val}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-sm flex items-center gap-1 text-xs"
            >
              {opt?.label}
              <button
                type="button"
                className="ml-1 text-blue-500 hover:text-blue-700"
                onClick={() => handleRemove(val)}
              >
                &times;
              </button>
            </span>
          );
        })}
      </div>
    </div>
  );
}
