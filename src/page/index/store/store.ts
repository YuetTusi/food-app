import { createStore, applyMiddleware } from "redux";
import { createHashHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import reduxThunk from "redux-thunk";
import createRootReducer from "./reducers";
declare let module: any;
declare function require(p: any): any;

const history = createHashHistory(); //创建history对象
const reactRouterMiddleware = routerMiddleware(history); //创建react-router中间件

let store = createStore(
  createRootReducer(history),
  applyMiddleware(reduxThunk, reactRouterMiddleware)
);

if (module.hot) {
  let createNewReducer = require("./reducers").default;
  store.replaceReducer(createNewReducer(history));
}
export { history };
export default store;
