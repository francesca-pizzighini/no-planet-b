import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchN2o } from "../features/n2o/n2oFetchingSlice";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SideChart from "../components/sideChart/sideChart";

function N2o() {
  const n2o = useSelector(state => state.n2o.n2o)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchN2o())
  }, [])

  console.log(n2o)

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
            content="climate-change nitrous-oxide n2o act-now n2o-graph n2o-information n2o-concentration-in-air nitrous-oxide-graph nitrous-oxide-information nitrous-oxide-concentration-in-air"
          ></meta>
        </Helmet>
      </HelmetProvider>
      
      <SideChart
        title="Nitrous Oxide"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id sint tenetur voluptas iure porro repellat sit assumenda natus reiciendis, recusandae debitis voluptatem facilis hic deleniti mollitia a adipisci facere quod deserunt laboriosam nihil! Blanditiis, quasi fugit ea totam mollitia provident et dolore pariatur adipisci explicabo suscipit possimus, doloremque, assumenda fugiat dolorem dolores? Officia quis, deleniti quam asperiores repellendus accusantium reiciendis doloribus veritatis, quisquam rerum debitis distinctio obcaecati. Magnam necessitatibus, porro beatae quas nihil amet exercitationem nulla repellendus voluptatem consequuntur eos modi nam soluta cumque ab dolores fuga velit impedit. Iste atque quis voluptatem non. Doloribus provident suscipit fugit maxime architecto!"
        url="https://www.epa.gov/ghgemissions/overview-greenhouse-gases#nitrous-oxide"
        website="www.epa.gov"
      />

    </div>
  )
}

export default N2o;
