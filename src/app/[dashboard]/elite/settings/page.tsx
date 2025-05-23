"use client";

import React, { useEffect, useState } from "react";
import { FileIcon, Search } from "lucide-react";
import TabButton from "./components/TabButtonProps";
import ActionButton from "./components/ActionButtonProps";
import TableComponent from "./components/TableComponentProps";
import SettingsSkeleton from "./components/SettingsSkeleton";
import { ModalType } from "./components/EditModal";
import RightDrawerModal from "./components/EditModal/RightDrawerModal";

type TabType =
  | "Regions"
  | "Roles"
  | "Platform Fee"
  | "Agreement"
  | "Perks and Benefits"
  | "Verification Plans";

interface TableConfig {
  headers: string[];
  buttonText: string;
}

const benefitPlanFields = [
  {
    name: "planName",
    label: "Benefit Plan Name",
    type: "input",
    placeholder: "Basic Plan",
  },
  {
    name: "regions",
    label: "Select Region",
    type: "multiselect",
    options: [
      { value: "europe", label: "Europe" },
      { value: "africa", label: "Africa" },
    ],
  },
  {
    name: "countries",
    label: "Select Country",
    type: "multiselect",
    options: [
      { value: "nigeria", label: "Nigeria" },
      { value: "uk", label: "UK" },
    ],
  },
  {
    name: "perks",
    label: "Select Perks",
    type: "multiselect",
    options: [
      { value: "gym", label: "Gym Equipment" },
      { value: "insurance", label: "Health Insurance" },
    ],
  },
  {
    name: "totalAmount",
    label: "Total Amount For all Selected Perks",
    type: "input",
    placeholder: "10000",
  },
  {
    name: "planPrice",
    label: "Price for this plan",
    type: "input",
    placeholder: "",
  },
];

const Settings = () => {
  const [activeTab, setActiveTab] = useState<TabType>("Regions");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({
    planName: "Basic Plan",
    regions: ["europe", "africa"],
    countries: [],
    perks: ["gym", "insurance"],
    totalAmount: "10000",
    planPrice: "",
  });

  const handleChange = (name: string, value: string | string[]) =>
    setForm((f) => ({ ...f, [name]: value }));

  const tabs: TabType[] = [
    "Regions",
    "Roles",
    "Platform Fee",
    "Agreement",
    "Perks and Benefits",
    "Verification Plans",
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const tableConfigs: Record<TabType, TableConfig> = {
    Regions: {
      headers: ["Name", "Created By", "No of Countries"],
      buttonText: "Add New Region",
    },
    Roles: {
      headers: ["Role Name", "Created By", "Number of Tiers in the Role"],
      buttonText: "Add New Role",
    },
    "Platform Fee": {
      headers: ["Plans", "Created By"],
      buttonText: "Add New Plan",
    },
    Agreement: {
      headers: ["Title", "Created By", "Created For"],
      buttonText: "Create New Contract",
    },
    "Perks and Benefits": {
      headers: ["Perk Name", "Created By", "Created For", "Serial No. or ID"],
      buttonText: "Add New Perk",
    },
    "Verification Plans": {
      headers: ["Plan Name", "Created By", "Created For", "Serial No. or ID"],
      buttonText: "Verification Plan",
    },
  };

  return (
    <div className="w-full p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Elite Settings
          </h1>
          <p className="text-sm text-gray-500">
            Manage, view and edit your elite settings
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          {activeTab === "Perks and Benefits" && (
            <button
              className="bg-white flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded font-medium"
              onClick={() => setModalOpen(true)}
            >
              <FileIcon className="w-4 h-4" />
              Create Benefit Plan
            </button>
          )}
          <ActionButton text={tableConfigs[activeTab].buttonText} />
        </div>
        <RightDrawerModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Add Benefit Plan"
          subtitle="Add Details of Benefit Plan you want to provide to companies to select from"
          fields={benefitPlanFields}
          values={form}
          onChange={handleChange}
          onSubmit={() => {
            setModalOpen(false);
          }}
          submitText="Add Benefit Plan"
        />
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <TabButton
              key={tab}
              text={tab}
              active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative text-gray-600 mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {loading ? (
        <SettingsSkeleton />
      ) : (
        <TableComponent
          activeTab={activeTab as ModalType}
          headers={tableConfigs[activeTab].headers}
        />
      )}
    </div>
  );
};

export default Settings;
