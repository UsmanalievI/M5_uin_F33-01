import { combineReducers } from "redux";
import preloaderReducer from "./preloaderReducer";
import userReducer from "./userReducer";
import photoReducer from "./photoReducer";

export const rootReducer=combineReducers({
   preloaderReducer,
   userReducer,
   photoReducer
})