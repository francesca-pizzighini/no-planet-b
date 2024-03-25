import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTemperature } from "../features/temperature/temperatureFetchingSlice";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SideChart from "../components/sideChart/sideChart";

function Temperature() {
  const temperature = useSelector(state => state.temperature.temperature)
  const dispatch = useDispatch()
  const loadingState = useSelector(state => state.temperature)

  useEffect(() => {
    dispatch(fetchTemperature())
  }, [])

  console.log(temperature)

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Temperature</title>
          <meta 
            name="description"
            content="There is no planet B. Since half of 20th century scientists are warning us that human activity is interfering with normal climate change of the planet, and we still haven't done anithing drastic to change things. We put information togheter to help clarifying the situation for everyone who still have doubts. This page is dedicated to the rising of world temperature in the last century and to sensitize people on this theme."
          ></meta>
          <meta 
            name="keywords" 
            content="climate-change world-emperature act-now temperature-graph world-temperature-information"
          ></meta>
        </Helmet>
      </HelmetProvider>

      <SideChart
        title="Temperature"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id sint tenetur voluptas iure porro repellat sit assumenda natus reiciendis, recusandae debitis voluptatem facilis hic deleniti mollitia a adipisci facere quod deserunt laboriosam nihil! Blanditiis, quasi fugit ea totam mollitia provident et dolore pariatur adipisci explicabo suscipit possimus, doloremque, assumenda fugiat dolorem dolores? Officia quis, deleniti quam asperiores repellendus accusantium reiciendis doloribus veritatis, quisquam rerum debitis distinctio obcaecati. Magnam necessitatibus, porro beatae quas nihil amet exercitationem nulla repellendus voluptatem consequuntur eos modi nam soluta cumque ab dolores fuga velit impedit. Iste atque quis voluptatem non. Doloribus provident suscipit fugit maxime architecto!"
      />

      {loadingState.loading && (<div>loading</div>)}

      {!loadingState.loading && loadingState.error ? <div>{loadingState.error}</div> : null}

      {!loadingState.loading && temperature.map(temp => (
        <p>{temp.time}</p>
      ))}
    </div>
  )
}

export default Temperature;
