import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPolarIce } from "../features/polarIce/polarIceFetchingSlice";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SideChart from "../components/sideChart/sideChart";

function PolarIce() {
  const polarIce = useSelector(state => state.polarIce.polarIceData);
  const dispatch = useDispatch();
  const loadingState = useSelector(state => state.polarIce);

  useEffect(() => {
    dispatch(fetchPolarIce())
  }, [])

  // console.log(polarIce)

  const [chartData, setChartData] = useState({
    labels: [],
    dataSets: [{
      label: "Polar ice",
      data: [],
    }],
    options: {
      responsive: true,
      maintainAspectRatio: true,
    }, 
  });

  const [labelArr, setLabelArr] = useState([]);
  const [valueArr, setValueArr] = useState([]);

  useEffect(() => {
    if (polarIce && Object.keys(polarIce).length > 0) {
      const newLabelArr = [];
      const newValueArr = [];

      Object.keys(polarIce).forEach(key => {
        const year = key.split("").slice(0, 4).join("")
        const month = key.split("").slice(4, 6).join("")
        
        newLabelArr.push(`${year}-${month}`);
        newValueArr.push(polarIce[key]);
      });

      setLabelArr(newLabelArr);
      setValueArr(newValueArr);
    }
  }, [polarIce]);

  useEffect(() => {
    if (labelArr.length > 0 && valueArr.length > 0 && labelArr.length === valueArr.length) {
      setChartData({
        labels: labelArr,
        dataSets: [
          {
          label: "Polar ice monthly mean",
          data: valueArr.map(value => value.monthlyMean),
          backgroundColor: ["#FFCC01"],
          },
          // {
          // label: "Polar ice value",
          // data: valueArr.map(value => value.value),
          // backgroundColor: ["#E0B400"],
          // },
          // {
          // label: "Polar ice anomalies",
          // data: valueArr.map(value => value.anom),
          // backgroundColor: ["#2CA6A4"],
          // },
      ],
      });
    }    
  }, [labelArr, valueArr])

  // console.log(labelArr)
  // console.log(valueArr)

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Polar Ice</title>
          <meta 
            name="description"
            content="There is no planet B. Since half of 20th century scientists are warning us that human activity is interfering with normal climate change of the planet, and we still haven't done anithing drastic to change things. We put information togheter to help clarifying the situation for everyone who still have doubts. This page is dedicated to the melting of polar ice, thei consequences on the world temperature and to sensitize people on this theme."
          ></meta>
          <meta 
            name="keywords" 
            content="climate-change polar-ice polar ice-melting melting polar-ice-graphs polar-ice-information polar-ice-melting-information polar-ice-melting-graph"
          ></meta>
        </Helmet>
      </HelmetProvider>
      
      <SideChart
        title="Polar ice"
        description="The accelerating pace at which polar ice is melting stands as one of the most alarming indicators of climate change. In both the Arctic and Antarctic regions, vast expanses of ice are diminishing at unprecedented rates, from 1979 to 1996, we lost 2.2–3% of the arctic ice cover. From 2010 to present we are losing 12.85% per decade! Obviously this events provoke profound implications for global sea levels, weather patterns, and ecosystems. <br/>
        The melting of polar ice is primarily driven by rising temperatures resulting from human-induced climate change. As greenhouse gas (as carbon dioxide, methane and nitrous oxide) emissions trap heat in the atmosphere, temperatures in polar regions are increasing at rates much higher than the global average, leading to the rapid loss of ice. <br/>
        The consequences of polar ice melting are far-reaching and multifaceted. The most immediate impact is the rise in sea levels, threatening coastal communities and low-lying areas with inundation, erosion, and saltwater intrusion. Additionally, the loss of ice alters ocean currents and disrupts marine ecosystems, affecting biodiversity and fisheries. <br/>
        Furthermore, the reflective properties of polar ice, known as its albedo, play a critical role in regulating Earth's temperature by reflecting solar radiation back into space. As ice melts, darker surfaces are exposed, absorbing more heat and further accelerating warming—a dangerous feedback loop known as the ice-albedo feedback. <br/>
        Addressing the distressing pace of polar ice melting requires urgent and concerted global action to mitigate climate change. This includes reducing greenhouse gas emissions, transitioning to renewable energy sources, and implementing policies to protect polar regions and vulnerable communities. Moreover, international cooperation and scientific research are essential for understanding the complex dynamics of polar ice melting and developing effective strategies for adaptation and resilience."
        url="https://www.npolar.no/en/themes/climate-change-in-the-arctic/"
        website="www.npolar.no"
        chartData={chartData}
        caption="caption of the graphic"
        loadingState={loadingState}
        data={polarIce}
        bar={true}
      />

    </div>
  )
}

export default PolarIce;
