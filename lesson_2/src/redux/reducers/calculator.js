import { types } from "../types"

const initialState={
    result:''
}

export default function calculator(state=initialState, action){
    if(action.type===types.PLUS){
        return{...state, result: action.payload}
    }
    return state
}