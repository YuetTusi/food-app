import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { tabBarReducer } from "./tabBarReducer";

//导出汇总Reducer
export default function(history: any) {
  return combineReducers({
    router: connectRouter(history),
    tabBarReducer
  });
}
