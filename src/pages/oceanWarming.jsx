import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOceanWarming } from "../features/oceanWarming/oceanWarmingFetchingSlice";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SideChart from "../components/sideChart/sideChart";

function OceanWarming() {
  const oceanWarming = useSelector(state => state.oceanWarming.oceanWarming);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOceanWarming());
  }, [])

  console.log(oceanWarming)

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Ocean Warming</title>
          <meta 
            name="description"
            content="There is no planet B. Since half of 20th century scientists are warning us that human activity is interfering with normal climate change of the planet, and we still haven't done anithing drastic to change things. We put information togheter to help clarifying the situation for everyone who still have doubts. This page is dedicated to the rising of the ocean temperature in the last century and to sensitize people on this theme."
            ></meta>
          <meta 
            name="keywords" 
            content="climate-change ocean-temperature ocean-warming act-now ocean-warming-graph ocean-warming-information ocean-temperature-graph ocean-temperature-information"
          ></meta>
        </Helmet>
      </HelmetProvider>
      
      <SideChart
        title="Ocean warming"
        description="The ocean, a vast and vital component of Earth's climate system, is warming at an alarming rate, a direct consequence of climate change. As greenhouse gas emissions trap heat in the atmosphere, much of it is absorbed by the ocean, leading to rising sea temperatures with profound implications for marine life, weather patterns, and coastal communities. For example the Co2 we produce is absorbed and dissolved into the ocean, making it more acidic. <br/>
        The rate of ocean warming has accelerated in recent decades, and this trend disrupts marine ecosystems, impacting coral reefs, fish populations, and other marine species. Coral bleaching events, caused by prolonged exposure to high temperatures, are becoming more frequent and severe, threatening the survival of these vital ecosystems.
        The ocean is also important for his modulation of earth temperature. It takes up most of the excess heat that we humans produce, but this makes it warmer, and as result less able to absorb heat. Without the ocean temperature regulatory effect, the global average temperature would be around 50 degrees Celsius instead of 15. <br/>
        Moreover, warmer oceans fuel more intense and destructive tropical storms, hurricanes, and cyclones, posing risks to coastal populations and infrastructure. Rising sea levels, resulting from both ocean warming and the melting of polar ice caps, further exacerbate the threat to coastal regions, leading to increased flooding, erosion, and saltwater intrusion. <br/>
        Addressing the concerning rate of ocean warming requires urgent and concerted global action to reduce greenhouse gas emissions and mitigate climate change. Transitioning to renewable energy sources, implementing sustainable practices in fisheries and coastal development, and enhancing marine conservation efforts are essential steps in safeguarding the health and resilience of our oceans. Furthermore, fostering international cooperation and awareness about the impacts of ocean warming are crucial for mobilizing collective action and implementing effective adaptation strategies."
        url="https://www.noaa.gov/news/2023-was-worlds-warmest-year-on-record-by-far"
        website="www.noaa.gov"
      />

    </div>
  )
}

export default OceanWarming;
