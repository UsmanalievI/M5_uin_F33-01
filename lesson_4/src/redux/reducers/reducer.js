import { combineReducers } from "redux";
import preloaderReducer from "./preloaderReducer";
import userReducer from "./userReducer";
import registReducer from "./registReducer";

export const rootReducer=combineReducers({
   preloaderReducer,
   userReducer,
   registReducer
})