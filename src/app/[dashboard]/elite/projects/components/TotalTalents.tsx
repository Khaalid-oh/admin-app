// src/components/dashboard/TotalTalentsCard.tsx
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Pending", value: 300, color: "#F59E42" },
  { name: "Completed", value: 540, color: "#3B82F6" },
  { name: "Active", value: 1000, color: "#34D399" },
];

export default function TotalTalentsCard() {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col items-center h-full justify-between">
      <div className="font-semibold mb-2 self-start">Total Talents</div>
      <PieChart width={180} height={180}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={70}
        >
          {data.map((entry, idx) => (
            <Cell key={`cell-${idx}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
      <div className="flex flex-col items-center w-full gap-3">
        <div className="text-2xl font-medium mt-2">1300</div>
        <div className="flex gap-2 mt-2 text-xs w-full justify-between">
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"> </div>
            Pending 300
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            Completed 540
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Active 1000
          </span>
        </div>
      </div>
    </div>
  );
}
