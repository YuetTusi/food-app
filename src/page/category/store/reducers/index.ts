import { combineReducers } from "redux";
import { headerReducer } from "./headerReducer";
import { foodListReducer } from "./foodListReducer";

//导出汇总Reducer
export default combineReducers({
  headerReducer,
  foodListReducer
});
