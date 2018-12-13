import { createStore } from "redux";
import reducers from "./reducers";
declare let module: any;
declare function require(p: any): any;
let store = createStore(reducers);

if (module.hot) {
  let newReducers = require("./reducers").default;
  store.replaceReducer(newReducers);
}

export default store;
