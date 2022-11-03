// 초기 상태값
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk함수
// vege 청크 함수
export const __getGoodsVege = createAsyncThunk(
  "MainPage/getGoodsVege",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://kyuudukk.shop/goods/${payload}`
      );

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  goodsItem: [],
  // vegs: [],
  isLoading: false,
  error: null,
};

const vegeSlice = createSlice({
  name: "getGoodsVege",
  initialState,
  reducers: {},
  extraReducers: {
    //여기는 vege
    [__getGoodsVege.pending]: (state) => {
      state.isLoading = true;
    },
    [__getGoodsVege.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.goodsItem = action.payload;
    },
    [__getGoodsVege.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
  },
});

// 모듈파일에서는 리듀서를 export default 한다.
export const { getGoodsVege } = vegeSlice.actions;
export default vegeSlice.reducer;
