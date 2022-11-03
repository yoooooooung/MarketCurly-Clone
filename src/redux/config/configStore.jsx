// import { createStore } from "redux";
// // import { combineReducers } from "redux";
import slice from "../modules/slice";
import user from "../modules/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import mainpageSlice from "../modules/mainpageSlice";
import vegeSlice from "../modules/vegeSlice";
import review from '../modules/commentSlice'
import detail from '../modules/detailSlice'

// const rootReducer = combineReducers({
//   //리듀서 이름넣기
//   boardSlice: boardSlice,
// });

const store = configureStore({
  reducer: {
    slice: slice,
    user: user,
    mainpageSlice: mainpageSlice,
    vegeSlice: vegeSlice,
    review: review,
    detail: detail
  },
});

// const store = createStore(rootReducer);
export default store;
