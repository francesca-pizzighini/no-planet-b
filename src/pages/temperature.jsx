import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTemperature } from "../features/temperature/temperatureFetchingSlice";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SideChart from "../components/sideChart/sideChart";

function Temperature() {
  const temperature = useSelector(state => state.temperature.temperature)
  const dispatch = useDispatch()
  const loadingState = useSelector(state => state.temperature)

  useEffect(() => {
    dispatch(fetchTemperature())
  }, [])

  console.log(temperature)

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Temperature</title>
          <meta 
            name="description"
            content="There is no planet B. Since half of 20th century scientists are warning us that human activity is interfering with normal climate change of the planet, and we still haven't done anithing drastic to change things. We put information togheter to help clarifying the situation for everyone who still have doubts. This page is dedicated to the rising of world temperature in the last century and to sensitize people on this theme."
          ></meta>
          <meta 
            name="keywords" 
            content="climate-change world-emperature act-now temperature-graph world-temperature-information"
          ></meta>
        </Helmet>
      </HelmetProvider>

      <SideChart
        title="Temperature"
        description="The rising of the temperature we have witnessed in the last century is not natural and in recent decades the issue of rising temperatures has escalated into a pressing concern on a global scale. Even thought the rising has not been uniform across the planet, the Earth's climate is undergoing unprecedented changes, with profound implications for ecosystems, economies, and human well-being. The phenomenon of global warming, driven predominantly by human activities, has led to a discernible increase in average temperatures across the planet. According to data compiled by reputable scientific organizations such as NASA and the National Oceanic and Atmospheric Administration (NOAA), the Earth's average surface temperature has risen by approximately 1.2 degrees Celsius (2.2 degrees Fahrenheit) since the late 19th century. 
        To be more specific, according to NOAA’s 2023 Annual Climate report the combined land and ocean temperature from 1850 to 1981 has increased at an average rate of 0.06° Celsius (0.11° Fahrenheit) per decade. The rate of warming since 1982 is more than three times as fast: 0.36° F (0.20° C) per decade.
        This may seem like a modest increment, but its repercussions are far-reaching, manifested in the intensification of heatwaves, the melting of polar ice caps, and disruptions to weather patterns. 
        Another alarming aspect to keep under control is the warming trend observed in the human body. Studies conducted by medical professionals and researchers indicate a notable rise in body temperatures among individuals across various demographics, raising concerns about the potential health consequences and highlighting the intricate interplay between global climate change and human physiology."
        url="https://www.climate.gov/news-features/understanding-climate/climate-change-global-temperature"
        website="www.climate.gov"
      />
      






      {/* {loadingState.loading && (<div>loading</div>)}

      {!loadingState.loading && loadingState.error ? <div>{loadingState.error}</div> : null}

      {!loadingState.loading && temperature.map(temp => (
        <p>{temp.time}</p>
      ))} */}
    </div>
  )
}

export default Temperature;
