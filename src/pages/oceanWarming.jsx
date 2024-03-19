import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOceanWarming } from "../features/oceanWarming/oceanWarmingFetchingSlice";

function OceanWarming() {
  const oceanWarming = useSelector(state => state.oceanWarming.oceanWarming);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOceanWarming());
  }, [])

  console.log(oceanWarming)

  return (
    <div>
      ocean warming page
    </div>
  )
}

export default OceanWarming;
