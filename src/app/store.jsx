import { configureStore } from "@reduxjs/toolkit";

import temperatureReducer from "../features/temperature/temperatureFetchingSlice.jsx";
import co2Reducer from "../features/co2/co2FetchingSlice.jsx"
import methaneReducer from "../features/methane/methaneFetchingSlice.jsx";
import no2Reducer from "../features/no2/no2FetchingSlice.jsx";
import polarIceReducer from "../features/polarIce/polarIceFetchingSlice.jsx";
import oceanWarmingReducer from "../features/oceanWarming/oceanWarmingFetchingSlice.jsx";

const store = configureStore({
  reducer: {
    temperature: temperatureReducer,
    co2: co2Reducer,
    methane: methaneReducer,
    no2: no2Reducer,
    polarIce: polarIceReducer,
    oceanWarming: oceanWarmingReducer
  }
})

export default store;
