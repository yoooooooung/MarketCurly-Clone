// 초기 상태값
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  matjip: [],
  isLoading: false,
  error: null,
};

const boardSlice = createSlice({
  name: "slice",
  initialState,
  reducers: {},
  extraReducers: {},
});

// 모듈파일에서는 리듀서를 export default 한다.
export const {} = boardSlice.actions;
export default boardSlice.reducer;
