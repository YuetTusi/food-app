import { combineReducers } from "redux";
import { tabReducer } from "./tabReducer";
import { categoryReducer } from "./categoryReducer";
import { foodListReducer } from "./foodListReducer";

export default combineReducers({
  tabReducer,
  categoryReducer,
  foodListReducer
});
