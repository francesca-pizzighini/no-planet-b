import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    co2: [],
    error: "",
};

export const fetchCo2 = createAsyncThunk("co2/fetchCo2", () => {
    return axios.get("https://global-warming.org/api/co2-api")
        .then(response => response.data.co2)
})

const co2Slice = createSlice({
    name: "co2",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchCo2.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchCo2.fulfilled, (state, action) => {
            state.loading = false;
            state.co2 = action.payload;
            state.error = "";
        })
        .addCase(fetchCo2.rejected, (state, action) => {
            state.loading = false;
            state.co2 = [];
            state.error = action.error.message;
        })
    },
})

export default co2Slice.reducer;