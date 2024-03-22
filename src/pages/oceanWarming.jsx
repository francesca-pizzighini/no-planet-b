import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOceanWarming } from "../features/oceanWarming/oceanWarmingFetchingSlice";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
      ocean warming page
    </div>
  )
}

export default OceanWarming;
