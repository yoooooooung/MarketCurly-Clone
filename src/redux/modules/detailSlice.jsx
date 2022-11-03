import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    detail: [],
    isLoading: false,
    error: null,
}

export const __getDetails = createAsyncThunk(
    "getGoods",
    async (payload, thunkAPI) => {
        try {
            const data = await axios.get(`https://kyuudukk.shop/goods/${payload}`);
            return thunkAPI.fulfillWithValue(data.data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const detailSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {},
    extraReducers: {
        [__getDetails.pending]: (state) => {
            state.isLoading = true;
        },
        [__getDetails.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.detail = action.payload;
            console.log(state.detail)
        },
        [__getDetails.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const {} = detailSlice.actions;
export default detailSlice.reducer;