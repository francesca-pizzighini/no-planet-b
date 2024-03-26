import "./sideChart.scss"

function SideChart({ title, description, url, website }) {
  return (
    <>
        <div id="top"></div>
        <div className="chart-graph" ></div>

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
