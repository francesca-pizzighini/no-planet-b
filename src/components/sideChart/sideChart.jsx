import "./sideChart.scss"

function SideChart({ title, description, url, website }) {
  return (
    <>
        <div className="chart-graph" ></div>

        <h2>{title}</h2>

        <p>{description}</p>

        <span>To know more information you can visit <a href={url}>{website}</a> website</span>
    </>
  )
}

export default SideChart
