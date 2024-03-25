import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOceanWarming } from "../features/oceanWarming/oceanWarmingFetchingSlice";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SideChart from "../components/sideChart";

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
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id sint tenetur voluptas iure porro repellat sit assumenda natus reiciendis, recusandae debitis voluptatem facilis hic deleniti mollitia a adipisci facere quod deserunt laboriosam nihil! Blanditiis, quasi fugit ea totam mollitia provident et dolore pariatur adipisci explicabo suscipit possimus, doloremque, assumenda fugiat dolorem dolores? Officia quis, deleniti quam asperiores repellendus accusantium reiciendis doloribus veritatis, quisquam rerum debitis distinctio obcaecati. Magnam necessitatibus, porro beatae quas nihil amet exercitationem nulla repellendus voluptatem consequuntur eos modi nam soluta cumque ab dolores fuga velit impedit. Iste atque quis voluptatem non. Doloribus provident suscipit fugit maxime architecto!"
      />

    </div>
  )
}

export default OceanWarming;
