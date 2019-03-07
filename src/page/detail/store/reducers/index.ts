import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { tabBarReducer } from "./tabBarReducer";
import { menuReducer } from "./menuReducer";
import { shopBarReducer } from "./shopBarReducer";
import { scoreReducer } from "./scoreReducer";

//导出汇总Reducer
export default function(history: any) {
  return combineReducers({
    router: connectRouter(history),
    tabBarReducer,
    menuReducer,
    shopBarReducer,
    scoreReducer
  });
}
