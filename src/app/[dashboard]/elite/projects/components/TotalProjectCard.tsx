// src/components/dashboard/TotalProjectsCard.tsx
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Onboarding", value: 50, color: "#F59E42" },
  { name: "Closed", value: 32, color: "#3B82F6" },
  { name: "Active", value: 54, color: "#34D399" },
];

export default function TotalProjectsCard() {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col justify-between h-full items-center">
      <div className="text-lg font-semibold mb-2 self-start">
        Total Projects
      </div>
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={70}
          fill="#8884d8"
        >
          {data.map((entry, idx) => (
            <Cell key={`cell-${idx}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
      <div className="text-2xl font-medium ">240</div>
      <div className="flex gap-2 mt-2 text-xs w-full justify-between">
        <span className="flex items-center gap-2">
          <div className="w-2 h-2 bg-orange-500 rounded-full"> </div>
          Onboarding 50
        </span>
        <span className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          Closed 32
        </span>
        <span className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          Active 54
        </span>
      </div>
    </div>
  );
}
