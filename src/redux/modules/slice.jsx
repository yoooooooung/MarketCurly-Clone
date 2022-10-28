// 초기 상태값
import { createAsyncThunk, boardSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  matjip: [],
  isLoading: false,
  error: null,
};

const boardSlice = createSlice({
  name: "",
  initialState,
  reducers: {},
  extraReducers: {},
});

// 모듈파일에서는 리듀서를 export default 한다.
export default boardSlice;
