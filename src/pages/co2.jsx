import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCo2 } from "../features/co2/co2FetchingSlice";

import { Helmet, HelmetProvider } from "react-helmet-async";
import SideChart from "../components/sideChart/sideChart";

function Co2() {
  const co2 = useSelector(state => state.co2.co2)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchCo2())
  }, [])

  console.log(co2)

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Carbon Dioxide</title>
          <meta 
            name="description"
            content="There is no planet B. Since half of 20th century scientists are warning us that human activity is interfering with normal climate change of the planet, and we still haven't done anithing drastic to change things. We put information togheter to help clarifying the situation for everyone who still have doubts. This page is dedicated to the rising of the concentration of the co2 in the air in the last century and to sensitize people on this theme."
          ></meta>
          <meta 
            name="keywords" 
            content="climate-change co2 carbon-dioxide co2-graph co2-concentration-in-air co2-information"
          ></meta>
        </Helmet>
      </HelmetProvider>

      <SideChart
        title="Carbon dioxide"
        description="As the world grapples with the realities of climate change, one of the most concerning trends is the steady rise in atmospheric carbon dioxide (CO2) levels. In the 1960s, the global growth rate of atmospheric carbon dioxide was roughly 0.8± 0.1 ppm per year. Over the next half century, the annual growth rate tripled, reaching 2.4 ppm per year during the 2010s. The annual rate of increase in atmospheric carbon dioxide over the past 60 years is about 100 times faster than previous natural increases, such as those that occurred at the end of the last ice age 11,000-17,000 years ago. <br/>   
        This surge in CO2 concentration is intricately linked to human activities, particularly the burning of fossil fuels and deforestation, which release significant amounts of CO2 into the atmosphere.
        The first consequence of CO2 rising concentration concern the fact that it is a potent greenhouse gas, trapping heat in the Earth's atmosphere and contributing to the warming of the planet. This leads to a cascade of detrimental effects, including rising global temperatures, melting ice caps and glaciers, more frequent and severe weather events, and disruptions to ecosystems and biodiversity. <br/>
        Furthermore, the increase in CO2 levels exacerbates ocean acidification, as a significant portion of the excess CO2 is absorbed by the oceans. This acidification poses grave threats to marine life, particularly organisms with calcium carbonate shells or skeletons, such as corals and shellfish, disrupting entire marine ecosystems and the livelihoods of millions who depend on them. <br/>
        Only through decisive action and international cooperation can we hope to mitigate its devastating effects and secure a sustainable future for all. We need to transition to renewable energy sources, implement sustainable land-use practices, enhance forest conservation efforts, and adopt policies that promote carbon sequestration and emission reduction.
        Moreover we need to raise awareness about the consequences of elevated CO2 levels and foster a collective commitment to combatting climate change."
        url="https://www.climate.gov/news-features/understanding-climate/climate-change-atmospheric-carbon-dioxide"
        website="www.climate.gov"
      />

    </div>
  )
}

export default Co2;
