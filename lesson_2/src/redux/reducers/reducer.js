import { combineReducers } from "redux";
import titleReducer from "./titleReducer";
import usersReducer from "./userReducer";
import calculator from './calculator'

export const rootReducer=combineReducers({
    titleReducer,
    usersReducer,
    calculator
})