import { createStore } from "redux";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  //리듀서 이름넣기
});
const store = createStore(rootReducer);

export default store;
