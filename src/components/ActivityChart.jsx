import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function ActivityChart() {
  return (
    <div className="py-3 px-2">
      <div className="flex justify-between items-center">
        <h4 className="text-lg text-white">Activity</h4>
        <button className="flex items-center text-white bg-gray-600/40 hover:bg-gray-700/40 rounded-full px-2 py-1">
          Weekly
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      <Bar
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              barPercentage: 1.0,
              barThickness: 60,
              maxBarThickness: 30,
              minBarLength: 4,
              data: [10, 20, 30, 40, 50, 60, 70],
              backgroundColor: "rgba(53, 162, 235, 0.5)",
              borderRadius: 15,
            },
            {
              barPercentage: 1.0,
              barThickness: 60,
              maxBarThickness: 30,
              minBarLength: 4,
              data: [15, 25, 35, 45, 55, 65, 75],
              backgroundColor: "rgba(255, 99, 132, 0.5)",
              borderRadius: 15,
            },
          ],
        }}
        height={80}
        options={{
          plugins: {
            legend: {
              display: false, // Hide the legend
            },
          },
        }}
      />
    </div>
  );
}

export default ActivityChart;
