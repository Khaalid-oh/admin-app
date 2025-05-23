import { useState } from "react";
import { Modal } from "../Modal";
import { BaseEditProps, Currency, RoleData, TimeUnit } from "../../types";

export const RoleEditModal: React.FC<BaseEditProps> = ({
  isOpen,
  onClose,
  onUpdate,
  initialData,
}) => {
  const [formData, setFormData] = useState<RoleData>(
    initialData || {
      name: "",
      tier: "",
      salaryRange: {
        currency: "GBP £",
        min: 0,
        max: 0,
        period: "Monthly",
      },
      region: "",
      countries: [],
    }
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Edit Role Information
          </h2>
          <p className="text-sm text-gray-500">
            Editing this role information allows you to assign candidates to a
            specific role and tier more efficiently when working on elite
            applications
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Role Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              placeholder="Product Designer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Select a tier for this role
            </label>
            <select
              title="Select a tier for this role"
              value={formData.tier}
              onChange={(e) =>
                setFormData({ ...formData, tier: e.target.value })
              }
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            >
              <option title="Select a tier for this role" value="">
                Select tier...
              </option>
              <option value="Tier 1 (Global Talent)">
                Tier 1 (Global Talent)
              </option>
              {/* Add other tier options */}
            </select>
            <a href="#" className="text-sm text-blue-600">
              Learn more about how the tiers are organised
            </a>
          </div>

          {/* Salary Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Salary Range for the role in this region
            </label>
            <div className="flex space-x-2">
              <select
                title="Salary range currency"
                value={formData?.salaryRange?.currency}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    salaryRange: {
                      ...formData.salaryRange,
                      currency: e.target.value as Currency,
                    },
                  })
                }
                className="w-24 rounded-md border border-gray-300 px-3 py-2"
              >
                <option value="GBP £">GBP £</option>
                {/* Add other currency options */}
              </select>

              <input
                type="number"
                placeholder="min"
                value={formData?.salaryRange?.min}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    salaryRange: {
                      ...formData.salaryRange,
                      min: Number(e.target.value),
                    },
                  })
                }
                className="w-24 rounded-md border border-gray-300 px-3 py-2"
              />

              <span className="flex items-center">-</span>

              <input
                type="number"
                placeholder="max"
                value={formData?.salaryRange?.max}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    salaryRange: {
                      ...formData.salaryRange,
                      max: Number(e.target.value),
                    },
                  })
                }
                className="w-24 rounded-md border border-gray-300 px-3 py-2"
              />

              <select
                title="Salary range period"
                value={formData?.salaryRange?.period}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    salaryRange: {
                      ...formData.salaryRange,
                      period: e.target.value as TimeUnit,
                    },
                  })
                }
                className="w-32 rounded-md border border-gray-300 px-3 py-2"
              >
                <option value="Monthly">Monthly</option>
                {/* Add other period options */}
              </select>
            </div>
          </div>

          {/* Region Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Select region for this role
            </label>
            <select
              title="Select region for this role"
              value={formData.region}
              onChange={(e) =>
                setFormData({ ...formData, region: e.target.value })
              }
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            >
              <option value="">Select region...</option>
              {/* Add your region options here */}
            </select>
          </div>

          {/* Countries Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Select the countries within this region to assign to this role
            </label>
            <div className="mt-2 flex flex-wrap gap-2">
              {formData?.countries?.map((country) => (
                <div
                  key={country}
                  className="inline-flex items-center bg-blue-50 px-2 py-1 rounded-md"
                >
                  <span className="text-sm text-blue-700">{country}</span>
                  <button
                    onClick={() =>
                      setFormData({
                        ...formData,
                        countries: formData?.countries?.filter(
                          (c) => c !== country
                        ),
                      })
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
              onUpdate(formData);
              onClose();
            }}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Update Role Information
          </button>
        </div>
      </div>
    </Modal>
  );
};
