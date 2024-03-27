import { useEffect, useState } from "react";
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

  const [chartData, setChartData] = useState({
    labels: [],
    dataSets: [{
      label: "Temperature",
      data: [],
    }],
    options: {
      responsive: true,
      maintainAspectRatio: true,
    }, 
  });

  useEffect(() => {
    if (temperature && temperature.length > 0) {
      setChartData({
        labels: temperature.map(temperatureData => {
          const originalDate = temperatureData.time;
          const datePlusDecimals = (originalDate + "").split(".");

          if (datePlusDecimals[1] >= 0 && datePlusDecimals[1] < 9) {
            return `${datePlusDecimals[0]} Jan`
          } else if (datePlusDecimals[1] >=9 && datePlusDecimals[1] < 17) {
            return `${datePlusDecimals[0]} Feb`
          } else if (datePlusDecimals[1] >=17 && datePlusDecimals[1] < 25) {
            return `${datePlusDecimals[0]} Mar`
          } else if (datePlusDecimals[1] >=25 && datePlusDecimals[1] < 33) {
            return `${datePlusDecimals[0]} Apr`
          } else if (datePlusDecimals[1] >=33 && datePlusDecimals[1] < 42) {
            return `${datePlusDecimals[0]} May`
          } else if (datePlusDecimals[1] >=42 && datePlusDecimals[1] < 50) {
            return `${datePlusDecimals[0]} Jun`
          } else if (datePlusDecimals[1] >=50 && datePlusDecimals[1] < 59) {
            return `${datePlusDecimals[0]} Jul`
          } else if (datePlusDecimals[1] >=59 && datePlusDecimals[1] < 67) {
            return `${datePlusDecimals[0]} Aug`
          } else if (datePlusDecimals[1] >=67 && datePlusDecimals[1] < 75) {
            return `${datePlusDecimals[0]} Sep`
          } else if (datePlusDecimals[1] >=75 && datePlusDecimals[1] < 84) {
            return `${datePlusDecimals[0]} Oct`
          } else if (datePlusDecimals[1] >=84 && datePlusDecimals[1] < 92) {
            return `${datePlusDecimals[0]} Nov`
          } else if (datePlusDecimals[1] >=92 && datePlusDecimals[1] < 100) {
            return `${datePlusDecimals[0]} Dec`
          }
        }),
        dataSets: [{
          label: "Temperature",
          data: temperature.map(temperatureData => temperatureData.station),
          backgroundColor: ["#FFCC01"],
        }],
      });
    }
  }, [temperature]);

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
        description="The rising of the temperature we have witnessed in the last century is not natural and in recent decades the issue of rising temperatures has escalated into a pressing concern on a global scale. Even thought the rising has not been uniform across the planet, the Earth's climate is undergoing unprecedented changes, with profound implications for ecosystems, economies, and human well-being. The phenomenon of global warming, driven predominantly by human activities, has led to a discernible increase in average temperatures across the planet. According to data compiled by reputable scientific organizations such as NASA and the National Oceanic and Atmospheric Administration (NOAA), the Earth's average surface temperature has risen by approximately 1.2 degrees Celsius (2.2 degrees Fahrenheit) since the late 19th century. <br/>
        To be more specific, according to NOAA’s 2023 Annual Climate report the combined land and ocean temperature from 1850 to 1981 has increased at an average rate of 0.06° Celsius (0.11° Fahrenheit) per decade. The rate of warming since 1982 is more than three times as fast: 0.36° F (0.20° C) per decade. <br/>
        This may seem like a modest increment, but its repercussions are far-reaching, manifested in the intensification of heatwaves, the melting of polar ice caps, and disruptions to weather patterns. <br/>
        Another alarming aspect to keep under control is the warming trend observed in the human body. Studies conducted by medical professionals and researchers indicate a notable rise in body temperatures among individuals across various demographics, raising concerns about the potential health consequences and highlighting the intricate interplay between global climate change and human physiology."
        url="https://www.climate.gov/news-features/understanding-climate/climate-change-global-temperature"
        website="www.climate.gov"
        chartData={chartData}
        caption="This data shows the oscillation of the average temperature from 1880 to the present. It is normal to see the value going up and down, but is clear how in the last 50 years the average world temperature is rising at an alarming rate, and studies shows that is caused by human activities."
        loadingState={loadingState}
        data={temperature}
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
