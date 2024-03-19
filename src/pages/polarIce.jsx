import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPolarIce } from "../features/polarIce/polarIceFetchingSlice";

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
      polar ice page
    </div>
  )
}

export default PolarIce;
