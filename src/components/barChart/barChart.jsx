import "./barChart.scss";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"

function BarChart({ chartData }) {
  const data = {
    labels: chartData.labels,
    datasets: chartData.dataSets,
  };
  const options = chartData.options

  // console.log(chartData)

  return (
    <>
        <Bar 
            data={data} 
            options={options}
        />
    </>
  );
}

export default BarChart;
