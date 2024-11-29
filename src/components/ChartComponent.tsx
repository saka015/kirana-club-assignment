import React, { useEffect, useRef } from "react";
import { CodeforcesContest } from "../types/codeforces";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

interface ChartComponentProps {
  contests: CodeforcesContest[];
}

const ChartComponent: React.FC<ChartComponentProps> = ({ contests }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: contests.map((contest) => contest.name),
            datasets: [
              {
                label: "Contest Duration (seconds)",
                data: contests.map((contest) => contest.durationSeconds),
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Contest Name",
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Duration (seconds)",
                },
                beginAtZero: true,
              },
            },
            responsive: true,
            maintainAspectRatio: false,
          },
        });
      }
    }

    return () => {
      const myChart = Chart.getChart("myChart");
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [contests]);

  return (
    <div className="chart-container">
      <canvas id="myChart" ref={chartRef} />
    </div>
  );
};

export default ChartComponent;
