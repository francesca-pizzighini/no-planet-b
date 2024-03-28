import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchN2o } from "../features/n2o/n2oFetchingSlice";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SideChart from "../components/sideChart/sideChart";

function N2o() {
  const n2o = useSelector(state => state.n2o.n2o)
  const dispatch = useDispatch()
  const loadingState = useSelector(state => state.n2o)

  useEffect(() => {
    dispatch(fetchN2o())
  }, [])

  console.log(n2o)

  const [chartData, setChartData] = useState({
    labels: [],
    dataSets: [{
      label: "Nitrous oxide",
      data: [],
    }],
    options: {
      responsive: true,
      maintainAspectRatio: true,
    }, 
  });

  useEffect(() => {
    if (n2o && n2o.length > 0) {
      setChartData({
        labels: n2o.map(n2oData => {
          const defDate = n2oData.date.split(".").join("-");
          return defDate
        }),
        dataSets: [
          {
          label: "N2O average",
          data: n2o.map(n2oData => n2oData.average),
          backgroundColor: ["#FFCC01"],
          },
          {
          label: "N2O trend",
          data: n2o.map(n2oData => n2oData.trend),
          backgroundColor: ["#2CA6A4"],
          },

      ],
      });
    }
  }, [n2o]);

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Nitrous Oxide</title>
          <meta 
            name="description"
            content="There is no planet B. Since half of 20th century scientists are warning us that human activity is interfering with normal climate change of the planet, and we still haven't done anithing drastic to change things. We put information togheter to help clarifying the situation for everyone who still have doubts. This page is dedicated to the rising of the concentration of the nitrous oxide in the air in the last century and to sensitize people on this theme."
          ></meta>
          <meta 
            name="keywords" 
            content="climate-change nitrous-oxide n2o act-now n2o-graph n2o-information n2o-concentration-in-air nitrous-oxide-graph nitrous-oxide-information nitrous-oxide-concentration-in-air"
          ></meta>
        </Helmet>
      </HelmetProvider>
      
      <SideChart
        title="Nitrous Oxide"
        description="In recent years, there has been a concerning escalation in nitrous oxide (N2O) levels in the atmosphere, raising significant concerns about its connection to climate change. N2O plays a substantial role in altering our climate dynamics because even though is less present in the atmosphere than carbon dioxide, the impact of 1 pound of N2O on warming the atmosphere is 265 times that of 1 pound of carbon dioxide. <br/>
        The rise in N2O concentration is predominantly driven by human activities, particularly agricultural practices such as fertilizer use and livestock farming. Additionally, industrial processes and the combustion of fossil fuels also release significant amounts of N2O into the atmosphere.
        The implications of heightened N2O levels are far-reaching and multifaceted. Not only does N2O contribute to the greenhouse effect, trapping heat in the atmosphere and exacerbating global warming, but it also plays a role in ozone depletion. Furthermore, N2O emissions can alter soil and water quality, affecting ecosystems and biodiversity. <br/>
        Addressing the surge in N2O levels requires concerted efforts to mitigate emissions from various sources. Implementing sustainable agricultural practices, such as precision farming and improved fertilizer management, can significantly reduce N2O emissions while promoting soil health and productivity. Additionally, investing in cleaner technologies and renewable energy sources can help curb N2O emissions from industrial processes and energy production. <br/>
        Furthermore, raising awareness about the environmental impact of N2O and its connection to climate change is crucial for fostering informed decision-making and driving policy changes. By integrating N2O mitigation strategies into broader climate action plans, we can work towards reducing our carbon footprint and mitigating the impacts of climate change."
        url="https://www.epa.gov/ghgemissions/overview-greenhouse-gases#nitrous-oxide"
        website="www.epa.gov"
        chartData={chartData}
        caption="caption of the graphic"
        loadingState={loadingState}
        data={n2o}
        bar={false}
      />
    </div>
  )
}

export default N2o;
