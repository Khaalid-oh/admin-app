import { useState } from "react";
import { Modal } from "../Modal";
import {
  BaseEditProps,
  PlatformFeeData,
  Currency,
  TimeUnit,
} from "../../types";

export const PlatformFeeEditModal: React.FC<BaseEditProps> = ({
  isOpen,
  onClose,
  onUpdate,
  initialData,
}) => {
  const [formData, setFormData] = useState<PlatformFeeData>(
    initialData || {
      name: "",
      benefits: [],
      shortlistLimit: 30,
      price: {
        currency: "GBP £",
        amount: 0,
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
          <h2 className="text-lg font-semibold text-gray-900">Edit New Plan</h2>
          <p className="text-sm text-gray-500">
            Editing this information allows you to charge companies based on the
            service being offered
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Plan Name
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
              What are the benefits of this plan
            </label>
            <textarea
              value={formData.benefits?.join("\n")}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  benefits: e.target.value.split("\n"),
                })
              }
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              placeholder="E.g employer of record maintenance&#10;Invoice Management"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Shortlist Limit
            </label>
            <select
              title="Shortlist Limit"
              value={formData?.shortlistLimit}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  shortlistLimit: Number(e.target.value),
                })
              }
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            >
              <option value="30">30</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <p className="text-sm text-gray-500 mt-1">
              Total number of candidates shortlist on this plan
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price for this Plan
            </label>
            <div className="flex space-x-2 mt-1">
              <select
                title="Price Currency"
                value={formData.price.currency}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    price: {
                      ...formData.price,
                      currency: e.target.value as Currency,
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
                type="number"
                placeholder="Price"
                value={formData?.price?.amount}
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
                title="Price Period"
                value={formData?.price?.period}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    price: {
                      ...formData?.price,
                      period: e.target.value as TimeUnit,
                    },
                  })
                }
                className="w-32 rounded-md border border-gray-300 px-3 py-2"
              >
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
          </div>

          {/* Region Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Select region for this Plan
            </label>
            <select
              title="Region"
              value={formData?.region}
              onChange={(e) =>
                setFormData({ ...formData, region: e.target.value })
              }
              className="block w-full rounded-md border border-gray-300 px-3 py-2"
            >
              <option value="">Select region...</option>
              {/* Add your region options here */}
            </select>
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
            Update plan Information
          </button>
        </div>
      </div>
    </Modal>
  );
};
