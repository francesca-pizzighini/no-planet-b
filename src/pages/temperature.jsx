import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTemperature } from "../features/temperature/temperatureFetchingSlice";

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
      {loadingState.loading && (<div>loading</div>)}

      {!loadingState.loading && loadingState.error ? <div>{loadingState.error}</div> : null}

      {!loadingState.loading && temperature.map(temp => (
        <p>{temp.time}</p>
      ))}
    </div>
  )
}

export default Temperature;
