"use client";

import { useEffect } from "react";
import Chart from "chart.js/auto";

interface PieChartProps {
  stats: {
    totalBriefs: number;
    activeBriefs: number;
    sentBriefs: number;
    allBriefs: number;
  };
}

export const PieChart: React.FC<PieChartProps> = ({ stats }) => {
  useEffect(() => {
    const ctx = document.getElementById("briefsChart") as HTMLCanvasElement;

    // Destroy existing chart if it exists
    const existingChart = Chart.getChart(ctx);
    if (existingChart) {
      existingChart.destroy();
    }

    new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [stats.allBriefs, stats.sentBriefs, stats.activeBriefs],
            backgroundColor: [
              "rgb(99, 102, 241)", // Blue for All Briefs
              "rgb(251, 146, 60)", // Orange for Sent Briefs
              "rgb(45, 212, 191)", // Cyan for Active Briefs
            ],
            borderWidth: 0,
          },
        ],
        //labels: ["All Briefs", "Sent Briefs", "Active Briefs"],
      },
      options: {
        responsive: true,
        cutout: "70%",
        plugins: {
          legend: {
            position: "right",
          },
        },
      },
    });
  }, [stats]);

  return (
    <div className="relative h-[400px]s">
      <canvas id="briefsChart"></canvas>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center -ml-2">
        <div className="text-3xl font-semibold text-gray-900">
          {stats.totalBriefs}
        </div>
        <div className="text-sm text-gray-500">Total Number of briefs</div>
      </div>
    </div>
  );
};
