import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
import reducers from "./reducers";
declare let module: any;
declare function require(p: any): any;

let store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

if (module.hot) {
  let createNewReducer = require("./reducers").default;
  store.replaceReducer(createNewReducer);
}

export default store;
