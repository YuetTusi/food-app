import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
declare let module: any;
declare function require(p: any): any;

let store = createStore(reducers, applyMiddleware(reduxThunk));

if (module.hot) {
  let newReducers = require("./reducers").default;
  store.replaceReducer(newReducers);
}

export default store;
