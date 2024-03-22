import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCo2 } from "../features/co2/co2FetchingSlice";
import ChartNavbar from "../components/navbar/chartNavbar.jsx";
import ChartPage from "./chart-page/chartPage.jsx";
import { Helmet, HelmetProvider } from "react-helmet-async";

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

      co2 page</div>
  )
}

export default Co2;
