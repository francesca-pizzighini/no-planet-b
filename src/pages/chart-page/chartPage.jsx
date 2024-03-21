import { Outlet } from "react-router-dom";
import ChartNavbar from "../../components/navbar/chartNavbar";
import "./chartPage.scss";

function ChartPage() {
  return (
    <div
      className="chart-pages"
    >
      <div 
        className="side"
      >
        <ChartNavbar/>
      </div>

      <div
        className="chart"
      >
        <Outlet/>
      </div>
    </div>
  )
}

export default ChartPage;
