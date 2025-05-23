// src/components/dashboard/ReceivablesVsBillablesCard.tsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", receivables: 20000, billables: 12000 },
  { month: "Feb", receivables: 21000, billables: 12500 },
  { month: "Mar", receivables: 22000, billables: 13000 },
  { month: "Apr", receivables: 23000, billables: 13500 },
  { month: "May", receivables: 22500, billables: 14000 },
  { month: "Jun", receivables: 24000, billables: 14500 },
  { month: "Jul", receivables: 23500, billables: 15000 },
  { month: "Aug", receivables: 23800, billables: 15200 },
  { month: "Sep", receivables: 24200, billables: 15500 },
  { month: "Oct", receivables: 24500, billables: 15700 },
  { month: "Nov", receivables: 24800, billables: 15800 },
  { month: "Dec", receivables: 25000, billables: 15700 },
];

export default function ReceivablesVsBillablesCard() {
  return (
    <div className="bg-white rounded shadow p-4 flex-grow h-full flex flex-col">
      <div className="font-semibold mb-2 self-start">
        Receivable&apos;s VS Billable&apos;s
      </div>
      <div className="flex-1 flex flex-col">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="receivables"
              stroke="#3B82F6"
              name="Receivables"
            />
            <Line
              type="monotone"
              dataKey="billables"
              stroke="#F59E42"
              name="Billables"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-between text-xs mt-2">
        <span className="text-blue-600">Receivables: £24,000</span>
        <span className="text-orange-500">Billables: £15,700</span>
      </div>
    </div>
  );
}
