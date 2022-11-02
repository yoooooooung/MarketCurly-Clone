import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    comments: [],
    isLoading: false,
    error: null,
}

export const __getComments = createAsyncThunk(
    "getComments",
    async (payload, thunkAPI) => {
        try {
            const data = await axios.get(`https://kyuudukk.shop/comments/${payload}`);
            return thunkAPI.fulfillWithValue(data.data.comments);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const commentsSlice = createSlice({
    name: "review",
    initialState,
    reducers: {},
    extraReducers: {
        [__getComments.pending]: (state) => {
            state.isLoading = true;
        },
        [__getComments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.comments = action.payload;
        },
        [__getComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export const {} = commentsSlice.actions;
export default commentsSlice.reducer;