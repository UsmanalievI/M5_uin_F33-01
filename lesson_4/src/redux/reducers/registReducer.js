import { types } from "../types";

const initialState={
    regist: {}
}

export default function registReducer(state=initialState, action){
    switch(action.type){
        case types.REGISTR:
            return{...state, regist: action.payload}
        default: return state
    }
}