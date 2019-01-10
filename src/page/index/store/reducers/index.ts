import { combineReducers } from "redux";
import { tabReducer } from "./tabReducer";
import { categoryReducer } from "./categoryReducer";
import { foodListReducer } from "./foodListReducer";
import { orderReducer } from "./orderReducer";

export default combineReducers({
  tabReducer,
  categoryReducer,
  foodListReducer,
  orderReducer
});
