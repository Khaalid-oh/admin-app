// src/app/[dashboard]/components/MetricCardComponent.tsx
import { ArrowDownIcon } from "lucide-react";
import { ArrowUpIcon } from "lucide-react";
import React from "react";

type Trend = "up" | "down" | "neutral";

export interface MetricCardProps {
  title: string;
  value: number | string;
  percentage?: number;
  featureIcon?: React.ReactNode;
  trend?: Trend;
  trendLabel?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode; // For extensibility (e.g., charts)
}

export default function MetricCardComponent({
  title,
  value,
  percentage,
  featureIcon,
  trend = "neutral",
  trendLabel,
  icon,
  children,
}: MetricCardProps) {
  const trendColor =
    trend === "up"
      ? "text-green-500"
      : trend === "down"
      ? "text-red-500"
      : "text-gray-400";

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col gap-2 min-w-[328px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">{featureIcon}</div>
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-bold">{value}</div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">{title}</span>
            {icon && <span>{icon}</span>}
          </div>
          {percentage !== undefined && (
            <div className={`flex items-center gap-1 text-sm ${trendColor}`}>
              {trend === "up" && <ArrowUpIcon className="w-4 h-4" />}
              {trend === "down" && <ArrowDownIcon className="w-4 h-4" />}
              {trend === "neutral" && <span>•</span>}
              <span>
                {percentage > 0 ? "+" : ""}
                {percentage}%
              </span>
              {trendLabel && (
                <span className="text-gray-400 ml-1">{trendLabel}</span>
              )}
            </div>
          )}
          {children && <div className="mt-2">{children}</div>}
        </div>
      </div>
    </div>
  );
}
