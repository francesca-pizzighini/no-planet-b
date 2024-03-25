import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMethane } from "../features/methane/methaneFetchingSlice";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SideChart from "../components/sideChart/sideChart";

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
      
      <SideChart
        title="Methane"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id sint tenetur voluptas iure porro repellat sit assumenda natus reiciendis, recusandae debitis voluptatem facilis hic deleniti mollitia a adipisci facere quod deserunt laboriosam nihil! Blanditiis, quasi fugit ea totam mollitia provident et dolore pariatur adipisci explicabo suscipit possimus, doloremque, assumenda fugiat dolorem dolores? Officia quis, deleniti quam asperiores repellendus accusantium reiciendis doloribus veritatis, quisquam rerum debitis distinctio obcaecati. Magnam necessitatibus, porro beatae quas nihil amet exercitationem nulla repellendus voluptatem consequuntur eos modi nam soluta cumque ab dolores fuga velit impedit. Iste atque quis voluptatem non. Doloribus provident suscipit fugit maxime architecto!"
      />

    </div>
  )
}

export default Methane;
