import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCo2 } from "../features/co2/co2FetchingSlice";

import { Helmet, HelmetProvider } from "react-helmet-async";
import SideChart from "../components/sideChart";

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
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id sint tenetur voluptas iure porro repellat sit assumenda natus reiciendis, recusandae debitis voluptatem facilis hic deleniti mollitia a adipisci facere quod deserunt laboriosam nihil! Blanditiis, quasi fugit ea totam mollitia provident et dolore pariatur adipisci explicabo suscipit possimus, doloremque, assumenda fugiat dolorem dolores? Officia quis, deleniti quam asperiores repellendus accusantium reiciendis doloribus veritatis, quisquam rerum debitis distinctio obcaecati. Magnam necessitatibus, porro beatae quas nihil amet exercitationem nulla repellendus voluptatem consequuntur eos modi nam soluta cumque ab dolores fuga velit impedit. Iste atque quis voluptatem non. Doloribus provident suscipit fugit maxime architecto!"
      />

    </div>
  )
}

export default Co2;
