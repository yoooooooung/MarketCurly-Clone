// 초기 상태값
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//진영 수정중 Thunk함수~
export const __getGoods = createAsyncThunk(
  "MainPage/getGoods",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`https://kyuudukk.shop/goods/${payload}`); //"https://kyuudukk.shop/goods/all"

      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// //Thunk함수
// export const __getGoods = createAsyncThunk(
//   "MainPage/getGoods",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.get("https://kyuudukk.shop/goods/all");
//       console.log(data);
//       return thunkAPI.fulfillWithValue(data.data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// Thunk함수
// vege 청크 함수
// export const __getGoodsVege = createAsyncThunk(
//   "MainPage/getGoods",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.get("https://kyuudukk.shop/goods/vege");
//       console.log(data);
//       return thunkAPI.fulfillWithValue(data.data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

const initialState = {
  goods: [],
  // vegs: [],
  isLoading: false,
  error: null,
};

const mainpageSlice = createSlice({
  name: "getGoods",
  initialState,
  reducers: {},
  extraReducers: {
    [__getGoods.pending]: (state) => {
      state.isLoading = true;
    },
    [__getGoods.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.goods = action.payload;
    },
    [__getGoods.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    //여기는 vege
    // [__getGoodsVege.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__getGoodsVege.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.vegs = action.payload;
    //   console.log(action.payload);
    // },
    // [__getGoodsVege.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.error;
    // },
  },
});

// 모듈파일에서는 리듀서를 export default 한다.
export const { getGoods } = mainpageSlice.actions;
export default mainpageSlice.reducer;
