"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";
import Image from "next/image";

// Mock data for schedule
const scheduleData = [
  {
    date: "2025-05-22",
    time: "9:00 AM",
    title: "Orientation Session",
    person: "Opeyemi Olaiya",
    role: "HR Manager",
    avatar: "https://randomuser.me/api/portraits/women/92.jpg",
  },
  {
    date: "2025-05-21",
    time: "1:00 PM",
    title: "Technical Training",
    person: "Michael Johnson",
    role: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    date: "2025-05-23",
    time: "11:00 AM",
    title: "Operations Management Training",
    person: "Derek Hughes",
    role: "Operations Coordinator",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    date: "2025-05-24",
    time: "10:00 AM",
    title: "Network Systems Orientation",
    person: "Laura Smith",
    role: "Network Administrator",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
  },
];

// Helper to get days in a month
function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getCurrentDate() {
  const today = new Date();
  return today.toISOString().split("T")[0];
}

function CalendarScheduleComponent() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()); // May (0-indexed)
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(getCurrentDate());

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);

  // Find which day of week the month starts on
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  // Dates with events
  const eventDates = scheduleData.map((item) => item.date);

  // Handlers
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  // Filter schedule for selected date
  const scheduleForDate = scheduleData.filter(
    (item) => item.date === selectedDate
  );

  return (
    <div className="flex flex-row gap-6 px-8 py-6 text-sm">
      {/* Calendar Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow flex flex-col w-[328px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-semibold text-lg">
            {new Date(currentYear, currentMonth).toLocaleString("default", {
              month: "long",
            })}{" "}
            {currentYear}
          </span>
          <div className="flex gap-2">
            <button
              className="p-1 rounded hover:bg-gray-100"
              onClick={handlePrevMonth}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="p-1 rounded hover:bg-gray-100"
              onClick={handleNextMonth}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        {/* Days of week */}
        <div className="grid grid-cols-7 text-center text-gray-400 mb-1">
          {daysOfWeek.map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>
        {/* Dates */}
        <div className="grid grid-cols-7 gap-1">
          {/* Empty slots for first day */}
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          {/* Days */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(
              2,
              "0"
            )}-${String(day).padStart(2, "0")}`;
            const isSelected = selectedDate === dateStr;
            const hasEvent = eventDates.includes(dateStr);
            return (
              <button
                key={day}
                className={`w-9 h-9 rounded-full flex items-center justify-center
                  ${isSelected ? "bg-blue-100 text-blue-700 font-bold" : ""}
                  ${hasEvent && !isSelected ? "border border-blue-500" : ""}
                  hover:bg-blue-50 transition`}
                onClick={() => setSelectedDate(dateStr)}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
      {/* Schedule Section */}
      <div className="flex-1 bg-white rounded-xl border border-gray-200 p-6 shadow flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <span className="font-semibold text-lg">Schedule</span>
          <button className="text-2xl">+</button>
        </div>
        <div className="flex flex-col gap-4">
          {scheduleForDate.length === 0 ? (
            <span className="text-gray-400">No events for this date.</span>
          ) : (
            scheduleForDate.map((item, idx) => (
              <div
                key={idx}
                className="bg-blue-50 rounded-xl p-4 flex flex-col gap-2 relative"
              >
                <span className="text-xs text-gray-500">
                  {new Date(item.date + "T00:00:00").toLocaleDateString(
                    undefined,
                    {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }
                  )}{" "}
                  - {item.time}
                </span>
                <span className="font-semibold">{item.title}</span>
                <div className="flex items-center gap-2">
                  <Image
                    src={item.avatar}
                    alt={item.person}
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-sm font-medium">{item.person}</span>
                  <span className="text-xs text-gray-500">• {item.role}</span>
                </div>
                <button
                  title="More"
                  className="absolute top-4 right-4 rounded-lg p-1"
                >
                  <MoreVertical size={18} className="text-gray-700" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default CalendarScheduleComponent;
