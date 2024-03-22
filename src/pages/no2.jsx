import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNo2 } from "../features/no2/no2FetchingSlice";
import { Helmet, HelmetProvider } from "react-helmet-async";

function No2() {
  const no2 = useSelector(state => state.no2.no2)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNo2())
  }, [])

  console.log(no2)

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
            content="climate-change nitrous-oxide no2 act-now no2-graph no2-information no2-concentration-in-air nitrous-oxide-graph nitrous-oxide-information nitrous-oxide-concentration-in-air"
          ></meta>
        </Helmet>
      </HelmetProvider>
      no2 page
    </div>
  )
}

export default No2;
