"use client";
import CalendarScheduleComponent from "./components/CalendarScheduleComponent";
import MetricCardComponent from "./components/MetricCardComponent";
import { metrics } from "./components/mock/mock";
import RecentActivitiesComponent from "./components/RecentActvitiesComponent";

export default function Dashboard() {
  return (
    <div className="w-full flex flex-col">
      <div className="p-8 flex flex-col gap-1">
        <h1 className="text-2xl font-bold">Welcome back, Ayomide!</h1>
        <p className="text-gray-500">
          Here&apos;s what&apos;s happening with your recruitment efforts.
        </p>
      </div>
      <div className="flex gap-6 px-8">
        {metrics.map((metric) => (
          <MetricCardComponent key={metric.title} {...metric} />
        ))}
      </div>
      <div className="">
        <CalendarScheduleComponent />
      </div>
      <div className="px-8">
        <RecentActivitiesComponent />
      </div>
    </div>
  );
}
