/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/[dashboard]/elite/settings/components/TableComponent.tsx
import { useState } from "react";
import { Trash2, Edit2, Eye } from "lucide-react";
import { EditModalFactory, ModalType } from "./EditModal/EditModalFactory";

interface TableComponentProps {
  activeTab: ModalType;
  headers: string[];
  onCreateBenefitPlan?: () => void;
}

const TableComponent: React.FC<TableComponentProps> = ({
  activeTab,
  headers,
  //onCreateBenefitPlan,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [perkTab, setPerkTab] = useState<"Perks" | "Benefit Plan">("Perks");

  // Simulated data based on active tab
  const getData = () => {
    switch (activeTab) {
      case "Regions":
        return [
          { id: 1, name: "Africa", createdBy: "Femi Ojo", count: 7 },
          {
            id: 2,
            name: "Latin America",
            createdBy: "Tommie Edwards",
            count: 10,
          },
          { id: 3, name: "Europe", createdBy: "Femi Ojo", count: 20 },
          { id: 4, name: "Asia", createdBy: "Tommie Edwards", count: 12 },
        ];
      case "Roles":
        return [
          { id: 1, name: "Product Designer", createdBy: "Femi Ojo", tiers: 4 },
          {
            id: 2,
            name: "Software Developer",
            createdBy: "Tommie Edwards",
            tiers: 3,
          },
          {
            id: 3,
            name: "Digital Marketing Expert",
            createdBy: "Femi Ojo",
            tiers: 2,
          },
          {
            id: 4,
            name: "Content Strategist",
            createdBy: "Tommie Edwards",
            tiers: 2,
          },
        ];
      case "Platform Fee":
        return [
          { id: 1, name: "Standard", createdBy: "Femi Ojo" },
          { id: 2, name: "Gold", createdBy: "Tommie Edwards" },
          { id: 3, name: "Scale", createdBy: "Femi Ojo" },
        ];
      case "Agreement":
        return [
          {
            id: 1,
            title: "Project Agreement Contract",
            createdBy: "Femi Ojo",
            createdFor: "Company and Talent Users",
          },
          {
            id: 2,
            title: "Elite Hire Rate Agreement",
            createdBy: "Tommie Edwards",
            createdFor: "Company Users",
          },
          {
            id: 3,
            title: "Elite Talent Rate agreement",
            createdBy: "Femi Ojo",
            createdFor: "Talent Users",
          },
          {
            id: 4,
            title: "Elite Hire Contract",
            createdBy: "Femi Ojo",
            createdFor: "Company Users",
          },
          {
            id: 5,
            title: "Elite Talent Contract",
            createdBy: "Femi Ojo",
            createdFor: "Talent Users",
          },
        ];
      case "Verification Plans":
        return [
          {
            id: 1,
            name: "Basic Tier",
            createdBy: "Femi Ojo",
            createdFor: "Company Users",
            price: "£60",
          },
          {
            id: 2,
            name: "Premium Package",
            createdBy: "Tommie Edwards",
            createdFor: "Talent Users",
            price: "£500",
          },
          {
            id: 3,
            name: "Standard Package",
            createdBy: "Femi Ojo",
            createdFor: "Company Users",
            price: "£300",
          },
        ];
      case "Perks and Benefits":
        if (perkTab === "Perks") {
          return [
            {
              id: 1,
              name: "Lifecare Medicals",
              region: "Europe",
              price: "£100",
            },
            { id: 2, name: "Gym Membership", region: "Africa", price: "£400" },
            {
              id: 3,
              name: "Work Equipment",
              region: "North America",
              price: "£500",
            },
          ];
        } else {
          return [
            { id: 1, name: "Basic Benefit", region: "Europe", price: "£100" },
            {
              id: 2,
              name: "Standard Benefit",
              region: "Africa",
              price: "£400",
            },
            {
              id: 3,
              name: "Premium Benefit",
              region: "North America",
              price: "£500",
            },
          ];
        }
      default:
        return [];
    }
  };

  const renderTableRow = (item: any) => {
    switch (activeTab) {
      case "Regions":
        return (
          <>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {item.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.createdBy}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.count}
            </td>
          </>
        );
      case "Roles":
        return (
          <>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {item.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.createdBy}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.tiers}
            </td>
          </>
        );
      case "Platform Fee":
        return (
          <>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {item.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.createdBy}
            </td>
          </>
        );
      case "Agreement":
        return (
          <>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {item.title}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.createdBy}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.createdFor}
            </td>
          </>
        );
      case "Verification Plans":
        return (
          <>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {item.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.createdBy}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.createdFor}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.price}
            </td>
          </>
        );
      case "Perks and Benefits":
        return (
          <>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {item.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.region}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.price}
            </td>
          </>
        );
      // Add more cases for other tabs...
      default:
        return null;
    }
  };

  const handleEdit = (item: any) => {
    setSelectedItem(item);
    setIsEditModalOpen(true);
  };

  return (
    <>
      {activeTab === "Perks and Benefits" && (
        <div className="flex items-center justify-between mb-4">
          <div className="flex bg-gray-100 rounded-lg overflow-hidden">
            <button
              className={`px-4 py-2 text-sm font-medium ${
                perkTab === "Perks"
                  ? "bg-white text-blue-600 shadow"
                  : "text-gray-500"
              }`}
              onClick={() => setPerkTab("Benefit Plan")}
            >
              Benefit Plan
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium ${
                perkTab === "Benefit Plan"
                  ? "bg-white text-blue-600 shadow"
                  : "text-gray-500"
              }`}
              onClick={() => setPerkTab("Perks")}
            >
              Perks
            </button>
          </div>
        </div>
      )}
      <div className="bg-white rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {getData().map((item) => (
              <tr key={item.id}>
                {renderTableRow(item)}
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-3">
                    <button
                      title="Delete"
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                    <button
                      title="Edit"
                      className="text-gray-400 hover:text-gray-500"
                      onClick={() => handleEdit(item)}
                    >
                      <Edit2 className="h-5 w-5" />
                    </button>
                    {activeTab !== "Regions" && (
                      <button
                        title="View"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <Eye className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Page 1 of 15</span>
            <div className="space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700">
                Previous
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700">
                Next
              </button>
            </div>
          </div>
        </div> */}
      </div>

      <EditModalFactory
        type={activeTab}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onUpdate={(data) => {
          // Handle update logic here
          console.log("Updated data:", data);
        }}
        initialData={selectedItem}
      />
    </>
  );
};

export default TableComponent;
