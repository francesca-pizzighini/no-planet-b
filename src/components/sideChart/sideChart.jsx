import BarChart from "../barChart/barChart.jsx"
import "./sideChart.scss"
import loadingIcon from "../../assets/img/load-icon.png"

function SideChart({ title, description, url, website, chartData, caption, loadingState, data }) {
  return (
    <>
        <div id="top"></div>
        <div className="chart-graph" >
          {loadingState.loading && (
            <img 
              className="loading-icon" 
              src={loadingIcon} 
              alt="loading icon"
            />
          )}

          {!loadingState.loading && data && data.length>0 ? (
            <>
              <BarChart
                chartData={chartData}
              />
              <span
                className="caption"
              >{caption}</span>
            </>
          )
          : null
          }

          {!loadingState.loading && loadingState.error ? (
            <div 
              className="error-message"
            >
              <h3>An error occurred</h3>
              <p>We are very sorry but en error occurred while generating the chart. Please try realoading the page, and if the problem persists, contact us <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfcwvZ8XLDIXgPeI0yxP4cKEKYY1_4wM_SkdiXy63kxNJqZug/viewform?usp=sf_link">here</a>.</p>
            </div> 
          ) 
          : null}

        </div>

        <h2>{title}</h2>

        <div
          dangerouslySetInnerHTML={{ __html: description}}
          className="description"
        >
        </div>

        <span>To know more information you can visit <a target="_blank" href={url}>{website}</a> website</span>
    </>
  )
}

export default SideChart
