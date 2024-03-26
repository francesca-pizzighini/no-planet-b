import { configureStore } from "@reduxjs/toolkit";

import temperatureReducer from "../features/temperature/temperatureFetchingSlice.jsx";
import co2Reducer from "../features/co2/co2FetchingSlice.jsx"
import methaneReducer from "../features/methane/methaneFetchingSlice.jsx";
import n2oReducer from "../features/n2o/n2oFetchingSlice.jsx";
import polarIceReducer from "../features/polarIce/polarIceFetchingSlice.jsx";
import oceanWarmingReducer from "../features/oceanWarming/oceanWarmingFetchingSlice.jsx";

const store = configureStore({
  reducer: {
    temperature: temperatureReducer,
    co2: co2Reducer,
    methane: methaneReducer,
    n2o: n2oReducer,
    polarIce: polarIceReducer,
    oceanWarming: oceanWarmingReducer
  }
})

export default store;
