import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPolarIce } from "../features/polarIce/polarIceFetchingSlice";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SideChart from "../components/sideChart/sideChart";

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
      
      <SideChart
        title="Polar ice"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id sint tenetur voluptas iure porro repellat sit assumenda natus reiciendis, recusandae debitis voluptatem facilis hic deleniti mollitia a adipisci facere quod deserunt laboriosam nihil! Blanditiis, quasi fugit ea totam mollitia provident et dolore pariatur adipisci explicabo suscipit possimus, doloremque, assumenda fugiat dolorem dolores? Officia quis, deleniti quam asperiores repellendus accusantium reiciendis doloribus veritatis, quisquam rerum debitis distinctio obcaecati. Magnam necessitatibus, porro beatae quas nihil amet exercitationem nulla repellendus voluptatem consequuntur eos modi nam soluta cumque ab dolores fuga velit impedit. Iste atque quis voluptatem non. Doloribus provident suscipit fugit maxime architecto!"
      />

    </div>
  )
}

export default PolarIce;
