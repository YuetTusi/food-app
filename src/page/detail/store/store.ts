import { createStore, applyMiddleware, combineReducers } from "redux";
import rootReducer from "./reducers";
import { createHashHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import reduxLogger from "redux-logger";
import reduxThunk from "redux-thunk";

const history = createHashHistory(); //创建history对象
const reactRouterMiddleware = routerMiddleware(history); //创建react-router中间件

history.replace("/menu");
let store = createStore(
  rootReducer(history),
  applyMiddleware(reactRouterMiddleware, reduxThunk, reduxLogger)
);

export { history };
export default store;
