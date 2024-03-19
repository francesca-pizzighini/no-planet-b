import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    temperature: [],
    error: "",
};

export const fetchTemperature = createAsyncThunk("temperature/fetchTemperature", () => {
    return axios.get("https://global-warming.org/api/temperature-api")
        .then(response => response.data.result)
})

const temperatureSlice = createSlice({
    name: "temperature",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchTemperature.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchTemperature.fulfilled, (state, action) => {
            state.loading = false;
            state.temperature = action.payload;
            state.error = "";
        })
        .addCase(fetchTemperature.rejected, (state, action) => {
            state.loading = false;
            state.temperature = [];
            state.error = action.error.message;
        })
    },
})

export default temperatureSlice.reducer;