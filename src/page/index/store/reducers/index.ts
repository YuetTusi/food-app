import { combineReducers } from "redux";
import { tabReducer } from "./tabReducer";
import { categoryReducer } from "./categoryReducer";

export default combineReducers({ tabReducer, categoryReducer });
