import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    polarIceData: {},
    error: "",
};

export const fetchPolarIce = createAsyncThunk("polarIce/fetchPolarIce", () => {
    return axios.get("https://global-warming.org/api/arctic-api")
        .then(response => response.data.arcticData)
})

const polarIceSlice = createSlice({
    name: "polarIce",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchPolarIce.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchPolarIce.fulfilled, (state, action) => {
            state.loading = false;
            state.polarIceData = action.payload.data;
            state.error = "";
        })
        .addCase(fetchPolarIce.rejected, (state, action) => {
            state.loading = false;
            state.polarIceData = {};
            state.error = action.error.message;
        })
    }
})

export default polarIceSlice.reducer;