import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTemperature } from "../features/temperature/temperatureFetchingSlice";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
      {loadingState.loading && (<div>loading</div>)}

      {!loadingState.loading && loadingState.error ? <div>{loadingState.error}</div> : null}

      {!loadingState.loading && temperature.map(temp => (
        <p>{temp.time}</p>
      ))}
    </div>
  )
}

export default Temperature;
