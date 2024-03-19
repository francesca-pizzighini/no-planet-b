import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    oceanWarming: {},
    error: "",
};

export const fetchOceanWarming = createAsyncThunk("oceanWarming/fetchOceanWarming", () => {
    return axios.get("https://global-warming.org/api/ocean-warming-api")
        .then(response => response.data.result)
})

const oceanWarmingSlice = createSlice({
    name: "oceanWarming",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchOceanWarming.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchOceanWarming.fulfilled, (state, action) => {
            state.loading = false;
            state.oceanWarming = action.payload;
            state.error = "";
        })
        .addCase(fetchOceanWarming.rejected, (state, action) => {
            state.loading = false;
            state.oceanWarming = {};
            state.error = action.error.message;
        })
    },
})

export default oceanWarmingSlice.reducer;