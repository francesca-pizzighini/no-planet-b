import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCo2 } from "../features/co2/co2FetchingSlice";

function Co2() {
  const co2 = useSelector(state => state.co2.co2)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchCo2())
  }, [])

  console.log(co2)

  return (
    <div>
      co2 page
    </div>
  )
}

export default Co2;
