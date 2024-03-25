import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNo2 } from "../features/no2/no2FetchingSlice";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SideChart from "../components/sideChart";

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
      
      <SideChart
        title="Nitrous Oxide"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id sint tenetur voluptas iure porro repellat sit assumenda natus reiciendis, recusandae debitis voluptatem facilis hic deleniti mollitia a adipisci facere quod deserunt laboriosam nihil! Blanditiis, quasi fugit ea totam mollitia provident et dolore pariatur adipisci explicabo suscipit possimus, doloremque, assumenda fugiat dolorem dolores? Officia quis, deleniti quam asperiores repellendus accusantium reiciendis doloribus veritatis, quisquam rerum debitis distinctio obcaecati. Magnam necessitatibus, porro beatae quas nihil amet exercitationem nulla repellendus voluptatem consequuntur eos modi nam soluta cumque ab dolores fuga velit impedit. Iste atque quis voluptatem non. Doloribus provident suscipit fugit maxime architecto!"
      />

    </div>
  )
}

export default No2;
