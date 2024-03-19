import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    methane: [],
    error: "",
};

export const fetchMethane = createAsyncThunk('methane/fetchMethane', () => {
    return axios.get("https://global-warming.org/api/methane-api")
        .then(response => response.data.methane)
})

const methaneSlice = createSlice({
    name: "methane",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchMethane.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchMethane.fulfilled, (state, action) => {
            state.loading = false;
            state.methane = action.payload;
            state.error = "";
        })
        .addCase(fetchMethane.rejected, (state, action) => {
            state.loading = false;
            state.methane = [];
            state.error = action.error.message;
        })
    }
})

export default methaneSlice.reducer;