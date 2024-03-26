import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    n2o: [],
    error: "",
};

export const fetchN2o = createAsyncThunk("n2o/fetchN2o", () => {
    return axios.get("https://global-warming.org/api/nitrous-oxide-api")
        .then (response => response.data.nitrous)
})

const n2oSlice = createSlice({
    name: "n2o",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchN2o.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchN2o.fulfilled, (state, action) => {
            state.loading = false;
            state.n2o = action.payload;
            state.error = "";
        })
        .addCase(fetchN2o.rejected, (state, action) => {
            state.loading = false;
            state.n2o = [];
            state.error = action.error.message;
        })
    },
})

export default n2oSlice.reducer;