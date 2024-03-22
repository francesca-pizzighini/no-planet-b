import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPolarIce } from "../features/polarIce/polarIceFetchingSlice";
import { Helmet, HelmetProvider } from "react-helmet-async";

function PolarIce() {
  const polarIceData = useSelector(state => state.polarIce.polarIceData);
  const polarIceDescription = useSelector(state => state.polarIce.polarIceDescription);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPolarIce())
  }, [])

  console.log(polarIceData)
  console.log(polarIceDescription)

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
      polar ice page
    </div>
  )
}

export default PolarIce;
