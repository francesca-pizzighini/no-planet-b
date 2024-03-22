import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMethane } from "../features/methane/methaneFetchingSlice";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Methane() {
  const methane = useSelector(state => state.methane.methane)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMethane())
  }, [])

  console.log(methane)

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Methane</title>
          <meta 
            name="description"
            content="There is no planet B. Since half of 20th century scientists are warning us that human activity is interfering with normal climate change of the planet, and we still haven't done anithing drastic to change things. We put information togheter to help clarifying the situation for everyone who still have doubts. This page is dedicated to the rising of the concentration of methane in the air in the last century and to sensitize people on this theme."
          ></meta>
          <meta 
            name="keywords" 
            content="climate-change methane act-now methane-graph methane-concentration-in-air methane-information"
          ></meta>
        </Helmet>
      </HelmetProvider>
      methane page
    </div>
  )
}

export default Methane;
