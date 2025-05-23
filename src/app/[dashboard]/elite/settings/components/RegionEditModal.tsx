import { useState } from "react";
import { Modal } from "./Modal";

interface EditRegionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (data: { name: string; countries: string[] }) => void;
  initialData?: {
    name: string;
    countries: string[];
  };
}

export const RegionEditModal: React.FC<EditRegionModalProps> = ({
  isOpen,
  onClose,
  onUpdate,
  initialData,
}) => {
  const [name, setName] = useState(initialData?.name || "");
  const [selectedCountries, setSelectedCountries] = useState<string[]>(
    initialData?.countries || []
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Edit Region Information
          </h2>
          <p className="text-sm text-gray-500">
            Regions help you determine the talents geographical location
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Region Name
            </label>
            <input
              title="Region name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Select Countries to be assigned to this region
            </label>
            <div className="mt-1 relative">
              <select
                title="Select countries"
                className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                onChange={(e) => {
                  const value = e.target.value;
                  if (value && !selectedCountries.includes(value)) {
                    setSelectedCountries([...selectedCountries, value]);
                  }
                }}
              >
                <option value="">Select countries...</option>
                {/* Add your country options here */}
              </select>
            </div>

            <div className="mt-2 flex flex-wrap gap-2">
              {selectedCountries.map((country) => (
                <div
                  key={country}
                  className="inline-flex items-center bg-blue-50 px-2 py-1 rounded-md"
                >
                  <span className="text-sm text-blue-700">{country}</span>
                  <button
                    onClick={() =>
                      setSelectedCountries(
                        selectedCountries.filter((c) => c !== country)
                      )
                    }
                    className="ml-1 text-blue-700 hover:text-blue-800"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onUpdate({ name, countries: selectedCountries });
              onClose();
            }}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Update Information
          </button>
        </div>
      </div>
    </Modal>
  );
};
