import "./barChart.scss";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"

function LineChart({ chartData }) {
  const data = {
    labels: chartData.labels,
    datasets: chartData.dataSets,
  };
  const options = chartData.options

  // console.log(chartData)

  return (
    <>
        <Line 
            data={data} 
            options={options}
        />
    </>
  );
}

export default LineChart;
