// components/EditModal/RightDrawerModal.tsx
import React from "react";

import CustomInput from "../CustomInput";
import CustomMultiSelect from "../CustomMultiselect";

interface RightDrawerModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  fields: {
    name: string;
    label: string;
    type: "input" | "multiselect";
    placeholder?: string;
  }[];
  values: {
    [key: string]: string | string[];
  };
  onChange: (name: string, value: string | string[]) => void;
  onSubmit: () => void;
  submitText: string;
  cancelText?: string;
}

export default function RightDrawerModal({
  open,
  onClose,
  title,
  subtitle,
  fields,
  values,
  onChange,
  onSubmit,
  submitText,
  cancelText = "Cancel",
}: RightDrawerModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end text-gray-800 bg-black/30 text-sm">
      <div className="w-full max-w-xl bg-white h-full shadow-lg p-8 overflow-y-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-2xl">
            &times;
          </button>
        </div>
        {subtitle && <p className="mb-6 text-gray-500">{subtitle}</p>}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          className="space-y-4"
        >
          {fields.map((field) => {
            if (field.type === "input") {
              return (
                <CustomInput
                  key={field.name}
                  label={field.label}
                  placeholder={field.placeholder}
                  value={values[field.name] || ""}
                  onChange={(v) => onChange(field.name, v)}
                  type={field.inputType}
                />
              );
            }
            if (field.type === "multiselect") {
              return (
                <CustomMultiSelect
                  key={field.name}
                  label={field.label}
                  options={field.options || []}
                  selected={values[field.name] || []}
                  onChange={(v) => onChange(field.name, v)}
                  placeholder={field.placeholder}
                />
              );
            }
            // Add more field types as needed
            return null;
          })}
          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              className="px-4 py-2 border rounded"
              onClick={onClose}
            >
              {cancelText}
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              {submitText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
