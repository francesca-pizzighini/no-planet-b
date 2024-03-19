import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMethane } from "../features/methane/methaneFetchingSlice";

function Methane() {
  const methane = useSelector(state => state.methane.methane)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMethane())
  }, [])

  console.log(methane)

  return (
    <div>
      methane page
    </div>
  )
}

export default Methane;
