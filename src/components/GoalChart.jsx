import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function GoalChart() {
  const data = {
    datasets: [
      {
        data: [70, 30], // 70% completed, 30% remaining
        backgroundColor: ["#4B77BE", "#DADADA"],
        borderWidth: 0,
        cutout: "85%", // Adjust for thicker/thinner ring 
        
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: false, // Disable tooltip
      },
      legend: {
        display: false, // Hide legend
      },
    },
    animation: {
      animateScale: true,
    },
    elements: {
      arc: {
        roundedCornersFor: 0,
      },
    },
  };

  return (
    <div style={{ position: "relative", width: "100px", height: "100px" }}>
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "1rem"}}>70%</h2>
        <p style={{ fontSize: "0.55rem" }}>Goal Completed</p>
      </div>
      <p
        style={{
          position: "absolute",
        //   bottom: "10px",
          width: "100%",
          textAlign: "center",
          color: "#fff",
          fontSize: "0.55rem",
        }}
      >
        *The values here has been rounded off.
      </p>
    </div>
  );
}

export default GoalChart;
