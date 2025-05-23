// src/components/dashboard/TimesheetsCard.tsx
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Approved", value: 50, color: "#34D399" },
  { name: "Pending", value: 100, color: "#F59E42" },
  { name: "Rejected", value: 100, color: "#EF4444" },
];

export default function TimesheetsCard() {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col items-center h-full justify-between">
      <div className="font-semibold mb-2 self-start">Timesheets</div>
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
        <div className="text-2xl font-medium">1000</div>
        <div className="flex gap-2 mt-2 text-xs w-full justify-between">
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"> </div>
            Approved 50
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            Pending 100
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Rejected 100
          </span>
        </div>
      </div>
    </div>
  );
}
