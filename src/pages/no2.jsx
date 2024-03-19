import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNo2 } from "../features/no2/no2FetchingSlice";

function No2() {
  const no2 = useSelector(state => state.no2.no2)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNo2())
  }, [])

  console.log(no2)

  return (
    <div>
      no2 page
    </div>
  )
}

export default No2;
