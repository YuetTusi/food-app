import { createStore, applyMiddleware, combineReducers } from "redux";
import rootReducer from "./reducers";
import { createHashHistory } from "history";

const history = createHashHistory(); //创建history对象
let store = createStore(rootReducer(history));

export { history };
export default store;
