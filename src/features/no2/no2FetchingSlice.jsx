import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    no2: [],
    error: "",
};

export const fetchNo2 = createAsyncThunk("no2/fetchNo2", () => {
    return axios.get("https://global-warming.org/api/nitrous-oxide-api")
        .then (response => response.data.nitrous)
})

const no2Slice = createSlice({
    name: "no2",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchNo2.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchNo2.fulfilled, (state, action) => {
            state.loading = false;
            state.no2 = action.payload;
            state.error = "";
        })
        .addCase(fetchNo2.rejected, (state, action) => {
            state.loading = false;
            state.no2 = [];
            state.error = action.error.message;
        })
    },
})

export default no2Slice.reducer;