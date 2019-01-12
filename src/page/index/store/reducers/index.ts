import { combineReducers } from "redux";
import { tabReducer } from "./tabReducer";
import { categoryReducer } from "./categoryReducer";
import { foodListReducer } from "./foodListReducer";
import { orderReducer } from "./orderReducer";
import { connectRouter } from "connected-react-router";

//导出汇总Reducer
export default function(history: any) {
  return combineReducers({
    router: connectRouter(history),
    tabReducer,
    categoryReducer,
    foodListReducer,
    orderReducer
  });
}
