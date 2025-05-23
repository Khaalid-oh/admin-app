import { useState } from "react";
import { Modal } from "../Modal";
import { BaseEditProps, VerificationPlanData } from "../../types";

export const VerificationPlanEditModal: React.FC<BaseEditProps> = ({
  isOpen,
  onClose,
  onUpdate,
  initialData,
}) => {
  const [formData, setFormData] = useState<VerificationPlanData>(
    initialData || {
      name: "",
      createdFor: "Company and Talent Users",
      checks: [],
      price: {
        currency: "GBP £",
        amount: 0,
        period: "Monthly",
      },
      salesPrice: {
        currency: "GBP £",
        amount: 0,
        period: "Monthly",
      },
      validityPeriod: "",
    }
  );

  const [includeSalesPrice, setIncludeSalesPrice] = useState(
    !!initialData?.salesPrice
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Edit Verification Plan
          </h2>
          <p className="text-sm text-gray-500">
            Edit Details of verification plans you want to provide to companies
            to select from
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Verification Plan Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              placeholder="Basic Plan"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Created For
            </label>
            <select
              value={formData.createdFor}
              onChange={(e) =>
                setFormData({ ...formData, createdFor: e.target.value })
              }
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            >
              <option value="Company and Talent Users">
                Company and Talent Users
              </option>
              <option value="Company Users">Company Users</option>
              <option value="Talent Users">Talent Users</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Select Checks that would be available on this plan
            </label>
            <div className="mt-2 flex flex-wrap gap-2">
              {formData.checks.map((check) => (
                <div
                  key={check}
                  className="inline-flex items-center bg-blue-50 px-2 py-1 rounded-md"
                >
                  <span className="text-sm text-blue-700">{check}</span>
                  <button
                    onClick={() =>
                      setFormData({
                        ...formData,
                        checks: formData.checks.filter((c) => c !== check),
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

          {/* Price Fields */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price for this plan
            </label>
            <div className="flex space-x-2 mt-1">
              <select
                value={formData.price.currency}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    price: { ...formData.price, currency: e.target.value },
                  })
                }
                className="w-24 rounded-md border border-gray-300 px-3 py-2"
              >
                <option value="GBP £">GBP £</option>
                <option value="USD $">USD $</option>
                <option value="EUR €">EUR €</option>
              </select>

              <input
                type="text"
                placeholder="e.g 10"
                value={formData.price.amount}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    price: {
                      ...formData.price,
                      amount: Number(e.target.value),
                    },
                  })
                }
                className="flex-1 rounded-md border border-gray-300 px-3 py-2"
              />

              <select
                value={formData.price.period}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    price: { ...formData.price, period: e.target.value },
                  })
                }
                className="w-32 rounded-md border border-gray-300 px-3 py-2"
              >
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
          </div>

          {/* Sales Price Toggle */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                checked={includeSalesPrice}
                onChange={() => setIncludeSalesPrice(!includeSalesPrice)}
                className="h-4 w-4 text-blue-600"
              />
              <label className="text-sm text-gray-700">
                Do you want to include a sales price for this plan
              </label>
            </div>

            {includeSalesPrice && (
              <div className="flex space-x-2">
                <select
                  value={formData.salesPrice?.currency}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      salesPrice: {
                        ...formData.salesPrice!,
                        currency: e.target.value,
                      },
                    })
                  }
                  className="w-24 rounded-md border border-gray-300 px-3 py-2"
                >
                  <option value="GBP £">GBP £</option>
                  <option value="USD $">USD $</option>
                  <option value="EUR €">EUR €</option>
                </select>

                <input
                  type="text"
                  placeholder="e.g 10"
                  value={formData.salesPrice?.amount}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      salesPrice: {
                        ...formData.salesPrice!,
                        amount: Number(e.target.value),
                      },
                    })
                  }
                  className="flex-1 rounded-md border border-gray-300 px-3 py-2"
                />

                <select
                  value={formData.salesPrice?.period}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      salesPrice: {
                        ...formData.salesPrice!,
                        period: e.target.value,
                      },
                    })
                  }
                  className="w-32 rounded-md border border-gray-300 px-3 py-2"
                >
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
            )}
          </div>

          {/* Validity Period */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Validity Period
            </label>
            <input
              type="text"
              value={formData.validityPeriod}
              onChange={(e) =>
                setFormData({ ...formData, validityPeriod: e.target.value })
              }
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              placeholder="e.g 1 month"
            />
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
            Update Information
          </button>
        </div>
      </div>
    </Modal>
  );
};
